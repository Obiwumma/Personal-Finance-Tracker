import { create } from "zustand"
import { persist } from "zustand/middleware"

export const useTransactionStore = create(
  persist(
    (set, get) => ({
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
      
    }),

    {
      name: "transactions-storage", // key in localStorage
      partialize: (state) => ({
        transactions: state.transactions,
        filters: state.filters,
      }),
    }

  )
)



