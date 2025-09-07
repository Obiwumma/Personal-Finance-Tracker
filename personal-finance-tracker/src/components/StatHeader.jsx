import { useTransactionStore } from "../store/transactionStore";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

function StatHeader() {
  const {transactions} = useTransactionStore();

  const calculations =  useMemo( () => {
    const totalExpense = transactions.filter(transaction => transaction.category == "Expenses" ).reduce((ExpenseSum, transaction) =>  ExpenseSum + Number(transaction.amount), 0 )

    const totalIncome = transactions.filter(transaction => transaction.category == "Income" ).reduce((IncomeSum, transaction) =>  IncomeSum + Number(transaction.amount), 0 )

    const balance = totalIncome - totalExpense


    return { totalIncome, totalExpense, balance }

  }, [transactions])

  const { totalIncome, totalExpense, balance } = calculations
  
  return(
    <>
       <div >
          <h1 className='font-bold text-3xl text-gray-800'>Finance Tracker</h1>
          <div className='my-4'>
            <p className='text-2xl font-semibold text-gray-800 '>Balance: {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(balance)}</p>
          </div>
          <div className='my-4'>
            
            <p className='text-2xl font-semibold text-gray-800 '>Total Income: {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(totalIncome)}</p>
            <p className='text-2xl font-semibold text-gray-800 '>Total Expense: {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(totalExpense)}</p>
          </div>
          <Link to='/stats'><button className="border py-2 px-3 rounded-full">View Stats</button></Link>
        </div>
    </>
  )
}

export default StatHeader;