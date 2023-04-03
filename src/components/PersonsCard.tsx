import { PersonsContext } from "@/contexts/Persons";
import Image from "next/image";
import { useContext } from "react";

export function PersonsCard({ results }: any) {
  const { persons } = useContext(PersonsContext);

  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
        <div
          className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {results.map((person: any) => (
            <a key={person.id} href={person.url} className="group overflow-hidden rounded-lg bg-white">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-8 xl:aspect-h-8">
                <Image
                  src={person.image}
                  alt={person.name}
                  width={500}
                  height={500}
                  className="object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-xl pl-2 text-gray-700">{person.name}</h3>
              {person.status === "Alive" ? (
                <div className="flex mt-1 text-lg pl-2 font-medium ">
                  <div className="flex items-center gap-[.5rem]">
                    <div className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75" />
                    <div className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                    <div className="text-gray-800">{person.status}</div>
                  </div>
                </div>
              ) : person.status === "Dead" ? (
                <div className="flex mt-1 text-lg pl-2 font-medium">
                  <div className="flex items-center gap-[.5rem]">
                    <div className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-400 opacity-75" />
                    <div className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
                    <div className="text-gray-800">{person.status}</div>
                  </div>
                </div>
              )
                : (
                  <div className="flex mt-1 text-lg pl-2 font-medium">
                    <div className="flex items-center gap-[.5rem]">
                      <div className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-gray-400 opacity-75" />
                      <div className="relative inline-flex rounded-full h-3 w-3 bg-gray-500" />
                      <div className="text-gray-800">{person.status}</div>
                    </div>
                  </div>
                )
              }
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
