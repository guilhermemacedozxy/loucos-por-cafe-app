import { Button } from "@/components/ui/button";
import { db } from "@/lib/prisma";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import ProductHeader from "./components/product-header";
import ProductDetails from "./components/product-details";

interface ProductPageProps {
  params: Promise<{welcome: string, productId: string}>;
}


const ProductPage = async ({params}: ProductPageProps) => {
  const { welcome, productId } = await params; 
  const product = await db.product.findFirst({where: { id: productId }, include: {coffeeShop: {
    select: {
      name: true,
      avatarImageUrl: true,
    }
  }}})
  if (!product) {
    return 
      notFound();
  }
  return (
    <>
      <ProductHeader product={product}/>
      <ProductDetails product={product}/>
    </>
  );
};

export default ProductPage