import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services';
import { Link } from 'react-router-dom'
import '../styles/login.css'
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
        <div>
            <form onSubmit={handleSubmit(onSubmit)} >
                <label htmlFor="email"></label>
                <input placeholder='Your email' id='email' {...register('email')} type="email" />
                <label htmlFor="password"></label>
                <input placeholder='Your password' id='password' type="password" {...register('password')} />
                <button>Login</button>
            </form>
            <button><Link to="/singup">Sing Up</Link></button>
        </div>
    );
};

export default Login;