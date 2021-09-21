import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {HashRouter as Router, Route, NavLink, Redirect, Switch} from 'react-router-dom';
import Intro from './lib/Intro';
import IconDemo from './lib/icon/icon.demo';
import ButtonDemo from './lib/button/button.demo';
import DialogDemo from './lib/dialog/dialog.demo';
import LayoutDemo from './lib/layout/layout.demo';
import SwitchDemo from './lib/switch/switch.demo';
import TabsDemo from './lib/tabs/tabs.demo';
import InputDemo from './lib/input/input.demo';
import './example.scss';
import {Icon} from './lib';


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
          <ul>
            <li>
              <NavLink to="/doc">介绍</NavLink>
            </li>
          </ul>
          <h2>组件</h2>
          <ul>
            <li>
              <NavLink to="/icon">Icon</NavLink>
            </li>
            <li>
              <NavLink to="/button">Button</NavLink>
            </li>
            <li>
              <NavLink to="/switch">Switch</NavLink>
            </li>
            <li>
              <NavLink to="/input">Input</NavLink>
            </li>
            <li>
              <NavLink to="/tabs">Tabs</NavLink>
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
          <Switch>
            <Route exact path="/doc" component={Intro}/>
            <Route exact path="/icon" component={IconDemo}/>
            <Route exact path="/button" component={ButtonDemo}/>
            <Route exact path="/switch" component={SwitchDemo}/>
            <Route exact path="/input" component={InputDemo}/>
            <Route exact path="/tabs" component={TabsDemo}/>
            <Route exact path="/dialog" component={DialogDemo}/>
            <Route exact path="/layout" component={LayoutDemo}/>
            <Redirect exact from="/" to="/doc"/>
          </Switch>
        </div>
      </div>
    </div>
  </Router>
  , document.querySelector('#root'));