import React from 'react'
import { useMemo } from 'react';

import { useTransactionStore } from '../store/transactionStore'; 
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import PieChartStat from './PieChartStat';

function Statistics() {
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

  
    const calculations =  useMemo( () => {
      const totalExpense = transactions.filter(transaction => transaction.category == "Expenses" ).reduce((ExpenseSum, transaction) =>  ExpenseSum + Number(transaction.amount), 0 )
  
      const totalIncome = transactions.filter(transaction => transaction.category == "Income" ).reduce((IncomeSum, transaction) =>  IncomeSum + Number(transaction.amount), 0 )
  
      const balance = totalIncome - totalExpense
  
  
      return { totalIncome, totalExpense, balance }
  
    }, [transactions])
  
    const { totalIncome, totalExpense, balance } = calculations
  return (
    <div>
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
            <Bar dataKey="income" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
            <Bar dataKey="expense" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
            <Bar dataKey="balance" fill="#3b438dff" activeBar={<Rectangle fill="gold" stroke="purple" />} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <PieChartStat/>
    </div>
  )
}

export default Statistics
