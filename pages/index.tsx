import type {NextPage} from 'next'
import Sidebar from '../components/Sidebar'
import Main from '../components/Main'

const Home : NextPage = () => {
    return(
<main className='bg-black h-screen w-screen flex overflow-hidden'>
    <Sidebar />
    <Main />
</main>
)}

export default Home