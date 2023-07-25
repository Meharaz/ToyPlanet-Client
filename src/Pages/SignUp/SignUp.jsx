import { useContext, useState } from "react";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";

const auth = getAuth();

const SignUp = () => {
    const { createUser, setUser, logOut } = useContext(AuthContext);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();
    const navigation = useNavigation();

    const handleSignUP = event => {

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        const photo = form.photo.value;
        console.log(name, email, password, confirm, photo);
        if (password !== confirm) {
            return setError("password dosen't match");
        } else if (password.length < 8) {
            setError(" Enter Password with minimum 8 characters");
            return;
        }
        createUser(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user)
                updateProfile(auth.currentUser, { displayName: name, photoURL: photo })
                    .then(() => { })
                    .catch(() => { })
                setUser(user);
                logOut()
                    .then(() => { })
                    .catch(() => { });
                navigate("/login");
                setSuccess("Account created successfully");
                setError("");
                form.reset("");
            })
            .catch((error) => {
                setError(error.message);
                setSuccess("");
            });
    }
    return (
        <div>
            {navigation.state === 'loading' ? (
                <div>
                    <div className="flex justify-center items-center h-screen">
                        <div className="loader">
                            <span className="loader-text">loading</span>
                            <span className="load"></span>
                        </div>
                    </div>
                </div>
            ) : (
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
                                        <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" />
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
                                        <input type="text" name='confirm' placeholder="Confirm Password" className="input input-bordered" />
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <p className="text-red-600">
                                        {error}
                                    </p>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Sign Up</button>
                                    </div>
                                    <p className='my-4 text-center font-semibold'>Already have an account? <Link to='/login' className='text-orange-500 font-bold'>Sign In</Link></p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            )
            }
        </div>
    );
};

export default SignUp;