import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';
import IconDemo from './lib/icon/icon.demo';
import ButtonDemo from './lib/button/button.demo'
import DialogDemo from './lib/dialog/dialog.demo';
import LayoutDemo from './lib/layout/layout.demo';
import SwitchDemo from './lib/switch/switch.demo';
import TabsDemo from './lib/tabs/tabs.demo';
import './example.scss';
import { Icon } from './lib';


ReactDOM.render(
  <Router>
    <div className="site-page">
      <div className="site-header">
        <div className="logo">
          <Icon name="niuyouguo"/>
          Easy React-UI
        </div>
      </div>
      <div className="site-content">
        <div className="site-aside">
          <h2>组件</h2>
          <ul>
            <li>
              <NavLink to="/icon">Icon</NavLink>
            </li>
            <li>
              <NavLink to="/button">Button</NavLink>
            </li>
            <li>
              <NavLink to="/dialog">Dialog</NavLink>
            </li>
            <li>
              <NavLink to="/layout">Layout</NavLink>
            </li>
            <li>
              <NavLink to="/switch">Switch</NavLink>
            </li>
            <li>
              <NavLink to="/tabs">Tabs</NavLink>
            </li>
          </ul>
        </div>
        <div className="site-main">
          <Route path="/icon" component={IconDemo}/>
          <Route path="/button" component={ButtonDemo}/>
          <Route path="/dialog" component={DialogDemo}/>
          <Route path="/layout" component={LayoutDemo}/>
          <Route path="/switch" component={SwitchDemo}/>
          <Route path="/tabs" component={TabsDemo}/>
        </div>
      </div>
      <div className="site-footer">
        &copy;easy-ui
      </div>
    </div>
  </Router>
  , document.querySelector('#root'));