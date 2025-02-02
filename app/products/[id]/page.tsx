import React from "react";

import Image from "next/image";
import { formatCurrency } from "@/utils/format";
import AddToCart from "@/components/single-product/AddToCart";
import BreadCrumbs from "@/components/single-product/BreadCrumbs";
import ProductRating from "@/components/single-product/ProductRating";
import FavoriteToggleButton from "@/components/products/FavoriteToggleButton";
import ShareButton from "@/components/single-product/ShareButton";
import ProductReviews from "@/components/reviews/ProductReviews";
import SubmitReview from "@/components/reviews/SubmitReview";
import { fetchSingleProduct, findExistingReview } from "@/utils/actions";
import { auth } from "@clerk/nextjs/server";

async function SingleProductPage({ params }: { params: { id: string } }) {
  const product = await fetchSingleProduct(params.id);
  const { name, image, description, price } = product;
  const amount = formatCurrency(price);
  const { userId } = auth();
  const reviewDoesNotExist =
    userId && !(await findExistingReview(userId, product.id));

  return (
    <section>
      <BreadCrumbs name={product.name} />
      <div className="ezy__epoverview1 light py-14 md:py-24  text-zinc-900 dark:text-white relative overflow-hidden z-10">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2 md:col-span-1 relative">
              <div className="absolute rounded-lg bg-blue-50 bottom-12 w-[5000px] h-[5000px] right-[40%]"></div>

              <div className="relative">
                <div className="text-center mb-4 md:p-6">
                  <Image
                    src={image}
                    width={1280}
                    height={1280}
                    alt=""
                    className="max-w-full h-auto"
                  />
                </div>

                <ul className="flex">
                  <a href="#!">
                    <li className="w-24 h-24 inline-flex justify-center items-center bg-blue-50  border-blue-200 dark:border-blue-600 dark:border-opacity-20 rounded-lg mr-2.5 p-2">
                      <img src={image} alt="" className="max-w-full h-auto" />
                    </li>
                  </a>
                  <a href="#!">
                    <li className="w-24 h-24 inline-flex justify-center items-center bg-blue-50  border-blue-200 dark:border-blue-600 dark:border-opacity-20 rounded-lg mr-2.5 p-2">
                      <img src={image} alt="" className="max-w-full h-auto" />
                    </li>
                  </a>
                  <a href="#!">
                    <li className="w-24 h-24 inline-flex justify-center items-center bg-blue-50  border-blue-200 dark:border-blue-600 dark:border-opacity-20 rounded-lg mr-2.5 p-2">
                      <img src={image} alt="" className="max-w-full h-auto" />
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
                  <ProductRating productId={params.id} />
                </p>
                <h3 className="text-2xl text-primary font-medium">R{price}</h3>
              </div>

              <div className="flex items-center my-7 gap-x-2">
                <AddToCart productId={params.id} />
                <FavoriteToggleButton productId={params.id} />
                <ShareButton name={product.name} productId={params.id} />
              </div>

              <p className="opacity-70 lg:mr-56 xl:mr-80">{description}</p>
            </div>
          </div>
          <ProductReviews productId={params.id} />
          {reviewDoesNotExist && <SubmitReview productId={params.id} />}
        </div>
      </div>
    </section>
  );
}

export default SingleProductPage;
