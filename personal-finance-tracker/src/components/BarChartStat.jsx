import React from 'react'
import { useMemo } from 'react';

import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

import { useTransactionStore } from '../store/transactionStore';

function BarChartStat() {
  const {transactions} = useTransactionStore();
  
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
    const monthlyData = useMemo(() => {
    const map = {};
  
    transactions.forEach(transaction => {
      const date = new Date(transaction.date); 
      const month = monthNames[date.getMonth()];
  
      if (!map[month]) {
        map[month] = { name: month, income: 0, expense: 0, balance: 0 };
      }
  
      if (transaction.category === "Income") {
        map[month].income += Number(transaction.amount);
      } else if (transaction.category === "Expenses") {
        map[month].expense += Number(transaction.amount);
      }
  
      map[month].balance = map[month].income - map[month].expense;
    });
  
    return Object.values(map);
  }, [transactions]);

  return (
    <div>
      <h1 className='font-semibold text-2xl text-gray-800'>Monthly Income and Expenses</h1>
      <div style={{ width: "100%", height: 400 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={monthlyData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="income" fill="#4abc7dff" activeBar={<Rectangle fill="green" stroke="" />} />
            <Bar dataKey="expense" fill="#ec2020ff" activeBar={<Rectangle fill="red" stroke="" />} />
            <Bar dataKey="balance" fill="#2a3cdfff" activeBar={<Rectangle fill="blue" stroke="" />} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default BarChartStat
