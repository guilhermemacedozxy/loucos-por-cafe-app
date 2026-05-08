"use client";

import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/helpers/format-currency";
import { Prisma } from "@prisma/client";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ProductDetailsProps {
  product: Prisma.ProductGetPayload<{ include: { coffeeShop: {
    select: {
      name: true,
      avatarImageUrl: true,
    }
  } } }>;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [quantity, setQuantity] = useState<number>(1);
  const handleDecreaseQuantity = () => {
    setQuantity((prev) => {
      if (prev === 1) {
        return 1;
      }
      return prev - 1;
    })
  };
  const handleIncreaseQuantity = () => {
    setQuantity(prev => prev + 1)
  };
  return (
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
      <div className="flex items-center gap-3 text-center">
        <Button variant="destructive" className="h-8 w-8 rounded-xl" onClick={handleDecreaseQuantity}>
          <ChevronLeftIcon/>
        </Button>

        <p className="w-4">{quantity}</p>

        <Button variant="outline" className="h-8 w-8 rounded-xl" onClick={handleIncreaseQuantity}>
          <ChevronRightIcon/>
        </Button>
      </div>
      </div>
      </div>
      
      <div className="mt-6 space-y-3">
        <h4 className="font-semibold">Sobre</h4>
        <p className="text-[#7E8392]">{product.description}</p>
      </div>
    </div>
  )
}

export default ProductDetails;