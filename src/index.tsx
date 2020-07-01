/* eslint-disable no-restricted-globals */
/* eslint-disable react/jsx-props-no-spreading */
import React, { Suspense } from 'react';
import ReactDom from 'react-dom';
import { LocaleProvider } from 'antd';
import { Provider } from 'mobx-react';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import App from './App';
import store from './store';

ReactDom.render(
  <LocaleProvider locale={zhCN}>
    <Suspense fallback={<div>loading</div>}>
      <Provider {...store}>
        <App history={history} />
      </Provider>
    </Suspense>
  </LocaleProvider>,
  document.getElementById('root')
);

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept();
  }
}
