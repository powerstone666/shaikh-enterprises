import { motion } from "framer-motion";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import { yellow } from '@mui/material/colors';
function Home() {
  return (
   <>
  <div  className="h-screen w-full bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('https://img.freepik.com/free-photo/top-view-shopping-cart-arrangement-copy-space_23-2148663144.jpg?t=st=1727107896~exp=1727111496~hmac=9eb205851db9d761ae47de15a6883f88d96822fc02c8278a52e897a0988e6a88&w=1380')" }}>
         <div>
         <div>
  
  <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-center pt-64 md:text-4xl">
    Discover | Shop
  </h1>
  
  <motion.h1
    className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center pt-8 md:text-3xl "
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    Explore a wide range of carefully selected products on our eCommerce platform. <br />
    We prioritize quality, innovation, and value, working closely with suppliers <br />
    to bring you the best in design and functionality. <br />
    Our focus is on delivering a seamless and enjoyable shopping experience, <br />
    from browsing to delivery.
  </motion.h1>

</div>
<div className="flex justify-center pt-10">
  <button className="relative inline-flex items-center justify-center px-6 py-3 text-xl font-bold text-white transition-all duration-300 ease-in-out rounded-md bg-orange-600 shadow-lg transform hover:scale-110 hover:bg-orange-500 hover:shadow-xl z-10">
    <span className="relative">GET STARTED</span>
  </button>
</div>



         <motion.h1
  className="hidden md:flex md:text-white text-center mt-10 justify-center space-x-8"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  <div>
    <ShoppingCartOutlinedIcon fontSize="large" color="primary" />
    <h1>Fast</h1>
  </div>
  <div>
    <SecurityOutlinedIcon fontSize="large" color="success" />
    <h1>Secure</h1>
  </div>
  <div>
    <CreditCardOutlinedIcon fontSize="large" sx={{ color: yellow[500] }} />
    <h1>Safe</h1>
  </div>
</motion.h1>

         </div>
    </div>
   </>
  );
}
export default Home;