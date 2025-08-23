import { useTransactionStore } from "../store/transactionStore";

function TransactionList() {
  const transactions = useTransactionStore((state) => state.transactions)
  

  return(
    <>

    <div className='text-2xl font-semibold my-4'>Transaction</div>
      {transactions.length === 0 ? <h1 className="uppercase text-4xl text-center">No new transaction</h1> :
      
        <div className='bg-white border rounded-lg shadow-md'>
          
          <div>
            <ul>
              {transactions.map(transaction => (
              <li className=' m-4' key={transaction.id}>
                <div className="flex justify-between my-2 ">
                  <h1 className='text-xl font-semibold'>{transaction.description}</h1>
                  <p className={`text-xl font-semibold ${transaction.amount > 0 ? "text-green-600" : "text-red-600"}`}>
                         {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(transaction.amount)}
                          + </p>
                </div>
                <p className='text-xl my-2 font-semibold'>{transaction.category}</p>
                <p className='text-md font-semibold text-[#676f78] '>{transaction.date}</p>
                <hr />
              </li>
              
            ))}
            </ul>
            </div>

        </div>
      }
    </>
  )
}

export default TransactionList;