import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider'
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import Aos from 'aos';

const Category = () => {
    AOS.init();
    const [toyCategory, setToyCategory] = useState([]);
    const { user } = useContext(AuthContext);
    const [active, setActive] = useState('All');

    useEffect(() => {
        fetch(`http://localhost:5000/toyCategory/${active}`)
            .then(res => res.json())
            .then(data => setToyCategory(data))
    }, [active])

    const handleTab = (tabName) => {
        setActive(tabName);
    }

    const handleDetails = () => {
        if (!user) {
            Swal.fire({
                title: "Please Login!",
                text: "You have to log in first to view details",
                icon: "info",
                confirmButtonText: "Ok",
            });
        }

    }
    return (
        <div>
            <h1 className='text-center font-extrabold text-3xl p-10 text-red-500' >
            <h1 className='text-5xl font-extrabold p-4 text-center'><span className="animate-text bg-gradient-to-r ml-1 from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent  font-black">
                           Toys By Category
                        </span></h1></h1>
            <div className=' d-flex justify-center items-center text-center w-full font-bold '>
                <p onClick={() => handleTab('All')} className={`tab text-xl text- All ${active == 'All' ? 'bg-orange-300  rounded-2xl text-white' : ""}`}>All</p>
                <p onClick={() => handleTab('Outdoor')} className={`tab text-xl Outdoor ${active == 'Outdoor' ? 'bg-orange-300  rounded-2xl text-white' : ""}`}>Outdoor</p>
                <p onClick={() => handleTab('Indoor')} className={`tab text-xl Indoor ${active == 'Indoor' ? 'bg-orange-300 rounded-2xl text-white' : ""}`}>Indoor</p>
                <p onClick={() => handleTab('Kids')} className={`tab text-xl Kids ${active == 'Kids' ? 'bg-orange-300 rounded-2xl text-white' : ""}`}>Kids</p>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 ' >
                {
                    toyCategory.map(category =>
                        <>
                            <div className="card w-full bg-base-100 shadow-xl" data-aos="flip-left"
                                data-aos-duration="600"
                                data-aos-offset="200" >
                                <figure>
                                    <img src={category.photoURL} alt="Toys" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {category.name}
                                    </h2>
                                    <div className="flex">
                                        <div className="">Price: ${category.price}</div>
                                        <div className="ms-10">Rating: {category.rating}</div>
                                    </div>
                                    {
                                        user ?
                                            <Link
                                                className="btn bg-orange-300 border-0 hover:bg-orange-500 hover:text-white mt-3" to={`/allToys/${category._id}`}>View Details</Link> :
                                            <Link
                                                className="btn bg-orange-300 border-0 hover:bg-orange-500 hover:text-white mt-3" onClick={handleDetails} to='/login'>View Details</Link>
                                    }
                                </div>
                            </div>
                        </>)
                }
            </div>
        </div>
    );
};

export default Category;