interface ProductPageProps {
  params: Promise<{slug: string, productId: string}>;
}


const ProductPage = ({params}: ProductPageProps) => {
  return (
    <h1>Product Page</h1>
  );
}

export default ProductPage