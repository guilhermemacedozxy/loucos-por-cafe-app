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
    </div>
  )
}

export default CoffeeShopInitialPage;