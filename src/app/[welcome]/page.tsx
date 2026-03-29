import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getCoffeeShopBySlug } from "@/data/get-coffeshop-by-slug";
import Image from "next/image";
import { notFound } from "next/navigation";

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
    <div className="bg-[--primary] h-screen flex flex-col items-center justify-center px-6 pt-24">
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
        <Card>
          <CardContent className="flex flex-col items-center gap-8 py-8 bg-white rounded-2xl">
            <Image src="/dine_in.png" width={111} height={116} alt="Para comer aqui"/>
            <Button variant="secondary" className="rounded-sm bg-[--primary] text-[--secondary]">
              Para comer aqui
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-col items-center gap-8 py-8 bg-white rounded-2xl">
            <Image src="/takeaway.png" width={111} height={116} alt="Para levar"/>
            <Button variant="secondary" className="rounded-sm bg-[--primary] text-[--secondary]">
              Para levar
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default CoffeeShopInitialPage;