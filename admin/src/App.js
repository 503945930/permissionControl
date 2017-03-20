import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { Layout,  Breadcrumb } from 'antd';
const { Header, Content, Sider } = Layout;
import routes from './routes';
import LeftMenu from './Menu'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
         <Header className="header">
           <div className="logo" />

         </Header>
         <Layout>
           <Sider width={200} style={{ background: '#fff' }}>
            <LeftMenu />
           </Sider>
           <Layout style={{ padding: '0 24px 24px' }}>
             <Breadcrumb style={{ margin: '12px 0' }}>
               <Breadcrumb.Item>Home</Breadcrumb.Item>
               <Breadcrumb.Item>List</Breadcrumb.Item>
               <Breadcrumb.Item>App</Breadcrumb.Item>
             </Breadcrumb>
             <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 700 }}>
               {routes.map((route, index) => (
                 // Render more <Route>s with the same paths as
                 // above, but different components this time.
                 <Route
                   key={index}
                   path={route.path}
                   exact={route.exact}
                   component={route.main}
                 />
               ))}
             </Content>
           </Layout>
         </Layout>
       </Layout>
     </Router>
    );
  }
}

export default App;
