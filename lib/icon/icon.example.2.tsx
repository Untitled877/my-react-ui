import React from 'react';
import Icon from './icon';
import './icon.example.scss';

const IconExample2: React.FunctionComponent = () => {
  return (
    <div className="example">
      <Icon name="alipay" style={{color: '#06b4fd'}}/>
      <Icon name="firefox" style={{width: '2em', height: '2em'}}/>
      <Icon name="google" style={{width: '2em', height: '2em'}}/>
      <Icon name="qq" style={{color: '#68a5e1'}}/>
      <Icon name="taobao" style={{color: '#fc8848'}}/>
      <Icon name="wechat" style={{width: '2em', height: '2em'}}/>
      <Icon name="weibo" style={{width: '2em', height: '2em'}}/>
      <Icon name="zhihu" style={{width: '2em', height: '2em'}}/>
    </div>
  );
};

export default IconExample2;