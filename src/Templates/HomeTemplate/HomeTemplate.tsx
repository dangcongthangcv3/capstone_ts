import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderDashboard from '../../Component/HeaderDashboard/HeaderDashboard'
type Props = {}

export default function HomeTemplate({ }: Props) {
    return (
        <div>
            <HeaderDashboard />
            <main  style={{paddingTop:'80px'}} className='container'>
                <Outlet></Outlet>
            </main>
            <footer></footer>
        </div>
    )
}