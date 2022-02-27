import { FiSearch, FiCommand } from 'react-icons/fi';

import './SharedSearchButton.module.css';

/* eslint-disable-next-line */
export interface SharedSearchButtonProps {}

export function SharedSearchButton(props: SharedSearchButtonProps) {
  return (
    <button className="bg-searchBarBg border-searchBarBorder border-2 pl-4 py-1 pr-2 rounded-xl cursor-pointer w-full">
      <div className="flex justify-between text-searchBarText">
        <div className="flex items-center gap-2">
          <FiSearch className="text-xl" />
          <p className="font-medium text-lg">Search</p>
        </div>
        <div className="flex items-center gap-1 text-sm">
          <kbd className="self-center rounded-md border-searchBarBorder border-2 px-1 py-0.5">
            <FiCommand />
          </kbd>
          <kbd className=" text-center rounded-md border-searchBarBorder border-2 px-1.5 h-[22px]">
            <p className="-translate-y-[1px]">K</p>
          </kbd>
        </div>
      </div>
    </button>
  );
}

export default SharedSearchButton;
