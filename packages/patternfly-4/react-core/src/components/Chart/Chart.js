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
  VictoryGroup,
  assign,
  theme,
  VictoryTheme
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

/***************/
// Start Theme //
/***************/

// Colors
const colors = [
  "#252525",
  "#525252",
  "#737373",
  "#969696",
  "#bdbdbd",
  "#d9d9d9",
  "#f0f0f0"
];
const charcoal = "#252525";
const grey = "#969696";

// Typography
const sansSerif =
  "'Gill Sans', 'Gill Sans MT', 'Ser­avek', 'Trebuchet MS', sans-serif";
const letterSpacing = "normal";
const fontSize = 14;

// Layout
const baseProps = {
  width: 450,
  height: 300,
  padding: 50,
  colorScale: colors
};

// Labels
const baseLabelStyles = {
  fontFamily: sansSerif,
  fontSize,
  letterSpacing,
  padding: 10,
  fill: charcoal,
  stroke: "transparent"
};
const centeredLabelStyles = assign({ textAnchor: "middle" }, baseLabelStyles);

// Strokes
const strokeLinecap = "round";
const strokeLinejoin = "round";

// Put it all together...
const fooTheme = {
  area: assign({
    style: {
      data: {
        fill: charcoal
      },
      labels: centeredLabelStyles
    }
  }, baseProps),
  axis: assign({
    style: {
      axis: {
        fill: "transparent",
        stroke: charcoal,
        strokeWidth: 1,
        strokeLinecap,
        strokeLinejoin
      },
      axisLabel: assign({}, centeredLabelStyles, {
        padding: 25
      }),
      grid: {
        fill: "none",
        stroke: "none",
        pointerEvents: "painted"
      },
      ticks: {
        fill: "transparent",
        size: 1,
        stroke: "transparent"
      },
      tickLabels: baseLabelStyles
    }
  }, baseProps),
  bar: assign({
    style: {
      data: {
        fill: charcoal,
        padding: 8,
        strokeWidth: 0
      },
      labels: baseLabelStyles
    }
  }, baseProps),
  boxplot: assign({
    style: {
      max: { padding: 8, stroke: charcoal, strokeWidth: 1 },
      maxLabels: baseLabelStyles,
      median: { padding: 8, stroke: charcoal, strokeWidth: 1 },
      medianLabels: baseLabelStyles,
      min: { padding: 8, stroke: charcoal, strokeWidth: 1 },
      minLabels: baseLabelStyles,
      q1: { padding: 8, fill: grey },
      q1Labels: baseLabelStyles,
      q3: { padding: 8, fill: grey },
      q3Labels: baseLabelStyles
    },
    boxWidth: 20
  }, baseProps),
  candlestick: assign({
    style: {
      data: {
        stroke: charcoal,
        strokeWidth: 1
      },
      labels: centeredLabelStyles
    },
    candleColors: {
      positive: "#ffffff",
      negative: charcoal
    }
  }, baseProps),
  chart: baseProps,
  errorbar: assign({
    borderWidth: 8,
    style: {
      data: {
        fill: "transparent",
        stroke: charcoal,
        strokeWidth: 2
      },
      labels: centeredLabelStyles
    }
  }, baseProps),
  group: assign({
    colorScale: colors
  }, baseProps),
  legend: {
    colorScale: colors,
    gutter: 10,
    orientation: "vertical",
    titleOrientation: "top",
    style: {
      data: {
        type: "circle"
      },
      labels: baseLabelStyles,
      title: assign({}, baseLabelStyles, { padding: 5 })
    }
  },
  line: assign({
    style: {
      data: {
        fill: "transparent",
        stroke: charcoal,
        strokeWidth: 2
      },
      labels: centeredLabelStyles
    }
  }, baseProps),
  pie: {
    style: {
      data: {
        padding: 10,
        stroke: "transparent",
        strokeWidth: 1
      },
      labels: assign({}, baseLabelStyles, { padding: 20 })
    },
    colorScale: colors,
    width: 400,
    height: 400,
    padding: 50
  },
  scatter: assign({
    style: {
      data: {
        fill: charcoal,
        stroke: "transparent",
        strokeWidth: 0
      },
      labels: centeredLabelStyles
    }
  }, baseProps),
  stack: assign({
    colorScale: colors
  }, baseProps),
  tooltip: {
    style: assign({}, centeredLabelStyles, { padding: 5, pointerEvents: "none" }),
    flyoutStyle: {
      stroke: charcoal,
      strokeWidth: 1,
      fill: "#f0f0f0",
      pointerEvents: "none"
    },
    cornerRadius: 5,
    pointerLength: 10
  },
  voronoi: assign({
    style: {
      data: {
        fill: "transparent",
        stroke: "transparent",
        strokeWidth: 0
      },
      labels: assign({}, centeredLabelStyles, { padding: 5, pointerEvents: "none" }),
      flyout: {
        stroke: charcoal,
        strokeWidth: 1,
        fill: "#f0f0f0",
        pointerEvents: "none"
      }
    }
  }, baseProps)
};

const Chart = ({ className, children, ...props }) => (
  <VictoryChart theme={fooTheme}>
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
