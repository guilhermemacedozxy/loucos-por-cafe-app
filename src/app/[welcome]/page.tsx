import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getCoffeeShopBySlug } from "@/data/get-coffeshop-by-slug";
import Image from "next/image";
import { notFound } from "next/navigation";
import ConsumptionMethodOption from "./components/consumption-method-option";

interface CoffeeShopInitialPageProps {
  params: Promise<{welcome: string}>
}

const CoffeeShopInitialPage = async ({params}: CoffeeShopInitialPageProps) => {
  const {welcome} = await params;

  const coffee = await getCoffeeShopBySlug(welcome)

  if(!coffee) {
    return notFound()
  }

  return (
    <div className="bg-[--primary] bg-[url(/bg.png)] bg-cover h-screen flex flex-col items-center justify-center px-6 pt-24">
      <div className="flex flex-col items-center gap-2">
        <Image src={coffee?.avatarImageUrl} alt={coffee.name} width={98} height={90} />
      </div>
      <div className="pt-24 text-center space-y-2">
        <h3 className="text-2xl font-semibold text-[--secondary]">
          Seja bem-vindo!
        </h3>
        <p className="opacity-55 text-[--secondary]">
          Escolha o modo para aproveitar sua refeição. Estamos aqui para oferecer praticidade e sabor com super conforto!
        </p>
      </div>
      <div className="pt-24 grid grid-cols-2 gap-6">
        <ConsumptionMethodOption
          option="DINE_IN"
          buttonText="Para comer aqui"
          imageAlt="Comer aqui"
          imageUrl="/dine_in.png"
        />

        <ConsumptionMethodOption
          option="TAKEAWAY"
          buttonText="Para levar"
          imageAlt="Para levar"
          imageUrl="/takeaway.png"
        />
      </div>
    </div>
  )
}

export default CoffeeShopInitialPage;