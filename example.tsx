import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';
import IconExample from './lib/icon/icon.example';
import ButtonExample from './lib/button/button.example'
import DialogExample from './lib/dialog/dialog.example';
import LayoutExample from './lib/layout/layout.example';
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
          <Route path="/icon" component={IconExample}/>
          <Route path="/button" component={ButtonExample}/>
          <Route path="/dialog" component={DialogExample}/>
          <Route path="/layout" component={LayoutExample}/>
        </div>
      </div>
      <div className="site-footer">
        &copy;easy-ui
      </div>
    </div>
  </Router>
  , document.querySelector('#root'));