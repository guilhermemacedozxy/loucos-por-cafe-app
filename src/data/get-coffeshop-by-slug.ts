import { db } from "@/lib/prisma";

export const getCoffeeShopBySlug = async (slug: string) => {
    const coffee = await db.coffeeShop.findFirst({where: {slug: slug }});
    return coffee;
}