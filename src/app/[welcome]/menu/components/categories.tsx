"use client"

import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { CoffeeShop, MenuCategory, Prisma } from "@prisma/client";
import { ClockIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

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

const CoffeeCategories = ({ coffee }: CoffeeCategoriesProps) => {
    const [selectedCategory, setSelectedCategory] = useState<MenuCategory> (coffee.menuCategories[0])
    const handleCategoryClick = (category: MenuCategory) => {
      setSelectedCategory(category);
    }

    const getCategoryButtonVariant = (category: MenuCategory) => {
      return (selectedCategory.id == category.id ? "outline" : "secondary")
    }
  return (
    <div className="relative z-50 mt-[-1.5rem] rounded-t-3xl border-b border-opacity-5 border-black bg-[--secondary]">
    <div className="p-5">
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

    <ScrollArea className="w-full">
      <div className="flex w-max space-x-4 px-4 pt-0">
        {coffee.menuCategories.map(category => 
          <Button onClick={() => handleCategoryClick(category)} key={category.id} variant={getCategoryButtonVariant(category)} size="sm" className="rounded-full border border-gray-400 p-4 hover:opacity-100 hover:bg-[--primary] hover:text-[--secondary] hover:border-none">
            {category.name} 
          </Button>
        )}
       </div>
      <ScrollBar orientation="horizontal"/>
    </ScrollArea>

    </div>
    );
};

export default CoffeeCategories;