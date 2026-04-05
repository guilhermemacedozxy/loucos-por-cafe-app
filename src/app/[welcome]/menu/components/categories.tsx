import { CoffeeShop } from "@prisma/client";
import Image from "next/image";

interface CoffeeCategoriesProps {
  coffee: CoffeeShop;
}

const CoffeeCategories = ({ coffee }: CoffeeCategoriesProps) => {
  return (
    <div className="relative z-50 mt-[-1.5rem] rounded-t-3xl border-b border-opacity-5 border-black bg-[--secondary]">
      <div className="flex items-center gap-3 p-5">
        <div className="bg-[--primary] w-11 h-11 rounded-xl flex items-center">
          <Image src={coffee.avatarImageUrl} alt={coffee.name} width={65} height={65}/>
        </div>
        <div>
          <h2 className="font-semibold text-lg">{coffee.name}</h2>
          <p className="text-xs opacity-55">{coffee.description}</p>
        </div>
      </div>
    </div>
  );
}

export default CoffeeCategories;