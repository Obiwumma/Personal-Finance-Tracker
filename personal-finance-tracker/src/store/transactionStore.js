import { create } from "zustand"

export const useTransactionStore = create((set, get) => ({
  //State
  transactions: [],
  filterCategory: 'all',

  // Actions
  addTransaction: (transaction) => 
    set((state) => ({
    transactions:[...state.transactions, transaction]
  })) ,


  deleteTransaction: (id) => 
    set((state) => ({
    transactions: state.transactions.filter((transaction) => transaction.id !== id)
  })),

  setFilterCategory: (category) => set({ filterCategory: category }),

  get filteredTransactions() {
    const state = get();
    if (state.filterCategory === 'all') {
      return state.transactions;
    }
    return state.transactions.filter(item => item.category === state.filterCategory);
  },

   


}))

