import React, { Component } from "react";

class shoppingCart extends Component {
  render() {
    const summary = Object.keys(this.state.selected).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      const selectedOption = this.state.selected[feature];

      <div className="summary__option" key={featureHash}>
        <div className="summary__option__label">{feature} </div>
        <div className="summary__option__value">{selectedOption.name}</div>
        <div className="summary__option__cost">
          {USCurrencyFormat.format(selectedOption.cost)}
        </div>
      </div>;
    });

    const total = Object.keys(this.state.selected).reduce(
      (acc, curr) => acc + this.state.selected[curr].cost,
      0
    );
    return <div>{this.summary}</div>;
  }
}

export default shoppingCart;
