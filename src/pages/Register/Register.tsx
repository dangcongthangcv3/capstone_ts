import { LockOutlined, MailOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons'
import { Input, notification } from 'antd'
import * as yup from 'yup'
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
    validationSchema: yup.object().shape({
      email: yup.string().required('email cannot be blank!').email('Email is invalid !'),
      passWord: yup.string().required('password cannot be blank!').min(6, '6 - 32 characters').max(32, '6 - 32 characters'),
      name: yup.string().required('name cannot be blank'),
      phoneNumber: yup.string().required('phone cannot be blank').matches(/\d$/, 'phone is numbers')
    }),
    onSubmit: (values) => {
      console.log(values)
      const action = register(values)
      
      dispatch(action);
    }
  })

 

  return (
    <form className={styles.login} onSubmit={registerFrm.handleSubmit}>
      <h3>Register</h3>

      <div className='col-3 pt-3 w-100'>
        <Input size='large' style={{ minWidth: 300, width: '100%' }} placeholder='email '
          prefix={<MailOutlined />}
          name='email' id='email'
          onInput={registerFrm.handleChange} onBlur={registerFrm.handleBlur} />
          {registerFrm.errors.email && <p className='alert alert-danger'>{registerFrm.errors.email} </p>}
      </div>
      <div className='col-3 pt-5 w-100'>

        <Input size='large' placeholder='name' typeof='email' prefix={<UserOutlined />}
          name='name' id='name'
          onInput={registerFrm.handleChange} onBlur={registerFrm.handleBlur} />
          {registerFrm.errors.name && <p className='alert alert-danger'>{registerFrm.errors.name} </p>}
      </div>
      <div className='col-3 pt-3 w-100'>
        <Input size='large' style={{ minWidth: 300, width: '100%' }} placeholder='phone ' prefix={<PhoneOutlined />}
          name='phoneNumber' id='phoneNumber'
          onInput={registerFrm.handleChange} onBlur={registerFrm.handleBlur} />
          {registerFrm.errors.phoneNumber && <p className='alert alert-danger'>{registerFrm.errors.phoneNumber} </p>}
      </div>
      <div className='col-3 pt-3 w-100'>
        <Input size='large' type='password' style={{ minWidth: 300, width: '100%' }} placeholder='password ' prefix={<LockOutlined />}
          name='passWord' id='passWord'
          onInput={registerFrm.handleChange} onBlur={registerFrm.handleBlur} />
          {registerFrm.errors.passWord && <p className='alert alert-danger'>{registerFrm.errors.passWord} </p>}
      </div>

      <div className={clsx('mt-3', styles.btnLogin)}>
        <button className={clsx('btn', 'btn-primary', styles.btnLogin)} type='submit'>Register</button>
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