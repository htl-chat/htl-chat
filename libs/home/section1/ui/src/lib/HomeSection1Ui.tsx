import './HomeSection1Ui.module.css';
import { Fragment } from 'react';
import { ReactComponent as HeroGlow } from '../assets/hero-glow.svg';
import { HomeEarthRenderer } from '@htl-chat/earth';

/* eslint-disable-next-line */
export interface HomeSection1UiProps {}

export function HomeSection1Ui(props: HomeSection1UiProps) {
  return (
    <Fragment>
      <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <HeroGlow className="w-[850px]" />
      </div>
      <div className="text-titleColor font-black text-5xl pt-24 space-y-2 z-10">
        <h1>A place to</h1>
        <h1 className="text-transparent bg-clip-text w-max bg-gradient-to-r from-[#A2FACF] to-[#64ACFF]">
          Collaborate
        </h1>
      </div>
      <h2 className="font-semibold text-xl text-titleColor/50 pt-2">
        Connect with other Students
      </h2>
      <div className="relative top-12">
        <HomeEarthRenderer />
      </div>
    </Fragment>
  );
}

export default HomeSection1Ui;
