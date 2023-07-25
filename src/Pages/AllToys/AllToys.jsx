import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const AllToys = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        fetch("http://localhost:5000/allToys/")
            .then((res) => res.json())
            .then((result) => setToys(result));

    }, []);

    const handleToySearch = () => {
        fetch(`http://localhost:5000/searchToy/${search}`)
            .then((res) => res.json())
            .then((result) => setToys(result));

    };

    const handleDetails = (_id) => {
        if (!user) {
            Swal.fire(
                {
                    title: "Please Login First",
                    text: "Redirecting to the Login Page",
                    icon: "info",
                    confirmButtonText: "OK",
                });
        }
        navigate(`/allToys/${_id}`);
    }

    return (
        <div className='mt-20 mb-10'>
            <h1 className='text-3xl font-bold text-center p-5'> All Toys</h1>
            <div className='flex justify-center mb-8' >
                <input
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    name="search"
                    placeholder="Search Toy"
                    className="outline-2 outline-orange-400 border-gray-600 border-2 rounded p-2"
                />
                <button
                    onClick={handleToySearch}
                    className="bg-orange-300 hover:bg-red-500 px-6 py-2 rounded-md ml-2 text-white font-medium"
                >
                    Search
                </button>
            </div>
            <table className="w-full border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Seller</th>
            <th className="border px-4 py-2">Toy Name</th>
            <th className="border px-4 py-2">Sub-category</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Available Quantity</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {toys.map((toy) => (
            <tr key={toy._id}>
              <td className="border px-4 py-2">{toy.seller}</td>
              <td className="border px-4 py-2">{toy.name}</td>
              <td className="border px-4 py-2">{toy.category}</td>
              <td className="border px-4 py-2">${toy.price}</td>
              <td className="border px-4 py-2">{toy.quantity}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleDetails(toy._id)}
                  className="bg-purple-500 hover:bg-fuchsia-700 text-white font-bold py-2 px-4 rounded w-full"
                >
                   View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
    );
};

export default AllToys;