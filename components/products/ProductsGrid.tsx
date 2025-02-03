import React from "react";
import { Product } from "@prisma/client";
import { formatCurrency } from "@/utils/format";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import FavoriteToggleButton from "./FavoriteToggleButton";
import { Button } from "../ui/button";
import { ShoppingCart, Star } from "lucide-react";
import Container from "../global/Container";
import Rating from "../reviews/Rating";
import ProductRating from "../single-product/ProductRating";

function ProductsGrid({ products }: { products: Product[] }) {
  return (
    <section className="ezy__epgrid1 light text-zinc-900 dark:text-white relative overflow-hidden z-10">
      <Container>
        <div className="grid grid-cols-12 gap-6 text-center mt-6 md:mt-12">
          {products.map((product) => {
            const { name, price, image } = product;
            const productId = product.id;
            const Amount = formatCurrency(price);

            return (
              <div
                key={productId}
                className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3 px-2 my-2"
              >
                <Link href={`/products/${productId}`}>
                  <div className="bg-white dark:bg-muted border dark:border-none rounded-md relative p-2 h-full">
                    <div className="absolute top-2 right-2 z-20">
                      <FavoriteToggleButton productId={productId} />
                    </div>
                    <div className="bg-blue-50 rounded-xl p-4 lg:p-6">
                      <div className="min-h-[210px] flex justify-center items-center h-full px-6">
                        <Image
                          src={image}
                          alt={name}
                          height={1280}
                          width={1280}
                          className="max-h-[200px] max-w-full w-auto transform group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>
                    <div className="p-4 lg:p-6 h-full pt-2 text-start">
                      <a href="#!">
                        <h5 className="text-base leading-5 font-medium">
                          {name}
                        </h5>
                      </a>
                      <h5 className="text-primary text-base font-medium leading-none my-2">
                        R{price}
                      </h5>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-x-2 font-medium">
                          <span>
                          <ProductRating productId={product.id} />
                          </span>
                        </div>
                        <Button variant="ghost" size="icon">
                          <ShoppingCart className="text-primary fill-current hover:text-primary-foreground" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* <!-- button --> */}
        <div className="text-center mt-12">
          <Button size="lg">See All</Button>
        </div>
      </Container>
    </section>
  );
}

export default ProductsGrid;
