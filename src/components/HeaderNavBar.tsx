import '../styles/custom.css'
import { INavBarPages } from '../interfaces/INavBarPages'

//images
import SolarichLogo from '../assets/images/logo-name-only.png'
import HomePageBanner from '../assets/images/banner-2.jpg'
import SolarichIcon from '../assets/images/solarich-icon.png'

const NavBarPages : Array<INavBarPages> = [
    
    { pageName: "Home", pageUrl: "/home" },
    { pageName: "Residential", pageUrl: "/residential" },
    { pageName: "Commerial", pageUrl: "/commercial" },
    { pageName: "Solar PV Training", pageUrl: "/solar-training" },
    { pageName: "About", pageUrl: "/about"},
    { pageName:  "Contact", pageUrl: "/contact" },
    { pageName: "Solar Solutions",
      pageUrl: "",
      ifDropdown:[
       { pageName: "Learning Guide", pageUrl: "solutions/learning-guide"},
       { pageName: "System Packages", pageUrl: "solutions/system-packages"},
       { pageName: "Products", pageUrl: "solutions/system-packages"}
      ],
    }
]

export default function HeaderNavBar () : JSX.Element{



    return(
    <header>
      <div
        className="px-6 bg-gray-50 fixed top-0 left-0 right-0 z-10 transition-all duration-300 header-scrolled"
        id="main-header"
      >
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex h-8 sm:h-12 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <a className="block" href="https://solarichenterprises.netlify.app/">
                <span className="sr-only">Home</span>
                <img
                  className="w-auto h-8 sm:h-10"
                  src={SolarichLogo}
                  alt="logo"
                />
              </a>
            </div>

            <div className="flex lg:hidden px-6">
              <button
                id="menu-toggle"
                type="button"
                className="-m-3.5 inline-flex items-center justify-center rounded-md p-1.5 text-green-500"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>

            <div className="hidden lg:flex lg:gap-x-12">
              <ul className="flex items-center gap-6 text-sm">

                {/* ITERATE HERE THE PAGES        */}

                {
                    NavBarPages.map( (pages) : JSX.Element => {
                        return (

                            pages.ifDropdown ? 
                            (
                                <li className="nav-link">
                                <a
                                  className="px-1 py-1 text-md font-medium transition duration-300 nav-link tracking-wider custom-font-2 hover:text-green-400"
                                >
                                  {pages.pageName}
                                </a>
                                <div className ="dropdown-menu rounded-b-md">
                                 {
                                    pages.ifDropdown.map( (dropDownPages) : JSX.Element => {
                                        return (
                                        <a
                                        className="dropdown-item px-1 py-1 text-md font-medium transition duration-300 tracking-wider custom-font-2 hover:text-green-400"
                                        href= {dropDownPages.pageUrl}
                                        >{dropDownPages.pageName}</a
                                      >)
                                    })
                                 }
                                </div>
                              </li>
                            ) :
                            
                            (
                               <li>
                                <a
                                  className="px-1 py-1 text-md font-medium transition duration-300 nav-link tracking-wider custom-font-2 hover:text-green-400"
                                  href= {pages.pageUrl}
                                >
                                  {pages.pageName}
                                </a>
                                </li>
                            ) 
                      )
                     }  
                    )  
                }

              </ul>
            </div>

            {/* Mobile menu, show/hide based on menu open state  */}
            <div className="hidden" role="dialog" aria-modal="true" id="menu">
              <div className="fixed inset-0 z-10">
                <div
                  className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-50 px-6 py-10 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
                >
                  <div className="flex lg:hidden px-8 items-center justify-between">
                    <a href="#" className="-m-1.5 p-1.5">
                      <span className="sr-only">Home</span>
                    </a>
                    <button
                      type="button"
                      id="close-menu"
                      className="inline-flex items-center justify-center rounded-md -ml-6 -mt-2.5 text-gray-700"
                    >
                      <span className="sr-only">Close menu</span>
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                      <div className="space-y-2 py-6">
                        <a
                          href="https://solarichenterprises.netlify.app/"
                          className="-mx-3 text-sm font-semibold leading-6 text-center text-gray-900 block px-4 py-2 hover:bg-gray-100"
                        >
                          Home
                        </a>
                        <a
                          href="https://solarichenterprises.netlify.app/#residential"
                          className="-mx-3 text-sm font-semibold leading-6 text-center text-gray-900 block px-4 py-2 hover:bg-gray-100"
                        >
                          Residential
                        </a>
                        <a
                          href="https://solarichenterprises.netlify.app/#commercial"
                          className="-mx-3 text-sm font-semibold leading-6 text-center text-gray-900 block px-4 py-2 hover:bg-gray-100"
                        >
                          Commercial
                        </a>
                        <a
                          href="https://solarichenterprises.netlify.app/#solar-training"
                          className="-mx-3 text-sm font-semibold leading-6 text-center text-gray-900 block px-4 py-2 hover:bg-gray-100"
                        >
                          Solar PV Training
                        </a>
                        <a
                          href="/pages/learning-guide.html"
                          className="-mx-3 text-sm font-semibold leading-6 text-center text-gray-900 block px-4 py-2 hover:bg-gray-100"
                        >
                          Learning Guide
                        </a>
                        <a
                          href="/pages/system-packages.html"
                          className="-mx-3 text-sm font-semibold leading-6 text-center text-gray-900 block px-4 py-2 hover:bg-gray-100"
                        >
                          System Packages
                        </a>
                        <a
                          href="/pages/products.html"
                          className="-mx-3 text-sm font-semibold leading-6 text-center text-gray-900 block px-4 py-2 hover:bg-gray-100"
                        >
                          Products
                        </a>
                        <a
                          href="/pages/about.html"
                          className="-mx-3 text-sm font-semibold leading-6 text-center text-gray-900 block px-4 py-2 hover:bg-gray-100"
                        >
                          About
                        </a>
                        <a
                          href="https://solarichenterprises.netlify.app/#contact"
                          className="-mx-3 text-sm font-semibold leading-6 text-center text-gray-900 block px-4 py-2 hover:bg-gray-100"
                        >
                          Contact
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
             {/* End of Mobile menu, show/hide based on menu open state  */}
          </div>
        </div>
      </div>

      <div className="relative -mt-20 scroll-section" id="home">
        {/* Remove the comment for video element if wanting to add a video */}
        {/* <video
          src="/assets/videos/banner-video.mp4"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
          autoplay
          muted
          loop
        ></video> */}
        <img
          src= {HomePageBanner}
          className="absolute inset-0 object-cover w-full h-full"
          alt="banner"
        />

        <div className="relative bg-opacity-40 bg-gray-700 drop-shadow-lg">
          <svg
            className="absolute inset-x-0 text-opacity-80 bottom-0 text-green-800 shadow-xl"
            viewBox="0 0 1160 163"
          >
            <path
              fill="currentColor"
              d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
            ></path>
          </svg>
          <div
            className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 2xl:py-60"
          >
            <div
              className="flex flex-col items-center justify-between xl:flex-row mt-10"
            >
          {/* Banner Texts  */}
              <div
                className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
              >
                <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                  <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
                    <a className="mb-6 sm:mx-auto">
                      <div
                        className="flex items-center -ml-2 justify-center w-16 h-16 sm:w-24 sm:h-24 rounded-full"
                      >
                        <img
                          className="w-16 h-16 sm:w-24 sm:h-24 drop-shadow-md"
                          src= {SolarichIcon}
                          alt="solarich-icon"
                        />
                      </div>
                    </a>
                    <div
                      className="max-w-xl mb-6 md:mx-auto sm:text-center lg:max-w-2xl md:mb-8"
                    >
                      <h2
                        className="max-w-2xl mb-2 font-sans text-3xl font-bold leading-none tracking-wide drop-shadow-md text-gray-200 sm:text-6xl md:mx-auto custom-font-2"
                      >
                        <span className="relative inline-block">
                          Sustainable
                          <span className="relative text-yellow-400"> Energy</span
                          ><br />
                        </span>
                        for a Sustainable
                        <span className="relative text-green-500">Future</span
                        ><svg
                          viewBox="0 0 52 24"
                          fill="currentColor"
                          className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                          <defs>
                            <pattern
                              id="e77df901-b9d7-4b9b-822e-16b2d410795b"
                              x="0"
                              y="0"
                              width=".135"
                              height=".30"
                            >
                              <circle cx="1" cy="1" r=".7"></circle>
                            </pattern>
                          </defs>
                          <rect
                            fill="url(#e77df901-b9d7-4b9b-822e-16b2d410795b)"
                            width="52"
                            height="24"
                          ></rect>
                        </svg>
                      </h2>
                      <p
                        className="text-base font-medium text-gray-100 md:text-2xl custom-font-2 tracking-wide"
                      >
                        Allow us to help you empower your home and business with
                        our Solar PV Systems.
                      </p>
                    </div>
                    <div>
                      <a
                        href="#getQuote"
                        className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-widest text-white transition duration-200 rounded shadow-md bg-green-500 hover:bg-green-700 capitalize focus:shadow-outline focus:outline-none custom-font-2"
                      >
                        Get a quote
                      </a>
                    </div>
                  </div>
                </div>
              </div>
             {/* End of Banner Texts */}
            </div>
          </div>
        </div>
      </div>
    </header>
    )
}