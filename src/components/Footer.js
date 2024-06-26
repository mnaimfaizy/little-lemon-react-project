import logo from './../assets/Logo.svg';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* First Column */}
                <div>
                    <img src={logo} alt="Little Lemon" className="h-16 mb-2" />
                    <h2 className="text-2xl font-bold">Little Lemon</h2>
                </div>
                {/* Second Column */}
                <div>
                    <h3 className="font-semibold text-xl mb-2">Links</h3>
                    <ul>
                        <li><a href="/" className="hover:text-gray-300">Home</a></li>
                        <li><a href="/booking" className="hover:text-gray-300">Booking</a></li>
                        <li><a href="/about" className="hover:text-gray-300">About Us</a></li>
                        <li><a href="/contact" className="hover:text-gray-300">Contact Us</a></li>
                    </ul>
                </div>
                {/* Third Column */}
                <div>
                    <h3 className="font-semibold text-xl mb-2">Contact Us</h3>
                    <p>123 Lemon Lane</p>
                    <p>City, State, 12345</p>
                    <p>email@example.com</p>
                    <p>(123) 456-7890</p>
                </div>
                {/* Fourth Column */}
                <div>
                    <h3 className="font-semibold text-xl mb-2">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-gray-300">Facebook</a>
                        <a href="#" className="hover:text-gray-300">Twitter</a>
                        <a href="#" className="hover:text-gray-300">Instagram</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}