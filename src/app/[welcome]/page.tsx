interface CoffeeShopInitialPageProps {
  params: Promise<{welcome: string}>
}

const CoffeeShopInitialPage = async ({params}: CoffeeShopInitialPageProps) => {
  const {welcome} = await params;
  
  return (
    <h1>{welcome}</h1>
  )
}

export default CoffeeShopInitialPage;