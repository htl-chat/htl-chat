import { HomeSection1Ui } from '@htl-chat/home/section1/ui';

import './HomeMain.module.css';

/* eslint-disable-next-line */
export interface HomeMainProps {
  children: JSX.Element|JSX.Element[];
}

export function HomeMain(props: HomeMainProps) {
  return (
    <main className="relative bg-primaryColor w-screen h-screen px-6 overflow-x-hidden">
      {props.children}
      <HomeSection1Ui />
    </main>
  );
}

export default HomeMain;
