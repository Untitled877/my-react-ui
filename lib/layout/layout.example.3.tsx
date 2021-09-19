import React from 'react';
import Layout, {Header, Aside, Content, Footer} from './layout';
import './layout.example.scss';


export default function () {
  return (
    <div>
      <Layout className="layout">
        <Header className="x">header</Header>
        <Layout>
          <Content className="y">content</Content>
          <Aside className="z">aside</Aside>
        </Layout>
        <Footer className="x">footer</Footer>
      </Layout>
    </div>
  );
}