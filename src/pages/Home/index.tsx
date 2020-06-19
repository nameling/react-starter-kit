import React, { Component } from "react";
import { DatePicker } from "antd";
import style from "./index.module.less";

interface Iprops {
  logo?: string;
  classname?: string;
  alt?: string;
}

const Logo = (props: Iprops) => {
  const { logo, classname, alt } = props;
  return <img className={classname} src={logo} alt={alt} />;
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    // console.info(date, dateString, { a: 1 }, { b: false });
    this.setState({ value: date });
  }

  render() {
    const { value } = this.state;
    return (
      <div className={style["page-home"]}>
        <h1>hello world</h1>
        <DatePicker value={value} onChange={this.handleChange} />
      </div>
    );
  }
}

export default Home;
