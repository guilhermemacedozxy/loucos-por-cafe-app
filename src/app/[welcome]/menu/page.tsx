import { Button } from "@/components/ui/button";
import { db } from "@/lib/prisma";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

interface CoffeeShopMenuPageProps {
  params: Promise<{welcome: string}>;
  searchParams: Promise<{consumptionMethod: string}>;
}

const isConsumptionMethodValid = (consumptionMethod: string) => {
  return ["DINE_IN", "TAKEAWAY"].includes(consumptionMethod.toUpperCase());
}


const CoffeeShopMenuPage = async ({params, searchParams}: CoffeeShopMenuPageProps) => {
  const {welcome} = await params
  const {consumptionMethod} = await searchParams;
  if (!isConsumptionMethodValid(consumptionMethod)) {
    return notFound();
  }
  const coffee = await db.coffeeShop.findFirst({where: { slug: welcome }});
  if(!coffee) {
    return notFound();
  }
  return ( 
    <div>
      <div className="relative h-[250px] w-full">
        <Button variant="secondary" size="icon" className="absolute left-4 top-4 z-50 rounded-full bg-[--secondary] border-none">
          <ChevronLeftIcon />
        </Button>

          <Image src={coffee.coverImageUrl} alt={coffee.name} fill className="object-cover"/>

        <Button variant="secondary" size="icon" className="absolute right-4 top-4 z-50 rounded-full bg-[--secondary] border-none">
          <ScrollTextIcon />
        </Button>
      </div>
    </div>
  );
}

export default CoffeeShopMenuPage;