import React, { Fragment } from 'react';
import Demo from '../../demo';
import DialogExample1 from './dialog.example.1';
import DialogExample2 from './dialog.example.2';
import DialogExample3 from './dialog.example.3';
import DialogExample4 from './dialog.example.4';

const IconDemo = () => {
  return (
    <Fragment>
      <h2 className="title">常规用法</h2>
      <Demo code={require('!!raw-loader!./dialog.example.1.tsx').default}>
        <DialogExample1/>
      </Demo>
      <hr/>
      <h2 className="title">支持点击遮罩层关闭</h2>
      <Demo code={require('!!raw-loader!./dialog.example.2.tsx').default}>
        <DialogExample2/>
      </Demo>
      <hr/>
      <h2 className="title">alert 框和 confirm 框</h2>
      <Demo code={require('!!raw-loader!./dialog.example.3.tsx').default}>
        <DialogExample3/>
      </Demo>
      <hr/>
      <h2 className="title">函数式调用</h2>
      <Demo code={require('!!raw-loader!./dialog.example.4.tsx').default}>
        <DialogExample4/>
      </Demo>
    </Fragment>
  );
}

export default IconDemo;
