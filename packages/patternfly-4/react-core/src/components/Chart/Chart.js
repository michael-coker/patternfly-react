import React from 'react';
//import styles from '@patternfly/patternfly-next/components/Chart/styles.css';
//import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly-next/patternfly.css';
import PropTypes from 'prop-types';
import {
  VictoryPie,
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryStack,
  Bar,
  VictoryGroup
} from 'victory';
import './chart.css';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

const defaultProps = {
  children: null,
  className: ''
};

const sampleData = [
  { x: 1, y: 2 },
  { x: 2, y: 3 },
  { x: 3, y: 5 },
  { x: 4, y: 4 }
];

const Chart = ({ className, children, ...props }) => (
  <VictoryChart>
    {/*    
    <VictoryBar
      data={sampleData}
      dataComponent={<Bar className="pf-c-chart__bar"/>}
    />
    <VictoryBar
      data={sampleData}
      dataComponent={<Bar className="pf-c-chart__bar-gradient"/>}
    />
    */}
    <VictoryBar
      data={sampleData}
      dataComponent={<Bar className="pf-c-chart__bar-multi"/>}
    />
    {/*
    <VictoryGroup offset={20}
      colorScale={"qualitative"}
    >
      <VictoryBar
        data={[{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 5 }]}
        dataComponent={<Bar className="pf-c-chart__bar-multi"/>}
      />
      <VictoryBar
        data={[{ x: 1, y: 2 }, { x: 2, y: 1 }, { x: 3, y: 7 }]}
        dataComponent={<Bar className="pf-c-chart__bar-multi"/>}
      />
      <VictoryBar
        data={[{ x: 1, y: 3 }, { x: 2, y: 4 }, { x: 3, y: 9 }]}
        dataComponent={<Bar className="pf-c-chart__bar-multi"/>}
      />
    </VictoryGroup>
    */}
  </VictoryChart>
);

Chart.propTypes = propTypes;
Chart.defaultProps = defaultProps;

export default Chart;
