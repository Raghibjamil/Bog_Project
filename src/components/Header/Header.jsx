{ /**import { Container, Logo, LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { NavLink } from "react-router-dom";


function Header() {
  const authStatus = useSelector(state => state.auth.status)
  const navigate = useNavigate();

  const navitems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
    {
      name: "Profile",
      slug: "/profile",
      active: authStatus,
    },
    // {
    //   name: "Logout",
    //   slug: "/logout",
    //   active: authStatus,
    // }
  ]

  return (
    <header className='py-4 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
       

          <div className='mr-4'>
            <Link to="/">
              <Logo width='70px' />
            </Link>
          </div>
          <ul className='hidden md:flex md:ml-auto'>
            {navitems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className='inline-block px-6 py-2 duration-200 hover:bg-blue-300 rounded-full font-semibold'
                  >{item.name}</button>
                </li>
              ) : null
              )}
              {authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              )}
          </ul>

         
        
        </nav>
      </Container>
    </header>
  )
}

export default Header */

}


import { Container, Logo, LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { NavLink } from "react-router-dom";

function Header() {
  const authStatus = useSelector(state => state.auth.status)
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navitems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active:!authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active:!authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
    {
      name: "Profile",
      slug: "/profile",
      active: authStatus,
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className='py-4 shadow bg-gray-900 text-white '>
      <Container >
        <div className='md:flex'>
        <nav className='flex items-center justify-between '>

          <div className='mr-4 ml-5 md:ml-0  '>
            <Link to="/">
              <Logo width='70px' />
            </Link>
          </div>

          {/* Hamburger Menu for mobile */}
          <button
            className="md:hidden block"
            onClick={toggleMenu}
          >
            <svg className={`w-6 h-6 ${isMenuOpen? 'hidden' : 'block'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg className={`w-6 h-6 ${isMenuOpen? 'block' : 'hidden'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          </nav>
          {/* Responsive Nav */}
          <ul className={`md:flex md:ml-auto md:space-x-4 md:border-none md:shadow-none    ${isMenuOpen? 'flex flex-col md:flex-row md:border-b md:shadow-lg md:absolute md:top-full md:left-0 md:mt-2 md:bg-gray-900 md:w-full md:z-10 mt-2 ' : 'hidden'}`}>
            {navitems.map((item) =>
              item.active? (
                <li key={item.name} className="md:ml-4 mb-2 md:mb-0"   >
                  <button
                    onClick={() => {
                      navigate(item.slug);
                    {/**  closeMenu(); */}
                    }}
                    className='inline-block px-6 py-2 md:duration-200 md:hover:bg-blue-300 rounded-full font-semibold
                     hover:text-blue-500 md:hover:text-black
                     '
                  >{item.name}</button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
          </div>
      </Container>
    </header>
  )
}

export default Header;