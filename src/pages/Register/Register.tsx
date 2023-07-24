import React from 'react'
import styles from '../Login/login.module.scss'
import clsx from 'clsx'
import { NavLink } from 'react-router-dom'
import { Input } from 'antd'
import { UserOutlined, LockOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons'

type Props = {}

export default function Register({ }: Props) {
  return (
    <form className={styles.login}>
      <h3>Login</h3>
      <div className='col-3 pt-5 w-100'>
        <Input size='large' placeholder='large size' prefix={<UserOutlined />}  />
        {/* <input className='form-control' placeholder='Email' id='email' onInput={loginFrm.handleChange} /> */}
      </div>
      <div className='col-3 pt-3 w-100'>
        <Input size='large' type='password' style={{ minWidth: 300, width: '100%' }} placeholder='large size ' prefix={<MailOutlined />} />
      </div>
      <div className='col-3 pt-3 w-100'>
        <Input size='large' type='password' style={{ minWidth: 300, width: '100%' }} placeholder='large size ' prefix={<PhoneOutlined />} />
      </div>
      <div className='col-3 pt-3 w-100'>
        <Input size='large' type='password' style={{ minWidth: 300, width: '100%' }} placeholder='large size ' prefix={<LockOutlined />} />
      </div>

      <div className={clsx('mt-3', styles.btnLogin)}>
        <button className={clsx('btn', 'btn-primary', styles.btnLogin)}>Register</button>
      </div>
      <div className={clsx('mt-3', 'text-center')}>
        Already have an account?
        <NavLink className='text-decoration-none text-primary' to={'/login'}>Login now</NavLink>
      </div>
      <div className={clsx('mt-3', 'text-center')}>
        <div className={styles.mediaButtons}>
          <NavLink className={styles.link} to={''} style={{ backgroundColor: '#4267b2' }}>
            <i className="bx bxl-facebook" ></i>
          </NavLink>
          <NavLink className={styles.link} to={''} style={{ backgroundColor: '#1da1f2' }}>
            <i className="bx bxl-twitter" ></i>
          </NavLink>
        </div>
      </div>
    </form>
  )
}