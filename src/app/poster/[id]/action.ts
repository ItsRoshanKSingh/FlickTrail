"use server";

import { createCart, getCart } from "@/lib/db/cart";
import { prisma } from "@/lib/db/prisma";
import { revalidatePath } from "next/cache";

export default async function incrementProductQuantity(postertId: string) {
  const cart = (await getCart()) ?? (await createCart());

  const posterInCart = cart.items.find((item) => item.postertId === postertId);

  if (posterInCart) {
    await prisma.cartItem.update({
      where: { id: posterInCart.id },
      data: { quantity: { increment: 1 } },
    });
  } else {
    await prisma.cartItem.create({
      data: {
        cartId: cart.id,
        postertId,
        quantity: 1,
      },
    });
  }
  revalidatePath("/poster/[id]", "page");
}
