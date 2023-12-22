import { prisma } from "@/lib/db/prisma";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { cache } from "react";
import AddToCartButton from "./AddToCartButton";
import incrementProductQuantity from "./action";

interface posterPageProps {
  params: {
    id: string;
  };
}

const getposter = cache(async (id: string) => {
  const poster = await prisma.poster.findUnique({ where: { id } });
  if (!poster) notFound();
  return poster;
});

export async function generateMetadata({
  params: { id },
}: posterPageProps): Promise<Metadata> {
  const poster = await getposter(id);

  return {
    title: poster.name + " - Flowmazon",
    description: poster.description,
    openGraph: {
      images: [{ url: poster.imageUrl }],
    },
  };
}

export default async function posterPage({ params: { id } }: posterPageProps) {
  const poster = await getposter(id);

  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center m-6">
      <Image
        src={poster.imageUrl}
        alt={poster.name}
        width={500}
        height={500}
        className="rounded-lg"
        priority
      />

      <div>
        <h1 className="text-5xl font-bold">{poster.name}</h1>
        <span className="badge mt-4">$ {poster.price}</span>
        <p className="py-6">{poster.description}</p>
        <AddToCartButton
          posterId={poster.id}
          incrementProductQuantity={incrementProductQuantity}
        />
      </div>
    </div>
  );
}
