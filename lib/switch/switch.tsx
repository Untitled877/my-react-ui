import * as React from 'react';
import './switch.scss';
import classes, { scopedClassMaker } from '../helpers/classes';

interface Props {
  className?: string;
  value: boolean;
  onChange: (value: boolean) => void;
  disabled?: boolean;
}
const scopedClass = scopedClassMaker('easy-switch');
const sc = scopedClass;

const Switch: React.FunctionComponent<Props> = (props) => {
  const {className, value, disabled, onChange, ...rest} = props;
  const isChecked = sc({'checked': value});
  // @ts-ignore
  const isDisabled = sc({'disabled': disabled});
  const handleClick = () => {
    if (disabled) return;
    onChange(!value);
  };
  return (
    <button className={classes('easy-switch', className, isChecked, isDisabled)}
            onClick={handleClick}
            disabled={disabled}
            {...rest}>
      <span></span>
    </button>
  );
};

Switch.defaultProps = {
  disabled: false
}

export default Switch;