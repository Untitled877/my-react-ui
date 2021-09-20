import React, { Fragment } from 'react';
import Demo from '../../demo';
import InputExample1 from './input.example.1';
import InputExample2 from './input.example.2';
import InputExample3 from './input.example.3';
import InputExample4 from './input.example.4';

const InputDemo = () => {
  return (
    <Fragment>
      <h2 className="title">常规用法</h2>
      <Demo code={require('!!raw-loader!./input.example.1.tsx').default}>
        <InputExample1/>
      </Demo>
      <h2 className="title">支持禁用</h2>
      <Demo code={require('!!raw-loader!./input.example.2.tsx').default}>
        <InputExample2/>
      </Demo>
      <h2 className="title">只读状态</h2>
      <Demo code={require('!!raw-loader!./input.example.3.tsx').default}>
        <InputExample3/>
      </Demo>
      <h2 className="title">错误提示</h2>
      <Demo code={require('!!raw-loader!./input.example.4.tsx').default}>
        <InputExample4/>
      </Demo>
    </Fragment>
  );
}

export default InputDemo;
