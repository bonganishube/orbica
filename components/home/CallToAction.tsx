import React from "react";

function CallToAction() {
  return (
    <section className="ezy__epother3 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-black relative overflow-hidden z-10">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full lg:w-1/2">
            <div
              className="flex flex-col items-center justify-end bg-no-repeat bg-cover bg-center min-h-[400px] rounded-2xl"
              style={{
                backgroundImage:
                  "url(https://cdn.easyfrontend.com/pictures/discount1-bg.png)",
              }}
            >
              <h1 className="text-3xl md:text-[40px] font-bold leading-tight text-pink-600">
                Accessories
              </h1>
              <p className="text-2xl md:text-3xl leading-none font-medium mt-2 mb-6">
                Up to 60% off
              </p>
              <button className="py-3.5 px-9 leading-none bg-white text-pink-600 rounded-lg font-bold mb-12">
                Shop Now
              </button>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div
              className="flex flex-col items-center justify-end bg-no-repeat bg-cover bg-center min-h-[400px] rounded-2xl"
              style={{
                backgroundImage:
                  "url(https://cdn.easyfrontend.com/pictures/discount2-bg.png)",
              }}
            >
              <h1 className="text-3xl md:text-[40px] font-bold leading-tight text-pink-600">
                Accessories
              </h1>
              <p className="text-2xl md:text-3xl leading-none font-medium mt-2 mb-6">
                Up to 60% off
              </p>
              <button className="py-3.5 px-9 leading-none bg-white text-pink-600 rounded-lg font-bold mb-12">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
