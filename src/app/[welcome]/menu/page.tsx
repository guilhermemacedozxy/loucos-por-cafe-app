interface CoffeeShopMenuPageProps {
  params: Promise<{welcome: string}>;
}


const CoffeeShopMenuPage = async ({params}: CoffeeShopMenuPageProps) => {
  const {welcome} = await params
  return ( <h1>MENU DE CATEGORIAS PAGINA PRINCIPAL DA NOSSA CAFETERIA {welcome}</h1>);
}

export default CoffeeShopMenuPage;