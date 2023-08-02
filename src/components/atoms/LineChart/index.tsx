import React, {useMemo} from 'react';
import {
  AreaChart as AreaChartLibrary,
  Grid,
  XAxis,
  YAxis,
} from 'react-native-svg-charts';
import styles from './styles';
import {View} from 'react-native';
import color from 'color';
import {useTheme} from 'react-native-paper';

interface LineChartProps {
  data: number[];
  strokeColor?: string;
  style?: any;
  enableGrid?: boolean;
  enableXAxis?: boolean;
  enableYAxis?: boolean;
  height?: number;
  formatYAxisLabel?: (value: number) => string;
}

const LineChart = ({
  data,
  style,
  strokeColor,
  enableGrid,
  enableXAxis,
  enableYAxis,
  height,
  formatYAxisLabel,
}: LineChartProps) => {
  const {
    colors: {primary},
  } = useTheme();

  const numberOfTicks = useMemo(
    () => (data.length > 10 ? 10 : data.length),
    [data.length],
  );

  return (
    <View style={{...styles.container, height}} testID="line-chart-container">
      {enableYAxis && (
        <YAxis
          data={data}
          contentInset={styles.contentInset}
          style={styles.yAxis}
          svg={{
            fontSize: 10,
          }}
          numberOfTicks={numberOfTicks}
          formatLabel={formatYAxisLabel}
        />
      )}
      <View style={styles.chartContainer} testID="chart-container">
        <AreaChartLibrary
          style={{...styles.chart, ...style}}
          data={data}
          svg={{
            strokeWidth: 2,
            fill: color(strokeColor || primary)
              .alpha(0.3)
              .rgb()
              .toString(),
          }}
          contentInset={styles.contentInset}>
          {enableGrid && <Grid />}
        </AreaChartLibrary>
        {enableXAxis && (
          <XAxis
            style={styles.xAxis}
            data={data}
            contentInset={{left: 10, right: 10}}
            svg={{fontSize: 10}}
            numberOfTicks={numberOfTicks}
          />
        )}
      </View>
    </View>
  );
};

LineChart.defaultProps = {
  height: 250,
  formatYAxisLabel: (value: number) => `${value}`,
};

export default LineChart;
