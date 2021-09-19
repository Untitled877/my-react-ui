import Button from '../button/button';
import React, {useState} from 'react';
import Dialog from './dialog';

export default function () {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button theme="main" onClick={() => setVisible(!visible)}>点击显示对话框</Button>
      <Dialog visible={visible}
              closeOnClickMask={true}
              title="这是标题"
              buttons={
        [
          <Button theme="main" onClick={() => {setVisible(false);}}>确定</Button>,
          <Button onClick={() => {setVisible(false);}}>取消</Button>
        ]
      } onClose={() => {setVisible(false);}}>
        <p>第一行</p>
        <p>第二行</p>
      </Dialog>
    </div>
  );
}