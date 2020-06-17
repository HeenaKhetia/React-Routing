import React, { Component } from "react";

export class Comp0 extends Component {
    goToComp1 = () => {
        this.props.history.push('/comp1')
    }
  render() {
    return (
      <>
        <div className="text1">Body</div>
        {/* <button onClick={this.goToComp1}>Component - 1</button> */}
      </>
    );
  }
}

export default Comp0;
