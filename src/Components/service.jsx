function Service() {
  return (
    <>
      <div className="h-full w-full bg-gray-100 pt-8">
        <h1 className="text-xl md:text-2xl text-center text-orange-500 font-bold">
          OUR SERVICES
        </h1>
        <br />
        <h1 className="text-2xl md:text-3xl text-center text-black font-bold">
          WE PROVIDE EXCEPTIONAL PRODUCTS AND SERVICES
        </h1>
        <div className="h-full w-full pt-8 flex md:justify-center space-x-8 overflow-x-auto md:overflow-x-hidden pb-8 pr-8 pl-8">
          <div className="bg-white h-96 w-72 flex-shrink-0">
            <div className="flex justify-center pt-4 pb-4">
              <img src="https://cdn-icons-png.flaticon.com/128/4219/4219714.png" />
            </div>
            <h1 className="text-black text-center font-bold text-xl">
              Fashion and Home Essentials
            </h1>
            <h1 className="text-black text-center font-semibold p-4">
              Stylish Footwear
              <br />
              <br />
              Trendy Clothing
              <br />
              <br />
              Home Utensils & Kitchenware
            </h1>
          </div>
          <div className="bg-white h-96 w-72 flex-shrink-0">
          <div className="flex justify-center pt-4 pb-4">
              <img src="https://t4.ftcdn.net/jpg/06/66/86/45/240_F_666864538_T5xbezrt8jaaqABEhlydfrRCcT9AefQU.jpg" className="w-32" />
            </div>
            <h1 className="text-black text-center font-bold text-xl">
            Interior Design Solutions
            </h1>
            <h1 className="text-black text-center font-semibold p-4">
            Home Décor Essentials
              <br />
              <br />
              Furniture & Accessories
              <br />
              <br />
              Organizational Products
            </h1>
          </div>
          <div className="bg-white h-96 w-72 flex-shrink-0">
          <div className="flex justify-center pt-4 pb-4">
              <img src="https://t3.ftcdn.net/jpg/06/17/10/48/240_F_617104804_kIuHk6jZo4xIr4AfgH7DCP9NXfgh8hL8.jpg " className="w-32" />
            </div>
            <h1 className="text-black text-center font-bold text-xl">
            Smart Design for Modern Living
            </h1>
            <h1 className="text-black text-center font-semibold p-4">
            Space-Saving Furniture
              <br />
              <br />
              Innovative Storage Solutions
              <br />
              <br />
              Eco-friendly Home Products
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
export default Service;
