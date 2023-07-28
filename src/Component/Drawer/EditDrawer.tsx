import { Drawer } from 'antd'
import React from 'react'
import EditDrawerContent from './EditDrawerContent'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../Redux/ConfigStore'
import {closeOpenEditDrawerAction} from '../../Redux/reducers/editProjectReducer'
type Props = {}

export default function EditDrawer({}: Props) {
    

    const dispatch = useDispatch()
    const visibleDrawer = useSelector((state:RootState) => state.editProjectReducer.visibleDrawer);
    const onClose = () => {
        const actionClose = closeOpenEditDrawerAction(false);
        dispatch(actionClose)
    };
  return (
    <div>
        <Drawer title='Edit' width={720}
                    placement='right'
                    onClose={onClose}
                    open={visibleDrawer}
                    bodyStyle={{ paddingBottom: 80 }}>
            <EditDrawerContent />
        </Drawer>
    </div>
  )
}