import React, { Suspense } from 'react';
import ReactDom from 'react-dom';
import { LocaleProvider } from "antd";
import zhCN from "antd/lib/locale-provider/zh_CN";
import App from './app';

ReactDom.render(
    <LocaleProvider locale={zhCN}>
        <Suspense fallback={<div>loading</div>}>
            <App />
        </Suspense>
    </LocaleProvider>,
    document.getElementById("root")
)

