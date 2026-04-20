import { Button } from "@/components/ui/button";
import { Product } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";

interface ProductHeaderProps {
  product: Pick<Product, "name" | "imageUrl">
}

const ProductHeader = ({product}: ProductHeaderProps) => {
  return (
        <div className="relative w-full h-[300px]">

      <Button variant="secondary" size="icon" className="absolute left-4 top-4 z-50 rounded-full bg-[--secondary] border-none">
        <ChevronLeftIcon />
      </Button>

      <Button variant="secondary" size="icon" className="absolute right-4 top-4 z-50 rounded-full bg-[--secondary] border-none">
        <ScrollTextIcon />
      </Button>

      <Image src={product.imageUrl} alt={product.name} fill className="object-contain" />
    </div>
  );
}

export default ProductHeader;