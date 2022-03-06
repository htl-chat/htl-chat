import { HomeSection1Ui } from '@htl-chat/home/section1/ui';

import './HomeMain.module.css';

/* eslint-disable-next-line */
export interface HomeMainProps {}

export function HomeMain(props: HomeMainProps) {
  return (
    <main className="bg-primaryColor w-screen h-screen px-6">
      <HomeSection1Ui />
    </main>
  );
}

export default HomeMain;
