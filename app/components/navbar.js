"use client";
import Image from "next/image";
import Logo from "@/public/logo.png";
import Logo_black from "@/public/logo_black.png";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import nextAuth from "next-auth/react";
import "@/style/navbar.scss";
import Link from "next/link";

const Navbar = ({ setNavbarvalue = false }) => {
  const [show, setShow] = useState(null);
  const [navbar, setNavbar] = useState(setNavbarvalue);
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  //   const [toggleDropdown, settoggelDropdown] = useState(false);
  // console.log(session)
  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  const changeNavrbarColor = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(setNavbarvalue);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavrbarColor);
    return () => {
      window.removeEventListener("scroll", changeNavrbarColor);
    };
  }, []);

  return (
    <div className="bg-white h-full ">
      <div>
        <nav
          className={
            navbar
              ? "bg-white drop-shadow-md xl:block hidden w-screen fixed top-0 z-50"
              : "drop-shadow-md xl:block hidden w-screen fixed top-0 z-50"
          }
        >
          <div className="mx-auto container px-6 py-2 xl:py-0">
            <div className="flex items-center justify-between">
              <div className="inset-y-0 left-0 flex items-center xl:hidden">
                <div className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-100 focus:outline-none transition duration-150 ease-in-out">
                  <div className="visible xl:hidden">
                    <ul className="p-2 border-r bg-white absolute rounded left-0 right-0 shadow mt-8 md:mt-8 hidden">
                      <li className="flex xl:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-grid"
                            width={50}
                            height={30}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <rect x={4} y={4} width={6} height={6} rx={1} />
                            <rect x={14} y={4} width={6} height={6} rx={1} />
                            <rect x={4} y={14} width={6} height={6} rx={1} />
                            <rect x={14} y={14} width={6} height={6} rx={1} />
                          </svg>
                          <span className="ml-2 font-bold">About Us</span>
                        </div>
                      </li>
                      <li className=" xl:hidden flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center">
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-puzzle"
                            width={50}
                            height={30}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                          </svg>
                          <span className="ml-2 font-bold">Contact Us</span>
                        </div>
                      </li>
                      <li className=" xl:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-compass"
                          width={50}
                          height={30}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <polyline points="8 16 10 10 16 8 14 14 8 16" />
                          <circle cx={12} cy={12} r={9} />
                        </svg>
                        <span className="ml-2 font-bold">Performance</span>
                      </li>
                      <li className="border-b border-gray-300 flex xl:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 hover:text-indigo-700 items-center focus:text-indigo-700 focus:outline-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-code"
                          width={50}
                          height={30}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <polyline points="7 8 3 12 7 16" />
                          <polyline points="17 8 21 12 17 16" />
                          <line x1={14} y1={4} x2={10} y2={20} />
                        </svg>
                        <span className="ml-2 font-bold">Deliverables</span>
                      </li>
                      <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                        <div className="flex items-center">
                          <div className="w-12 cursor-pointer flex text-sm border-2 border-transparent rounded focus:outline-none focus:border-white transition duration-150 ease-in-out">
                            <div
                              style={{
                                backgroundImage: `url(${
                                  navbar ? Logo_black.src : Logo.src
                                })`,
                                backgroundSize: "contain",
                                backgroundRepeat: "no-repeat",
                                width: "50px",
                                height: "30px",
                              }}
                            ></div>{" "}
                          </div>
                          <p className="text-sm ml-2 cursor-pointer">
                            Jane Doe
                          </p>
                          <div className="sm:ml-2 text-white relative">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-chevron-down cursor-pointer"
                              width={50}
                              height={30}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <polyline points="6 9 12 15 18 9" />
                            </svg>
                          </div>
                        </div>
                      </li>
                      <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-user"
                            width={50}
                            height={30}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx={12} cy={7} r={4} />
                            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                          </svg>
                          <span className="ml-2">Profile</span>
                        </div>
                      </li>
                    </ul>
                    <svg
                      aria-haspopup="true"
                      aria-label="Main Menu"
                      xmlns="http://www.w3.org/2000/svg"
                      className="show-m-menu icon icon-tabler icon-tabler-menu"
                      width={28}
                      height={28}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <line x1={4} y1={8} x2={20} y2={8} />
                      <line x1={4} y1={16} x2={20} y2={16} />
                    </svg>
                  </div>
                  <div className="hidden close-m-menu text-gray-700">
                    <svg
                      aria-label="Close"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <line x1={18} y1={6} x2={6} y2={18} />
                      <line x1={6} y1={6} x2={18} y2={18} />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex w-full sm:w-auto items-center sm:items-stretch justify-end sm:justify-start">
                <Link className="flex items-center" href="/">
                  <div
                    style={{
                      backgroundImage: `url(${
                        navbar ? Logo_black.src : Logo.src
                      })`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      width: "50px",
                      height: "30px",
                    }}
                  ></div>
                  <span
                    className={
                      navbar ? "mx-3 text-gray-700" : "mx-3 text-white"
                    }
                  >
                    <b>CodeMonkey</b>
                  </span>
                </Link>
              </div>
              <div className="flex">
                <div className="hidden xl:flex">
                  <Link
                    href="#ethicssection"
                    className={
                      navbar
                        ? "flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
                        : "flex px-5 items-center py-6 text-sm leading-5 text-white focus:outline-none transition duration-150 ease-in-out"
                    }
                  >
                    <span className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-grid"
                        width={50}
                        height={30}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <rect x={4} y={4} width={6} height={6} rx={1} />
                        <rect x={14} y={4} width={6} height={6} rx={1} />
                        <rect x={4} y={14} width={6} height={6} rx={1} />
                        <rect x={14} y={14} width={6} height={6} rx={1} />
                      </svg>
                    </span>
                    About Us
                  </Link>
                  <Link
                    href="#ourservicessection"
                    className={
                      navbar
                        ? "flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
                        : "flex px-5 items-center py-6 text-sm leading-5 text-white focus:outline-none transition duration-150 ease-in-out"
                    }
                  >
                    <span className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-puzzle"
                        width={50}
                        height={30}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                      </svg>
                    </span>
                    Services
                  </Link>
                  <Link
                    href="#project"
                    className={
                      navbar
                        ? "flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
                        : "flex px-5 items-center text-white py-6 text-sm leading-5 text-whitefocus:outline-none transition duration-150 ease-in-out"
                    }
                  >
                    <span className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-compass"
                        width={50}
                        height={30}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="8 16 10 10 16 8 14 14 8 16" />
                        <circle cx={12} cy={12} r={9} />
                      </svg>
                    </span>
                    Projects
                  </Link>
                  <div
                    className={
                      navbar
                        ? "flex cursor-pointer px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
                        : "flex cursor-pointer px-5 items-center py-6 text-sm leading-5 text-white focus:outline-none transition duration-150 ease-in-out"
                    }
                    onClick={() =>
                      document.getElementById("my_modal_2").showModal()
                    }
                  >
                    <span className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-code"
                        width={50}
                        height={30}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="7 8 3 12 7 16" />
                        <polyline points="17 8 21 12 17 16" />
                        <line x1={14} y1={4} x2={10} y2={20} />
                      </svg>
                    </span>
                    Contact Us
                  </div>
                  <div
                    className={
                      navbar
                        ? "flex cursor-pointer px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
                        : "flex cursor-pointer px-5 items-center py-6 text-sm leading-5 text-white focus:outline-none transition duration-150 ease-in-out"
                    }
                  >
                    {session?.user ? (
                      <div className="flex gap-3">
                        {/* <button onClick={signOut}>
                          sign out
                        </button> */}

                        <Link href="/profile">
                          <Image
                            src={session?.user.image}
                            alt="profile"
                            width={30}
                            height={30}
                            className="rounded-full"
                          />
                        </Link>
                      </div>
                    ) : (
                      <>
                        {providers &&
                          Object.values(providers ?? {}).map((provider) => (
                            <button
                              type="button"
                              key={provider.name}
                              onClick={() => {
                                signIn(provider.id);
                              }}
                            >
                              Sign in
                            </button>
                          ))}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <nav>
          <div
            className={
              navbar
                ? "bg-white drop-shadow-md py-4 px-6 w-full flex xl:hidden justify-between items-center fixed top-0 z-40"
                : "py-4 px-6 w-full flex xl:hidden justify-between items-center fixed top-0 z-40"
            }
          >
            <Link className="flex items-center" href="/">
              <div
                style={{
                  backgroundImage: `url(${navbar ? Logo_black.src : Logo.src})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  width: "50px",
                  height: "30px",
                }}
              ></div>
              <span
                className={navbar ? "mx-3 text-gray-700" : "mx-3 text-white"}
              >
                <b>CodeMonkey</b>
              </span>
            </Link>
            <div className="flex items-center">
              <div
                id="menu"
                className={navbar ? "text-gray-700" : "text-white"}
                onClick={() => setShow(!show)}
              >
                {show ? (
                  ""
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-menu-2"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1={4} y1={6} x2={20} y2={6} />
                    <line x1={4} y1={12} x2={20} y2={12} />
                    <line x1={4} y1={18} x2={20} y2={18} />
                  </svg>
                )}
              </div>
            </div>
          </div>
          {/*Mobile responsive sidebar*/}
          <div
            className={
              show
                ? "w-full xl:hidden h-full z-40  transform  translate-x-0 fixed top-0 left-0"
                : "   w-full xl:hidden h-full absolute z-40  transform -translate-x-full"
            }
          >
            <div
              className="bg-gray-800 opacity-50 w-full h-full"
              onClick={() => setShow(!show)}
            />
            <div className="w-64 z-40 fixed overflow-y-auto top-0 left-0 bg-white shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out">
              <div className="px-6 h-full">
                <div className="flex flex-col justify-between h-full w-full">
                  <div>
                    <div className="mt-6 flex w-full items-center justify-between">
                      <div className="flex items-center justify-between w-full">
                        <Link
                          className="flex items-center cursor-pointer"
                          href="/"
                          onClick={() => setShow(!show)}
                        >
                          <div
                            style={{
                              backgroundImage: `url(${
                                navbar ? Logo_black.src : Logo.src
                              })`,
                              backgroundSize: "contain",
                              backgroundRepeat: "no-repeat",
                              width: "50px",
                              height: "30px",
                            }}
                          ></div>
                          <span className="mx-3">
                            <b>CodeMonkey</b>
                          </span>
                        </Link>
                        <div
                          id="cross"
                          className="text-gray-800"
                          onClick={() => setShow(!show)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-x"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1={18} y1={6} x2={6} y2={18} />
                            <line x1={6} y1={6} x2={18} y2={18} />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <ul className="f-m-m">
                      <Link
                        href="#ethicssection"
                        className="cursor-pointer"
                        onClick={() => setShow(!show)}
                      >
                        <li className="text-gray-800 pt-10">
                          <div className="flex items-center">
                            <div className="w-6 h-6 md:w-8 md:h-8 text-gray-800">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-grid"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <rect x={4} y={4} width={6} height={6} rx={1} />
                                <rect
                                  x={14}
                                  y={4}
                                  width={6}
                                  height={6}
                                  rx={1}
                                />
                                <rect
                                  x={4}
                                  y={14}
                                  width={6}
                                  height={6}
                                  rx={1}
                                />
                                <rect
                                  x={14}
                                  y={14}
                                  width={6}
                                  height={6}
                                  rx={1}
                                />
                              </svg>
                            </div>
                            <p className="text-gray-800 xl:text-base md:text-2xl text-base ml-3">
                              About Us
                            </p>
                          </div>
                        </li>
                      </Link>

                      <Link
                        href="#ourservicessection"
                        className="cursor-pointer"
                        onClick={() => setShow(!show)}
                      >
                        <li className="text-gray-800 pt-8">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-6 h-6 md:w-8 md:h-8 text-gray-800">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon icon-tabler icon-tabler-puzzle"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path stroke="none" d="M0 0h24v24H0z" />
                                  <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                                </svg>
                              </div>
                              <p className="text-gray-800 xl:text-base md:text-2xl text-base ml-3">
                                Services
                              </p>
                            </div>
                          </div>
                        </li>
                      </Link>
                      <Link
                        href="#project"
                        className="cursor-pointer"
                        onClick={() => setShow(!show)}
                      >
                        <li className="text-gray-800 pt-8">
                          <div className="flex items-center">
                            <div className="w-6 h-6 md:w-8 md:h-8 text-gray-800">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-compass"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="8 16 10 10 16 8 14 14 8 16" />
                                <circle cx={12} cy={12} r={9} />
                              </svg>
                            </div>
                            <p className="text-gray-800 xl:text-base md:text-2xl text-base ml-3">
                              Projects
                            </p>
                          </div>
                        </li>
                      </Link>
                      <li
                        className="text-gray-800 pt-8 cursor-pointer"
                        onClick={() =>
                          document.getElementById("my_modal_2").showModal()
                        }
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-6 h-6 md:w-8 md:h-8 text-gray-800">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-code"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="7 8 3 12 7 16" />
                                <polyline points="17 8 21 12 17 16" />
                                <line x1={14} y1={4} x2={10} y2={20} />
                              </svg>
                            </div>
                            <p className="text-gray-800 xl:text-base md:text-2xl text-base ml-3">
                              Contact Us
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* Code block ends */}
      </div>
    </div>
  );
};

export default Navbar;
