import React from 'react'
import Link from 'next/link'
import RemBtn from './RemBtn'
import { BsPencilSquare } from 'react-icons/bs'
import { BsTrash } from 'react-icons/bs'

const Lists = () => {
  return (
    <div className='p-4 border border-[#004E98] my-3 flex 
    justify-between gap-5 items-start rounded-md'>
      <div>
        <h2 className='font-bold text-2xl text-[#333333]'>Title</h2>
        <div className='text-[#333333]'>Description</div>
      </div>
      <div className='flex gap-2'>
        <RemBtn/>
        <Link className='text-[#004E98]' href={'/ediList/12345'}>
          <BsPencilSquare size={24}/>
        </Link>
        </div>
    </div>
  )
}

export default Lists
