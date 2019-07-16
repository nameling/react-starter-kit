import React from "react";
import { Button } from 'antd';
import { inject, observer } from 'mobx-react';

@inject('XinyunStore')
@observer
class Dashboard extends React.Component{
    componentDidMount() {
        // const { getKeyOrMenu } = this.props.XinyunStore;
        // getKeyOrMenu();
    }
    render() {
        return <div>
          <Button type="primary">Primary</Button>
        </div>
    }
}

export default Dashboard;
