import ProductsContainer from "@/components/products/ProductsContainer";
import React from "react";

async function ProductsPage({
  searchParams,
}: {
  searchParams: {search?: string }
}) {
  const search = searchParams.search || '';

  return (
    <ProductsContainer search={search}/>
  );
}

export default ProductsPage;
