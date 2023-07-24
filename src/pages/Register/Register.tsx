import { LockOutlined, MailOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import clsx from 'clsx'
import { useFormik } from 'formik'
import { NavLink } from 'react-router-dom'
import { useAppDispatch } from '../../Redux/ConfigStore'
import { RegisterJiraModel, register } from '../../Redux/reducers/UsersReducer'
import styles from '../Login/login.module.scss'

type Props = {}

export default function Register({ }: Props) {
  const dispatch = useAppDispatch()

  const initialValues: RegisterJiraModel = {
    email: '',
    passWord: '',
    name: '',
    phoneNumber: ''
  }

  const registerFrm = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log(values)
      const action = register(values)
      dispatch(action);
    }
  })

  return (
    <form className={styles.login} onSubmit={registerFrm.handleSubmit}>
      <h3>Login</h3>

      <div className='col-3 pt-3 w-100'>
        <Input size='large' type='password' style={{ minWidth: 300, width: '100%' }} placeholder='large size '
          name='email' id='email'
          onInput={registerFrm.handleChange} prefix={<MailOutlined />} />
      </div>
      <div className='col-3 pt-5 w-100'>

        <Input size='large' placeholder='large size' prefix={<UserOutlined />}
          name='name' id='name'

          onInput={registerFrm.handleChange} />
        {/* <input className='form-control' placeholder='Email' id='email' onInput={loginFrm.handleChange} /> */}
      </div>
      <div className='col-3 pt-3 w-100'>
        <Input size='large' style={{ minWidth: 300, width: '100%' }} placeholder='large size ' prefix={<PhoneOutlined />}
          name='phoneNumber' id='phoneNumber'
          onInput={registerFrm.handleChange} />
      </div>
      <div className='col-3 pt-3 w-100'>
        <Input size='large' type='password' style={{ minWidth: 300, width: '100%' }} placeholder='large size ' prefix={<LockOutlined />}
          name='passWord' id='passWord'
          onInput={registerFrm.handleChange} />
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