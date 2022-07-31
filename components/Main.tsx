import { useSession } from "next-auth/react"
import { ChevronDownIcon as DownIcon } from '@heroicons/react/outline'
import { useEffect, useState } from "react"
import { shuffle } from 'lodash'


const colors = [
    "from-green-500",
    "from-orange-500",
    "from-blue-500",
    "from-gray-500",
    "from-purple-500",
    "from-red-500",
]

export default () => {
    const [color, setColor] = useState<any>()
    useEffect(() => {
        setColor(shuffle(colors).pop())
    } ,[])
    const { data } = useSession()
  return (
<div className='flex-grow '>
    <header className="top-5 right-8 absolute">
        <div className={`flex items-center text-white ${color} space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2`}>
            <img src={data?.user?.image!} alt="" className="rounded-full w-10 h-10" />
            <h2 className="">{data?.user?.name}</h2>
            <DownIcon className="h-5 w-5" />
        </div>
    </header>
    <section className={`flex items-end space-x-7 w-full bg-gradient-to-b to-black ${color} text-white p-8`} >
        <h1>Hello</h1>
    </section>
</div>
)}