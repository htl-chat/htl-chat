import Link from 'next/link';

import './HomeHeaderUi.module.css';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ReactComponent as Logo } from 'apps/home/public/logo.svg';

/* eslint-disable-next-line */
export interface HomeHeaderUiProps {}

export function HomeHeaderUi(props: HomeHeaderUiProps) {
  return (
    <header className="w-full fixed bottom-0 left-0 z-100 bg-primaryColor">
      <nav className="max-w-header h-header flex justify-between items-center container text-white">
        <Link href="/">
          <div className="cursor-pointer flex gap-1.5 items-center">
            <div className="w-7.5">
              <Logo />
            </div>
            <div className="flex gap-1">
              <h1 className="font-extrabold text-lg">htl.chat</h1>
              <p className="text-xxs text-countryCode font-medium">AT</p>
            </div>
          </div>
        </Link>
        <div className="fixed bottom-0 left-0 w-full bg-primaryColor pt-8 px-6 pb-16 drop-shadow-3xl rounded-t-3xl">
          
        </div>
      </nav>
    </header>
  );
}

export default HomeHeaderUi;
