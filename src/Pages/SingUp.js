import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { setSingUpThunk } from '../redux/actions/index';
import '../styles/singup.css'

const SignUp = () => {

    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        dispatch(setSingUpThunk(data))
            .then(() => navigate('/login'));
    }

    return (
        <div className='split-screen'>
            <div className='left'>
                <section className='copy'>
                    <h1>Wear the best fashion</h1>
                    <p>Try our variety of jewelry and immerse yourself in the experience</p>
                </section>
            </div>
            <div className='right'>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <section className='copy'>
                        <h2>Sing Up</h2>
                        <div className='login-container'>
                            <p >Already have an account?                         <Link to="/login"> <strong>Log In</strong></Link></p>
                        </div>
                    </section>
                    <div className='input-container-name'>
                        <label>First name</label>
                        <input type="text" placeholder='Name' {...register("first_name")} />
                        <label>Last name</label>
                        <input type="text" placeholder='Last Name' {...register("last_name")} />
                    </div>
                    <div className='input-container-email'>
                        <label>Email</label>
                        <input type="email" placeholder='email' {...register("email")} />
                    </div>
                    <div className='input-container-password'>
                        <label>Password</label>
                        <input type="password" placeholder='Must be at least 8 characters' {...register("password")} />
                    </div>
                    <button className='singup-btn'>Sing Up</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;