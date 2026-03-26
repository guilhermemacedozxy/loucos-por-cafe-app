import { getCoffeeShopBySlug } from "@/data/get-coffeshop-by-slug";

interface CoffeeShopInitialPageProps {
  params: Promise<{welcome: string}>
}

const CoffeeShopInitialPage = async ({params}: CoffeeShopInitialPageProps) => {
  const {welcome} = await params;

  const coffee = await getCoffeeShopBySlug(welcome)

  return (
    <h1>{coffee?.name}</h1>
  )
}

export default CoffeeShopInitialPage;