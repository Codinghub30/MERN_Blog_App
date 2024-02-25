import { Button, Navbar, NavbarLink, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import {AiOutlineSearch} from 'react-icons/ai'
import {FaMoon} from 'react-icons/fa'

export default function Header() {
    const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2">
        <Link to="/" className='self center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">Anup</span>
            Blog
        </Link>
        <form>
            <TextInput type="text" placeholder="Search..." rightIcon={AiOutlineSearch}
            className="hidden lg:inline" />
        </form>
        <button className="w-10 h-10 lg:hidden" color="gray" pill>
            <AiOutlineSearch/>
        </button>
        <div className="flex gap-2 md:order-2">
            <Button className="w-12  h-10 hidden sm:inline" color="gray" pill>
                <FaMoon/>
            </Button>
            <Link to='/signin'>
            <button class="relative inline-flex items-center justify-center p-2 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800" outline>Sign In </button>
            </Link>
            <Navbar.Toggle />
            
        </div>
        <Navbar.Collapse>
                <Navbar.Link active={path ==='/'} as={'div'}>
                    <Link to='/'>
                        Home
                    </Link>
                </Navbar.Link>
              
                <Navbar.Link active={path ==='/about'} as={'div'}>
                    <Link to='/about'>
                        About
                    </Link>
                </Navbar.Link>

                <Navbar.Link active={path ==='/projects' } as={'div'}>
                    <Link to='/project'>
                        Project
                    </Link>
                </Navbar.Link>
            </Navbar.Collapse>
 
    </Navbar>
  )
}
