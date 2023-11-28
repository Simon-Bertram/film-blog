import { useState } from "react";
import { Link } from "react-router-dom";
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return ( 
    <header>
      <div className="bg-hero-img bg-center bg-no-repeat bg-cover h-screen">{/* background image container*/} 
        <nav className="flex justify-between items-center p-6 lg:px-8" aria-label="Global">
          <Link to={'/'}>
            <div>
              <h1 className="text-6xl font-bangers drop-shadow-xl tracking-wide">FilmZilla</h1>
            </div>
          </Link>

          {/* Hamburger menu button */}
          <div className="flex lg:hidden">
            <button 
              type="button" 
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          
          <ul className="hidden lg:flex lg:gap-x-12 text-lg">
            <li className="hover:underline hover:underline-offset-8 active">
              <Link to={'/'}>Home</Link>
            </li>
            <li className="hover:underline hover:underline-offset-8">
              <Link to={'reviews'}>Reviews</Link>
            </li>
            <li className="hover:underline hover:underline-offset-8">
              <Link to={'about'}>About</Link>
            </li>
            <li className="hover:underline hover:underline-offset-8">
              <Link to={'login'} className="flex items-center">
                Login
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-2">
                  <path fillRule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z" clipRule="evenodd" />
                </svg>
              </Link>
            </li>
          </ul>

          {/* Search box */}
          <div className="hidden lg:flex">
            <form>   
              <label 
                htmlFor="default-search" 
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                </div>
                  <input 
                    type="search" 
                    id="default-search" 
                    className="block w-60 p-2 ps-10 text-sm text-cyan border border-gray-300 rounded-lg bg-transparent focus:ring-cyan focus:border-cyan dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Search..." 
                    required 
                  />
                </div>
            </form>
          </div>
        </nav>

        {/* Mobile menu, show/hide based on menu open state. */}
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          {/* Background backdrop, show/hide based on slide-over state */}
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel 
            className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-dark-purple px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
          >
            <div className="flex items-center justify-between">
              {/* Hamburger menu button */}
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-cyan"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-6 flow-root">

              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                <Link to={'/'}>
                  <div>
                    <h1 className="text-4xl drop-shadow-text-shadow">FilmZilla</h1>
                  </div>
                </Link>
              </div>

                <ul className="space-y-2 py-6">
                  <li className="hover:underline hover:underline-offset-8"><Link to={'/'}>Home</Link></li>
                  <li className="hover:underline hover:underline-offset-8"><Link to={'reviews'}>Reviews</Link></li>
                  <li className="hover:underline hover:underline-offset-8"><Link to={'about'}>About</Link></li>
                </ul>

                {/* Search box */}
                <div className="py-6">
                  <form>   
                    <label htmlFor="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    
                    <div className="relative">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                      </svg>
                      </div>
                        <input 
                          type="search" 
                          id="default-search" 
                          className="block w-60 p-2 ps-10 text-sm text-white border border-gray-300 rounded-lg bg-transparent focus:ring-cyan focus:border-cyan dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                          placeholder="Search..." 
                          required 
                        />
                      </div>
                  </form>
                </div>
                
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>

      </div>{/* end background image container*/}
    </header>
   );
}
 
export default Header;