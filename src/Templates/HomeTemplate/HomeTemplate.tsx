import React, {useEffect, useState} from 'react'
import { Outlet} from 'react-router-dom'
import HeaderDashboard from '../../Component/HeaderDashboard/HeaderDashboard'
import { getCategory } from '../../Redux/reducers/DashBoardReducer';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/ConfigStore';
type Props = {}

export default function HomeTemplate({ }: Props) {

    const {arrUser} = useSelector((state:RootState) => state.UsersReducer)
    useEffect(()=>{
        
    })
    return (

        <div>
            
            <HeaderDashboard />
            <main style={{ paddingTop: '80px' }} className='container'>
                <Outlet></Outlet>
            </main>
        </div>
    )
}