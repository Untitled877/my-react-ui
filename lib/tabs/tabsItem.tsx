import React, { ReactNode } from 'react';
import './tabs.scss';

interface TabsItemProps {
  title: ReactNode;
}

const TabsItem: React.FC<TabsItemProps> = (props) => {
  const { children, title, ...rest } = props;
  return (
    <div className="easy-tabs-item" {...rest}>
      {children}
    </div>
  );
};

export default TabsItem;