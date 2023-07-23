import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const SignUp = () => {
    const { createUser } = useContext(AuthContext);

    const handleSignUP = event => {

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const cpassword = form.cpassword.value;
        const photoURL = form.photo.value;
        console.log(name, email, password, cpassword, photoURL);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <form onSubmit={handleSignUP}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photoURL' placeholder="Photo URL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="Password" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="text" name='cpassword' placeholder="Confirm Password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                        <p className='my-4 text-center font-semibold'>Already have an account? <Link to='/login' className='text-orange-500 font-bold'>Sign In</Link></p>
                    </div>
                </div>
            </div>
            </form>
        </div>
    );
};

export default SignUp;