import { Button } from "@/components/ui/button";
import { db } from "@/lib/prisma";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import CoffeeShopHeader from "./components/header";
import CoffeeCategories from "./components/categories";

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
      <CoffeeShopHeader coffee={coffee}/>
      <CoffeeCategories coffee={coffee}/>
    </div>
  );
}

export default CoffeeShopMenuPage;