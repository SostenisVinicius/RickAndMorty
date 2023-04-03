import { Filters } from "@/components/filter";
import Loading from "@/components/Loading";
import { FilterProps } from "@/types/types";
import Image from "next/image";
import { useState } from "react";
import Logo from "../../assets/logo.png";

export function Header({
  setPageNumber,
  setStatus,
  setGender,
  setSpecies,
  setSearch,
}: FilterProps) {

  if (!setPageNumber || !setStatus || !setGender || !setSpecies || !setSearch) {
    return <Loading />
  }

  return (
    <div className="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-6 flex-col flex items-center justify-center">
      <Image
        src={Logo}
        alt="Rick and Morty Logo"
        width={300}
        height={300}
        className="m-auto"
      />
      <div className="flex items-center justify-center w-6/12">
        <input
          onChange={e => {
            setPageNumber(1)
            setSearch(e.target.value)
          }}
          placeholder="Pesquisar"
          type="text"
          name="search"
          autoComplete="off"
          className="bg-white border border-gray-300 focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 rounded-md"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#323232"
          className="w-6 h-6 -ml-8 mr-16">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <Filters
          setStatus={setStatus}
          setGender={setGender}
          setSpecies={setSpecies}
          setPageNumber={setPageNumber}
        />
      </div>
    </div>
  )
}