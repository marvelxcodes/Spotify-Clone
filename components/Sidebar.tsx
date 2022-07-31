import type {NextPage} from 'next'
import {
    HomeIcon,
    SearchIcon,
    LibraryIcon,
    PlusCircleIcon,
    RssIcon,
    HeartIcon
} from '@heroicons/react/outline'
import { ReactNode, useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import useSpotify from '../Hooks/useSpotify'

const Sidebar : NextPage = ({}) => {
    const { data } = useSession()
    const [playlists, setPlaylists] = useState<object[]>([])
    const Spotify = useSpotify()

    useEffect(() => {
        if(Spotify.getAccessToken()) {
            Spotify.getUserPlaylists({limit: 10}).then((data) => {
                setPlaylists(data.body.items)
                console.log(data.body.items)
            })
        }
    }, [data, Spotify])
    console.log(playlists)
    const IconProps = {
        className: 'h-7 md:h-5 aspect-square'
    }
    return(
<div className='text-gray-500 scroll-none overflow-y-scroll md:p-5 font-medium h-screen justify-center w-20 md:w-64 text-sm border-r border-gray-900'>
    <div className='space-y-4 cursor-pointer pt-24 md:pt-5 w-full flex flex-col justify-center'>
        <h1 className='hidden md:flex w-full  font-bold'>{data?.user?.name}</h1>
        <hr className='border-t-[0.1px] border-gray-800 m-3' />
        <Menu name='Home'>
            <HomeIcon {...IconProps} />
        </Menu>
        <Menu name='Search'>
            <SearchIcon {...IconProps} />
        </Menu>
        <Menu name='Your Library'>
            <LibraryIcon {...IconProps} />
        </Menu>
        <hr className='border-t-[0.1px] border-gray-800 m-3' />
        <Menu name='Create Playlist'>
            <PlusCircleIcon {...IconProps} />
        </Menu>
        <Menu name='Liked Song'>
            <HeartIcon {...IconProps} />
        </Menu>
        <Menu name='Your Episodes'>
            <RssIcon {...IconProps} />
        </Menu>
        <hr className='border-t-[0.1px] border-gray-800 m-3' />
        <Playlists playlists={playlists} />
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
<button className='flex transition-colors justify-center md:justify-start overflow-x-hidden items-center space-x-2 hover:text-white '>
    {children}
    <p className='hidden md:flex'>{name}</p>
</button>
)}

type PlaylistsProps = {
    playlists: object[]
}

type PlaylistProps = {
    playlist: {

    }
    index: number
}

const Playlists = ({playlists}:PlaylistsProps) => {
  return (
<div>
    {playlists?.map((playlist:any, index) => (
        <p className='' key={playlist.id}>{playlist.name}</p>
    ))}
</div>
)}
