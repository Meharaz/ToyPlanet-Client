import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedToy, setSelectedToy] = useState(null);
    const [updatedPrice, setUpdatedPrice] = useState("");
    const [updatedQuantity, setUpdatedQuantity] = useState("");
    const [updatedDescription, setUpdatedDescription] = useState("");
    const [control, setControl] = useState(false);
    const updateToy = {};

    useEffect(() => {
        fetch(`http://localhost:5000/myToys/${user.displayName}`)
            .then((res) => res.json())
            .then((result) => setToys(result));
    }, [user.displayName, control]);

    const handleUpdate = (toy) => {
        setSelectedToy(toy);
        setShowModal(true);
        setUpdatedPrice(toy.price);
        setUpdatedQuantity(toy.quantity);
        setUpdatedDescription(toy.description);
    }

    const handleModalClose = () => {
        setShowModal(false);
        setSelectedToy(null);
        setUpdatedPrice("");
        setUpdatedQuantity("");
        setUpdatedDescription("");
    };

    const handleUpdateToy = () => {
        updateToy._id = selectedToy._id;
        updateToy.price = updatedPrice;
        updateToy.quantity = updatedQuantity;
        updateToy.description = updatedDescription;

        fetch(`http://localhost:5000/updateToy/${updateToy._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updateToy),
        })
            .then(res => res.json())
            .then(data => {
                setControl(!control);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Success!",
                        text: "Toy Updated Successfully",
                        icon: "success",
                        confirmButtonText: "Done",
                    })
                    handleModalClose();
                }
            })
    }
    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(
                    `http://localhost:5000/deleteToy/${_id}`,
                    {
                        method: "DELETE",
                    }
                )
                    .then((res) => res.json())
                    .then((result) => {
                        setControl(!control);
                        if (result.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Toy has been deleted.",
                                icon: "success",
                                confirmButtonText: "Done",
                            });
                        }
                    });
            }
        });
    };
    return (
        <div className='p-4 mt-10'>
            <h1 className='text-3xl font-extrabold p-4 text-center'>My Toys</h1>
            <table className="w-full border rounded-xl">
                <thead >
                    <tr>
                        <th className='border p-4 py-2'>Picture</th>
                        <th className='border p-4 py-2'>Toy Name</th>
                        <th className='border p-4 py-2'>Seller Name</th>
                        <th className='border p-4 py-2'>Sub-Category</th>
                        <th className='border p-4 py-2'>Price</th>
                        <th className='border p-4 py-2'>Quantity</th>
                        <th className='border p-4 py-2'>View Details</th>
                    </tr>
                </thead>
                <tbody className='borders '>
                    {toys.map((toy, i) => (
                        <tr key={i}>
                            <td className='border '>
                                <img src={toy.photoURL} className='rounded-2xl h-36 w-32 m-4 me-0' alt={toy.name} />
                            </td>
                            <td className='border font-semibold text-center'>{toy.name}</td>
                            <td className='border font-semibold text-center'>{toy.seller}</td>
                            <td className='border font-semibold text-center'>{toy.category}</td>
                            <td className='border font-semibold text-center'>${toy.price}</td>
                            <td className='border font-semibold text-center'>{toy.quantity}</td>
                            <td className='border font-semibold text-center' >
                                <button className='btn btn-warning me-4' onClick={() => handleUpdate(toy)}>Update</button>
                                <button className='btn btn-circle btn-error  ' onClick={() => handleDelete(toy._id)}>X</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {showModal && selectedToy && (
                <div className="fixed inset-0 flex items-center justify-center z-50 ">
                    <div className="bg-white rounded-lg p-8 w-1/2 border-2 border-orange-300">
                        <h2 className="text-2xl font-bold mb-4 text-center">Update Toy Information</h2>

                        <form>
                            <div className="mb-4">
                                <label htmlFor="price" className="block font-bold mb-2">
                                    Price:
                                </label>
                                <input
                                    type="number"
                                    id="price"
                                    className="rounded w-full outline-2  border-gray-600 border-2 p-2"
                                    value={updatedPrice}
                                    onChange={(e) => setUpdatedPrice(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="quantity" className="block font-bold mb-2">
                                    Available Quantity:
                                </label>
                                <input
                                    type="number"
                                    id="quantity"
                                    className="rounded w-full outline-2  border-gray-600 border-2 p-2"
                                    value={updatedQuantity}
                                    onChange={(e) => setUpdatedQuantity(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="description" className="block font-bold mb-2">
                                    Description:
                                </label>
                                <textarea
                                    id="description"
                                    className="rounded w-full outline-2  border-gray-600 border-2 p-2"
                                    rows="4"
                                    value={updatedDescription}
                                    onChange={(e) => setUpdatedDescription(e.target.value)}
                                ></textarea>
                            </div>
                            <div className="flex justify-end">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                                    type="button"
                                    onClick={handleUpdateToy}
                                >
                                    Update
                                </button>
                                <button
                                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                                    type="button"
                                    onClick={handleModalClose}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            <div className='text-center p-4'>
                <div className='btn btn-active btn-neutral'>
                    <Link to='/allToys'> Click here to see All Toys</Link>
                </div>
            </div>
        </div>
    );
};

export default MyToys;