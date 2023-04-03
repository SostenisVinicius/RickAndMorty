import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Status from './category/Status'
import { FilterProps } from '@/types/types'
import { genders, species, status } from '@/constants/constants'
import Filterbtn from './Filterbtn'
import Loading from '../Loading'

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export function Filters({
  setPageNumber,
  setStatus,
  setGender,
  setSpecies }: FilterProps) {

  if (!setStatus || !setGender || !setSpecies || !setPageNumber) {
    return (
      <Loading />
    )
  }

  let clear = () => {
    if (setPageNumber) {
      if (setStatus) {
        setStatus('')
        setPageNumber(1)
      }
      if (setGender) {
        setGender('')
        setPageNumber(1)
      }
      if (setSpecies) {
        setSpecies('')
        setPageNumber(1)
      }
    }
    window.location.reload()
  }

  const [statusFilter, setStatusFilter] = useState(false);
  const [genderFilter, setGenderFilter] = useState(false);
  const [speciesFilter, setSpeciesFilter] = useState(false);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full h-12 justify-center items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Filtros
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
          </svg>

        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1 px-4 pt-3">
            <Menu.Item>
              {({ active }) => (
                <div onClick={clear} className={classNames(
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'flex justify-between items-center px-4 py-2 mb-1 text-sm rounded-md border border-gray-300 hover:bg-gray-50'
                )}>
                  Limpar filtros
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>

                </div>
              )}
            </Menu.Item>
          </div>
          <div className="py-1 px-4">
            <h1 className="text-lg pb-1 font-semibold text-gray-900">Status</h1>
            {status.map((item, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <button onClick={() => { setStatus(item); setStatusFilter(true) }} className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    classNames(statusFilter && item ? 'bg-green-600 text-white' : 'text-gray-700',),
                    'block px-4 py-2 mb-1 text-sm rounded-md border border-gray-300 hover:bg-gray-50'
                  )}
                  >
                    {item}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
          <div className="py-1 px-4">
            <h1 className="text-lg pb-1 font-semibold text-gray-900">Espécie</h1>
            {species.map((item, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <button onClick={() => { setSpecies(item); setSpeciesFilter(true) }} className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    classNames(speciesFilter && item ? 'bg-green-600 text-white' : 'text-gray-700',),
                    'block px-4 py-2 mb-1 text-sm rounded-md border border-gray-300 hover:bg-gray-50'
                  )}
                  >
                    {item}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
          <div className="py-1 px-4">
            <h1 className="text-lg pb-1 font-semibold text-gray-900">Genêro</h1>
            {genders.map((item, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <button key={item} onClick={() => { setGender(item); setGenderFilter(true) }} className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    classNames(genderFilter && item ? 'bg-green-600 text-white' : 'text-gray-700',),
                    'block px-4 py-2 mb-1 text-sm rounded-md border border-gray-300 hover:bg-gray-50'
                  )}
                  >
                    {item}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
