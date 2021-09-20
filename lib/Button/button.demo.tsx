import React, { Fragment } from 'react';
import Demo from '../../demo';
import ButtonExample1 from './button.example.1';
import ButtonExample2 from './button.example.2';
import ButtonExample3 from './button.example.3';

const ButtonDemo = () => {
  return (
    <Fragment>
      <h2 className="title">支持不同主题</h2>
      <Demo code={require('!!raw-loader!./button.example.1.tsx').default}>
        <ButtonExample1/>
      </Demo>
      <hr/>
      <h2 className="title">支持不同size</h2>
      <Demo code={require('!!raw-loader!./button.example.2.tsx').default}>
        <ButtonExample2/>
      </Demo>
      <hr/>
      <h2 className="title">支持禁用</h2>
      <Demo code={require('!!raw-loader!./button.example.3.tsx').default}>
        <ButtonExample3/>
      </Demo>
    </Fragment>
  );
}

export default ButtonDemo;
