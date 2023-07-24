import React from 'react'
import { Input } from 'antd'
import { useAppDispatch } from '../../Redux/ConfigStore'
import { useFormik } from 'formik'

type Props = {}

export default function CreateProject({ }: Props) {
    // const dispatch = useAppDispatch()

    // const initialValues: RegisterJiraModel = {
    //     projectName: '',
    //     description: '',
    //     categoryId: '',
    //     alias: ''
    // }

    // const createProjectFrm = useFormik({
    //     initialValues: initialValues,
    //     onSubmit: (values) => {
    //         console.log(values)
    //         // const action = register(values)
    //         // dispatch(action);
    //     }
    // })
    return (
        <div className='container'>
            {/* <h3>CreateProject</h3>

            <form onSubmit={createProjectFrm.handleSubmit}>
                <div className='mt-3'>
                    <label htmlFor="">Project name *</label>
                    <input type="text" className="form-control"
                        name='namePr' id='email'
                        onInput={createProjectFrm.handleChange} />
                </div>

                <div className="mt-3">
                    <label htmlFor="">Project category *</label>
                    <select className="form-select" aria-label="Default select example"
                        name='categoryId' id='categoryId'
                        onInput={createProjectFrm.handleChange}>
                        <option selected>Select a project category</option>
                        <option value={1}>Dự án web</option>
                        <option value={2}>Dự án phần mềm</option>
                        <option value={3}>Dự án di động</option>
                    </select>
                </div>

                <div className="mt-3">
                    <textarea style={{ width: '100%' }}
                        name='description' id='description'
                        onInput={createProjectFrm.handleChange}>saas</textarea>
                </div>
                <button>Cancel</button>
                <button>Create</button>
            </form> */}
        </div>
    )
}