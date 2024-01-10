'use client';

import { useCallback } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { Logo } from '#/assets';
import { toCapitalize } from '#/utils';

const routes = ['/', '/projects', '/about', '/blogs'] as const;

export default function Header() {
   const pathname = usePathname();

   const shouldActive = useCallback(
      (route: string) => {
         const className =
            'relative text-green-600 before:absolute before:-bottom-2 before:mx-auto before:mt-auto before:h-1 before:w-full before:rounded-t-full before:bg-green-500 dark:text-green-400 md:before:-bottom-7';
         const iddle =
            'group relative before:absolute before:-bottom-2 before:mt-auto before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:rounded-full before:bg-green-800 before:transition group-hover:before:scale-x-100 md:before:-bottom-7';
         if (route === '/' && pathname === '/') {
            return className;
         }
         if (route !== '/' && pathname.startsWith(route)) {
            return className;
         }
         return pathname === route ? className : iddle;
      },
      [pathname],
   );

   return (
      <>
         {/* <header className="container">
            <div className="flex items-center justify-between gap-5">
               <Link href="/">
                  <Logo />
               </Link>
               <div className="flex items-center justify-center gap-5">
                  {routes.map((route, index) => (
                     <Link
                        key={index}
                        href={route}
                        className={shouldActive(route)}>
                        {index === 0 ? 'Home' : toCapitalize(route.split('/').pop() || '')}
                     </Link>
                  ))}
               </div>
            </div>
         </header> */}
         <header className="absolute left-0 top-0 flex w-full justify-center">
            <nav className="absolute w-full">
               <div className="relative z-30 bg-white dark:bg-gray-900">
                  <div className="container">
                     <div className="flex flex-wrap items-center justify-between gap-6 py-4 md:gap-0">
                        <input
                           type="checkbox"
                           name="toggle_nav"
                           id="toggle_nav"
                           className="peer hidden"
                        />
                        <div className="z-30 flex w-full justify-between px-6 md:w-max md:px-0">
                           <a
                              href="#"
                              aria-label="logo">
                              <Logo />
                           </a>

                           <div className="flex max-h-10 items-center md:hidden">
                              <label
                                 role="button"
                                 htmlFor="toggle_nav"
                                 aria-label="humburger"
                                 id="hamburger"
                                 className="relative p-2">
                                 <div
                                    id="line"
                                    className="m-auto h-0.5 w-6 rounded bg-sky-900 transition duration-300 dark:bg-gray-300"></div>
                                 <div
                                    id="line2"
                                    className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300 dark:bg-gray-300"></div>
                              </label>
                           </div>
                        </div>
                        <label
                           htmlFor="toggle_nav"
                           className="fixed left-0 top-0 z-10 hidden h-full w-full bg-green-200 bg-opacity-30 backdrop-blur backdrop-filter peer-checked:block"></label>
                        <div className="z-40 mx-auto hidden w-11/12 flex-col items-center justify-end gap-y-8 rounded-xl bg-white p-6 peer-checked:flex dark:bg-gray-800 md:mx-0 md:flex md:w-8/12 md:flex-row md:gap-x-4 md:gap-y-0 md:divide-x md:bg-transparent md:p-0 lg:w-7/12">
                           <div className="block w-full md:w-max">
                              <ul className="flex flex-col gap-y-6 font-medium tracking-wide text-gray-500 dark:text-gray-300 md:flex-row md:gap-y-0">
                                 {routes.map((route, index) => (
                                    <li key={index}>
                                       <Link
                                          href={route}
                                          className="block md:px-4">
                                          <div
                                             // className={`relative before:absolute before:-bottom-2 before:w-full before:rounded-full before:bg-green-800 before:transition before:group-hover before:scale-x-100 before:md:-bottom-7 ${shouldActive(route)}`}
                                             className={shouldActive(route)}>
                                             <span>
                                                {index === 0
                                                   ? 'Home'
                                                   : toCapitalize(route.split('/').pop() || '')}
                                             </span>
                                          </div>
                                       </Link>
                                    </li>
                                 ))}
                                 <li>
                                    <a
                                       href="#"
                                       className="group block md:px-4">
                                       <div className="group relative before:absolute before:-bottom-2 before:mt-auto before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:rounded-full before:bg-green-800 before:transition group-hover:before:scale-x-100 md:before:-bottom-7">
                                          <span className="group-hover:text-green-500">
                                             Services
                                          </span>
                                       </div>
                                    </a>
                                 </li>
                              </ul>
                           </div>

                           <div
                              className="flex w-full
                                 min-w-max flex-col gap-4 pl-2 sm:w-max sm:flex-row">
                              <button
                                 type="button"
                                 title="Start buying"
                                 className="w-full rounded-xl px-6 py-3 text-center transition focus:bg-green-100 active:bg-green-200 dark:focus:bg-gray-800 dark:active:bg-green-900 sm:w-max">
                                 <span className="block font-semibold text-green-600 dark:text-green-500">
                                    Login
                                 </span>
                              </button>
                              <button
                                 type="button"
                                 title="Start buying"
                                 className="w-full rounded-xl bg-green-600 px-6 py-3 text-center transition hover:bg-green-700 focus:bg-green-500 active:bg-green-800 sm:w-max">
                                 <span className="block font-semibold text-white">Book Demo</span>
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div
                  aria-hidden="true"
                  className="container -mt-6 h-4 bg-green-600/30 blur dark:bg-green-900/30 md:-mt-4"></div>
            </nav>
         </header>
      </>
   );
}
