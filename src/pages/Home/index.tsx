/* eslint-disable */
import React, { Component, FC } from 'react';
import { DatePicker, Button } from 'antd';
import { Moment } from 'moment';
import style from './index.module.less';
import { type } from 'os';
import { number } from 'prop-types';
import { text } from 'body-parser';

const MyApp: FC = () => (
  <div>
    <Button type="ghost">按钮</Button>
  </div>
);

// enum 数字enum

// E.X is constant:
// All enum members in 'E1' and 'E2' are constant.
// 该类型已内置在TypeScript中
function process<T extends string | null>(text: T): T extends string ? string : null {
  return text && text.replace(/f/g, 'p');
}

process('foo').toUpperCase(); // Okay.
process(null).toUpperCase(); // Error!!!

type Props = AnyObject;
interface State {
  value: Moment | null;
}
class Home extends Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  private handleChange = (date, dateString): void => {
    console.info(date, dateString, { a: 1, b: false });
    this.setState({ value: date });
  };

  public render(): React.ReactElement {
    const { value } = this.state;
    return (
      <div className={style['page-home']}>
        <h1>Home</h1>
        <MyApp />
        <DatePicker value={value as Moment} onChange={this.handleChange} />
      </div>
    );
  }
}

export default Home;
