import { db } from "@/lib/prisma";
import Image from "next/image";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: Promise<{welcome: string, productId: string}>;
}


const ProductPage = async ({params}: ProductPageProps) => {
  const { welcome, productId } = await params; 
  const product = await db.product.findFirst({where: { id: productId }})
  if (!product) {
    return 
      notFound();
  }
  return (
    <>
    <div className="relative w-full h-[300px]">
      <Image src={product.imageUrl} alt={product.name} fill className="object-contain" />
    </div>
      <h1>Product Page</h1>
      {welcome}
      {productId}
    </>
  );
};

export default ProductPage