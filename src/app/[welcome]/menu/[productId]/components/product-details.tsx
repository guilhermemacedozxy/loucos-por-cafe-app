import { formatCurrency } from "@/helpers/format-currency";
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

const ProductDetails = ({ product }: ProductDetailsProps) => (
  <div className="relative z-50 rounded-t-3xl py-5 mt-[-1.5rem] p-5">
    <div>
      <div className="flex items-center gap-1.5">
        <div className="bg-[--primary] rounded-full">
          <Image src={product.coffeeShop.avatarImageUrl} alt={product.coffeeShop.name} width={16} height={16} />
        </div>

        <p className="text-xs opacity-50">
          {product.coffeeShop.name}
        </p>


      </div>

      <h2 className="text-xl font-semibold mt-1">{product.name}</h2>

      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">{formatCurrency(product.price)}</h3>
      </div>
    </div>
  </div>
)

export default ProductDetails;