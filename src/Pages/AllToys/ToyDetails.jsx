import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../UseTitle/UseTitle';

const ToyDetails = () => {
    useTitle('Toy Details')
    const data = useLoaderData();
    const { photoURL, name, seller, email, price, ratings, quantity, description } = data[0];
    return (
        <div className='mt-24 p-10 justify-center '>
            <h1 className='text-3xl font-extrabold pb-4 text-center'><span className="animate-text bg-gradient-to-r ml-1 from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent  font-black">
                            Toy Details
                        </span></h1>
            <div className="card flex justify-center card-side bg-base-100 shadow-xl bg-orange-200 shadow-2xl ">
                <figure className='h-2/5 w-2/5'><img src={photoURL} alt={name} /> </figure>
                <div className="card-body items-center ">
                    <h2 className="card-title text-5xl mb-10 ">{name}</h2>
                    <div className='flex justify-between w-full text-2xl '>
                    <p className='font-bold'><span className='text-red-600 '>Price:</span> ${price}</p> 
                    <p > <span className='font-bold text-red-600'> Seller:</span> {seller}</p>
                    <p  ><span className='font-bold text-red-600'>Available Quantity:</span> <span>{quantity}</span></p>
                    </div>
                    <p className='text-xl font-bold mt-4 mb=0'> <span className='font-bold text-red-600 ' >Seller Email:</span> {email}</p>
                    <p className='pt-10 pb-10 text-blue-800 font-serif font-bold text-3xl'>{description}</p>
                    <div className="card-actions justify-end ">
                        <Link to='/'><button className="btn btn-primary">Back To home</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;