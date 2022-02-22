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
          </div>
        </Link>
      </nav>
    </header>
  );
}

export default HomeHeaderUi;
