import React from 'react'
import Link from 'next/link'
import RemBtn from './RemBtn'
import { HiPencilAlt } from 'react-icons/hi'

const Lists = () => {
  return (
    <div className='p-4 border border-slate-300 my-3 flex 
    justify-between gap-5 items-start'>
      <div>
        <h2 className='font-bold text-2xl'>Title</h2>
        <div className=''>Description</div>
      </div>
      <div className='flex gap-2'>
        <RemBtn/>
        <Link href={'/ediList/12345'}>
          <HiPencilAlt size={24}/>
        </Link>
        </div>
    </div>
  )
}

export default Lists
