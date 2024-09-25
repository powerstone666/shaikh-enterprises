import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { orange } from '@mui/material/colors';
import { useState, useEffect } from "react";
import { Link as ScrollLink } from 'react-scroll';

function Navbar() {
   
    // Retrieve the saved section from localStorage, defaulting to 'home'
    const [selected, setSelected] = useState(localStorage.getItem('selectedSection') || 'home');
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    // Save selected section to localStorage
    const handleSetActive = (section) => {
        setSelected(section);
        localStorage.setItem('selectedSection', section);
    };

    // Load the saved selected section when the component mounts
    useEffect(() => {
        const savedSection = localStorage.getItem('selectedSection');
        if (savedSection) {
            setSelected(savedSection);
        }
    }, []);

    return (
        <>
         
            <nav className="w-full fixed bg-white h-20 border-b-4 border-gray-100 flex justify-between items-center z-50">
                <div className="flex items-center">
                    <div>
                        <img
                            src="https://cdn-icons-gif.flaticon.com/15547/15547248.gif"
                            className="w-16"
                            alt="Logo"
                        />
                    </div>
                    <h1 className="text-md lg:text-2xl font-bold text-black">
                        <span className="text-orange-600">SHAIK </span> ENTERPRISES
                    </h1>
                </div>
                <div>
                    <ul className="md:flex md:items-center md:space-x-4 md:gap-8 md:visible hidden text-center">
                        <li>
                            <ScrollLink
                                to="home"
                                smooth={true}
                                duration={500}
                                className={`md:text-2xl font-bold cursor-pointer ${selected === "home" ? "text-orange-600" : "text-gray-700 hover:text-orange-600"}`}
                                onClick={() => handleSetActive("home")}
                            >
                                HOME
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink
                                to="about"
                                smooth={true}
                                duration={500}
                                className={`md:text-2xl font-bold cursor-pointer ${selected === "about" ? "text-orange-600" : "text-gray-700 hover:text-orange-600"}`}
                                onClick={() => handleSetActive("about")}
                            >
                                ABOUT
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink
                                to="service"
                                smooth={true}
                                duration={500}
                                className={`md:text-2xl font-bold cursor-pointer ${selected === "service" ? "text-orange-600" : "text-gray-700 hover:text-orange-600"}`}
                                onClick={() => handleSetActive("service")}
                            >
                                SERVICE
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink
                                to="pages"
                                smooth={true}
                                duration={500}
                                className={`md:text-2xl font-bold cursor-pointer ${selected === "pages" ? "text-orange-600" : "text-gray-700 hover:text-orange-600"}`}
                                onClick={() => handleSetActive("pages")}
                            >
                                PAGES
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink
                                to="blog"
                                smooth={true}
                                duration={500}
                                className={`md:text-2xl font-bold cursor-pointer ${selected === "blog" ? "text-orange-600" : "text-gray-700 hover:text-orange-600"}`}
                                onClick={() => handleSetActive("blog")}
                            >
                                BLOG
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink
                                to="contact"
                                smooth={true}
                                duration={500}
                                className={`md:text-2xl font-bold cursor-pointer ${selected === "contact" ? "text-orange-600" : "text-gray-700 hover:text-orange-600"}`}
                                onClick={() => handleSetActive("contact")}
                            >
                                CONTACT
                            </ScrollLink>
                        </li>
                    </ul>
                    <div className="md:hidden">
                        <Button 
                            onClick={toggleDrawer(true)} 
                            className="z-10" // Lower z-index for the button
                        >
                            <MenuIcon fontSize='large' sx={{ color: orange[500] }} />
                        </Button>
                        <Drawer open={open} onClose={toggleDrawer(false)}>
                            <div className='h-full w-48 p-8 flex flex-col'>
                                <ScrollLink 
                                    to="home" 
                                    smooth={true} 
                                    duration={500} 
                                    className={`font-bold text-2xl mt-8 ${selected === "home" ? "text-orange-600" : "text-gray-700"}`}
                                    onClick={() => handleSetActive("home")}
                                >
                                    HOME
                                </ScrollLink>
                                <ScrollLink 
                                    to="about" 
                                    smooth={true} 
                                    duration={500} 
                                    className={`font-bold text-2xl mt-8 ${selected === "about" ? "text-orange-600" : "text-gray-700"}`}
                                    onClick={() => handleSetActive("about")}
                                >
                                    ABOUT
                                </ScrollLink>
                                <ScrollLink 
                                    to="service" 
                                    smooth={true} 
                                    duration={500} 
                                    className={`font-bold text-2xl mt-8 ${selected === "service" ? "text-orange-600" : "text-gray-700"}`}
                                    onClick={() => handleSetActive("service")}
                                >
                                    SERVICE
                                </ScrollLink>
                                <ScrollLink 
                                    to="pages" 
                                    smooth={true} 
                                    duration={500} 
                                    className={`font-bold text-2xl mt-8 ${selected === "pages" ? "text-orange-600" : "text-gray-700"}`}
                                    onClick={() => handleSetActive("pages")}
                                >
                                    PAGES
                                </ScrollLink>
                                <ScrollLink 
                                    to="blog" 
                                    smooth={true} 
                                    duration={500} 
                                    className={`font-bold text-2xl mt-8 ${selected === "blog" ? "text-orange-600" : "text-gray-700"}`}
                                    onClick={() => handleSetActive("blog")}
                                >
                                    BLOG
                                </ScrollLink>
                                <ScrollLink 
                                    to="contact" 
                                    smooth={true} 
                                    duration={500} 
                                    className={`font-bold text-2xl mt-8 ${selected === "contact" ? "text-orange-600" : "text-gray-700"}`}
                                    onClick={() => handleSetActive("contact")}
                                >
                                    CONTACT
                                </ScrollLink>
                            </div>
                        </Drawer>
                    </div>
                </div>
                <div></div>
            </nav>
        </>
    );
}

export default Navbar;
