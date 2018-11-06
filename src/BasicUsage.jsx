import React, { Fragment, PureComponent } from "react";
import { DatePicker } from "material-ui-pickers";

export default class BasicUsage extends PureComponent {
  state = {
    selectedDate: new Date()
  };

  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };

  render() {
    const { selectedDate } = this.state;

    return (
      <Fragment>
        <div>
          <DatePicker
            keyboard
            clearable
            label="Uncontrolled input"
            value={selectedDate}
            onChange={this.handleDateChange}
            animateYearScrolling={false}
            minDate={new Date()}
            onInputChange={e => console.log("Keyboard Input:", e.target.value)}
          />
        </div>

        <div>
          <DatePicker
            keyboard
            label="Masked input"
            format="DD/MM/YYYY"
            placeholder="DD/MM/YYYY"
            // handle clearing outside => pass plain array if you are not controlling value outside
            mask={value =>
              value
                ? [/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]
                : []
            }
            value={selectedDate}
            onChange={this.handleDateChange}
            disableOpenOnEnter
            animateYearScrolling={false}
          />
        </div>

        <div>
          <DatePicker
            keyboard
            label="Can shortcut slashes"
            format="DD/MM/YYYY"
            placeholder="DD/MM/YYYY"
            // handle clearing outside => pass plain array if you are not controlling value outside
            mask={value =>
              value
                ? [/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]
                : []
            }
            value={selectedDate}
            onChange={this.handleDateChange}
            disableOpenOnEnter
            animateYearScrolling={false}
            onKeyDown={e => {
              console.log(e.target.selectionStart, e.target.selectionEnd);
              if (e.key === "/") {
                let selectionStart = e.target.selectionStart;
                let [dd, mm, yyyy] = e.target.value.split("/");
                let set;
                if (dd && dd.match(/[1-9]_/)) {
                  console.log("dd");
                  dd = `0${dd.charAt(0)}`;
                  selectionStart = 3;
                  set = true;
                } else if (mm && mm.match(/[1-9]_/)) {
                  console.log("mm");
                  mm = `0${mm.charAt(0)}`;
                  selectionStart = 6;
                  set = true;
                }
                if (set) {
                  e.target.value = `${dd}/${mm}/${yyyy}`;
                  const it = e.target;
                  setTimeout(
                    () => it.setSelectionRange(selectionStart, selectionStart),
                    0
                  );
                }
              }
            }}
          />
        </div>
      </Fragment>
    );
  }
}
