import React from 'react';
import Layout, {Header, Content, Footer} from './layout';
import './layout.example.scss';


export default function () {
  return (
    <div>
      <Layout className="layout">
        <Header className="x">header</Header>
        <Content className="y">content</Content>
        <Footer className="x">footer</Footer>
      </Layout>
    </div>
  );
}