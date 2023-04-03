/* eslint-disable no-unused-vars */
import { status } from '@/constants/constants'
import React from 'react'
import { StatusProps } from '@/types/types'
import Filterbtn from '../Filterbtn'

const Status = ({ setStatus, setPageNumber }: StatusProps) => {
  return (
    <div className="bg-[#F3F4F6] rounded-lg p-[1rem] flex gap-[.5rem]">
      <div className="flex flex-col gap-[1rem]">
        {status.map((item, index) => (
          <Filterbtn
            key={index}
            index={index}
            name="status"
            task={setStatus}
            setPageNumber={setPageNumber}
            input={item}
          />
        ))}
      </div>
    </div>
  )
}

export default Status
