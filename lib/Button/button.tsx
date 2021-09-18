import * as React from 'react';
import {ButtonHTMLAttributes} from 'react';
import './button.scss';
import classes from '../helpers/classes';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: 'button' | 'main' | 'link' | 'text' | 'danger';
  size?: 'big' | 'normal' | 'small'
}

const Button: React.FunctionComponent<Props> = (props) => {
  const {className, children, theme, size, ...rest} = props;
  return (
    <button className={
      classes('easy-button', `easy-theme-${theme}`, `easy-size-${size}`, className)
    }
            {...rest}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  theme: 'button',
  size: 'normal'
};

export default Button;