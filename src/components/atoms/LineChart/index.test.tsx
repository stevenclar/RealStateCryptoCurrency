import React from 'react';
import {render} from '@testing-library/react-native';
import LineChart from '.';

describe('LineChart component', () => {
  test('renders LineChart component without errors', () => {
    render(<LineChart data={[1, 2, 3, 4]} />);
    expect(LineChart).toBeTruthy();
  });

  test('renders LineChart with default height if no height prop provided', () => {
    const {getByTestId} = render(<LineChart data={[1, 2, 3, 4]} />);
    const chartContainer = getByTestId('line-chart-container');
    expect(chartContainer).toHaveStyle({height: 250});
  });

  test('does not render XAxis when enableXAxis is false', () => {
    const {queryByTestId} = render(
      <LineChart data={[1, 2, 3, 4]} enableXAxis={false} />,
    );
    const xAxis = queryByTestId('x-axis');
    expect(xAxis).toBeNull();
  });

  test('does not render YAxis when enableYAxis is false', () => {
    const {queryByTestId} = render(
      <LineChart data={[1, 2, 3, 4]} enableYAxis={false} />,
    );
    const yAxis = queryByTestId('y-axis');
    expect(yAxis).toBeNull();
  });
});
