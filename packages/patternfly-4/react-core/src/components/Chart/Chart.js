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
  theme,
  VictoryTheme
} from 'victory';
import './chart.css';
import {
  global_Color_100,
  global_Color_200,
  global_BorderColor,
  global_active_color_100,
  global_primary_color_100,
  global_link_Color,
  global_link_Color_hover,
  c_nav__tertiary_list_link_FontWeight,
  global_BackgroundColor_100,
  global_BackgroundColor_200,
  global_BackgroundColor_300,
  global_BackgroundColor_light_100,
  global_BackgroundColor_light_200,
  global_BackgroundColor_light_300,
  global_BackgroundColor_dark_100,
  global_BackgroundColor_dark_200,
  global_BackgroundColor_dark_transparent_100,
  global_BackgroundColor_dark_transparent_200,
  global_Color_light_100,
  global_Color_light_200,
  global_Color_dark_100,
  global_Color_dark_200,
  global_active_color_200,
  global_active_color_300,
  global_disabled_color_100,
  global_disabled_color_200,
  global_primary_color_200,
  global_primary_color_light_100,
  global_primary_color_dark_100,
  global_secondary_color_100,
  global_success_color_100,
  global_success_color_200,
  global_info_color_100,
  global_info_color_200,
  global_warning_color_100,
  global_warning_color_200,
  global_danger_color_100,
  global_danger_color_200,
  global_danger_color_300,
  global_BoxShadow_sm,
  global_BoxShadow_sm_right,
  global_BoxShadow_sm_left,
  global_BoxShadow_sm_bottom,
  global_BoxShadow_sm_top,
  global_BoxShadow_md,
  global_BoxShadow_md_right,
  global_BoxShadow_md_left,
  global_BoxShadow_md_bottom,
  global_BoxShadow_md_top,
  global_BoxShadow_lg,
  global_BoxShadow_lg_right,
  global_BoxShadow_lg_left,
  global_BoxShadow_lg_bottom,
  global_BoxShadow_lg_top,
  global_BoxShadow_inset,
  global_font_path,
  global_spacer_xs,
  global_spacer_sm,
  global_spacer_md,
  global_spacer_lg,
  global_spacer_xl,
  global_spacer_2xl,
  global_spacer_3xl,
  global_gutter,
  global_ZIndex_xs,
  global_ZIndex_sm,
  global_ZIndex_md,
  global_ZIndex_lg,
  global_ZIndex_xl,
  global_ZIndex_2xl,
  global_breakpoint_xs,
  global_breakpoint_sm,
  global_breakpoint_md,
  global_breakpoint_lg,
  global_breakpoint_xl,
  global_link_FontWeight,
  global_link_TextDecoration,
  global_link_Color_light_hover,
  global_link_TextDecoration_hover,
  global_BorderWidth_sm,
  global_BorderWidth_md,
  global_BorderWidth_lg,
  global_BorderColor_dark,
  global_BorderColor_light,
  global_BorderColor_light_200,
  global_BorderRadius_sm,
  global_BorderRadius_lg,
  global_FontFamily_sans_serif,
  global_FontFamily_monospace,
  global_FontSize_4xl,
  global_FontSize_3xl,
  global_FontSize_2xl,
  global_FontSize_xl,
  global_FontSize_lg,
  global_FontSize_md,
  global_FontSize_sm,
  global_FontSize_xs,
  global_FontWeight_light,
  global_FontWeight_normal,
  global_FontWeight_semi_bold,
  global_FontWeight_bold,
  global_LineHeight_sm,
  global_LineHeight_md,
  global_ListStyle,
  global_Transition,
  global_TimingFunction,
  global_arrow_width,
  global_arrow_width_lg,
  global_target_size_MinWidth,
  global_target_size_MinHeight
} from '@patternfly/react-tokens';
import { assign } from "lodash";


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

const global_active_color_100_var = global_active_color_100.var,
      global_BorderColor_light_var = global_BorderColor_light.var,
      global_FontSize_sm_var = global_FontSize_sm.var,
      global_Color_dark_100_var = global_Color_dark_100.var,
      global_Color_light_200_var = global_Color_light_200.var;

// Labels
const baseLabelStyles = {
  fontFamily: global_FontFamily_sans_serif,
  global_FontSize_sm_var,
  padding: 3,
  fill: global_Color_dark_100_var,
  stroke: "transparent"
};

// *
// * Colors
// *
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

const baseProps = {
  width: 450,
  height: 300,
  padding: 50,
  colorScale: colors
};

const centeredLabelStyles = assign({ textAnchor: "middle" }, baseLabelStyles);

const strokeLinecap = "round";
const strokeLinejoin = "round";

const fooTheme = {
  /*
  area: assign({
    style: {
      data: {
        fill: charcoal
      },
      labels: centeredLabelStyles
    }
  }, baseProps),
  */
  axis: assign({
    style: {
      axis: {
        fill: "transparent",
        stroke: global_BorderColor_light_var,
        strokeWidth: 1,
        strokeLinecap,
        strokeLinejoin
      },
      axisLabel: assign({}, centeredLabelStyles, {
        padding: 25
      }),
      grid: {
        fill: "none",
        stroke: global_Color_light_200_var,
        pointerEvents: "painted"
      },
      ticks: {
        fill: "transparent",
        size: 8,
        stroke: global_BorderColor_light_var
      },
      tickLabels: baseLabelStyles
    }
  }, baseProps),
  bar: assign({
    style: {
      data: {
        fill: global_active_color_100_var,
        padding: 8,
        strokeWidth: 0
      },
      labels: baseLabelStyles
    }
  }, baseProps),
  /*
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
  */
};

const Chart = ({ className, children, ...props }) => (
  <VictoryChart theme={fooTheme} domainPadding={30}>
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
      data={[
        { x: 1, y: 2 },
        { x: 2, y: 3 },
        { x: 3, y: 5 },
        { x: 4, y: 4 },
        { x: 5, y: 6 }
      ]}
    />
      {/*
    <VictoryGroup offset={17}
    >
      <VictoryBar
        data={[{ x: 2016, y: 1 }, { x: 2017, y: 2 }, { x: 2018, y: 5 }]}
      />
      <VictoryBar
        data={[{ x: 2016, y: 2 }, { x: 2017, y: 1 }, { x: 2018, y: 7 }]}
      />
      <VictoryBar
        data={[{ x: 2016, y: 3 }, { x: 2017, y: 4 }, { x: 2018, y: 9 }]}
      />
      <VictoryBar
        data={[{ x: 2016, y: 3 }, { x: 2017, y: 4 }, { x: 2018, y: 10 }]}
      />
    </VictoryGroup>
    */}
  </VictoryChart>
);

Chart.propTypes = propTypes;
Chart.defaultProps = defaultProps;

export default Chart;
