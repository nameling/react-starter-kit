/* eslint-disable */
import React, { Component } from 'react';
import { Button } from 'antd';
import moment, { Moment } from 'moment';
import DefineForm, { DefineFormProps } from '@/components/DefineForm';

// formItems即为表单的配置项
import formItems from './customFormItems';

interface DefineData {
  Input: string;
  password: string;
  Select: string;
  RadioGroup: string;
  RadioButtonGroup: string;
  CheckboxGroup: string[];
  DatePicker: string | Moment;
  RangePicker: [string, string] | [Moment, Moment];
  Switch: boolean;
}

const resData: DefineData = {
  Input: 'Input',
  password: 'password',
  Select: 'option2',
  RadioGroup: 'radio2',
  RadioButtonGroup: 'radio2',
  CheckboxGroup: ['checkbox2'],
  DatePicker: '2018-05-15T13:36:27.132Z',
  RangePicker: ['2018-04-15T13:36:27.132Z', '2018-05-15T13:36:27.132Z'],
  Switch: true,
};

class Point {
  x: number = 1;
  y: number = 2;
}

interface Point3d extends Point {
  z: number;
}

let point3d: Point3d = {x: 10, y: 20, z: 30};
console.log(point3d, '3ed')


const requestDetail = (): Promise<DefineData> =>
  new Promise((resolve) => {
    setTimeout((): void => {
      resolve(resData);
    }, 1500);
  });

class Edit extends Component {
  // FORM INSTANCE
  private formRef: React.ReactComponentElement<
    typeof DefineForm,
    DefineFormProps
  > | null;

  public constructor(props) {
    super(props);
    this.formRef = null;
  }

  public regetData = (): void => {
    console.log('hll');
  }

  public handleGetDetail = (): void => {
    requestDetail().then((res: DefineData): void => {
      res.DatePicker = moment(res.DatePicker);
      res.RangePicker = [
        moment(res.RangePicker[0]),
        moment(res.RangePicker[1]),
      ];
      if (this.formRef) {
        this.formRef.props.form.setFieldsValue(res);
      }
    });
  };

  public render(): React.ReactElement {
    console.log(formItems, 123);
    return (
      <div>
        <Button
          style={{ margin: 24 }}
          type="primary"
          onClick={this.handleGetDetail}
        >
          模拟请求数据然后设置表单值
        </Button>
        <DefineForm
          wrappedComponentRef={(node): void => {
            this.formRef = node;
          }}
          items={formItems}
        />
      </div>
    );
  }
}

export default Edit;
