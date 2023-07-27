import React, { useEffect } from 'react'
import clsx from 'clsx'
import { Input } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

import styles from './login.module.scss'
import { NavLink, Navigate, useNavigate } from 'react-router-dom'
import { useFormik, withFormik } from 'formik'
import { useAppDispatch } from '../../Redux/ConfigStore'
import { UserJiraLoginModel, signIn } from '../../Redux/reducers/UsersReducer'
import { TOKEN, getStore, setStore } from '../../Util/Config'
type Props = {}


export default function LogIn({ }: Props) {

  useEffect(() => {
    window.localStorage.clear()
  });
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const initialValues: UserJiraLoginModel = {
    email: '',
    password: ''
  }
  const loginFrm = useFormik<UserJiraLoginModel>({
    initialValues: initialValues,
    onSubmit: async (values) => {
      try {
        const action = signIn(values)
        await dispatch(action).unwrap();

        
        const pathLogin = !!getStore(TOKEN)

        if (!pathLogin) {
          <Navigate to="/login" />
        } else {
          navigate('/admin/project')
        }
      } catch (err) {
        console.log(err)
      }

    }
  })
  return (
    <form className={styles.login} onSubmit={loginFrm.handleSubmit}>
      <h3>Login</h3>
      <div className='col-3 pt-5 w-100'>
        <Input size='large' placeholder='email' prefix={<UserOutlined />}
          name='email' id='email'
          onInput={loginFrm.handleChange} />
      </div>
      <div className='col-3 pt-3 w-100'>
        <Input size='large' type='password' style={{ minWidth: 300, width: '100%' }} placeholder='password ' prefix={<LockOutlined />}
          name='password' id='password'
          onInput={loginFrm.handleChange}
        />
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