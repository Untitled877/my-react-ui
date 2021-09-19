import React, { useState } from 'react';
import Switch from './switch';

export default function () {
  const [value, setValue] = useState(false);
  return (
    <div>
      <Switch value={value} disabled onChange={(value:boolean) => setValue(value)}/>
    </div>
  );
}