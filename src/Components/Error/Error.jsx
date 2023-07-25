import React from 'react';
import { FaSadTear } from 'react-icons/fa';
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
    const {error, status} = useRouteError();
    return (
        <>
        <div className="flex justify-center items-center h-screen bg-orange-300">
          <div id="error-page">
            <h1 className="lg:text-6xl font-bold text-2xl text-black">Oops!</h1>
            <p className="text-xl text-black">
              Sorry, an unexpected error has occurred.
            </p>
            <p className="text-3xl text-black">
              {error.statusText || error.message}
            </p>
            <div className="mt-4">
              <Link
                to="/"
                className="px-5 py-2 "
              >
                <button className='btn btn-neutral'>Home</button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
};

export default Error;