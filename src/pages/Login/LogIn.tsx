import React, { useEffect } from 'react'
import clsx from 'clsx'
import { Input } from 'antd'
import * as yup from 'yup'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

import styles from './login.module.scss'
import { NavLink, Navigate, useNavigate } from 'react-router-dom'
import { useFormik, withFormik } from 'formik'
import { useAppDispatch } from '../../Redux/ConfigStore'
import { UserJiraLoginModel, signIn } from '../../Redux/reducers/UsersReducer'
import { TOKEN, USER_LOGIN, getStore, setStore, setStoreJson } from '../../Util/Config'
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
    validationSchema: yup.object().shape({
      email: yup.string().required('email cannot be blank!').email('Email is invalid !'),
      password: yup.string().required('password cannot be blank!'),
    }),

    onSubmit: async (values) => {
      try {
        const action = signIn(values)
        await dispatch(action).unwrap();
        const pathLogin = !!getStore(TOKEN)

        if (!pathLogin) {
        } else {

          // Chuyển hướng tới trang /admin/project
          navigate('/admin/project');
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
          onInput={loginFrm.handleChange} onBlur={loginFrm.handleBlur} />
        {loginFrm.errors.email && <p className='alert alert-danger'>{loginFrm.errors.email} </p>}
      </div>
      <div className='col-3 pt-3 w-100'>
        <Input size='large' type='password' style={{ minWidth: 300, width: '100%' }} placeholder='password ' prefix={<LockOutlined />}
          name='password' id='password'
          onInput={loginFrm.handleChange} onBlur={loginFrm.handleBlur} />
        {loginFrm.errors.password && <p className='alert alert-danger'>{loginFrm.errors.password} </p>}
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