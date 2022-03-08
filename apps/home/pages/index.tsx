import { Fragment, useState } from 'react';
import { HomeHeaderUi } from '@htl-chat/home/header/ui';
import { SharedSearchResults } from '@htl-chat/shared/search/results';
import { HomeMain } from '@htl-chat/home/main';
import styles from './index.module.css';

export function Index() {
  const [isSearchOpen, setIsSearchOpen] = useState<any>(false);
  return (
    <HomeMain>
      <HomeHeaderUi setIsSearchOpen={setIsSearchOpen} />
      <SharedSearchResults
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
      />
    </HomeMain>
  );
}

export default Index;
