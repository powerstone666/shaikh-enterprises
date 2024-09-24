function Pages() {
    return (
      <>
        <div className="bg-white text-black h-full w-full p-4 md:p-8" id="pages">
          <div className="h-full w-full flex flex-col md:flex-row">
            {/* Left section */}
            <div className="md:h-full md:w-1/2 w-full mb-8 md:mb-0">
              <h1 className="text-orange-500 text-lg md:text-2xl font-bold">WHY CHOOSE US</h1>
              <br />
              <h1 className="text-black text-xl md:text-3xl font-bold pl-0 md:pl-2">
                DELIVERING A WIDE RANGE OF HIGH-QUALITY PRODUCTS
              </h1>
              <br />
              <p className="text-black text-sm md:text-xl pl-0 md:pl-2">
                At Shaikh Enterprises, we prioritize providing you with the best in every category, ensuring both style and functionality. 
                We understand that the products you choose evoke emotions and reflect your personal taste, which is why we focus on quality and customer satisfaction.
              </p>
              {/* First feature */}
              <div className="flex pt-8 md:pt-12">
                <div className="mr-4 md:mr-8 w-12 h-12">
                  <img src="https://cdn-icons-png.flaticon.com/128/5253/5253968.png" alt="Feature Icon" />
                </div>
                <div>
                  <h1 className="text-orange-500 text-lg md:text-2xl font-bold">High-Quality Materials</h1>
                  <br />
                  <p className="text-black text-sm md:text-xl pl-0 md:pl-2">
                    Our products are crafted with high-quality materials to ensure durability and a superior experience.
                  </p>
                </div>
              </div>
              {/* Second feature */}
              <div className="flex pt-8 md:pt-12">
                <div className="mr-4 md:mr-8 w-12 h-12">
                  <img src="https://cdn-icons-png.flaticon.com/128/5253/5253968.png" alt="Feature Icon" />
                </div>
                <div>
                  <h1 className="text-orange-500 text-lg md:text-2xl font-bold">Trusted Standards</h1>
                  <br />
                  <p className="text-black text-sm md:text-xl pl-0 md:pl-2">
                    We adhere to industry standards and best practices, guaranteeing reliability and satisfaction with every purchase.
                  </p>
                </div>
              </div>
            </div>
  
            {/* Right section */}
            <div className="md:w-1/2 w-full flex justify-center">
              <img
                src="https://www.creativefabrica.com/wp-content/uploads/2023/08/10/4k-Banner-For-Ecommerce-Products-And-Gadgets-76600027-1.png"
                alt="Banner"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Pages;
  