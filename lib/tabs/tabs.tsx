import React, {ReactElement, ReactNode, useEffect, useRef, useState} from 'react';
import './tabs.scss';
import classes, { scopedClassMaker } from '../helpers/classes';

const scopedClass = scopedClassMaker('easy-tabs');
const sc = scopedClass;

interface Props {
  defaultSelected?: ReactNode;
  onChange?: (selected: ReactNode) => void;
}

const Tabs: React.FC<Props> = (props) => {
  const { children, defaultSelected, onChange } = props;
  const titles = (children as Array<ReactElement>).map((child) => {
    return child.props.title;
  });
  const [selected, setSelected] = useState<ReactNode>(
    defaultSelected || titles[0],
  );
  const content = (children as Array<ReactElement>).filter((child) => {
    return child.props.title === selected;
  })[0];
  const onClickTitle = (title: ReactNode) => {
    setSelected(title);
  };

  const indicator = useRef<HTMLDivElement | null>(null);
  const navWrapper = useRef<HTMLDivElement | null>(null);
  const selectItem = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const { width, left } = selectItem.current!.getBoundingClientRect();
    const { left: left2 } = navWrapper.current!.getBoundingClientRect();
    indicator.current!.style.left = `${left - left2}px`;
    indicator.current!.style.width = `${width}px`;
  }, [selectItem.current]);

  useEffect(() => {
    if (onChange) onChange(selected);
  }, [selected]);
  return (
    <div className="easy-tabs">
      <div className="easy-tabs-nav" ref={navWrapper}>
        {titles.map((t, i) => {
          return (
            <div
              className={classes("easy-tabs-nav-item",sc({
                selected: selected === t,
              }))}
              key={i}
              onClick={() => onClickTitle(t)}
              ref={(el) => {
                if (selected === t) selectItem.current = el;
              }}
            >
              {t}
            </div>
          );
        })}
        <div className="easy-tabs-nav-indicator" ref={indicator} />
      </div>
      <div className="easy-tabs-content">{content}</div>
    </div>
  );
};

export default Tabs;