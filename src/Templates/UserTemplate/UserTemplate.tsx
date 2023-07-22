import React from 'react'
import LogIn from '../../pages/Login/LogIn'
import { Outlet } from 'react-router-dom'
import UserLeft from '../../Component/UserLeft/UserLeft'
import './user.module.scss'
import clsx from 'clsx'
import styles from './user.module.scss'
type Props = {}

export default function UserTemplate({ }: Props) {
    return (
        <div className='row' style={{width:'100%'}}>
            <div className='col-md-7'>
                <UserLeft />
            </div>
            <div className={clsx('col-md-5', styles.right)}>
                <Outlet />
            </div>
        </div>
    )
}