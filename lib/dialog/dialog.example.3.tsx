import Button from '../button/button';
import React from 'react';
import {alert, confirm} from './dialog';

export default function () {
  return (
    <div>
      <Button theme="main" onClick={() => alert('提示内容')}>alert</Button>
      <Button theme="main" onClick={() => confirm('确认内容', () => {
        console.log('点击了yes');
      }, () => {
        console.log('点击了no');
      })}>confirm</Button>
    </div>
  );
}