import { db } from "@/lib/prisma";
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
  const coffee = await db.coffeeShop.findMany({where: { slug: welcome }});
  return ( <h1>MENU DE CATEGORIAS PAGINA PRINCIPAL DA NOSSA CAFETERIA {welcome}</h1>);
}

export default CoffeeShopMenuPage;