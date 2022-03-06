import { HomeHeaderUi } from '@htl-chat/home/header/ui';
import { SharedSearchResults } from '@htl-chat/shared/search/results';
import { Fragment, useState } from 'react';
import styles from './index.module.css';

export function Index() {
  const [isSearchOpen, setIsSearchOpen] = useState<any>(false);
  return (
    <Fragment>
      <main className="bg-primaryColor w-screen h-screen">
        <SharedSearchResults
          isSearchOpen={isSearchOpen}
          setIsSearchOpen={setIsSearchOpen}
        />
        <HomeHeaderUi
          setIsSearchOpen={setIsSearchOpen}
        />
      </main>
    </Fragment>
  );
}

export default Index;
