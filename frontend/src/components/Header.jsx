import { useState } from "react";
import { Link } from "react-router-dom";
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return ( 
    <header className="border">
      <div className="bg-hero-img bg-center bg-no-repeat bg-cover h-screen">{/* background image container*/} 
        <nav className="flex justify-between items-center p-6 lg:px-8" aria-label="Global">
          <Link to={'/'}>
            <div>
              <h1 className="text-4xl drop-shadow-text-shadow">FilmZilla</h1>
            </div>
          </Link>

          {/* Hamburger menu button */}
          <div className="flex lg:hidden">
            <button 
              type="button" 
              class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span class="sr-only">Open main menu</span>
              <svg class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="cyan" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          
          <ul className="hidden lg:flex lg:gap-x-12 text-lg">
            <li className="hover:underline hover:underline-offset-8 active"><Link to={'/'}>Home</Link></li>
            <li className="hover:underline hover:underline-offset-8"><Link to={'reviews'}>Reviews</Link></li>
            <li className="hover:underline hover:underline-offset-8"><Link to={'about'}>About</Link></li>
          </ul>

          {/* Search box */}
          <div className="hidden lg:flex">
            <form>   
              <label htmlFor="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              
              <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg class="w-4 h-4 text-gray-200 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
                </div>
                  <input type="search" id="default-search" class="block w-60 p-2 ps-10 text-sm text-cyan border border-gray-300 rounded-lg bg-transparent focus:ring-cyan focus:border-cyan dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required />
                </div>
            </form>
          </div>
        </nav>

        {/* Mobile menu, show/hide based on menu open state. */}
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          {/* Background backdrop, show/hide based on slide-over state */}
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-dark-purple px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
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
                    
                    <div class="relative">
                      <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                      </div>
                        <input type="search" id="default-search" class="block w-60 p-2 ps-10 text-sm text-white border border-gray-300 rounded-lg bg-transparent focus:ring-cyan focus:border-cyan dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required />
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