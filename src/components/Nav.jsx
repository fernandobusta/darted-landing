import React, {useState, useEffect} from 'react'
import { Disclosure } from '@headlessui/react'

import logo from "../assets/logo-no-background.png"


export default function Nav() {
    const navigation = [
        { name: "Features", href: "#feature", current: false },
        { name: "Product", href: "#product", current: false },
        {name: "Pricing", href: "#pricing", current: false },
        {name: "About", href: "#about", current: false},
        { name: "Contact", href: "#contact", current: false },
    ];

    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }

    const [colour, setColour] = useState("transparent");

    useEffect(() => {
        const changeColour = () => {
          if (window.scrollY >= 120) {
            setColour("#1c1917");
          } else {
            setColour("#FFC107");
          }
        };
        window.addEventListener("scroll", changeColour);
      }, []);

    return (
        
        <div>
            <Disclosure
                as="nav"
                style={{ backgroundColor: `${colour}` }}
                className=" text-gray-300 shadow-md fixed left-0 w-full z-30 top-0 "
            >
                {({ open }) => (
                    <>
                        <div className=" mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                            <div className="relative flex h-20 items-center justify-between">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-red-100">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <p>Open</p>
                                            
                                        ) : (
                                            <p>Closed</p>
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                    <div className="flex flex-shrink-0 items-center">
                                        <div >
                                            <a href="#hero">
                                                <img
                                                    src={logo}
                                                    width={100}
                                                    height={100}
                                                    className="block md:h-14 h-20 max-sm:pt-4 w-auto "
                                                    alt="Logo"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="hidden sm:ml-6 sm:block">
                                        <div className="flex space-x-4 align-middle my-auto">
                                            {navigation.map((item) => (
                                                <a
                                                    
                                                    key={item.name}
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current ? "" : "",
                                                        "px-7 py-4 rounded-md lg:text-md text-sm font-bold tracking-wide align-middle my-auto hover:text-text-color hover:scale-105"
                                                    )}
                                                    aria-current={item.current ? "page" : undefined}
                                                >
                                                    {item.name}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="space-y-3 px-2 pt-4 pb-3 align-middle">
                                {navigation.map((item) => (

                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(
                                            item.current ? "" : "",
                                            "block px-5 py-2 rounded-md text-base font-bold tracking-wide align-middle hover:text-text-color hover:scale-105"
                                        )}
                                        aria-current={item.current ? "page" : undefined}
                                    >
                                        {item.name}
                                    </Disclosure.Button>

                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div >
  )
}