import React from 'react';
import * as ViewGL from '@htl-chat/earth-ui';

import './HomeEarthRenderer.module.css';

/* eslint-disable-next-line */
export interface HomeEarthRendererProps {}

export class HomeEarthRenderer extends React.Component<HomeEarthRendererProps> {
  private canvasRef: React.RefObject<HTMLCanvasElement>;
  viewGL: any;

  constructor(props: any) {
    super(props);
    this.canvasRef = React.createRef();
  }
  // ******************* COMPONENT LIFECYCLE ******************* //
  override componentDidMount() {
    const canvas = this.canvasRef.current;
    this.viewGL = new ViewGL(canvas);

    window.addEventListener('resize', this.handleResize);
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  override componentDidUpdate() {}

  override componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.viewGL.onWindowResize(window.innerWidth, window.innerHeight);
  };

  override render() {
    return (
      <div className="">
        <canvas ref={this.canvasRef}></canvas>
      </div>
    );
  }
}

export default HomeEarthRenderer;
