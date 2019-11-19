import React from "react";
import { Button } from 'antd';
import 'antd/es/button/style/css';
import s from './index.less';

class Dashboard extends React.Component{
    componentDidMount() {
        console.log(13217878878)
    }
    render() {
        return <div className={s.d}>
          <Button type="primary">Primary</Button>
        </div>
    }
}

export default Dashboard;
