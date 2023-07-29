import React, { useEffect, useRef } from 'react';
import { RootState, useAppDispatch } from '../../Redux/ConfigStore';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { Editor } from '@tinymce/tinymce-react';
import { NavLink, useParams } from 'react-router-dom';
import { getCategory } from '../../Redux/reducers/DashBoardReducer';
import { editUserViewModel, updateproject, getProjectDetail } from '../../Redux/reducers/editUserViewReducer';

type Props = {};

export default function EditProject({ }: Props) {
    const dispatch = useAppDispatch();
    const { CategoryName } = useSelector((state: RootState) => state.DashBoardReducer);
    const { productDetail } = useSelector((state: RootState) => state.editUserViewReducer);
    const { id } = useParams();
    const projectId = Number(id);

        //Formik
            const initialValues: editUserViewModel = {
                id: -1,
                projectName: '',
                creator: 0,
                description: '',
                categoryId: -1,
            };
        
    const getDataProjectDetail = () => {
        const actionGetProjectApi = getProjectDetail(projectId);
        const actionGetCategoryApi = getCategory();
        dispatch(actionGetProjectApi);
        dispatch(actionGetCategoryApi);
        
        if (productDetail.id) {
            editProjectFrm.setValues({
                ...editProjectFrm.values,
                id: productDetail.id,
                projectName: productDetail.projectName,
                categoryId: productDetail.projectCategory.id,
                description: productDetail.description,
            });
        }
    };
    useEffect(() => {
        getDataProjectDetail()
    }, [productDetail.id]);

    const renderProjectCategory = () => {
        return CategoryName.map((projectCategory, index) => {
            return <option key={index} value={projectCategory.id}>{projectCategory.projectCategoryName}</option>
        });
    };


    const editProjectFrm = useFormik({
        initialValues: initialValues,
        onSubmit: (values) => {
            console.log('value', values);
            const action = updateproject(values);
            dispatch(action);
        }
    });
    const handleEditorChange = (content: string) => {
        editProjectFrm.setFieldValue('description', content);
    };
    const cleartProjectFrm = () => {

    }
    return (
        <div className='container'>
            <h3>Update Project</h3>

            <form onSubmit={editProjectFrm.handleSubmit}>
                <div className='mt-3'>
                    <label htmlFor=''>Project name *</label>
                    <input
                        type='number'
                        className='form-control'
                        disabled
                        value={projectId}
                        name='id'
                        id='id'
                        onInput={editProjectFrm.handleChange}
                    />
                </div>
                <div className='mt-3'>
                    <label htmlFor=''>Project name *</label>
                    <input
                        type='text'
                        className='form-control'
                        name='projectName'
                        id='projectName'
                        value={editProjectFrm.values.projectName}
                        onInput={editProjectFrm.handleChange}
                    />
                </div>

                <div className='mt-3'>
                    <label htmlFor=''>Project category *</label>
                    <select
                        className='form-select'
                        aria-label='Default select example'
                        name='categoryId'
                        id='categoryId'
                        onChange={editProjectFrm.handleChange}
                        value={editProjectFrm.values.categoryId}
                    >
                        <option value={'0'}>Select a project category</option>
                        {renderProjectCategory()}
                    </select>
                </div>

                <div className='mt-3'>
                    <Editor
                        initialValue={productDetail.description}
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
                <NavLink className='btn btn-danger' to={'/admin/project'}>Cancel</NavLink>
                <button className='btn btn-success' type='submit'>
                    Create
                </button>
            </form>
        </div>
    );
}