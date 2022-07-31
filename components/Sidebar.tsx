import type {NextPage} from 'next'
import {
    HomeIcon,
    SearchIcon,
    LibraryIcon,
    PlusCircleIcon,
    RssIcon,
    HeartIcon
} from '@heroicons/react/outline'
import { ReactNode } from 'react'
import { useSession } from 'next-auth/react'


const Sidebar : NextPage = ({}) => {
    const { data, status } = useSession()
    console.log(data)
    return(
<div className='text-gray-500 overflow-y-scroll font-medium p-5 h-screen text-sm border-r border-gray-900'>
    <div className='space-y-4 cursor-pointer'>
        <h1 className="text-white">{data?.user?.name}</h1>
        <Menu name='Home'>
            <HomeIcon className='h-5 w-5'/>
        </Menu>
        <Menu name='Search'>
            <SearchIcon className='h-5 w-5'/>
        </Menu>
        <Menu name='Your Library'>
            <LibraryIcon className='h-5 w-5'/>
        </Menu>
        <Menu name='Create Playlist'>
            <PlusCircleIcon className='h-5 w-5'/>
        </Menu>
        <Menu name='Liked Song'>
            <HeartIcon className='h-5 w-5'/>
        </Menu>
        <Menu name='Your Episodes'>
            <RssIcon className='h-5 w-5'/>
        </Menu>
        <hr className='border-t-[0.1px] border-gray-800' />
        <p className='hover:text-white'>Playlist Name</p>
        <p className='hover:text-white'>Playlist Name</p>
        <p className='hover:text-white'>Playlist Name</p>
        <p className='hover:text-white'>Playlist Name</p>
        <p className='hover:text-white'>Playlist Name</p>
        <p className='hover:text-white'>Playlist Name</p>
        <p className='hover:text-white'>Playlist Name</p>
        <p className='hover:text-white'>Playlist Name</p>
    </div>
</div>
)}

export default Sidebar

type Menu = {
    children: ReactNode
    name: string
}

const Menu = ({children, name}:Menu) => {
    return (
<button className='flex transition-colors items-center space-x-2 hover:text-white '>
    {children}
    <p>{name}</p>
</button>
)}