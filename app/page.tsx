import LoadingContainer from "@/components/global/LoadingContainer";
import CallToAction from "@/components/home/CallToAction";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";
import { Suspense } from "react";

function HomPage() {
  return (
    <>
      <Hero />
      <Suspense fallback={<LoadingContainer />}>
        <FeaturedCategories />
      </Suspense>
      <Suspense fallback={<LoadingContainer />}>
        <FeaturedProducts />
      </Suspense>
      <CallToAction />
    </>
  );
}
export default HomPage;
