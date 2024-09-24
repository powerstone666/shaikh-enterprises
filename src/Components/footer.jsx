import React, { useRef } from 'react';

import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
const useScroll = () => {
    const ref = useRef(null);
    // Logic to handle scrolling...
    return ref;
};
function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-10" id="contact">
            <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Company Info */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold">SHAIKH ENTERPRISES</h2>
                    <p className="text-sm">
                        Shaikh Enterprises is dedicated to providing a wide range of quality products, from shoes and clothes to home utensils.
                        We bring your shopping vision to life with a focus on value, innovation, and exceptional customer service.
                    </p>
                </div>

                {/* Services */}
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Our Services</h2>
                    <ul className="text-sm space-y-2">
                        <li>Fashion & Apparel</li>
                        <li>Home Essentials & Decor</li>
                        <li>Furniture & Decor</li>
                        <li>Accessories & Footwear</li>
                        <li>Quality Craftsmanship</li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Contact Us</h2>
                    <p className="text-sm">No 166,4th Cross Road Arabic College Rashad Nagar bangalore Karnataka 560045</p>
                    <p className="text-sm">
                        <PhoneIcon fontSize="small" /> 
                        <a href="tel:+918296937273" className="text-blue-400 hover:underline"> +91 8296937273</a>
                    </p>
                    <p className="text-sm">
                        <EmailIcon fontSize="small" /> 
                        <a href="mailto:shaikusman8009@gmail.com" className="text-blue-400 hover:underline">shaikusman8009@gmail.com</a>
                    </p>
                    <p className="text-sm">
                        <WhatsAppIcon fontSize="small" /> 
                        <a href="https://wa.me/8296937273" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer"> WhatsApp</a>
                    </p>
                    <p className="text-sm">
                        <InstagramIcon fontSize="small" /> 
                        <a href="https://www.instagram.com/your-instagram-handle" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer"> Instagram</a>
                    </p>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-10 text-center text-sm border-t border-gray-700 pt-5">
                <p>&copy; {new Date().getFullYear()} SHAIKH ENTERPRISES. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
