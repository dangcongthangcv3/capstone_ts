import React from 'react'
import clsx from 'clsx'
import { Input } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

import styles from './login.module.scss'
import { NavLink } from 'react-router-dom'
import { useFormik, withFormik } from 'formik'
type Props = {}

interface UserLoginFrm {
  email: string,
  password: string
}
export default function LogIn({ }: Props) {
  const loginFrm = useFormik<UserLoginFrm>({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values: UserLoginFrm) => {
      console.log(values)
    }
  })
  return (
    <form className={styles.login} onSubmit={loginFrm.handleSubmit}>
      <h3>Login</h3>
      <div className='col-3 pt-5 w-100'>
        <Input size='large' placeholder='large size' prefix={<UserOutlined />} onInput={loginFrm.handleChange} />
        {/* <input className='form-control' placeholder='Email' id='email' onInput={loginFrm.handleChange} /> */}
      </div>
      <div className='col-3 pt-3 w-100'>
        <Input size='large' type='password' style={{ minWidth: 300, width: '100%' }} placeholder='large size ' prefix={<LockOutlined />} />
      </div>
      
      <div className={clsx('mt-3', styles.btnLogin)}>
        <button className={clsx('btn', 'btn-primary', styles.btnLogin)}>LOGIN</button>
      </div>

      <div className={clsx('mt-3', 'text-center')}>
        Already have an account?
        <NavLink className='text-decoration-none text-primary' to={'/register'}>Register</NavLink>
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