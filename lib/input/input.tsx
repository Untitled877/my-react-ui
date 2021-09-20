import * as React from 'react';
import {InputHTMLAttributes} from 'react';
import classes, { scopedClassMaker } from '../helpers/classes';
import './input.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  errorMsg?:string;
}
const scopedClass = scopedClassMaker('easy-input');
const sc = scopedClass;

const Input: React.FunctionComponent<Props> = (props) => {
  const {className, readOnly, disabled, errorMsg, ...rest} = props;
  const isError = sc({'error': (errorMsg?true:false)});
  return (
    <div>
      <input className={classes('easy-input', className, isError)}
             disabled={disabled}
             readOnly={readOnly}
             {...rest}/>
      {errorMsg && <span className="easy-input-errorMsg">{errorMsg}</span>}
    </div>
  );
};
export default Input;