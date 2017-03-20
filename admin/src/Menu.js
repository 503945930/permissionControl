import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import { Menu , Icon } from 'antd';
const { SubMenu } = Menu;
import config from '../config/config';
import { check } from './Authorization';

class LeftMenu extends Component {
  render() {
    return (
             <Menu
               mode="inline"
               defaultSelectedKeys={['1']}
               defaultOpenKeys={['sub1']}
               style={{ height: '100%' }}
             >
               <SubMenu key="user" title={<span><Icon type="user" />用户设置</span>}>
                 {check(7,config.base.list,(<Menu.Item key="1"><Link to="/user">用户管理</Link></Menu.Item>))}
               </SubMenu>
               <SubMenu key="ktv" title={<span><Icon type="user" />KTV设置</span>}>
                 <Menu.Item key="2"><Link to="/ktv">KTV管理</Link></Menu.Item>
               </SubMenu>
             </Menu>
    );
  }
}

export default LeftMenu;
