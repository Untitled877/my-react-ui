import Button from '../button/button';
import React, {useState} from 'react';
import Dialog, {alert, confirm, modal} from './dialog';

export default function () {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
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
      <div>
        <h3>Example 1</h3>
        <Button onClick={() => setVisible1(!visible1)}>点击显示对话框</Button>
        <Dialog visible={visible1} buttons={
          [
            <Button theme="main" onClick={() => {setVisible1(false);}}>确定</Button>,
            <Button onClick={() => {setVisible1(false);}}>取消</Button>
          ]
        } onClose={() => {setVisible1(false);}}>
          <h3>标题</h3>
          <hr/>
          <p>第一行</p>
          <p>第二行</p>
        </Dialog>
      </div>
      <hr/>
      <div>
        <h3>Example 2:点击遮罩层关闭modal</h3>
        <Button onClick={() => setVisible2(!visible2)}>点击显示对话框</Button>
        <Dialog visible={visible2} closeOnClickMask={true} buttons={
          [
            <Button theme="main" onClick={() => {setVisible2(false);}}>确定</Button>,
            <Button onClick={() => {setVisible2(false);}}>取消</Button>
          ]
        } onClose={() => {setVisible2(false);}}>
          <strong>222</strong>
        </Dialog>
      </div>
      <hr/>
      <div>
        <h3>Example 3</h3>
        <Button onClick={() => alert('提示内容')}>alert</Button>
        <Button onClick={() => confirm('确认内容', () => {
          console.log('点击了yes');
        }, () => {
          console.log('点击了no');
        })}>confirm</Button>
      </div>
      <hr/>
      <div>
        <h3>Example 4</h3>
        <Button onClick={openModal}>modal</Button>
      </div>
    </div>
  );
}