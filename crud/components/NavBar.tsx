import Link from 'next/link';

export default function NavBar(){
    return(
        <nav className='flex justify-between items-center bg-[#004E98] px-8 py-3 rounded-md'>
            <Link className='text-[#F5F5F5] font-semibold text-base' href={'/'}>toCode.</Link>
            <Link className='bg-[#F2F2F2] text-[#004E98] text-base font-semibold p-2 rounded-md' href={'/addList'}>New List</Link>
        </nav>
    )
} 