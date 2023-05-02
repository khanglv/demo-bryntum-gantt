/**
 * Main Application script
 */
import React, { Fragment, FunctionComponent } from "react";

import Gantt from "./Gantt";
import "./App.scss";

const App: FunctionComponent = () => {
  return (
    <Fragment>
      {/* BryntumDemoHeader component is used for Bryntum example styling only and can be removed */}
      {/* <BryntumDemoHeader children={<BryntumThemeCombo />} /> */}
      <Gantt />
    </Fragment>
  );
};

export default App;
