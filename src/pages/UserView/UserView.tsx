import React from 'react'
import styles from './UserView.module.scss'
import { Input } from 'antd'
import { DeleteOutlined , EditOutlined} from '@ant-design/icons'
import clsx from 'clsx'
import { NavLink } from 'react-router-dom'

type Props = {}

export default function UserView({}: Props) {
  return (
    <div className={styles.userView}>

        <table className={clsx('table',styles.table)}>
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
            <tbody>
              <tr>
                <td>13039</td>
                <td><NavLink to={''}>test 601</NavLink></td>
                <td>Dự án web</td>
                <td>Nghia</td>
                <td><button className={styles.btnImg}>th</button></td>
                <td>
                    <button className={styles.tbdropdown} style={{color:'#1d4ed8'}}><EditOutlined /></button>                
                    <button className={styles.tbdropdown} style={{color: 'red'}}><DeleteOutlined /></button>                
                </td>
              </tr>
              <tr>
                <td>13039</td>
                <td><NavLink to={''}>test 601</NavLink></td>
                <td>Dự án web</td>
                <td>Nghia</td>
                <td><button className={styles.btnImg}>th</button></td>
                <td>
                    <button className={styles.tbdropdown} style={{color:'#1d4ed8'}}><EditOutlined /></button>                
                    <button className={styles.tbdropdown} style={{color: 'red'}}><DeleteOutlined /></button>                
                </td>
              </tr><tr>
                <td>13039</td>
                <td><NavLink to={''}>test 601</NavLink></td>
                <td>Dự án web</td>
                <td>Nghia</td>
                <td><button className={styles.btnImg}>th</button></td>
                <td>
                    <button className={styles.tbdropdown} style={{color:'#1d4ed8'}}><EditOutlined /></button>                
                    <button className={styles.tbdropdown} style={{color: 'red'}}><DeleteOutlined /></button>                
                </td>
              </tr> 
            </tbody>
        </table>
    </div>
  )
}