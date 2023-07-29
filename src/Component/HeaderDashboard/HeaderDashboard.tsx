import React from 'react'
import styles from './HeaderDashboard.module.scss'
import { clsx } from 'clsx'
import { NavLink } from 'react-router-dom'
import { USER_LOGIN, getStoreJson} from '../../Util/Config'
import { useAppDispatch } from '../../Redux/ConfigStore'
import { logoutUser } from '../../Redux/reducers/UsersReducer'
import { logoutProject } from '../../Redux/reducers/DashBoardReducer'


type Props = {}

export default function HeaderDashboard({ }: Props) {
    const logo = '/image/ico.png'
    const dispatch = useAppDispatch()
    const userLoginLocal = getStoreJson(USER_LOGIN)
    const arrGetUser = getStoreJson(USER_LOGIN);
    const handleLogout = () => {
        // Clear local storage
        window.localStorage.clear();
        // Dispatch the logout action to reset the Redux state
        dispatch(logoutUser());
        dispatch(logoutProject());
      };
    return (
        <div className={styles.header}>
            <div className={styles.headerTop}>
                <nav className={styles.nav}>
                    <a className='mr-1 rounded'>
                        <img src={logo} alt="" width={35} height={30} />
                        <br />
                        JIRA
                    </a>
                    <div className={clsx('dropdown', styles.dropdown)}>
                        <button className={clsx('btn btn-link dropdown-toggle', styles.btnNav)} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Projects
                        </button>
                        <ul className={clsx('dropdown-menu dropdown-menu-dark', styles.dropdownMenuWhite)}>
                            <li><NavLink className={styles.dropdownItem} to={'/admin/project'}>View all projects</NavLink></li>
                            <li><NavLink className={styles.dropdownItem} to={'/admin/createproject'}>Create project action</NavLink></li>
                        </ul>
                    </div>
                    <div className={clsx('dropdown', styles.dropdown)}>
                        <button className={clsx('btn btn-link dropdown-toggle', styles.btnNav)} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Users
                        </button>
                        <ul className={clsx('dropdown-menu dropdown-menu-dark', styles.dropdownMenuWhite)}>
                            <li><NavLink className={styles.dropdownItem} to={'/admin/userView'}>View all users</NavLink></li>
                        </ul>
                    </div>
                    <div className={clsx('dropdown', styles.dropdown)}>
                        <button className={clsx('btn btn-link', styles.btnNav)} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Create Task
                        </button>
                    </div>
                </nav>
                <div className={styles.personal}>

                    <div className={clsx('dropdown', styles.dropdown)}>
                        <button className={clsx('btn btn-link', styles.btnNav)} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fa fa-cog"></i>
                        </button>
                        <ul className={clsx('dropdown-menu dropdown-menu-dark', styles.dropdownMenuWhite)}>
                            <li><span>ATLASSIAN ADMIN </span></li>
                            <li><NavLink className={styles.dropdownItem} to={'/admin/userview'}>View all projects</NavLink></li>
                            <li><span>JIRA SETTINGS</span></li>
                            <li><NavLink className={styles.dropdownItem} to={'/admin/project'}>Create project action</NavLink></li>
                        </ul>
                    </div>
                    <div className={clsx('dropdown', styles.dropdown)}>
                        <button className={clsx('btn btn-link', styles.btnNav)} style={{ borderRadius: '50%' }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={userLoginLocal?.avatar} width={30} style={{ borderRadius: '50%' }} />
                        </button>
                        <ul className={clsx('dropdown-menu dropdown-menu-dark', styles.dropdownMenuWhite)}>
                            <li><span className={clsx(styles.dropdownItem, styles.other)} >{userLoginLocal?.name}</span></li>
                            <li><NavLink className={styles.dropdownItem} to={'/admin/profile'}>Profile</NavLink></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><NavLink className={styles.dropdownItem} to={'/login'} onClick={ handleLogout}>Log out</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}