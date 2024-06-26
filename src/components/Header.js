import { Link } from "react-router-dom";
import logo from "./../assets/Logo.svg";
import { useState } from 'react';

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="flex items-center w-full py-4 sm:px-[20%] px-10">
            <img src={logo} alt="logo" className={`${isOpen ? 'hidden' : 'block'}`} />
            <div className="flex-1 sm:justify-between sm:items-center items-end w-full">
                {/* Hamburger Menu Icon for Mobile */}
                <div className="w-full flex justify-end p-4 md:hidden">
                    <span className="text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                        &#9776; {/* Hamburger Icon */}
                    </span>
                </div>
                {/* Navigation Links */}
                <nav className={`flex-1 ${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row justify-end items-center`}>
                    <ul className="flex flex-col md:flex-row w-full justify-end">
                        <li className='px-4 py-3 font-bold cursor-pointer'>
                            <Link to="/">Home</Link>
                        </li>
                        <li className='px-4 py-3 font-bold cursor-pointer'>
                            <Link to="/about-us">About</Link>
                        </li>
                        <li className='px-4 py-3 font-bold cursor-pointer'>
                            <Link to="/menu">Menu</Link>
                        </li>
                        <li className='px-4 py-3 font-bold cursor-pointer'>
                            <Link to="/booking">Reservations</Link>
                        </li>
                        <li className='px-4 py-3 font-bold cursor-pointer'>
                            <Link to="/order">Order Online</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}