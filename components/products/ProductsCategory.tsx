import React from "react";
import { Button } from "../ui/button";

const Categories = [
  {
    image: "https://cdn.easyfrontend.com/pictures/ecommerce/headphone.png",
    name: "Headphones",
  },
  {
    image: "https://cdn.easyfrontend.com/pictures/ecommerce/product4.png",
    name: "School Bag",
  },
  {
    image: "https://cdn.easyfrontend.com/pictures/ecommerce/product19.png",
    name: "Furniture",
  },
  {
    image: "https://cdn.easyfrontend.com/pictures/ecommerce/product11.png",
    name: "Water Bottle",
  },
  {
    image: "https://cdn.easyfrontend.com/pictures/ecommerce/product14.png",
    name: "Watch",
  },
  {
    image: "https://cdn.easyfrontend.com/pictures/ecommerce/product9.png",
    name: "Perfume",
  },
];

function ProductsCategory() {
  return (
    <section className="ezy__epcategory1 light py-14 md:py-24 text-zinc-900 dark:text-white relative overflow-hidden z-10">
      <div className="container px-4 mx-auto">
        <h2 className="text-2xl leading-none md:text-[40px] font-bold">
          Product Category
        </h2>

        <div className="grid grid-cols-12 mt-6 md:mt-12">
          {Categories.map((item) => (
            <div
              key={item.name}
              className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2 p-1"
            >
              <a href="">
                <div className="rounded-xl bg-white dark:bg-muted border dark:border-none p-2">
                  <div className="h-40 w-auto rounded-xl bg-blue-50 flex justify-center items-center py-4">
                    <img
                      src={item.image}
                      alt="..."
                      className="max-w-full max-h-full w-auto"
                    />
                  </div>
                  <div className="p-4 lg:p-6">
                    <h5 className="font-medium text-lg leading-tight m-0">
                      {item.name}
                    </h5>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* <!-- button --> */}
        <div className="text-center mt-12">
          <Button size="lg">See All</Button>
        </div>
      </div>
    </section>
  );
}

export default ProductsCategory;
