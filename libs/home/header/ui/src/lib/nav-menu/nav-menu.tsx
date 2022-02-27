import Link from 'next/link';
import { FaCircleNotch } from 'react-icons/fa';
import { HiOutlineSupport } from 'react-icons/hi';
import { IoMdCheckmarkCircleOutline, IoMdClose } from 'react-icons/io';
import { SharedSearchButton } from '@htl-chat/shared/search/button';

import './nav-menu.module.css';

/* eslint-disable-next-line */
export interface NavMenuProps {}

export function NavMenu(props: NavMenuProps) {
  return (
    <div className="fixed grid gap-6 bottom-0 left-0 w-full bg-primaryColor pt-8 px-6 pb-5 drop-shadow-3xl rounded-t-2xl">
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
          <SharedSearchButton />
        </div>
        <IoMdClose className="text-2xl cursor-pointer text-titleColor mr-1" />
      </div>
    </div>
  );
}

export default NavMenu;
