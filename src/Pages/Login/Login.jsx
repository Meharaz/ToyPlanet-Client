import { useContext, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { FaGoogle } from 'react-icons/fa';
import useTitle from '../../UseTitle/UseTitle';

const Login = () => {
    useTitle('Login')
    const [error, setError] = useState();
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate()

    const { signIn } = useContext(AuthContext);
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                navigate('/')
                console.log(user);
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const handleGoogleSignUp = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                navigate('/');
                console.log(user);
            })
            .catch((error) => {
                setError("Don't Worry!!")
            })
       
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <form onSubmit={handleLogin} >
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <p className='text-red-600'>{error}</p>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p className='my-4 text-center font-semibold'>New to Toy-Planet? <Link to='/signup' className='text-orange-500 font-bold'>Sign Up</Link></p>
                            <p className='btn btn-outline' onClick={handleGoogleSignUp}><FaGoogle/></p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;