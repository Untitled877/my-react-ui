import React from 'react';
import Button from './button';

export default function () {
  return (
    <div>
      <Button>默认按钮</Button>
      <Button theme="main">主要按钮</Button>
      <Button theme="text">信息按钮</Button>
      <Button theme="link">链接按钮</Button>
      <Button theme="danger">危险按钮</Button>
    </div>
  );
}