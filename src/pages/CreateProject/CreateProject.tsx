import React from 'react'
import { Input } from 'antd'

type Props = {}

export default function CreateProject({ }: Props) {
    return (
        <div className='container'>
            <h3>CreateProject</h3>

            <div className='mt-3'>
                <label htmlFor="">Project name *</label>
                <input type="text" className="form-control" />
            </div>

            <div className="mt-3">
                <label htmlFor="">Project category *</label>
                <select className="form-select" aria-label="Default select example">
                    <option selected>Select a project category</option>
                    <option value={1}>Dự án web</option>
                    <option value={2}>Dự án phần mềm</option>
                    <option value={3}>Dự án di động</option>
                </select>
            </div>

            <div className="mt-3">
                <textarea name="a" id="a" style={{width:'100%'}}>saas</textarea>
            </div>
        </div>
    )
}