import DashboardBox from '@/components/DashboardBox'
import { useGetKpisQuery, useGetProductsQuery } from '@/state/api'
import BoxHeader from '@/components/BoxHeader';
import { CartesianGrid, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis, ZAxis } from 'recharts';
import {useTheme, Box, Typography} from "@mui/material";
import {useMemo} from "react";
import FlexBetween from '@/components/FlexBetween';

const pieData = [
  {name: 'Group A', value: 400},
  {name: 'Group B', value: 300},
]

const Row2 = () => {
  const {data: ProductData} = useGetProductsQuery();
  const {data: operationalData} = useGetKpisQuery();
  const {palette} = useTheme();
  const pieColors = [palette.primary[800], palette.primary[300]];

  const operationalExpenses = useMemo(() => {
    return (
      operationalData && operationalData[0].monthlyData.map(({month, operationalExpenses, nonOperationalExpenses }) => {
        return {
          name: month.substring(0, 3),
          "Operational Expenses": operationalExpenses,
          "Non Operational Expenses": nonOperationalExpenses,
        }
      })
    )
  }, [operationalData]);

  const productExpensesData = useMemo(() => {
    return (
      ProductData && ProductData.map(({_id, price, expense }) => {
        return {
          id: _id,
          price,
          expense,
        }
      })
    )
  }, [ProductData]);

  return (
    <>
        <DashboardBox
        gridArea="d"
        >
          
          <BoxHeader
          title="Operational vs Non-Operational"
          sideText='+4%'
           />
        <ResponsiveContainer width="100%" height="100%">
        <LineChart
       
        data={operationalExpenses}
        margin={{
          top: 20,
          right: 0,
          left: -10,
          bottom: 55,
        }}
        >
          <CartesianGrid vertical={false} stroke={palette.grey[800]} />
          <XAxis
          tickLine={false}
          style={{fontSize: '10px'}} 
          dataKey="name"
           />
          <YAxis
          yAxisId="left"
          orientation="left"
          tickLine={false}
          style={{fontSize: '10px'}} 
          axisLine={false}
         
           />
          <YAxis
          yAxisId="right"
          orientation="right"
          tickLine={false}
          style={{fontSize: '10px'}} 
          axisLine={false}
         
           />
          <Tooltip />
          <Line 
           yAxisId="left"
           type="monotone"
           dataKey='Non Operational Expenses'
          stroke={palette.tertiary[500]}
          />
          <Line 
           yAxisId="right"
           type="monotone"
           dataKey='Operational Expenses'
          stroke={palette.primary.main}
          />
        </LineChart>
        </ResponsiveContainer>
      </DashboardBox>
      {/* SECOND BOX */}
        <DashboardBox
        gridArea="e"
        >
          <BoxHeader
          title="Campaigns and Targets"
          sideText='+4%'
          />
          <FlexBetween mt='0.25rem' gap='1.5rem' pr='1rem'>
            <PieChart 
            width={110} 
            height={100}
            margin={{
              top: 0,
              right: -10,
              left: 10,
              bottom: 0,
            }}
            >
          <Pie
          stroke='none'
            data={pieData}
            innerRadius={18}
            outerRadius={38}
            paddingAngle={2}
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={pieColors[index]} />
            ))}
          </Pie>
        </PieChart>
        <Box
        ml='-0.7rem'
        flexBasis='40%'
        textAlign='center'
        >
          <Typography
          variant='h5'
          >
            Targets Sales
          </Typography>
          <Typography
          m='0.3rem 0'
          variant='h3'
          color={palette.primary[300]}
          >
            69%
          </Typography>
          <Typography
          variant='h6'
          >
            Finance goals of the campain that is desired to be achieved
          </Typography>
        </Box>
        <Box
        flexBasis='40%'
        >
          <Typography
          variant='h5'
          >
            Loses in Revenue
          </Typography>
          <Typography
          variant='h6'
          >
            Loses are down by 10% from last month
          </Typography>
          <Typography
          mt='0.4rem'
          variant='h5'
          >
            Profit Margins
          </Typography>
          <Typography
          mt='0.4rem'
          variant='h6'
          >
            Margins are up by 15% from last month
          </Typography>
        </Box>
        </FlexBetween>  
        </DashboardBox>
        {/* THIRD BOX */}
        <DashboardBox
        gridArea="f"
        >
          <BoxHeader
          title="Product Prices vs Expenses"
          sideText='+4%' 
          />
        <ResponsiveContainer width="100%" height='100%' >
          <ScatterChart
            margin={{
              top: 20,
              right: 25,
              bottom: 40,
              left: -10,
            }}
          >
            <CartesianGrid stroke={palette.grey[800]} />
            <XAxis 
            type="number" 
            dataKey="price" 
            name="price" 
            axisLine={false}
            tickLine={false}
            style={{fontSize: '10px'}}
            tickFormatter={(v) => `€${v}`}
            />
            <YAxis 
            type="number" 
            dataKey="expense" 
            name="price" 
            axisLine={false}
            tickLine={false}
            style={{fontSize: '10px'}}
            tickFormatter={(v) => `€${v}`}
            />
            <ZAxis
            type="number"
            range={[20]}
             />
            <Tooltip 
            formatter={(v) => `€${v}`} 
            />
            <Scatter 
            name="Product Expense Ratio" 
            data={productExpensesData} 
            fill={palette.tertiary[500]} 
            />
          </ScatterChart>
        </ResponsiveContainer>
      </DashboardBox>
    </>
  )
}

export default Row2;