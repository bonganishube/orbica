import { fetchAllProducts } from "@/utils/actions";
import React from "react";
import ProductsGrid from "./ProductsGrid";

async function ProductsContainer({ search }: { search: string }) {
  const products = await fetchAllProducts( {search} );
  const totalProducts = products.length;
  const searchTerm = search ? `&search=${search}` : "";
  return (
    <section>
      <div className="flex justify-between items-center">
        <h4 className="font-medium text-lg">
          {totalProducts} product{totalProducts > 1 && "s"}
        </h4>
      </div>
      <div>
        {totalProducts === 0 ? (
          <h5 className='text-2xl mt-16'>
            Sorry, no products matched your search...
          </h5>
        ) : <ProductsGrid products={products} />
      }
      </div>
    </section>
  );
}

export default ProductsContainer;
