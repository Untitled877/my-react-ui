import React from 'react';
import Button from './button';

export default function () {
  return (
    <div>
      <div>
        <h3>支持不同主题</h3>
        <Button>默认按钮</Button>
        <Button theme="main">主要按钮</Button>
        <Button theme="text">信息按钮</Button>
        <Button theme="link">链接按钮</Button>
        <Button theme="danger">危险按钮</Button>
      </div>
      <div>
        <h3>支持不同size</h3>
        <Button size="big">大号按钮</Button>
        <Button>普通按钮</Button>
        <Button size="small">小号按钮</Button>
      </div>
      <div>
        <h3>支持禁用</h3>
        <Button disabled>禁用按钮</Button>
      </div>
    </div>
  );
}