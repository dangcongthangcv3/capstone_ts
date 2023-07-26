import React, { useEffect } from 'react';
import { Avatar, Button, Input, Menu, Space, Table, Tooltip } from 'antd';
import { Dropdown } from 'antd';
import { SearchOutlined, EllipsisOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import styles from './Project.module.scss';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../Redux/ConfigStore';
import { ProjectModel, getAllProject } from '../../Redux/reducers/DashBoardReducer';
import { ColumnsType, TableProps } from 'antd/es/table';
import Search from 'antd/es/input/Search';

type Props = {};

interface DataType {
  key: React.Key;
  id: number;
  Members: any[]; // TODO: Replace with the correct type for Members
  creator: any; // TODO: Replace with the correct type for nameCreator
  productName: string;
  description: string;
  categoryId: number;
  categoryName: string;
  alias: string;
  deleted: boolean;
  

}

export default function Project({ }: Props) {
  const dispatch = useAppDispatch();
  const { arrProject } = useSelector((state: RootState) => state.DashBoardReducer) as { arrProject: ProjectModel[] };

  const getDataProductList = async () => {
    const actionApi = getAllProject();
    dispatch(actionApi);
  };

  useEffect(() => {
    getDataProductList();
  }, []);

  const columns: ColumnsType<DataType> = [
    {
      title: 'Id',
      dataIndex: 'id',
      render: (text: string, record: DataType) => <span>{text}</span>,

      sorter: (a: DataType, b: DataType) => a.id - b.id,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Project name',
      dataIndex: 'productName',
      defaultSortOrder: 'descend',
      sorter: (a: DataType, b: DataType) => a.productName.localeCompare(b.productName),
    },
    {
      title: 'Category name',
      dataIndex: 'categoryName',
    },
    {
      title: 'Creator',
      dataIndex: 'creatorName',
    },
    {
      title: 'Members',
      dataIndex: 'Members',
      render: (members: any[]) => (
        <Avatar.Group maxCount={2} maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
          {members.map((memberitem, index) => (
            <Avatar key={index} src={memberitem.avatar} />
          ))}
        </Avatar.Group>
      ),
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (_: any, record: DataType) => (
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item key="edit">
                <Button type="link" icon={<EditOutlined />} onClick={() => handleEdit(record)}>
                  Sửa
                </Button>
              </Menu.Item>
              <Menu.Item key="delete">
                <Button type="link" icon={<DeleteOutlined />} onClick={() => handleDelete(record.id)}>
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

  const data: DataType[] = arrProject.map((project) => ({
    key: project.id,
    id: project.id,
    Members: project.members,
    creator: project.creator,
    creatorName: project.creator.name,
    productName: project.projectName,
    description: project.description,
    categoryId: project.categoryId,
    categoryName: project.categoryName,
    alias: project.alias,
    deleted: project.deleted,
  }));

  // Hàm xử lý khi click nút "Sửa"
  const handleEdit = (record: DataType) => {
    // Thực hiện logic khi click nút "Sửa" ở đây
    console.log('Sửa dự án với id:', record.id);
  };

  // Hàm xử lý khi click nút "Xóa"
  const handleDelete = (projectId: React.Key) => {
    // Thực hiện logic khi click nút "Xóa" ở đây
    console.log('Xóa dự án với id:', projectId);
  };

  const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  const onSearch = (value: string): void => console.log(value);

  return (
    <div className={styles.project}>
      <div className={styles.creater}>
        <h3>Project</h3>
        <Button>Create Project</Button>
      </div>
      <div className={styles.search}>
        <Search className='mt-3' enterButton={<SearchOutlined />} onSearch={onSearch} />
      </div>

      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
}