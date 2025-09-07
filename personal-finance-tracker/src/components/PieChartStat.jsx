import React from 'react'
import { useMemo } from 'react';
import { Pie, PieChart, ResponsiveContainer, Cell, Tooltip } from 'recharts';

import { useTransactionStore } from '../store/transactionStore';

function PieChartStat() {
  const {transactions} = useTransactionStore();
  
  const calculations =  useMemo( () => {
    const totalExpense = transactions.filter(transaction => transaction.category == "Expenses" ).reduce((ExpenseSum, transaction) =>  ExpenseSum + Number(transaction.amount), 0 )

    const totalIncome = transactions.filter(transaction => transaction.category == "Income" ).reduce((IncomeSum, transaction) =>  IncomeSum + Number(transaction.amount), 0 )

    const balance = totalIncome - totalExpense


    return { totalIncome, totalExpense, balance }

  }, [transactions])

  const { totalIncome, totalExpense } = calculations

const pieData = [
  { name: "Income", value: totalIncome },
  { name: "Expenses", value: totalExpense },
];

const COLORS = ["#4abc7dff", "#ec2020ff"];

  return (
    <div>
      <h1 className='font-semibold text-2xl text-gray-800'>Your Financial Summary </h1>
      <div style={{ width: "100%", height: 400 }}>
        <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
            <Pie
            dataKey="value"
            isAnimationActive={false}
            data={pieData}
            cx="50%"
            cy="50%"
            outerRadius={80}
            label
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          {/* <Pie
            data={pieData}
            cx="50%"   // center X
            cy="50%"   // center Y
            innerRadius={60}
            outerRadius={100}
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie> */}
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      </div>
    </div>
  )
}

export default PieChartStat