import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services';
import { Link } from 'react-router-dom'
import '../styles/loyin.css'

const Login = () => {

    const { handleSubmit, register } = useForm()
    const navigate = useNavigate()
    const [userObj, setUserObj] = useState({})

    const onSubmit = (data) => {
        setUserObj(data)
    }

    useEffect(() => {
        if (userObj.email) {
            loginUser(userObj)
                .then((res) => {
                    localStorage.setItem('token', res.access)
                })
                .then(() => {
                    navigate('/shop')
                })
        }
    }, [userObj, navigate])

    return (
        <section className='login'>
            <div className='container_page'>
                <div className='login-container'>
                    <h1 className='tittle'>Login</h1>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div className='input-line-container'>
                            <label className='email-input' htmlFor="email">Email</label>
                            <input className='input-line' placeholder='Your email' id='email' {...register('email')} type="email" />
                        </div>

                        <div className='input-line-container'>
                            <label className='email-input' htmlFor="password">Password</label>
                            <input className='input-line' placeholder='Your password' id='password' type="password" {...register('password')} />
                        </div>
                        <button className='btn-login'>Login</button>
                    </form>
                    <button className='btn-singup'><Link to="/singup" className='link-singup'>Sing Up</Link></button>
                </div>
            </div>
        </section>
    );
};

export default Login;