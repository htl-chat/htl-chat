import Link from 'next/link';
import { AiOutlineHome } from 'react-icons/ai';

import './nav-menu.module.css';

/* eslint-disable-next-line */
export interface NavMenuProps {}

export function NavMenu(props: NavMenuProps) {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-primaryColor pt-8 px-6 pb-16 drop-shadow-3xl rounded-t-3xl">
      <ul className="grid gap-8 grid-cols-3">
        <li className="cursor-pointer">
          <Link href="/link">
            <div className="flex flex-col items-center text-sm text-title-color font-medium">
              <AiOutlineHome className="text-xl" /> 
              <p className="">Home</p>
            </div>
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/link">
            <div className="flex flex-col items-center text-sm text-title-color font-medium">
              <AiOutlineHome className="text-xl" /> 
              <p className="">FAQ</p>
            </div>
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/link">
            <div className="flex flex-col items-center text-sm text-title-color font-medium">
              <AiOutlineHome className="text-xl" /> 
              <p className="">About</p>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavMenu;
