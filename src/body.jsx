import About from "./Components/about";
import Blog from "./Components/blog";
import Contact from "./Components/contact";
import Footer from "./Components/footer";
import Home from "./Components/home";
import Pages from "./Components/pages";
import Service from "./Components/service";
import { motion, useScroll } from "framer-motion";
function Body() {
  const { scrollYProgress } = useScroll();
  return (
   <>
    <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-1 z-50 bg-orange-600 origin-left"
      />
   <Home/>
   <About/>
   <Service/>
   <Pages/>
   <Blog/>
   <Contact/>
   <Footer/>
   </>
  );
}
export default Body;