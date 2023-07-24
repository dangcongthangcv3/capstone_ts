import React from 'react'

type Props = {}

export default function Profile({}: Props) {
  return (
    <div className='row'>
        <div className='col-md-6'>
            <img src="" alt="sasa" />
        </div>
        <div className='col-md-6'>
            <div className="mt-3">
                id
                <input type="text" />
            </div>
            <div className="mt-3">
                name:
                <input type="text" />
            </div>
            <div className="mt-3">
                id:
                <input type="text" />
            </div>
            <div className="mt-3">
                id:
                <input type="text" />
            </div>
            <div className="mt-3">
                id:
                <input type="text" />
            </div>
            <div className="mt-3">
                password confirm:
                <input type="text"  />
            </div>
        </div>
    </div>
  )
}