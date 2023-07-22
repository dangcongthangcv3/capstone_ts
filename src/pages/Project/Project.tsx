import React from 'react'

type Props = {}
export default function Project({}: Props) {

  return (
    <div className='project'>
        <h3>Project</h3>
        <input />
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Project name</th>
                    <th>Category name</th>
                    <th>Creator</th>
                    <th>Menbers</th>
                    <th>Action</th>
                </tr>
            </thead>
        </table>
    </div>
  )
}