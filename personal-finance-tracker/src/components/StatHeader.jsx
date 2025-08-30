import { useTransactionStore } from "../store/transactionStore";
import { useMemo } from "react";

function StatHeader() {
  const {transactions} = useTransactionStore();

  const calculations =  useMemo( () => {
    const totalExpense = transactions.filter(transaction => transaction.category == "Expenses" ).reduce((ExpenseSum, transaction) =>  ExpenseSum + Number(transaction.amount), 0 )

    const totalIncome = transactions.filter(transaction => transaction.category == "Income" ).reduce((IncomeSum, transaction) =>  IncomeSum + Number(transaction.amount), 0 )

    const balance = totalIncome - totalExpense

    console.log(totalIncome, totalExpense, balance)

    return { totalIncome, totalExpense, balance }

  }, [transactions])

  const { totalIncome, totalExpense, balance } = calculations
  
  return(
    <>
       <div>
          <h1 className='font-bold text-3xl text-gray-800'>Finance Tracker</h1>
          <div className='my-4'>
            <p className='text-2xl font-semibold text-gray-800 '>{new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(balance)}</p>
          </div>
          <div className='my-4'>
            <p className='text-2xl font-semibold text-gray-800 '>{new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(totalIncome)}</p>
            <p className='text-2xl font-semibold text-gray-800 '>{new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(totalExpense)}</p>
          </div>
          <a href="">View Stats</a>
        </div>
    </>
  )
}

export default StatHeader;