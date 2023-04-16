import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

import { data } from '@/mocks/expensesData';

export const ExpensesChart = () => {
  //TODO: quitar tooltip hover
  return (
    <ResponsiveContainer>
      <div className='px-4 py-2'>
        <BarChart width={400} height={250} data={data}>
          <XAxis
            axisLine={false}
            tickLine={false}
            tickMargin={10}
            dataKey='name'
          />
          <Tooltip cursor={false} />
          <Bar dataKey='expense' fill='#F46E6E' />
        </BarChart>
      </div>
    </ResponsiveContainer>
  );
};
