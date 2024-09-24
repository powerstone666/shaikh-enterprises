import { motion, useScroll } from "framer-motion";
import Navbar from "./Navbar/navbar";
import Body from "./body";

function App() {
  // Hook to get scroll progress
  const { scrollYProgress } = useScroll();

  return (
    <>
      {/* Top animated scroll progress bar */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-1 z-50 bg-orange-600 origin-left"
      />
      
      {/* Navbar and Body Components */}
      <Navbar />
      <Body />
    </>
  );
}

export default App;
