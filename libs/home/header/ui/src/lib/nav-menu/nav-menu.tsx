import Link from 'next/link';
import { FaCircleNotch } from 'react-icons/fa';
import { HiOutlineSupport } from 'react-icons/hi';
import { IoMdCheckmarkCircleOutline, IoMdClose } from 'react-icons/io';
import { SharedSearchButton } from '@htl-chat/shared/search/button';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

import './nav-menu.module.css';

/* eslint-disable-next-line */
export interface NavMenuProps {
  navMenuOpen: any;
  setNavMenuOpen: any;
  setIsSearchOpen: any;
}

export function NavMenu(props: NavMenuProps) {
  const { navMenuOpen, setNavMenuOpen, setIsSearchOpen } = props;

  function closeModal() {
    setNavMenuOpen(false);
  }

  return (
    <Transition appear show={navMenuOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed bottom-0 left-0 w-full bg-primaryColor pt-8 px-6 pb-5 drop-shadow-3xl rounded-t-2xl z-50"
        onClose={closeModal}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-100"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-100"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-100"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="grid gap-6">
            <ul className="grid gap-8 grid-cols-3 text-titleColor">
              <li className="cursor-pointer">
                <Link href="/link">
                  <div className="flex flex-col items-center text-sm font-medium">
                    <FaCircleNotch className="text-xl" />
                    <p className="">About</p>
                  </div>
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link href="/link">
                  <div className="flex flex-col items-center text-sm font-medium">
                    <HiOutlineSupport className="text-xl" />
                    <p className="">FAQ</p>
                  </div>
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link href="/link">
                  <div className="flex flex-col items-center text-sm font-medium">
                    <IoMdCheckmarkCircleOutline className="text-xl" />
                    <p className="">Safety</p>
                  </div>
                </Link>
              </li>
            </ul>
            <div className="flex justify-between items-center">
              <div className="w-[80%] ml-3">
                <SharedSearchButton setIsSearchOpen={setIsSearchOpen} setNavMenuOpen={setNavMenuOpen} />
              </div>
              <IoMdClose
                className="text-2xl cursor-pointer text-titleColor mr-1"
                onClick={closeModal}
              />
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}

export default NavMenu;
