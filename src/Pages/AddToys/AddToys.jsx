import React from 'react';
import { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';
import useTitle from '../../UseTitle/UseTitle';

const AddToys = () => {
    useTitle('Add Toys')
    const {user} = useContext(AuthContext);

    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const seller = form.seller.value;
        const category = form.category.value;
        const rating = form.rating.value;
        const photoURL = form.url.value;
        const email = form.email.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const addToy = {
            name, seller, category, rating, photoURL, email, price, quantity, description
        }
        console.log(addToy);
        
        fetch('http://localhost:5000/toys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addToy)
        })
        .then(res => res.json())
        .then(data=> {
            console.log(data);
            if(data.insertedId) {
                Swal.fire(
                    'Good job!',
                    'You clicked the button!',
                    'success'
                  )
            }
        })
    }

    return (
        <div className='mt-12 p-8'>
            <h1 className='text-3xl font-extrabold p-4 text-center'><span className="animate-text bg-gradient-to-r ml-1 from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent  font-black">
                            Add Toys
                        </span></h1>
            <form  onSubmit={handleAddToy}>
                <div className='grid grid-flow-col sm:grid-cols-2 gap-4'>
                    <div>
                        <div className="form-control">
                            <label className="input-group input-group-vertical mb-5  ">
                                <span>Toy Name</span>
                                <input type="text" placeholder="Nike Football" required name='name' className="input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="input-group input-group-vertical mb-5  ">
                                <span>Seller Name</span>
                                <input type="text" placeholder="Nike" name='seller' defaultValue={user.displayName} required className="input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="input-group input-group-vertical mb-5  ">
                                <span>Category</span> 
                                <input type="text" placeholder="Outdoor or Indoor or Kids" required name='category' className="input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="input-group input-group-vertical mb-5  ">
                                <span>Rating</span>
                                <input type="number" placeholder="5" name='rating' required className="input input-bordered" />
                            </label>
                        </div>
                    </div>
                    <div>
                        <div className="form-control">
                            <label className="input-group input-group-vertical mb-5  ">
                                <span>Photo URL</span>
                                <input type="url" placeholder="https://i.ibb.co/xYpJdWw/download.jpg" required name='url' className="input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="input-group input-group-vertical mb-5  ">
                                <span>Email</span>
                                <input type="text" placeholder="nike@football.com" required name='email' defaultValue={user.email} className="input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="input-group input-group-vertical mb-5  ">
                                <span>Price</span>
                                <input type="number" placeholder="1500$" name='price' required className="input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="input-group input-group-vertical mb-5  ">
                                <span>Quantity</span>
                                <input type="number" placeholder="5" name='quantity' required className="input input-bordered" />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="form-control  ">
                    <label className="input-group input-group-vertical mb-5  ">
                        <span>Description</span>
                        <input type="text" placeholder="FOOTBALL LIKE NEVER BEFORE" name='description' required className="input input-bordered" />
                    </label>
                </div>
                <input className='btn btn-outline btn-secondary sm:btn-sm md:btn-md lg:btn-lg' type="submit" value="Add Toy" />
            </form>
        </div>
    );
};

export default AddToys;