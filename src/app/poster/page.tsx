import { prisma } from "@/lib/db/prisma";
import Image from "next/image";

export default async function Poster() {
  const posters = await prisma.poster.findMany({
    orderBy: { id: "desc" },
  });

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">posters</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {posters.map((poster) => (
            <a key={poster.id} href={"/poster/" + poster.id} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <Image
                  src={poster.imageUrl}
                  alt={poster.description}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                  width={500}
                  height={600}
                ></Image>
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{poster.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {poster.price}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
