import React from 'react';
import Aside from './aside';
import Content from './content';
import Footer from './footer';
import Header from './header';
import Layout from './layout';
import './layout.example.scss';


export default function () {
  return (
    <div>
      <div>
        <h3>Example 1</h3>
        <Layout className="layout">
          <Header className="x">header</Header>
          <Content className="y">content</Content>
          <Footer className="x">footer</Footer>
        </Layout>
      </div>
      <div>
        <h3>Example 2</h3>
        <Layout className="layout">
          <Header className="x">header</Header>
          <Layout>
            <Aside className="z">aside</Aside>
            <Content className="y">content</Content>
          </Layout>
          <Footer className="x">footer</Footer>
        </Layout>
      </div>
      <div>
        <h3>Example 3</h3>
        <Layout className="layout">
          <Header className="x">header</Header>
          <Layout>
            <Content className="y">content</Content>
            <Aside className="z">aside</Aside>
          </Layout>
          <Footer className="x">footer</Footer>
        </Layout>
      </div>
      <div>
        <h3>Example 4</h3>
        <Layout className="layout">
          <Aside className="z">aside</Aside>
          <Layout>
            <Header className="x">header</Header>
            <Content className="y">content</Content>
            <Footer className="x">footer</Footer>
          </Layout>
        </Layout>
      </div>
    </div>
  );
}