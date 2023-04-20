import DashboardBox from '@/components/DashboardBox';
import FlexBetween from '@/components/FlexBetween';
import { useGetKpisQuery } from '@/state/api';
import { useTheme, Box, Typography, Button } from '@mui/material';
import {useEffect, useState, useMemo} from 'react';
import { 
  CartesianGrid, 
  Label, 
  Legend, 
  Line, 
  LineChart, 
  ResponsiveContainer, 
  Tooltip, 
  XAxis, 
  YAxis 
} from 'recharts';
import regression, { DataPoint } from "regression";

const Predictions = () => {
  const {palette} = useTheme();
  const [predictions, setPredictions] = useState(false);
  const {data: kpiData} = useGetKpisQuery();

    useEffect(() => {
        document.title = "Finance | Predictions"
    }, []);

    /*
    * This is where the magic happens. We use the regression library to calculate a linear regression line
    * based on the actual revenue data. We then use the predict method to calculate the predicted revenue
    * for the next 12 months. We then map the data to the format that the recharts library expects.
    * Basics of machine learning in 10 lines of code.
     */

    const formattedData = useMemo(() => {
      if (!kpiData) return [];
      const monthData = kpiData[0].monthlyData;
  
      const formatted: Array<DataPoint> = monthData.map(
        ({ revenue }, i: number) => {
          return [i, revenue];
        }
      );
      const regressionLine = regression.linear(formatted);
  
      return monthData.map(({ month, revenue }, i: number) => {
        return {
          name: month,
          "Actual Revenue": revenue,
          "Regression Line": regressionLine.points[i][1],
          "Predicted Revenue": regressionLine.predict(i + 12)[1],
        };
      });
    }, [kpiData]);

    // the end of the magic

  return (
    <DashboardBox width="100%" height="100%" p="1rem" overflow="hidden">
      <FlexBetween m="1rem 2.5rem" gap="1rem">
        <Box>
          <Typography variant="h3">Revenue and Predictions</Typography>
          <Typography variant="h6">
            charted revenue and predicted revenue based on a simple linear
            regression model
          </Typography>
        </Box>
        <Button
          onClick={() => setPredictions(!predictions)}
          sx={{
            color: palette.grey[900],
            backgroundColor: palette.grey[700],
            boxShadow: "0.1rem 0.1rem 0.1rem 0.1rem rgba(0,0,0,.4)",
          }}
        >
          Show Predicted Revenue for Next Year
        </Button>
      </FlexBetween>
      <ResponsiveContainer 
      width="100%" 
      height="100%"
      minHeight='100vh'
      >
        <LineChart
          data={formattedData}
          margin={{
            top: 20,
            right: 75,
            left: 20,
            bottom: 80,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={palette.grey[800]} />
          <XAxis dataKey="name" tickLine={false} style={{ fontSize: "10px" }}>
            <Label value="Month" offset={-5} position="insideBottom" />
          </XAxis>
          <YAxis
            domain={[12000, 26000]}
            axisLine={{ strokeWidth: "0" }}
            style={{ fontSize: "10px" }}
            tickFormatter={(v) => `$${v}`}
          >
            <Label
              value="Revenue in USD"
              angle={-90}
              offset={-5}
              position="insideLeft"
            />
          </YAxis>
          <Tooltip />
          <Legend verticalAlign="top" />
          <Line
            type="monotone"
            dataKey="Actual Revenue"
            stroke={palette.primary.main}
            strokeWidth={0}
            dot={{ strokeWidth: 5 }}
          />
          <Line
            type="monotone"
            dataKey="Regression Line"
            stroke="#8884d8"
            dot={false}
          />
          {predictions && (
            <Line
              strokeDasharray="5 5"
              dataKey="Predicted Revenue"
              stroke={palette.secondary[500]}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </DashboardBox>
  )
}

export default Predictions;