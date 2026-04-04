"use client";

import { Button } from "@/components/ui/button";
import { CoffeeShop } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface CoffeeShopHeaderProps {
  coffee: Pick<CoffeeShop, "name" | "coverImageUrl">
}

const CoffeeShopHeader = ({coffee}: CoffeeShopHeaderProps) => {
  const router = useRouter();
  const goBack = () => router.back()
  return (
      <div className="relative h-[250px] w-full">
        <Button variant="secondary" size="icon" className="absolute left-4 top-4 z-50 rounded-full bg-[--secondary] border-none" onClick={goBack}>
          <ChevronLeftIcon />
        </Button>

          <Image src={coffee.coverImageUrl} alt={coffee.name} fill className="object-cover"/>

        <Button variant="secondary" size="icon" className="absolute right-4 top-4 z-50 rounded-full bg-[--secondary] border-none">
          <ScrollTextIcon />
        </Button>
      </div>
  );
}

export default CoffeeShopHeader;