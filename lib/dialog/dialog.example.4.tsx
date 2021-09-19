import Button from '../button/button';
import React from 'react';
import {modal} from './dialog';

export default function () {
  const openModal = () => {
    const close = modal(
      <div>
        <p>文字部分</p>
        <Button onClick={() => close()}>close</Button>
      </div>
    );
  };

  return (
    <div>
      <Button theme="main" onClick={openModal}>modal</Button>
    </div>
  );
}