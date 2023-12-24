import { Cart, Prisma } from "@prisma/client";
import { prisma } from "./prisma";
import { cookies } from "next/headers";

export type CartWithPoster = Prisma.CartGetPayload<{
  include: { items: { include: { poster: true } } };
}>;

export type CartItemWithPoster = Prisma.CartItemGetPayload<{
  include: { poster: true };
}>;

export type ShoppingCart = CartWithPoster & {
  size: number;
  subtotal: number;
};

export async function createCart(): Promise<ShoppingCart> {
  const newCart = await prisma.cart.create({
    data: {},
  });

  //   FIXME: Add Encryption and Secure Setting in Production
  cookies().set("localCartId", newCart.id);

  return {
    ...newCart,
    items: [],
    size: 0,
    subtotal: 0,
  };
}

export async function getCart(): Promise<ShoppingCart | null> {
  const localCartId = cookies().get("localCartId")?.value;

  const cart = localCartId
    ? await prisma.cart.findUnique({
        where: { id: localCartId },
        include: { items: { include: { poster: true } } },
      })
    : null;

  if (!cart) {
    return null;
  }

  return {
    ...cart,
    size: cart.items.reduce((acc, item) => acc + item.quantity, 0),
    subtotal: cart.items.reduce(
      (acc, item) => acc + item.quantity * item.poster.price,
      0
    ),
  };
}
