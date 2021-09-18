import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon/icon';

const fn: React.MouseEventHandler = (e) => {
  console.log(e.target);
};

ReactDOM.render(<div>
  <Icon name="wechat"
        onClick={fn}
        onMouseEnter={() => console.log('enter')}
        onMouseLeave={() => console.log('leave')}
        onTouchStart={() => console.log('touch')}
  />
  <Icon name="qq"/>
  <Icon name="alipay"/>
  <Icon name="weibo"/>
  <Icon name="taobao"/>
  <Icon name="firefox"/>
  <Icon name="google"/>
</div>, document.querySelector('#root'));
