import React, { useEffect, useRef } from 'react';
import { Input } from 'antd';
import { RootState, useAppDispatch } from '../../Redux/ConfigStore';
import { useFormik } from 'formik';
import { Editor } from '@tinymce/tinymce-react';
import { useSelector } from 'react-redux';
import { CreateProjectModel, createproject, getCategory } from '../../Redux/reducers/DashBoardReducer';

type Props = {};

export default function CreateProject({ }: Props) {
    const dispatch = useAppDispatch();
    const { CategoryName } = useSelector((state: RootState) => state.DashBoardReducer);
    
    // nút section
    const getDataCategory = async () => {
        const actionApi = getCategory();
        dispatch(actionApi);
    };
    useEffect(() => {
        getDataCategory();
    }, []);

    const editorRef = useRef<any>(null);

    //Formik
    const initialValues: CreateProjectModel = {
        projectName: '',
        description: '',
        categoryId: -1,
        alias: ''
    };

    const createProjectFrm = useFormik({
        initialValues: initialValues,
        onSubmit: (values) => {
            console.log('value',values);
            const action = createproject(values);
            dispatch(action);
        }
    });

    // Declare the handleEditorChange function here
    const handleEditorChange = (content: string) => {
        createProjectFrm.setFieldValue('description', content);
    };

    return (
        <div className='container'>
            <h3>CreateProject</h3>

            <form onSubmit={createProjectFrm.handleSubmit}>
                <div className='mt-3'>
                    <label htmlFor=''>Project name *</label>
                    <input
                        type='text'
                        className='form-control'
                        name='projectName'
                        id='projectName'
                        onInput={createProjectFrm.handleChange}
                    />
                </div>

                <div className='mt-3'>
                    <label htmlFor=''>Project category *</label>
                    <select
                        className='form-select'
                        aria-label='Default select example'
                        name='categoryId'
                        id='categoryId'
                        onChange={createProjectFrm.handleChange}
                        value={createProjectFrm.values.categoryId}
                    >
                        <option value={'0'}>Select a project category</option>
                        {CategoryName.map((item, index) => {
                            return (
                                <option key={index} value={item.id}>
                                    {item.projectCategoryName}
                                </option>
                            );
                        })}
                    </select>
                </div>

                <div className='mt-3'>
                    <Editor
                        initialValue={createProjectFrm.values.description}
                        init={{
                            height: 500,
                            menubar: false,
                            plugins: [
                                'advlist autolink lists link image charmap print preview anchor',
                                'searchreplace visualblocks code fullscreen',
                                'insertdatetime media table paste code help wordcount'
                            ],
                            toolbar:
                                'undo redo | formatselect | bold italic backcolor | \
                                alignleft aligncenter alignright alignjustify | \
                                bullist numlist outdent indent | removeformat | help'
                        }}
                        onEditorChange={handleEditorChange}
                    />
                </div>
                <button className='btn btn-danger'>Cancel</button>
                <button className='btn btn-success' type='submit'>
                    Create
                </button>
            </form>
        </div>
    );
}