import React from "react";
import MomentUtils from "material-ui-pickers/utils/moment-utils";
import DateFnsUtils from "material-ui-pickers/utils/date-fns-utils";
import LuxonUtils from "material-ui-pickers/utils/luxon-utils";
import { MuiPickersUtilsProvider } from "material-ui-pickers";
import BasicUsage from "./BasicUsage";

function App() {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <BasicUsage />
    </MuiPickersUtilsProvider>
  );
}

export default App;
