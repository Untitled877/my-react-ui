import React, { Fragment } from 'react';
import TabsExample from './tabs.example';
import Demo from '../../demo';


const TabsDemo = () => {
  return (
    <Fragment>
      <h2 className="title">常规用法</h2>
      <Demo code={require('!!raw-loader!./tabs.example.tsx').default}>
        <TabsExample/>
      </Demo>
    </Fragment>
  );
}

export default TabsDemo;
