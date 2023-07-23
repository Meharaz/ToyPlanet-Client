import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo main.png'
import { AuthContext } from '../../Providers/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch((error) => console.log(error))
    }

    const navItems = <>
        <li className=' text-orange-300 font-semibold hover:bg-orange-400  hover: rounded-2xl '>
            <Link to='/'>Home</Link>
        </li>
        <li className='text-orange-300 font-semibold hover:bg-orange-300 hover: rounded-2xl'>
            <Link to='/allToys'>All Toys</Link>
        </li>
        <>
            {user ? 
                <li className='text-orange-300 font-semibold hover:bg-orange-300 hover: rounded-2xl'>
                <Link to='/myToys'>My Toys</Link>
            </li>
            : 
            <li className='text-orange-300 font-semibold hover:bg-orange-300 hover: rounded-2xl'>
                <Link to='/addToy'>Add Toys</Link>
            </li>
            }
        </>

        <li className='text-orange-300 font-semibold hover:bg-orange-300 hover: rounded-2xl'>
            <Link to='/blog'>Blogs</Link>
        </li>
    </>

    return (
        <div className="navbar bg-base-100 px-16 items-center fixed top-0 w-full z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>

                <img className='h-12' src={logo} alt="" />

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">

                {user ?
                    <Link className="btn bg-orange-300 border-0 hover:btn-info hover:text-white" onClick={handleLogOut}>LogOut</Link>
                    :
                    <Link className="btn bg-orange-300 border-0 hover:btn-info hover:text-white" to="/login">Login</Link>
                }

                {user ?
                    <img className='h-10 ms-2 rounded-full' src={user?.photoURL} alt="" />
                    :
                    ''
                }

            </div>
        </div>
    );
};

export default Header;