import type {NextPage} from 'next'
import Sidebar from '../components/Sidebar'
import Main from '../components/Main'

const Home : NextPage = ({}) => {
    return(
<div className='bg-black h-screen overflow-hidden'>
    <Sidebar />
    <Main />
</div>
)}

export default Home