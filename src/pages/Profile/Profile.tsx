import React, { useEffect } from 'react'
import styles from './profile.module.scss'
import clsx from 'clsx'
import * as yup from 'yup'
import { USER_LOGIN, getStoreJson } from '../../Util/Config'
import { UserLoginModel, UserProfileModel, updateprofile } from '../../Redux/reducers/UsersReducer'
import { useFormik } from 'formik'
import { useAppDispatch } from '../../Redux/ConfigStore'

type Props = {}


export default function Profile({ }: Props) {
    const profileLocal = getStoreJson(USER_LOGIN)
    const dispatch = useAppDispatch()
    //Formik
    const getDataProjectDetail = () => {
        if (profileLocal.id) {
            editProfileMeFrm.setValues({
                ...editProfileMeFrm.values,
                id: profileLocal.id,
                email: profileLocal.email,
                name: profileLocal.name,
                phoneNumber: profileLocal.phoneNumber,
                pass: '',
                passwordconfirm: '',
            });
        }
    };
    useEffect(() => {
        getDataProjectDetail()
    }, [profileLocal.id]);

    const initialValues: UserProfileModel = {
        id: -1,
        email: '',
        name: '',
        phoneNumber: '',
        pass: ' ',
        passwordconfirm: ' ',
    };

    const editProfileMeFrm = useFormik({
        initialValues: initialValues,
        validationSchema: yup.object().shape({
            email: yup.string().required('email cannot be blank!').email('Email is invalid !'),
            name: yup.string().required('name cannot be blank'),
            phoneNumber: yup.string().required('phone cannot be blank').matches(/\d$/, 'phone is numbers'),
            pass: yup.string().required('password cannot be blank!'),
            passwordconfirm: yup.string()
                .required('Xác nhận mật khẩu không được để trống!')
                .oneOf([yup.ref('pass')], 'Mật khẩu phải giống nhau')
                .nullable(), // Cho phép giá trị null
        }),
        onSubmit: (values) => {
            console.log('value', values);
            const action = updateprofile(values);
            dispatch(action);
        }
    });
    return (
        <div className={styles.profile}>
            <div className='row'>
                <div className={clsx('col-md-4', styles.left)}>
                    <img src={profileLocal.avatar} height={250} alt="sasa" />
                </div>
                <div className={clsx('col-md-8', styles.right)}>
                    <form onSubmit={editProfileMeFrm.handleSubmit}>

                        <h3>{profileLocal.name}</h3>
                        <div className="mt-3 mb-3">
                            <label htmlFor="id" className={clsx('form-label', styles.lable)}>Id <span style={{ color: 'red' }}>*</span></label>
                            <input type="number" className="form-control"
                                disabled
                                name='id'
                                id='id'
                                value={editProfileMeFrm.values.id}
                                onInput={editProfileMeFrm.handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className={clsx('form-label', styles.lable)}>Email <span style={{ color: 'red' }}>*</span></label>
                            <input type="email" className="form-control"
                                name='email' id='email'
                                value={editProfileMeFrm.values.email}
                                onInput={editProfileMeFrm.handleChange} onBlur={editProfileMeFrm.handleBlur} />
                                {editProfileMeFrm.errors.email && <p className='alert alert-danger'>{editProfileMeFrm.errors.email} </p>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="name" className={clsx('form-label', styles.lable)}>Name <span style={{ color: 'red' }}>*</span></label>
                            <input type="text" className="form-control"

                                value={editProfileMeFrm.values.name}
                                name='name'
                                id='name'
                                onInput={editProfileMeFrm.handleChange} onBlur={editProfileMeFrm.handleBlur} />
                                {editProfileMeFrm.errors.name && <p className='alert alert-danger'>{editProfileMeFrm.errors.name} </p>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phoneName" className={clsx('form-label', styles.lable)}>Phone number</label>
                            <input type="tel" className="form-control"
                                value={editProfileMeFrm.values.phoneNumber}
                                name='phoneNumber'
                                id='phoneNumber'
                                onInput={editProfileMeFrm.handleChange} onBlur={editProfileMeFrm.handleBlur} />
                                {editProfileMeFrm.errors.phoneNumber && <p className='alert alert-danger'>{editProfileMeFrm.errors.phoneNumber} </p>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pass" className={clsx('form-label', styles.lable)}>Password <span style={{ color: 'red' }}>*</span></label>
                            <input type="password" className="form-control"
                                name='pass'
                                id='pass'
                                value={editProfileMeFrm.values.pass}
                                onInput={editProfileMeFrm.handleChange} onBlur={editProfileMeFrm.handleBlur} />
                                {editProfileMeFrm.errors.pass && <p className='alert alert-danger'>{editProfileMeFrm.errors.pass} </p>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="passwordconfirm" className={clsx('form-label', styles.lable)}>Password confirmation <span style={{ color: 'red' }}>*</span></label>
                            <input type="password" className="form-control"
                                name='passwordconfirm'
                                id='passwordconfirm'
                                value={editProfileMeFrm.values.passwordconfirm}
                                onInput={editProfileMeFrm.handleChange} onBlur={editProfileMeFrm.handleBlur} />
                                {editProfileMeFrm.errors.passwordconfirm && <p className='alert alert-danger'>{editProfileMeFrm.errors.passwordconfirm} </p>}
                        </div>

                        <div className="mb-3">
                            <button className='btn btn-primary' type='submit' style={{ marginRight: '20px' }}>Update</button>
                            <button className='btn'>Cancel</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}