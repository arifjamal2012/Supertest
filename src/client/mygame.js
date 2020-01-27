import React from 'react';

class mygame extends React.Component {
  state = {
    count: 0,
  };

  add = () => {
    const currentCount = this.state.count;
    this.setState({
      // eslint-disable-next-line no-magic-numbers
      count: currentCount + 1,
    });
  }

  subtract = () => {
    const currentCount = this.state.count;
    this.setState({
      // eslint-disable-next-line no-magic-numbers
      count: currentCount - 1,
    });

  }

  render() {
    return <div style={{ border: 'solid 1px black' }}>
      <p>{this.state.count}</p>
      <button onClick={this.add}>Add</button>
      <button onClick={this.subtract}>Subtract</button>
    </div>;
  }
}

// eslint-disable-next-line no-undef
export default mygame;