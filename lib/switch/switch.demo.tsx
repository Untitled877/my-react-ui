import React, { Fragment } from 'react';
import Demo from '../../demo';
import SwitchExample1 from './switch.example.1';
import SwitchExample2 from './switch.example.2';

const IconDemo = () => {
  return (
    <Fragment>
      <h2 className="title">常规用法</h2>
      <Demo code={require('!!raw-loader!./switch.example.1.tsx').default}>
        <SwitchExample1/>
      </Demo>
      <hr/>
      <h2 className="title">支持 disabled</h2>
      <Demo code={require('!!raw-loader!./switch.example.2.tsx').default}>
        <SwitchExample2/>
      </Demo>
    </Fragment>
  );
}

export default IconDemo;
