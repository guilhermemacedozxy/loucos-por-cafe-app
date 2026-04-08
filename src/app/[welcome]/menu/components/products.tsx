import { Product } from "@prisma/client";

interface ProductsProps {
  products: Product[]
}

const Products = ({ products }: ProductsProps) => {
  return (
    <div></div>
  );
}

export default Products;