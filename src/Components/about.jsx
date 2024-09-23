import { motion } from 'framer-motion';
function About() {
    const features = [
        {
          img: "https://images-na.ssl-images-amazon.com/images/I/51FRah0sxHL.jpg",
          title: "Home Utensils",
        },
        {
          img: "https://www.kolpaper.com/wp-content/uploads/2021/01/4K-Sneakers-Wallpaper.jpg",
          title: "Shoes Collection",
        },
        {
          img: "https://i.pinimg.com/736x/8b/49/32/8b49326b596ed5e9463e92e4e6adfdba.jpg",
          title: "Fashion Collection",
        },
        {
          img: "https://images5.alphacoders.com/914/thumb-1920-914561.jpg",
          title: "Home Furniture",
        },
      ];
  return (
    <>
      <div className="bg-black h-screen w-full ">
        <div className="flex flex-col md:flex-row md:justify-between text-center">
          <div className="w-full md:w-1/2 h-auto mt-12 px-4">
            <h1 className="text-4xl text-orange-500">OUR FEATURES</h1>
            <br />
            <h1 className="text-2xl md:text-4xl mb-4">
              Shop the Finest Selection of Shoes, Clothing,
              <br /> and Home Essentials
            </h1>
          </div>
          <div className="w-full md:w-1/2 h-auto md:p-12 ">
            <img
              src="https://images4.alphacoders.com/108/1085299.jpg"
              className="md:w-3/4 w-full h-auto"
              alt="Features"
            />
          </div>
        </div>
        <div className="overflow-x-auto mt-20 md:mt-0">
      <div className="flex space-x-12 md:justify-center">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="h-96 w-72 flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="h-3/4">
              <img src={feature.img} className="w-full h-full object-cover" alt={feature.title} />
            </div>
            <div className="h-auto">
              <h1 className="text-orange-500 font-bold text-xl text-center p-4">{feature.title}</h1>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
      </div>
    </>
  );
}
export default About;
