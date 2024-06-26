import { Link } from 'react-router-dom';
import { useState } from 'react';   

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={`bg-white w-full flex flex-col items-end justify-end`}>
            {/* Hamburger Menu Icon for Mobile */}
            <div className="flex justify-between items-center p-4 md:hidden">
                <span className="text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    &#9776; {/* Hamburger Icon */}
                </span>
            </div>
            
            {/* Apply conditional rendering for mobile view */}
            <ul className={`${isOpen ? 'flex' : 'hidden'} w-full md:flex flex-col md:flex-row`}>
                <li className='px-4 py-3 bg-secondary text-white font-bold hover:text-primary cursor-pointer'>
                    <Link to="/">Home</Link>
                </li>
                <li className='px-4 py-3 bg-secondary text-white font-bold hover:text-primary cursor-pointer'>
                    <Link to="/about-us">About Us</Link>
                </li>
                <li className='px-4 py-3 bg-secondary text-white font-bold hover:text-primary cursor-pointer'>
                    <Link to="/contact">Contact Us</Link>
                </li>
                <li className='px-4 py-3 bg-secondary text-white font-bold hover:text-primary cursor-pointer'>
                    <Link to="/booking">Booking</Link>
                </li>
            </ul>
        </nav>
    );
}