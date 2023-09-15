import Banner from "@/components/banner/Banner";
import ProductsList from "@/components/products/ProductsList";

export default async function Home() {
  return (
    <>
      <Banner />
      <ProductsList />
    </>
  )
}