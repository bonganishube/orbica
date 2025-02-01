import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

function Hero() {
  return (
    <section className="pt-24  bg-tertiary text-white relative z-10 rounded-2xl">
      <div>
        <svg
          className="absolute left-0 top-0 -z-10"
          width="168"
          height="213"
          viewBox="0 0 168 213"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="62"
            cy="106.602"
            r="106"
            fill="#DAF3F3"
            fill-opacity="0.14"
          />
        </svg>
        <svg
          className="absolute right-0 bottom-0 -z-10"
          width="385"
          height="539"
          viewBox="0 0 385 539"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M56 538.602C81.3333 435.923 192.8 230.774 436 231.604"
            stroke="white"
            stroke-opacity="0.7"
            stroke-width="2"
          />
          <path
            d="M45 492.602C70.3333 389.923 181.8 184.774 425 185.604"
            stroke="white"
            stroke-opacity="0.7"
            stroke-width="2"
          />
          <path
            d="M34 446.602C59.3333 343.923 170.8 138.774 414 139.604"
            stroke="white"
            stroke-opacity="0.7"
            stroke-width="2"
          />
          <path
            d="M23 400.602C48.3333 297.923 159.8 92.7743 403 93.6041"
            stroke="white"
            stroke-opacity="0.7"
            stroke-width="2"
          />
          <path
            d="M12 354.602C37.3333 251.923 148.8 46.7743 392 47.6041"
            stroke="white"
            stroke-opacity="0.7"
            stroke-width="2"
          />
          <path
            d="M1 308.602C26.3333 205.923 137.8 0.774349 381 1.60407"
            stroke="white"
            stroke-opacity="0.7"
            stroke-width="2"
          />
        </svg>
        <div className="px-4 mx-auto relative">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-6 pe-xl-5 text-center lg:text-start">
              <div className="flex flex-col justify-center h-full">
                <h2 className="text-3xl font-bold md:text-[70px] leading-none mb-6">
                  Building a Better life with Packing.
                </h2>
                <p className="text-[22px] leading-normal opacity-80">
                  Sed ut in perspiciatis unde omnis iste natus error sit tatem
                  doloremque laudantium.
                </p>
                <div>
                  <Button
                    asChild
                    size="lg"
                    className="my-4"
                  >
                    <Link href="/products">
                      Our Products
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 text-center lg:text-start">
              <img
                src="https://cdn.easyfrontend.com/pictures/hero/hero-12.png"
                alt=""
                className="rounded max-w-full h-auto mt-4 mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
