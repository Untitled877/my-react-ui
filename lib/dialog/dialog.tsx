import { scopedClassMaker } from '../helpers/classes';
import React, {Fragment, ReactElement, ReactNode} from 'react';
import ReactDOM from 'react-dom';
import { Icon } from '../index';
import './dialog.scss';
import Button from '../button/button';

interface Props {
  visible: boolean;
  buttons?: Array<ReactElement>;
  onClose: React.MouseEventHandler;
  closeOnClickMask?: boolean;
}

const scopedClass = scopedClassMaker('easy-dialog');
const sc = scopedClass;

const Dialog: React.FunctionComponent<Props> = (props) => {
  const onClickClose:React.MouseEventHandler = (e) => {
    props.onClose(e);
  };
  const onClickMask:React.MouseEventHandler = (e) => {
    if(props.closeOnClickMask) {
      props.onClose(e);
    }
  };
  const result = props.visible &&
    <Fragment>
      <div className={sc('mask')} onClick={onClickMask}/>
      <div className={sc('')}>
        <div className={sc('close')} onClick={onClickClose}>
          <Icon name="close"></Icon>
        </div>
        <main className={sc('main')}>
          {props.children}
        </main>
        {
          props.buttons && props.buttons.length > 0 &&
            <footer className={sc('footer')}>
              {props.buttons && props.buttons.map((button, index) =>
                React.cloneElement(button, {key:index})
              )}
            </footer>
        }
      </div>
    </Fragment>
  return (
    ReactDOM.createPortal(result, document.body)
  )
};
Dialog.defaultProps = {
  closeOnClickMask: false
};
const modal = (content:ReactNode, buttons?:Array<ReactElement>, afterClose?: () => void) => {
  const close = () => {
    ReactDOM.render(React.cloneElement(component, {visible:false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };
  const component =
    <Dialog
      visible={true}
      buttons={buttons}
      onClose={() => {
      close();
      afterClose && afterClose();}}
    >
      <div className={sc('text')}>
        {content}
      </div>
    </Dialog>
  const div = document.createElement('div');
  document.body.append(div);
  ReactDOM.render(component, div);
  return close;
};

const alert = (content: string) => {
  const button = <Button theme="main" onClick={() => close()}>OK</Button>;
  const close = modal(content, [button]);
};
const confirm = (content:string, yes?:()=>void, no?:()=>void) => {
  const onYes = () => {
    close();
    yes && yes();
  };
  const onNo = () => {
    close();
    no && no();
  };
  const buttons = [
    <Button theme="main" onClick={onYes}>yes</Button>,
    <Button onClick={onNo}>no</Button>
  ];
  const close = modal(content, buttons, no);
};

export {alert, confirm, modal};
export default Dialog;