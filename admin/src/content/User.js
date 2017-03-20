import React, { Component } from 'react';
import { Button } from 'antd';
import { check } from '../Authorization';
import config from '../../config/config';
class User extends Component {
  render() {
    return (
      <div>
        {check(7,config.base.add,(<Button type="primary">新增</Button>))}
        {check(7,config.base.update,(<Button>修改</Button>))}
        {check(7,config.base.delete,(<Button type="danger">删除</Button>))}
      </div>
    );
  }
}

export default User;
