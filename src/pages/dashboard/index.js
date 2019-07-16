import React from "react";
import { Button } from 'antd';
import 'antd/es/button/style/css';
import { inject, observer } from 'mobx-react';
import s from './index.less';

@inject('XinyunStore')
@observer
class Dashboard extends React.Component{
    componentDidMount() {

        // const { getKeyOrMenu } = this.props.XinyunStore;
        // getKeyOrMenu();
    }

    render() {
        return <div className={s.d}>
          <Button type="primary">Primary</Button>
        </div>
    }
}

export default Dashboard;
