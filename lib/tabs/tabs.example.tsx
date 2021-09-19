import React from 'react';
import Tabs from './tabs';
import TabsItem from './tabsItem';

const Demo = () => {
  return (
    <Tabs onChange={(selected) => console.log(selected)}>
      <TabsItem title="标题1">内容1</TabsItem>
      <TabsItem title="标题2">内容2</TabsItem>
      <TabsItem title="标题3">内容3</TabsItem>
    </Tabs>
  );
};

export default Demo;