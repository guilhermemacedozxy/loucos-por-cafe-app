import { CoffeeShop, Prisma } from "@prisma/client";
import { ClockIcon } from "lucide-react";
import Image from "next/image";

interface CoffeeCategoriesProps {
  coffee: Prisma.CoffeeShopGetPayload<{
    include: {
      menuCategories: {
        include: {
          products: true
        };
      };
    };
  }>;
};

const CoffeeCategories = ({ coffee }: CoffeeCategoriesProps) => (
  <div className="relative z-50 mt-[-1.5rem] rounded-t-3xl border-b border-opacity-5 border-black bg-[--secondary] p-5">
    <div className="flex items-center gap-3">
      <div className="bg-[--primary] w-11 h-11 rounded-xl flex items-center">
        <Image src={coffee.avatarImageUrl} alt={coffee.name} width={65} height={65} />
      </div>
      <div>
        <h2 className="font-semibold text-lg">{coffee.name}</h2>
        <p className="text-xs opacity-55">{coffee.description}</p>
      </div>
    </div>
    <div className="flex items-center gap-1 text-xs text-[--primary] mt-3">
      <ClockIcon size={12} />
      <p>Aberto | 07:00 ás 22:00</p>
    </div>
  </div>
)

export default CoffeeCategories;