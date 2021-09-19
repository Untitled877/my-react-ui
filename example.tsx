import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';
import IconDemo from './lib/icon/icon.demo';
import ButtonDemo from './lib/button/button.demo'
import DialogDemo from './lib/dialog/dialog.demo';
import LayoutDemo from './lib/layout/layout.demo';
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
          </ul>
        </div>
        <div className="site-main">
          <Route path="/icon" component={IconDemo}/>
          <Route path="/button" component={ButtonDemo}/>
          <Route path="/dialog" component={DialogDemo}/>
          <Route path="/layout" component={LayoutDemo}/>
        </div>
      </div>
      <div className="site-footer">
        &copy;easy-ui
      </div>
    </div>
  </Router>
  , document.querySelector('#root'));