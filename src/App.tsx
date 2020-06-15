import React, { Suspense } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import routes from "@/router/index";
import "@/App.less";

import Loading from "@/components/Loading/index";

const historyInstance = createBrowserHistory();

export default function App() {
  return (
    <Router history={historyInstance}>
      <Suspense fallback={<Loading />}>
        <Switch>
          {routes.map(
            ({ path, component: ComponentItem }): React.ReactNode => (
              <Route
                exact
                key={path}
                path={path}
                render={(): React.ReactNode => <ComponentItem />}
              />
            )
          )}
        </Switch>
      </Suspense>
    </Router>
  );
}
