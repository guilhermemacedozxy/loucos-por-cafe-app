interface ProductPageProps {
  params: Promise<{welcome: string, productId: string}>;
}


const ProductPage = async ({params}: ProductPageProps) => {
  const { welcome, productId } = await params; 
  return (
    <>
      <h1>Product Page</h1>
      {welcome}
      {productId}
    </>
  );
};

export default ProductPage