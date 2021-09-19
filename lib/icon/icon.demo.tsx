import React, { Fragment } from 'react';
import IconExample1 from './icon.example.1';
import IconExample2 from './icon.example.2';
import Demo from '../../demo';
import './icon.demo.scss';


const IconDemo = () => {
  return (
    <Fragment>
      <h2 className="title">常规用法</h2>
      <Demo code={require('!!raw-loader!./icon.example.1.tsx').default}>
        <IconExample1/>
      </Demo>
      <hr/>
      <h2 className="title">添加样式</h2>
      <Demo code={require('!!raw-loader!./icon.example.2.tsx').default}>
        <IconExample2/>
      </Demo>
    </Fragment>
  );
}

export default IconDemo;
