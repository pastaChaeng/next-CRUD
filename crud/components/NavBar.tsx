import Link from 'next/link';


export default function NavBar(){
    return(
        <nav className='flex justify-between items-center bg-slate-800 px-8 py-3'>
            <Link className='text-white font-semibold' href={'/'}>AJCoding.</Link>
            <Link className='bg-white font-semibold p-2' href={'/addTopic'}>Add List</Link>
        </nav>
    )
} 