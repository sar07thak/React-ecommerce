import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { assets } from "../assets/assets.js";

export const Header = () => {
    const [visible, setvisible] = useState(false);
    const handleback = () => {
        useNavigate()
    }
    return (
        <section>
            <div className="flex items-center justify-between py-5 text-sm text-gray-700">
                <NavLink to='/'>
                <h1 className="text-4xl  text-[#414141] font-mono leading-relaxed font-normal ">
                    --ETERNA--
                </h1>
                </NavLink>
                {/* <img src={assets.logo} alt="" className="w-36" onClick={handleback}/> */}
                <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `flex flex-col items-center gap-1 ${isActive ? "text-[#DF2A36]" : "text-gray-700"
                            }`
                        }
                    >
                        <p>Home</p>
                        <hr
                            className={({ isActive }) =>
                                `w-2/4 border-none h-[1.5px] bg-gray-700 ${isActive ? "block" : "hidden"
                                } `
                            }
                        />
                    </NavLink>

                    <NavLink
                        to="/collection"
                        className={({ isActive }) =>
                            `flex flex-col items-center gap-1 ${isActive ? "text-[#DF2A36]" : "text-gray-700"
                            }`
                        }
                    >
                        <p>Collections</p>
                        <hr
                            className={({ isActive }) =>
                                `w-2/4 border-none h-[1.5px] bg-gray-700 ${isActive ? "block" : "hidden"
                                } `
                            }
                        />
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `flex flex-col items-center gap-1 ${isActive ? "text-[#DF2A36]" : "text-gray-700"
                            }`
                        }
                    >
                        <p>About</p>
                        <hr
                            className={({ isActive }) =>
                                `w-2/4 border-none h-[1.5px] bg-gray-700 ${isActive ? "block" : "hidden"
                                } `
                            }
                        />
                    </NavLink>

                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `flex flex-col items-center gap-1 ${isActive ? "text-[#DF2A36]" : "text-gray-700"
                            }`
                        }
                    >
                        <p>Contact</p>
                        <hr
                            className={({ isActive }) =>
                                `w-2/4  border-none h-[1.5px] bg-gray-700 ${isActive ? "block" : "hidden"
                                } `
                            }
                        />
                    </NavLink>
                </ul>

                <div className="flex items-center gap-6">
                    <img src={assets.search_icon} alt="" className="w-5 cursor-pointer" />
                    <div className="group relative">
                        <img
                            src={assets.profile_icon}
                            alt=""
                            className="w-5 cursor-pointer"
                        />
                        <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                            <div className="flex flex-col gap-2 w-36 px-5 bg-[#F0BCD4] text-gray-500 rounded-2xl">
                                <p className="cursor-pointer hover:text-black bg-[#F0BCD4]">My Profile</p>
                                <p className="cursor-pointer hover:text-black bg-[#F0BCD4]">Orders</p>
                                <p className="cursor-pointer hover:text-black bg-[#F0BCD4]">LogOut</p>
                            </div>
                        </div>
                    </div>
                    <Link to="/cart" className="relative">
                        <img
                            src={assets.cart_icon}
                            alt=""
                            srcset=""
                            className="w-5  min-w-5"
                        />
                        <p className="absolute  right-[-5px] bottom-[-5px] w-4 text-center bg-black text-white aspect-square rounded-full text-[8px]  ">
                            10
                        </p>
                    </Link>
                    <img
                        onClick={() => setvisible(true)}
                        src={assets.menu_icon}
                        alt=""
                        className="w-5 cursor-pointer sm:hidden"
                    />

                    {/* sidebar for small screen */}
                    <div
                        className={`absolute top-0 right-0 bottom-0 overflow-hidden flex flex-col  ${visible ? "w-full" : "w-0"}`}
                    >
                        {/* <button > back</button> */}
                        <div className="flex flex-col text-gray-600 border-b-2">
                            <div
                                className="flex items-center gap-4 p-5 cursor-pointer"
                                onClick={() => setvisible(false)}
                            >
                                <img
                                    src={assets.dropdown_icon}
                                    alt=""
                                    srcset=""
                                    className="h-4 rotate-180"
                                />
                                <p>Back</p>
                            </div>
                        </div>
                        <NavLink
                            to="/"
                            className="hover:border w-full p-5 hover:text-gray-200 hover:bg-[#16262E] transition-all ease-in-out duration-400 text-xl"
                            onClick={() => setvisible(false)}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/collection"
                            className="hover:border p-5 hover:text-gray-200 hover:bg-[#16262E] transition-all ease-in-out duration-200 text-xl"
                            onClick={() => setvisible(false)}
                        >
                            Collection{" "}
                        </NavLink>
                        <NavLink
                            to="/about"
                            className="hover:border w-full p-5 hover:text-gray-200 hover:bg-[#16262E] transition-all ease-in-out duration-200 text-xl"
                            onClick={() => setvisible(false)}
                        >
                            {" "}
                            About{" "}
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className="hover:border w-full p-5 hover:text-gray-200 hover:bg-[#16262E] transition-all ease-in-out duration-200 text-xl"
                            onClick={() => setvisible(false)}
                        >
                            Contact
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
};
