import React, { useEffect } from 'react'
import { Avatar, Input, Tooltip } from 'antd'
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd'
import { SearchOutlined, EllipsisOutlined, AntDesignOutlined, UserOutlined } from '@ant-design/icons'
import styles from './Project.module.scss'
import clsx from 'clsx'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../Redux/ConfigStore';
import { getAllProject } from '../../Redux/reducers/DashBoardReducer';
type Props = {}
export default function Project({ }: Props) {
  const dispatch = useAppDispatch()
  const { arrProject } = useSelector((state: RootState) => state.DashBoardReducer);
  const getDataProductList = async () => {

    const actionApi = getAllProject();
    dispatch(actionApi);
  }
  useEffect(() => {
    getDataProductList();
  }, [])
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
      <h3 style={{ padding: '10px 0' }}>Project</h3>
      <div className={styles.search}>
        <Input addonAfter={<SearchOutlined />} />
      </div>

      <table className={clsx('table', styles.table)}>
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
          {arrProject.map((item, index) => {
            return <tr key={index}>
              <td>{item.id}</td>
              <td><NavLink to={''}>{item.projectName}</NavLink></td>
              <td>{item.categoryName}</td>
              <td>{item.creator.name}</td>
              <td>

                <Avatar.Group maxCount={2} maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
                  {item.members.map((memberitem, index) => {
                    return (

                      // <Avatar style={{ backgroundColor: '#f56a00' }}>{memberitem.avatar}</Avatar>
                      <Avatar src={memberitem.avatar} />
                    )
                  })}
                  </Avatar.Group>
              </td>
              <td>
                <Dropdown className={styles.tbdropdown} menu={{ items, onClick: onMenuClick }}><EllipsisOutlined /></Dropdown>
              </td>
            </tr>
          })}

        </tbody>
      </table>
    </div >
  )
}