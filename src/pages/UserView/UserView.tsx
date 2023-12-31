import React, { useEffect } from 'react'
import styles from './UserView.module.scss'
import { Avatar, Button, Dropdown, Input, Menu, Table, TableProps } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import clsx from 'clsx'
import { NavLink } from 'react-router-dom'
import Search from 'antd/es/input/Search'
import { SearchOutlined, EllipsisOutlined } from '@ant-design/icons';
import { RootState, useAppDispatch } from '../../Redux/ConfigStore'
import { useSelector } from 'react-redux'
import { ColumnsType } from 'antd/es/table'
import { deleteUserView, getUserView } from '../../Redux/reducers/UsersReducer'
import { closeOpenEditDrawerAction, getUserDetailId } from '../../Redux/reducers/editUserViewReducer'

type Props = {}

interface DataType {
  key: React.Key;
  userId: number,
  name: string,
  avatar: string
  email: string,
  phoneNumber: string,


}

export default function UserView({ }: Props) {

  const dispatch = useAppDispatch();
  const { ArrUserView } = useSelector((state: RootState) => state.UsersReducer);

  // Get all userView
  const getDataUserView = async () => {
    const actionApi = getUserView()
    dispatch(actionApi);
  };

  // Sửa
  const handleEditUser = (record: DataType) => {
    const action = getUserDetailId(record.userId)
    dispatch(action)
    dispatch(closeOpenEditDrawerAction(true))
  };


  // Xóa
  const handleDelete = async (id: number) => {
    const actionDelete = deleteUserView(id)
    await dispatch(actionDelete).unwrap();
    if (!!actionDelete) {
      getDataUserView()
    }
  };

  const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
    console.log('s1111')
  };

  const onSearch = (value: string): void => console.log(value);

  useEffect(() => {
    getDataUserView();
  }, []);

  const columns: ColumnsType<DataType> = [
    {
      title: 'No.',
      dataIndex: 'index',
      render: (_, __, index) => index + 1,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      // defaultSortOrder: 'descend',
      sorter: (a: DataType, b: DataType) => a.name.localeCompare(b.name),
    },
    {
      title: 'User ID',
      dataIndex: 'userId',
      render: (text: string, record: DataType) => <span>{text}</span>,

      sorter: (a: DataType, b: DataType) => a.userId - b.userId,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Phone number',
      dataIndex: 'phoneNumber',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (_: any, record: DataType) => (
        <Dropdown
          overlay={ 
            <Menu>
              <Menu.Item key="edit">
                <Button type="link" icon={<EditOutlined />} onClick={() => handleEditUser(record)}>
                  Sửa
                </Button>
              </Menu.Item>
              <Menu.Item key="delete">
                <Button type="link" icon={<DeleteOutlined />} onClick={() => handleDelete(record.userId)}>
                  Xóa
                </Button>
              </Menu.Item>
            </Menu>
          }
          trigger={['click']}
        >
          <Button type="link" icon={<EllipsisOutlined />} />
        </Dropdown>
      ),
    },
  ];

  const data: DataType[] = ArrUserView.map((userView, index) => ({
    key: userView.userId.toString(),
    index: index + 1,
    userId: userView.userId,
    name: userView.name,
    avatar: userView.avatar,
    email: userView.email,
    phoneNumber: userView.phoneNumber,
  }));

  return (
    <div className={styles.user}>

      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
}