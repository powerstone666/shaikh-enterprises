import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { orange } from '@mui/material/colors';
import { useState } from "react";

function Navbar() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

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
                    <h1 className="text-md  lg:text-2xl font-bold text-black">
                        <span className="text-orange-600">SHAIKH </span> ENTERPRISES
                    </h1>
                </div>
                <div>
                    <ul className="md:flex md:items-center md:space-x-4 md:gap-8 md:visible hidden">
                        <li>
                            <a href="#" className="md:text-2xl font-bold text-gray-700 hover:text-orange-600">HOME</a>
                        </li>
                        <li>
                            <a href="#" className="md:text-2xl font-bold text-gray-700 hover:text-orange-600">ABOUT</a>
                        </li>
                        <li>
                            <a href="#" className="md:text-2xl font-bold text-gray-700 hover:text-orange-600">SERVICE</a>
                        </li>
                        <li>
                            <a href="#" className="md:text-2xl font-bold text-gray-700 hover:text-orange-600 pr-8">PAGES</a>
                        </li>
                        <li>
                            <a href="#" className="md:text-2xl font-bold text-gray-700 hover:text-orange-600 pr-8">BLOG</a>
                        </li>
                        <li>
                            <a href="#" className="md:text-2xl font-bold text-gray-700 hover:text-orange-600 pr-8">CONTACT</a>
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
                            <div className='h-full w-48 p-8'>
                                <h1 className='font-bold text-2xl mt-8'>HOME</h1>
                                <h1 className='font-bold text-2xl mt-8'>ABOUT</h1>
                                <h1 className='font-bold text-2xl mt-8'>SERVICE</h1>
                                <h1 className='font-bold text-2xl mt-8'>PAGES</h1>
                                <h1 className='font-bold text-2xl mt-8'>BLOG</h1>
                                <h1 className='font-bold text-2xl mt-8'>CONTACT</h1>
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
