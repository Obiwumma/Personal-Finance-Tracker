import { create } from "zustand"

const useTransactionStore = create((set) => ({
  //State
  transactions: [],

  // Actions
  addTransaction: (transaction) => 
    set((state) => ({
    transactions:[...state.transactions, transaction]
  })) ,

  // editTransaction: ,

  deleteTransaction: (id) => 
    set((state) => ({
    transactions: state.transactions.filter((transaction) => transaction.id !== id)
  })),

  // setFilters: ,


}))