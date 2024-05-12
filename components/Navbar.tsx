"use client";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { PhoneIcon } from "@heroicons/react/20/solid";

const Navbar = () => {
  return (
    <Disclosure as="nav" className="bg-white/60 fixed w-full z-50">
      {({ open }) => (
        <>
          <div className="mx-auto px-4 sm:px-6 lg:px-8 container">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-auto w-32"
                    src="/img/acapulco-nuptials.png"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden md:ml-6 md:flex md:space-x-8">
                  <a
                    href="#about-us"
                    className="inline-flex items-center  px-1 pt-1 text-sm font-medium text-brown"
                  >
                    Nosotros
                  </a>
                  <a
                    href="#menu"
                    className="inline-flex items-center border-transparent px-1 pt-1 text-sm font-medium text-brown hover:border-gray-300 hover:text-brown"
                  >
                    Menú
                  </a>
                  <a
                    href="#services"
                    className="inline-flex items-center border-transparent px-1 pt-1 text-sm font-medium text-brown hover:border-gray-300 hover:text-brown"
                  >
                    Servicios
                  </a>
                  <a
                    href="#gallery"
                    className="inline-flex items-center border-transparent px-1 pt-1 text-sm font-medium text-brown hover:border-gray-300 hover:text-brown"
                  >
                    Galería
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <a
                    type="button"
                    href="tel:+525540854434"
                    className="relative inline-flex items-center gap-x-1.5 rounded-md bg-brown px-3 py-2 text-sm font-semibold text-beige shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    <PhoneIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
                    Contáctanos
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {/* Current: "bg-indigo-50 border-indigo-500 text-text-brown", Default: "border-transparent text-brown hover:bg-gray-50 hover:border-gray-300 hover:text-brown" */}
              <Disclosure.Button
                as="a"
                href="#about-us"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-brown hover:border-gray-300 hover:bg-gray-50 hover:text-brown sm:pl-5 sm:pr-6"
              >
                Nosotros
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#menu"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-brown hover:border-gray-300 hover:bg-gray-50 hover:text-brown sm:pl-5 sm:pr-6"
              >
                Menú
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#services"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-brown hover:border-gray-300 hover:bg-gray-50 hover:text-brown sm:pl-5 sm:pr-6"
              >
                Servicios
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#gallery"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-brown hover:border-gray-300 hover:bg-gray-50 hover:text-brown sm:pl-5 sm:pr-6"
              >
                Galería
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
