/* eslint-disable react-hooks/rules-of-hooks */
'use client'
// import Card from '@/components/card/Card'
// import Filter from '@/components/filter/Filter'
// import Footer from '@/components/footer/Footer'
import Loading from '@/components/Loading';
// import Search from '@/components/search/Search'
import logo from '../../assets/logo.png'
// import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { PersonsCard } from '@/components/PersonsCard';
import { Header } from './Header';
import Filter from '@/components/filter/Filter';

// const Pagination = dynamic(() => import('@/components/pagination/Pagination'), {
//   ssr: false
// })

const page = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const [status, setStatus] = useState('')
  const [gender, setGender] = useState('')
  const [species, setSpecies] = useState('')
  const [loading, setLoading] = useState(true)
  const [fetchedData, setFetchedData] = useState({
    info: { pages: 0, count: '' },
    results: []
  })
  const [search, setSearch] = useState('')
  const { info, results } = fetchedData

  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`

  useEffect(() => {
    setLoading(true)
    fetch(api)
      .then(res => res.json())
      .then(data => {
        setFetchedData(data)
        setLoading(false)
      })
  }, [api])

  return (
    <div className="bg-gray-100">
      <Header
        setStatus={setStatus}
        setGender={setGender}
        setSpecies={setSpecies}
        setPageNumber={setPageNumber}
        setSearch={setSearch}
      />
      <div className="flex flex-col gap-[1rem]">
        <div className="bg-[#F3F4F6] rounded-lg p-[1rem] grid gap-[2rem]">
          {loading ? (
            <div className="m-auto">
              <Loading />
            </div>
          ) : (
            <PersonsCard results={results} />
          )}
        </div>
        {/* <Pagination
                info={info}
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
              /> */}
      </div>
    </div>
  )
}

export default page
