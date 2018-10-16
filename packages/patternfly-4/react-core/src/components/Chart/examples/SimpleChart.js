import React from 'react';
import { Chart } from '@patternfly/react-core';

class SimpleChart extends React.Component {
  static title = 'Simple Chart';

  render() {
    return (
      <Chart />
    );
  }
}

export default SimpleChart;
