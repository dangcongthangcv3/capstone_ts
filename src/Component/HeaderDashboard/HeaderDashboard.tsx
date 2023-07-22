import React from 'react'
import styles from './HeaderDashboard.module.scss'
import { clsx } from 'clsx'

type Props = {}

export default function HeaderDashboard({ }: Props) {
    return (
        <div className={styles.header}>
            <div className={styles.headerTop}>
                <nav className={styles.nav}>
                    <a className='mr-1 rounded'>
                        <img src="./image/ico.png" alt="" width={35} height={30} />
                        <br></br>
                        JIRA
                    </a>
                    <div className={clsx('dropdown', styles.dropdown)}>
                        <button className={clsx('btn btn-link dropdown-toggle', styles.btnNav)} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Projects
                        </button>
                        <ul className={clsx('dropdown-menu dropdown-menu-dark', styles.dropdownMenuWhite)}>
                            <li><a className="dropdown-item" href="#">View all projects</a></li>
                            <li><a className="dropdown-item" href="#">Create project action</a></li>
                        </ul>
                    </div>
                    <div className={clsx('dropdown', styles.dropdown)}>
                        <button className={clsx('btn btn-link dropdown-toggle', styles.btnNav)} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Users
                        </button>
                        <ul className={clsx('dropdown-menu dropdown-menu-dark', styles.dropdownMenuWhite)}>
                            <li><a className="dropdown-item" href="#">View all users</a></li>
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
                            <li><a className="dropdown-item" href="#">View all projects</a></li>
                            <li><span>JIRA SETTINGS</span></li>
                            <li><a className="dropdown-item" href="#">Create project action</a></li>
                        </ul>
                    </div>
                    <div className={clsx('dropdown', styles.dropdown)}>
                        <button className={clsx('btn btn-link', styles.btnNav)} style={{borderRadius:'50%'}} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src='https://i.pravatar.cc/300' width={30} style={{borderRadius:'50%'}}/>
                        </button>
                        <ul className={clsx('dropdown-menu dropdown-menu-dark', styles.dropdownMenuWhite)}>
                            <li><a className="dropdown-item" href="#">NAME</a></li>
                            <li><a className="dropdown-item" href="#">Profile</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#">Log <output></output></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}