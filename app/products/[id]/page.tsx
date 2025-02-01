import React from "react";

import { fetchSingleProduct } from "@/utils/actions";
import Image from "next/image";
import { formatCurrency } from "@/utils/format";
import AddToCart from "@/components/single-product/AddToCart";

import BreadCrumbs from "@/components/single-product/BreadCrumbs";
import ProductRating from "@/components/single-product/ProductRating";
import FavoriteToggleButton from "@/components/products/FavoriteToggleButton";

async function SingleProductPage({ params }: { params: { id: string } }) {
  const product = await fetchSingleProduct(params.id);
  const { name, image, description, price } = product;
  const amount = formatCurrency(price);
  return (
    <section>
      <BreadCrumbs name={product.name} />
      <div className="ezy__epoverview1 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2 md:col-span-1 relative">
              <div className="absolute rounded-lg bg-blue-50 dark:bg-slate-800 bottom-12 w-[5000px] h-[5000px] right-[40%]"></div>

              <div className="relative">
                <div className="text-center mb-4 md:p-6">
                  <img
                    src={image}
                    alt=""
                    className="max-w-full h-auto"
                  />
                </div>

                <ul className="flex">
                  <a href="#!">
                    <li className="w-24 h-24 inline-flex justify-center items-center bg-blue-50 dark:bg-slate-800 border border-blue-200 dark:border-blue-600 dark:border-opacity-20 rounded-lg mr-2.5 p-2">
                      <img
                        src={image}
                        alt=""
                        className="max-w-full h-auto"
                      />
                    </li>
                  </a>
                  <a href="#!">
                    <li className="w-24 h-24 inline-flex justify-center items-center bg-blue-50 dark:bg-slate-800 border border-blue-200 dark:border-blue-600 dark:border-opacity-20 rounded-lg mr-2.5 p-2">
                      <img
                        src={image}
                        alt=""
                        className="max-w-full h-auto"
                      />
                    </li>
                  </a>
                  <a href="#!">
                    <li className="w-24 h-24 inline-flex justify-center items-center bg-blue-50 dark:bg-slate-800 border border-blue-200 dark:border-blue-600 dark:border-opacity-20 rounded-lg mr-2.5 p-2">
                      <img
                        src={image}
                        alt=""
                        className="max-w-full h-auto"
                      />
                    </li>
                  </a>
                </ul>
              </div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="mb-6 lg:mb-12">
                <h1 className="text-2xl leading-none md:text-4xl font-medium mb-4">
                  Large Lazy Inflatable Flocking Sofa
                </h1>
                <p className="opacity-70 mb-6">
                  <ProductRating productId={params.id}/>
                </p>
                <h3 className="text-2xl text-primary font-medium">
                  R{price}
                </h3>
              </div>

              <form action="#!">
                {/* <!-- color --> */}
                <div className="mb-6">
                  <h5 className="font-medium mb-2">Color</h5>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <input type="radio" className="absolute hidden" checked />
                    <label className="bg-gray-200 dark:bg-slate-700 py-1 px-4 rounded-full border border-blue-600 dark:border-blue-600 text-sm cursor-pointer mt-1">
                      Multi
                    </label>

                    <input type="radio" className="absolute hidden" />
                    <label className="bg-gray-100 dark:bg-slate-800 py-1 px-4 rounded-full border border-blue-50 dark:border-blue-600 dark:border-opacity-20 text-sm cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-700 mt-1">
                      Red
                    </label>

                    <input type="radio" className="absolute hidden" />
                    <label className="bg-gray-100 dark:bg-slate-800 py-1 px-4 rounded-full border border-blue-50 dark:border-blue-600 dark:border-opacity-20 text-sm cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-700 mt-1">
                      Blue
                    </label>

                    <input type="radio" className="absolute hidden" />
                    <label className="bg-gray-100 dark:bg-slate-800 py-1 px-4 rounded-full border border-blue-50 dark:border-blue-600 dark:border-opacity-20 text-sm cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-700 mt-1">
                      Green
                    </label>

                    <input type="radio" className="absolute hidden" />
                    <label className="bg-gray-100 dark:bg-slate-800 py-1 px-4 rounded-full border border-blue-50 dark:border-blue-600 dark:border-opacity-20 text-sm cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-700 mt-1">
                      Black
                    </label>
                  </div>
                </div>

                {/* <!-- size --> */}
                <div className="mb-6">
                  <h5 className="font-medium mb-2">
                    Size: <span className="opacity-50">Extra Extra Small</span>
                  </h5>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <input type="radio" className="absolute hidden" checked />
                    <label className="bg-gray-200 dark:bg-slate-700 py-1 px-4 rounded-full border border-blue-600 dark:border-blue-600 text-sm cursor-pointer mt-1">
                      XXS
                    </label>

                    <input type="radio" className="absolute hidden" />
                    <label className="bg-gray-100 dark:bg-slate-800 py-1 px-4 rounded-full border border-blue-50 dark:border-blue-600 dark:border-opacity-20 text-sm cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-700 mt-1">
                      XS
                    </label>

                    <input type="radio" className="absolute hidden" />
                    <label className="bg-gray-100 dark:bg-slate-800 py-1 px-4 rounded-full border border-blue-50 dark:border-blue-600 dark:border-opacity-20 text-sm cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-700 mt-1">
                      S
                    </label>

                    <input type="radio" className="absolute hidden" />
                    <label className="bg-gray-100 dark:bg-slate-800 py-1 px-4 rounded-full border border-blue-50 dark:border-blue-600 dark:border-opacity-20 text-sm cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-700 mt-1">
                      M
                    </label>

                    <input type="radio" className="absolute hidden" />
                    <label className="bg-gray-100 dark:bg-slate-800 py-1 px-4 rounded-full border border-blue-50 dark:border-blue-600 dark:border-opacity-20 text-sm cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-700 mt-1">
                      L
                    </label>
                    <input type="radio" className="absolute hidden" />
                    <label className="bg-gray-100 dark:bg-slate-800 py-1 px-4 rounded-full border border-blue-50 dark:border-blue-600 dark:border-opacity-20 text-sm cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-700 mt-1">
                      XL
                    </label>
                    <input type="radio" className="absolute hidden" />
                    <label className="bg-gray-100 dark:bg-slate-800 py-1 px-4 rounded-full border border-blue-50 dark:border-blue-600 dark:border-opacity-20 text-sm cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-700 mt-1">
                      XXL
                    </label>
                    <input type="radio" className="absolute hidden" />
                    <label className="bg-gray-100 dark:bg-slate-800 line-through opacity-40 py-1 px-4 rounded-full border border-blue-50 dark:border-blue-600 dark:border-opacity-20 text-sm mt-1">
                      XXXL
                    </label>
                  </div>
                </div>

                {/* <!-- quantity --> */}
                <div className="mb-6">
                  <h5 className="font-medium mb-2">QTY</h5>
                  <div className="h-11 border dark:border-slate-700 rounded-full flex w-36 relative mt-4 overflow-hidden">
                    <button
                      className="w-full pb-1 inline-flex justify-center items-center text-2xl font-medium border-r dark:border-slate-700 text-blue-600 hover:bg-blue-600 hover:bg-opacity-20"
                      type="button"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      className="text-lg font-bold px-4 pl-5 py-1 inline-flex justify-center max-w-[60px] text-center bg-transparent focus:outline-none"
                      value="2"
                    />
                    <button
                      className="w-full pb-1 inline-flex justify-center items-center text-2xl font-medium border-l dark:border-slate-700 text-blue-600 hover:bg-blue-600 hover:bg-opacity-10"
                      type="button"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex items-center my-7 gap-x-2">
                  <AddToCart productId={params.id}/>
                  <FavoriteToggleButton productId={params.id} />
                  <button className="hover:bg-blue-600 rounded hover:bg-opacity-10 text-blue-600 px-3 py-2">
                    <i className="fas fa-share-alt mr-1 text-sm"></i> Share
                  </button>
                </div>

                <p className="opacity-70 lg:mr-56 xl:mr-80">
                  {description}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleProductPage;
