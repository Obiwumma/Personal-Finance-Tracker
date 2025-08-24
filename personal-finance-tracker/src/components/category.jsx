import { useState } from "react";
import { useTransactionStore } from "../store/transactionStore";

function Category() {
  const { setFilterCategory } = useTransactionStore();

  // Now compute filteredTransactions locally
  
  

  return <>
    <div className="flex gap-4 bg-[#ffffff] border rounded-lg p-2 overflow-auto md:w-[50%] md:items-center md:justify-evenly ">
        <button className="category-btn" onClick={() => setFilterCategory("all")}>All</button>
        <button className="category-btn" onClick={() => setFilterCategory("Expenses")}>Expenses</button>
        <button className="category-btn" onClick={() => setFilterCategory("Income")}>Income</button>
      </div>
  </>
}

export default Category;