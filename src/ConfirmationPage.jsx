import React from 'react';
import HeroSection from './components/HeroSection';
import { Link } from 'react-router-dom';

const ConfirmationPage = () => {
  return (
    <>
      <HeroSection withButton={false} />
    <div className="bg-gray-100 text-center px-4 py-16 flex justify-center items-center">
        <div className="w-[450px] p-6 bg-secondary rounded-2xl">
            <h1 className="text-white text-3xl font-semibold mt-4">Thank you for booking with us!</h1>
            <p className="text-gray-200 text-xl mt-2 mb-6">We will send you a confirmation email shortly.</p>
            <Link to="/" className="mt-4 bg-primary text-white font-bold py-2 px-6 border border-primary rounded-2xl hover:bg-blue-700 transition duration-300">
                Go to Homepage
            </Link>
        </div>
    </div>
    </>
  );
};

export default ConfirmationPage;