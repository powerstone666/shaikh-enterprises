import brand from '../assets/promo.mp4'
function Blog() {
  return (
    <>
    <div className="h-full bg-black pt-12" id="blog">
      <h1 className="text-orange-500 text-center text-3xl font-bold">
        <span className="border-b-8 border-white">OUR</span>
        <span className="border-b-8 border-orange-500 text-white">PARTNERS</span>
      </h1>

      <div className="w-full flex overflow-x-auto md:overflow-x-hidden p-4 space-x-4 logoo md:pl-8">
        {[
          "https://dezignlane.com/wp-content/uploads/2023/06/Dezign-Lane-1.png",
          "https://dezignlane.com/wp-content/uploads/2023/06/Dezign-Lane-3.png",
          "https://dezignlane.com/wp-content/uploads/2023/06/Dezign-Lane-2.png",
          "https://dezignlane.com/wp-content/uploads/2023/06/Dezign-Lane-5.png",
          "https://dezignlane.com/wp-content/uploads/2023/06/Dezign-Lane-6.png",
          "https://dezignlane.com/wp-content/uploads/2023/06/Dezign-Lane-7.png",
          "https://dezignlane.com/wp-content/uploads/2023/06/Dezign-Lane-8.png",
        ].map((src) => (
          <img
            key={src}
            src={src}
            alt="Image"
            className="w-auto h-32 md:h-40 object-cover"
          />
        ))}
      </div>

      <style>
        {`
          .logoo img {
            animation: hideShow 7s infinite; /* Base animation */
          }

          .logoo img:nth-child(1) { animation-delay: 3s; }
          .logoo img:nth-child(2) { animation-delay: 2s; }
          .logoo img:nth-child(3) { animation-delay: 4s; }
          .logoo img:nth-child(4) { animation-delay: 6s; }
          .logoo img:nth-child(5) { animation-delay: 8s; }
          .logoo img:nth-child(6) { animation-delay: 10s; }
          .logoo img:nth-child(7) { animation-delay: 12s; }

          @keyframes hideShow {
            0% {
              opacity: 1; /* Fully visible */
            }
            50% {
              opacity: 0.5; /* Semi-transparent */
            }
            100% {
              opacity: 1; /* Back to fully visible */
            }
          }
        `}
      </style>

      <div className="w-full h-full">
        <video 
          src={brand} 
          controls 
          className="w-full h-auto"
          style={{ maxHeight: '400px' }} // Set a maximum height to reduce space usage
        />
      </div>
    </div>
  </>
  );
}
export default Blog;