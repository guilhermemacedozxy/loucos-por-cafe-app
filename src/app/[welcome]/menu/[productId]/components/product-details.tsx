import { Prisma } from "@prisma/client";
import Image from "next/image";

interface ProductDetailsProps {
  product: Prisma.ProductGetPayload<{ include: { coffeeShop: {
    select: {
      name: true,
      avatarImageUrl: true,
    }
  } } }>;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  return (
    <div className="relative z-50 rounded-t-3xl py-5 mt-[-1.5rem]">
      <div>
        <div className="flex items-center gap-1.5 px-5">
          <div className="bg-[--primary] rounded-full">
            <Image src={product.coffeeShop.avatarImageUrl} alt={product.coffeeShop.name} width={16} height={16}/>
          </div>

          <p className="text-xs opacity-50">
            {product.coffeeShop.name}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;