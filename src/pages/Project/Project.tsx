import React from 'react'
import { Input } from 'antd'
import type { MenuProps } from 'antd';
import {Dropdown} from 'antd'
import { SearchOutlined, EllipsisOutlined } from '@ant-design/icons'
import  styles  from './Project.module.scss'
import clsx from 'clsx'
import { NavLink } from 'react-router-dom'
type Props = {}
export default function Project({}: Props) {
  const onMenuClick: MenuProps['onClick'] = (e) => {
    console.log('click', e);
  };
  const items = [
    {
      key: '1',
      label: 'Project setting',
    },
    {
      key: '2',
      label: 'Move to trash',
    },
  ];
  return (
    <div className={styles.project}>
        <h3 style={{padding: '10px 0'}}>Project</h3>
        <div className={styles.search}>
          <Input  addonAfter={<SearchOutlined />} />
        </div>

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
                <Dropdown className={styles.tbdropdown} menu={{ items, onClick: onMenuClick }}><EllipsisOutlined /></Dropdown>
                </td>
              </tr>
            </tbody>
        </table>
    </div>
  )
}