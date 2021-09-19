import React from 'react';
import Button from './button';

export default function () {
  return (
    <div>
      <Button size="big">大号按钮</Button>
      <Button>普通按钮</Button>
      <Button size="small">小号按钮</Button>
    </div>
  );
}