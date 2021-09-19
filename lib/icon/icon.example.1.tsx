import React from 'react';
import Icon from './icon';
import './icon.example.scss';

const IconExample1: React.FunctionComponent = () => {
  return (
    <div className="example">
      <Icon name="alipay"/>
      <Icon name="firefox"/>
      <Icon name="google"/>
      <Icon name="qq"/>
      <Icon name="taobao"/>
      <Icon name="wechat"/>
      <Icon name="weibo"/>
      <Icon name="zhihu"/>
    </div>
  );
};

export default IconExample1;