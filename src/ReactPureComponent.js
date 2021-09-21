import React, { PureComponent } from "react";
import ReactPureComponentChild from "./ReactPureComponentChild";

export default class ReactPureComponent extends PureComponent {
    //state value initialised
  state = {
    valueP: 1,
  };

  componentDidMount() {
    //state value modified after 4000 milliseconds, if value is same
    //then compoent will not be rendered. In this case value is same
    setInterval(() => {
      this.setState(() => {
        return { valueP: 1 };
      });
    }, 4000);
  }
  render() {
    console.log("render app");
    return (
      <div>
        <h1>Pure Component Example</h1>
        <h3 style={{ paddingLeft: "30px" }}>
            {/*Rendering imported child component for which state valueis assigned */}
          <ReactPureComponentChild value={this.state.valueP} />
        </h3>
      </div>
    );
  }
}





