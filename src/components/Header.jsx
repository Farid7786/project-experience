import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header  style={{ backgroundColor: '#120B0C' }} className='shadow-md '>
        <div className='flex justify-between mx-auto p-3  max-w-6xl items-center'>
            <Link to='/'>
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                <span style={{color:'#FFFEFE'}}>PrimePropertyHub </span>
                <span className='text-slate-500'>Estate</span>
            </h1>
            </Link>
            <form className='bg-slate-100 p-3 flex rounded-lg items-center'> 
                <input type="text" placeholder='Search...' className='bg-transparent focus:outline-none w:24 sm:w-64' />
                <FaSearch className='text-slate-600'/>
            </form>
            <ul className=' flex gap-4'>
                <Link to='/'>
                <li style={{color:"#FFFEFE"}} className='hidden sm:inline hover:underline'>Home</li>
                </Link>
                <Link to='/about'>
                <li style={{color:"#FFFEFE"}} className='hidden sm:inline hover:underline'>About</li>
                </Link>
                <Link to='/sign-in'>
                <li style={{color:"#FFFEFE"}} className=' hover:underline'>Sign in</li>
                </Link>
            </ul>
        </div>
    </header>
  )
}

export default Header
