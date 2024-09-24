import { motion } from "framer-motion";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}
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

  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
      rows: 2,
      cols: 2,
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Coffee",
      cols: 2,
    },
    {
      img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
      title: "Hats",
      cols: 2,
    },
    {
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      title: "Honey",
      author: "@arwinneil",
      rows: 2,
      cols: 2,
    },
    {
      img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
      title: "Basketball",
    },
    {
      img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
      title: "Fern",
    },
    {
      img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
      title: "Mushrooms",
      rows: 2,
      cols: 2,
    },
    {
      img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
      title: "Tomato basil",
    },
    {
      img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
      title: "Sea star",
    },
    {
      img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
      title: "Bike",
      cols: 2,
    },
  ];
  return (
    <>
      <div className="bg-black h-full w-full ">
        <div className="flex flex-col md:flex-row md:justify-between text-center">
          <div className="w-full md:w-1/2 h-auto mt-12 px-4">
            <h1 className="text-4xl text-orange-500">OUR PRODUCTS</h1>
            <br />
            <h1 className="text-2xl lg:text-4xl mb-4">
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
          <div className="flex space-x-12 lg:justify-center">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="h-96 w-72 flex-shrink-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-3/4">
                  <img
                    src={feature.img}
                    className="w-full h-full object-cover"
                    alt={feature.title}
                  />
                </div>
                <div className="h-auto">
                  <h1 className="text-orange-500 font-bold text-xl text-center p-4">
                    {feature.title}
                  </h1>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="h-full w-full bg-white md:flex md:justify-between pb-4 ">
        <motion.div
      initial={{ opacity: 0, y: 50 }}  // Starts off invisible and below the viewport
      animate={{ opacity: 1, y: 0 }}   // Fades in and moves into place
      transition={{ duration: 1 }}     // Duration of animation
      className="md:h-full md:w-1/2 w-full h-1/2 text-black "
    >
      <motion.h1
        className="text-orange-500 font-bold text-2xl md:text-3xl text-center pt-4 md:pb-4 "
        initial={{ opacity: 0, x: -100 }}  // Starts off to the left
        animate={{ opacity: 1, x: 0 }}     // Moves to position
        transition={{ duration: 0.8 }}
      >
        ABOUT US
      </motion.h1>

      <br />

      <motion.h1
        className="text-black font-bold text-xl md:text-2xl text-center"
        initial={{ opacity: 0, y: -50 }}  // Starts off above the viewport
        animate={{ opacity: 1, y: 0 }}    // Moves into place
        transition={{ duration: 0.8 }}
      >
        ELEVATING YOUR STYLE AND HOME
      </motion.h1>

      <br />

      <motion.h1
        className="text-black font-bold text-md md:text-xl text-center"
        initial={{ opacity: 0, y: 50 }}  // Starts off below the viewport
        animate={{ opacity: 1, y: 0 }}   // Moves into place
        transition={{ duration: 0.8 }}
      >
        At Shaikh Enterprises, we believe in transforming homes and<br />
        enhancing lifestyles with carefully curated products. From stylish<br />
        shoes and trendy clothing to essential home utensils, each item we<br />
        offer is designed to elevate your everyday experience.
      </motion.h1>

      <br /><br />

      <motion.h1
        className="text-orange-500 font-bold text-xl md:text-2xl text-center"
        initial={{ opacity: 0, y: 50 }}  // Starts off below the viewport
        animate={{ opacity: 1, y: 0 }}   // Moves into place
        transition={{ duration: 0.8 }}
      >
        Our dedication to quality ensures that you always get the best,<br />
        whether it's through our home essentials or fashion selections.
      </motion.h1>

      <br />

      <motion.ol
        className="list-disc text-center font-bold text-md md:text-xl"
        initial={{ opacity: 0, scale: 0.9 }}  // Starts slightly smaller and invisible
        animate={{ opacity: 1, scale: 1 }}    // Grows and fades into view
        transition={{ duration: 1 }}
      >
        <li>1.Quality Products</li>
        <li>2.Stylish Designs</li>
        <li>3.Exceptional Value</li>
        <li>4.Seamless Shopping Experience</li>
      </motion.ol>
    </motion.div>
          <div className="md:h-full md:w-1/2 w-full h-1/2">
            <div className="md:p-4 md:flex md:justify-center pb-12 mt-12 overflow-y-hidden scrollbar-hide">
              <ImageList
                sx={{ width: 500, height: 450 }}
                variant="quilted"
                cols={4}
                rowHeight={121}
              >
                {itemData.map((item) => (
                  <ImageListItem
                    key={item.img}
                    cols={item.cols || 1}
                    rows={item.rows || 1}
                  >
                    <img
                      {...srcset(item.img, 121, item.rows, item.cols)}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
