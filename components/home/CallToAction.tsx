import React from "react";
import { Button } from "../ui/button";

function CallToAction() {
  return (
    <section className="ezy__epother3 light py-14 md:py-24  text-black relative overflow-hidden z-10">
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
              <h1 className="text-3xl md:text-[40px] font-bold leading-tight text-primary">
                Accessories
              </h1>
              <p className="text-2xl md:text-3xl leading-none font-semibold mt-2 mb-6">
                Up to 60% off
              </p>
              <Button size="lg" className="mb-12 bg-white text-primary font-bold">Shop Now</Button>
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
              <h1 className="text-3xl md:text-[40px] font-bold leading-tight text-primary">
                Accessories
              </h1>
              <p className="text-2xl md:text-3xl leading-none font-semibold mt-2 mb-6">
                Up to 60% off
              </p>
              <Button size="lg" className="mb-12 bg-white text-primary font-bold">Shop Now</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
