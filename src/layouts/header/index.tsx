import React, { FC } from 'react';

export const Header: FC = () => {
  return (
    <header className="sticky top-0 bg-white border-b border-gray-200 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">
          <div className="flex">
            <button
              className="text-gray-500 hover:text-gray-600 lg:hidden"
              aria-controls="sidebar"
              aria-expanded="false"
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x={4} y={5} width={16} height={2} />
                <rect x={4} y={11} width={16} height={2} />
                <rect x={4} y={17} width={16} height={2} />
              </svg>
            </button>
          </div>
          <div className="flex items-center space-x-3">
            <button
              className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition duration-150 rounded-full ml-3 false"
              aria-controls="search-modal"
            >
              <span className="sr-only">Search</span>
              <svg
                className="w-4 h-4"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="fill-current text-gray-500"
                  d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
                />
                <path
                  className="fill-current text-gray-400"
                  d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"
                />
              </svg>
            </button>
            <div
              className="fixed inset-0 bg-gray-900 bg-opacity-30 z-50 transition-opacity"
              aria-hidden="true"
              style={{ display: 'none' }}
            />
            <div
              id="search-modal"
              className="fixed inset-0 z-50 overflow-hidden flex items-start top-20 mb-4 justify-center transform px-4 sm:px-6"
              role="dialog"
              aria-modal="true"
              style={{ display: 'none' }}
            >
              <div className="bg-white overflow-auto max-w-2xl w-full max-h-full rounded shadow-lg">
                <form className="border-b border-gray-200">
                  <div className="relative">
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <input
                      id="search"
                      className="w-full border-0 focus:ring-transparent placeholder-gray-400 appearance-none py-3 pl-10 pr-4"
                      type="search"
                      placeholder="Search Anything…"
                    />
                    <button
                      className="absolute inset-0 right-auto group"
                      type="submit"
                      aria-label="Search"
                    >
                      <svg
                        className="w-4 h-4 shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-4 mr-2"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                        <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                      </svg>
                    </button>
                  </div>
                </form>
                <div className="py-4 px-2">
                  <div className="mb-3 last:mb-0">
                    <div className="text-xs font-semibold text-gray-400 uppercase px-2 mb-2">
                      Recent searches
                    </div>
                    <ul className="text-sm">
                      <li>
                        <a
                          className="flex items-center p-2 text-gray-800 hover:text-white hover:bg-indigo-500 rounded group"
                          href="/#0"
                        >
                          <svg
                            className="w-4 h-4 fill-current text-gray-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z" />
                          </svg>
                          <span>Form Builder - 23 hours on-demand video</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="flex items-center p-2 text-gray-800 hover:text-white hover:bg-indigo-500 rounded group"
                          href="/#0"
                        >
                          <svg
                            className="w-4 h-4 fill-current text-gray-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z" />
                          </svg>
                          <span>Access Mosaic on mobile and TV</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="flex items-center p-2 text-gray-800 hover:text-white hover:bg-indigo-500 rounded group"
                          href="/#0"
                        >
                          <svg
                            className="w-4 h-4 fill-current text-gray-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z" />
                          </svg>
                          <span>Product Update - Q4 2021</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="flex items-center p-2 text-gray-800 hover:text-white hover:bg-indigo-500 rounded group"
                          href="/#0"
                        >
                          <svg
                            className="w-4 h-4 fill-current text-gray-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z" />
                          </svg>
                          <span>Master Digital Marketing Strategy course</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="flex items-center p-2 text-gray-800 hover:text-white hover:bg-indigo-500 rounded group"
                          href="/#0"
                        >
                          <svg
                            className="w-4 h-4 fill-current text-gray-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z" />
                          </svg>
                          <span>Dedicated forms for products</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="flex items-center p-2 text-gray-800 hover:text-white hover:bg-indigo-500 rounded group"
                          href="/#0"
                        >
                          <svg
                            className="w-4 h-4 fill-current text-gray-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z" />
                          </svg>
                          <span>Product Update - Q4 2021</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mb-3 last:mb-0">
                    <div className="text-xs font-semibold text-gray-400 uppercase px-2 mb-2">
                      Recent pages
                    </div>
                    <ul className="text-sm">
                      <li>
                        <a
                          className="flex items-center p-2 text-gray-800 hover:text-white hover:bg-indigo-500 rounded group"
                          href="/#0"
                        >
                          <svg
                            className="w-4 h-4 fill-current text-gray-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3"
                            viewBox="0 0 16 16"
                          >
                            <path d="M14 0H2c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h8l5-5V1c0-.6-.4-1-1-1zM3 2h10v8H9v4H3V2z" />
                          </svg>
                          <span>
                            <span className="font-medium text-gray-800 group-hover:text-white">
                              Messages
                            </span>{' '}
                            - Conversation / … / Mike Mills
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="flex items-center p-2 text-gray-800 hover:text-white hover:bg-indigo-500 rounded group"
                          href="/#0"
                        >
                          <svg
                            className="w-4 h-4 fill-current text-gray-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3"
                            viewBox="0 0 16 16"
                          >
                            <path d="M14 0H2c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h8l5-5V1c0-.6-.4-1-1-1zM3 2h10v8H9v4H3V2z" />
                          </svg>
                          <span>
                            <span className="font-medium text-gray-800 group-hover:text-white">
                              Messages
                            </span>{' '}
                            - Conversation / … / Eva Patrick
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative inline-flex">
              <button
                className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition duration-150 rounded-full false"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="sr-only">Notifications</span>
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="fill-current text-gray-500"
                    d="M6.5 0C2.91 0 0 2.462 0 5.5c0 1.075.37 2.074 1 2.922V12l2.699-1.542A7.454 7.454 0 006.5 11c3.59 0 6.5-2.462 6.5-5.5S10.09 0 6.5 0z"
                  />
                  <path
                    className="fill-current text-gray-400"
                    d="M16 9.5c0-.987-.429-1.897-1.147-2.639C14.124 10.348 10.66 13 6.5 13c-.103 0-.202-.018-.305-.021C7.231 13.617 8.556 14 10 14c.449 0 .886-.04 1.307-.11L15 16v-4h-.012C15.627 11.285 16 10.425 16 9.5z"
                  />
                </svg>
                <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full" />
              </button>
              <div
                className="origin-top-right z-10 absolute top-full -mr-48 sm:mr-0 min-w-80 bg-white border border-gray-200 py-1.5 rounded shadow-lg overflow-hidden mt-1 right-0"
                style={{ display: 'none' }}
              >
                <div>
                  <div className="text-xs font-semibold text-gray-400 uppercase pt-1.5 pb-2 px-4">
                    Notifications
                  </div>
                  <ul>
                    <li className="border-b border-gray-200 last:border-0">
                      <a
                        className="block py-2 px-4 hover:bg-gray-50"
                        href="/#0"
                      >
                        <span className="block text-sm mb-2">
                          📣{' '}
                          <span className="font-medium text-gray-800">
                            Edit your information in a swipe
                          </span>{' '}
                          Sint occaecat cupidatat non proident, sunt in culpa
                          qui officia deserunt mollit anim.
                        </span>
                        <span className="block text-xs font-medium text-gray-400">
                          Feb 12, 2021
                        </span>
                      </a>
                    </li>
                    <li className="border-b border-gray-200 last:border-0">
                      <a
                        className="block py-2 px-4 hover:bg-gray-50"
                        href="/#0"
                      >
                        <span className="block text-sm mb-2">
                          📣{' '}
                          <span className="font-medium text-gray-800">
                            Edit your information in a swipe
                          </span>{' '}
                          Sint occaecat cupidatat non proident, sunt in culpa
                          qui officia deserunt mollit anim.
                        </span>
                        <span className="block text-xs font-medium text-gray-400">
                          Feb 9, 2021
                        </span>
                      </a>
                    </li>
                    <li className="border-b border-gray-200 last:border-0">
                      <a
                        className="block py-2 px-4 hover:bg-gray-50"
                        href="/#0"
                      >
                        <span className="block text-sm mb-2">
                          🚀
                          <span className="font-medium text-gray-800">
                            Say goodbye to paper receipts!
                          </span>{' '}
                          Sint occaecat cupidatat non proident, sunt in culpa
                          qui officia deserunt mollit anim.
                        </span>
                        <span className="block text-xs font-medium text-gray-400">
                          Jan 24, 2020
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative inline-flex">
              <button
                className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition duration-150 rounded-full false"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="sr-only">Need help?</span>
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="fill-current text-gray-500"
                    d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z"
                  />
                </svg>
              </button>
              <div
                className="origin-top-right z-10 absolute top-full min-w-44 bg-white border border-gray-200 py-1.5 rounded shadow-lg overflow-hidden mt-1 right-0"
                style={{ display: 'none' }}
              >
                <div>
                  <div className="text-xs font-semibold text-gray-400 uppercase pt-1.5 pb-2 px-4">
                    Need help?
                  </div>
                  <ul>
                    <li>
                      <a
                        className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
                        href="/#0"
                      >
                        <svg
                          className="w-3 h-3 fill-current text-indigo-300 shrink-0 mr-2"
                          viewBox="0 0 12 12"
                        >
                          <rect y={3} width={12} height={9} rx={1} />
                          <path d="M2 0h8v2H2z" />
                        </svg>
                        <span>Documentation</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
                        href="/#0"
                      >
                        <svg
                          className="w-3 h-3 fill-current text-indigo-300 shrink-0 mr-2"
                          viewBox="0 0 12 12"
                        >
                          <path d="M10.5 0h-9A1.5 1.5 0 000 1.5v9A1.5 1.5 0 001.5 12h9a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 0zM10 7L8.207 5.207l-3 3-1.414-1.414 3-3L5 2h5v5z" />
                        </svg>
                        <span>Support Site</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
                        href="/#0"
                      >
                        <svg
                          className="w-3 h-3 fill-current text-indigo-300 shrink-0 mr-2"
                          viewBox="0 0 12 12"
                        >
                          <path d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z" />
                        </svg>
                        <span>Contact us</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="w-px h-6 bg-gray-200 mx-3" />
            <div className="relative inline-flex">
              <button
                className="inline-flex justify-center items-center group"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  className="w-8 h-8 rounded-full"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAAD/ElEQVR4Ae2axXorRxCFq+by3VyT2NkENTecrC4zMz5A3sIw3mUXfoLQNsywCTOzMSiIhWZ7ZrpSU25NmGFGX/p8UneV8Pzq023E63edg3aWBVHIABgAA2AADIABMAAGwAAYAANw9VU39HTbbQzgurNbNvdv2zKQ6LHbEqBYfAsBerrz27b0b98mGO0FUG+MLi42AJFrdr9je//OHYPJhN1Om7hQehuImCEYAZOJ/M4dA7t2DqaSdnsAFEtvE0+BeQwmaVLJ/O5dA3v2CEbMASqVjzxvQawHEAKCXLJSCXvvnoF9+5x0yo4vgFJe+dv3CMQ4sAQkkCwIYipx2b59gwcOCEYMAeQselPME0tAQNTaGNJzqA4eHDx4yMmk7dgBlMvvKd+TJcBl51oUVrpIJ/OHDg0ePuxkMnaMAFxvfrL6MZBsgnA/i3QlM2kezKTzR444R486WcGIGkBUKLzV8qgllUzCxQPKLuFeWuJFOHp08NhxJ5u1owcold5CvY918kH6oAmF4UCo78dcxj5xwuFLLmdHCTC/0KjVRmUF9L5FSZNuxDFJp4VIROHj2f3Jk0OnTju9ghEBAKtQfDtcAVG4CsGgG11ryp88PpfdyAxnzg719m6MAqDwpvgKP2nkWawShkAo+QlZfunxuWz+7Fnn7PmhC/4Yxkr4h6SIFmZ5EPlKEciVS1KuxyVXvk++y6PyPd/3lL64ynU9Hj3X95Y8d8lnGG/F1wsrp8H6DwHSqesBqJVsZCJEUhRwoGUBIykgkHv0GMzyYFkTIrmbrX+zsPJFz/oKRP8dQCp5HeiDkidFSodFWEhnXbWSREIgt+IyE+IifDFjPb+04ssINvHaNR2dnRcF7nTukaVDjhZpKtAi7Tx8+IL/RWXprpq6dwm/d/+frkA6dR0p0oenUmISpBNJQlQAoS+Ss4Bj1p2oTD87701AqIgArkcLKYi5nJhIIsGAAAmxFSENB7OL46Xa07NL4yCKEmDVynXdnbYEwyImQFRilIH0kW9ZchgBWgA+TM+PFSaf4BFE0QMkE1ezRUAdaH2qy74Ux0ra4NqcHv2q9PjU7Gi8vp1OZ663GACAlAq//xEICb5lcd+YHvlo5PaPxu7Q7uMDYFkrE91XinVAxiC9AgIRDI2p4Xc+vvm9T29tzIzAzxV5hHq6L1+1ar18/CTBRzn1iYHqzeHRiYfqzc8gVOwA5ADFIOcKEclXgMCqNYdHxh6sNbT1WANkUtcSkYW4nKdK7dOR0Qeq9U9BFHeAjo6LV6/pANFk9dOR4ftD620BIN/AIVYqnwyP3F+taevtBLB69fpXXrmxItajkvl/IQNgAAyAATAABsAAGAADYAD+vwDfAQSHHlNp5b1mAAAAAElFTkSuQmCC"
                  width={32}
                  height={32}
                  alt="User"
                />
                <div className="flex items-center truncate">
                  <span className="truncate ml-2 text-sm font-medium group-hover:text-gray-800">
                    Acme Inc.
                  </span>
                  <svg
                    className="w-3 h-3 shrink-0 ml-1 fill-current text-gray-400"
                    viewBox="0 0 12 12"
                  >
                    <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                  </svg>
                </div>
              </button>
              <div
                className="origin-top-right z-10 absolute top-full min-w-44 bg-white border border-gray-200 py-1.5 rounded shadow-lg overflow-hidden mt-1 right-0"
                style={{ display: 'none' }}
              >
                <div>
                  <div className="pt-0.5 pb-2 px-3 mb-1 border-b border-gray-200">
                    <div className="font-medium text-gray-800">Acme Inc.</div>
                    <div className="text-xs text-gray-500 italic">
                      Administrator
                    </div>
                  </div>
                  <ul>
                    <li>
                      <a
                        className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
                        href="/settings"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
                        href="/signin"
                      >
                        Sign Out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
