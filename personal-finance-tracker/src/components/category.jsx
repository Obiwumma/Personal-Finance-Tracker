import { useState } from "react";
import { useTransactionStore } from "../store/transactionStore";

function Category() {
  const { filterCategory, setFilterCategory } = useTransactionStore();
  

  return <>
    <div className="flex gap-4 bg-[#ffffff] border rounded-lg p-2 overflow-auto md:w-[50%] md:items-center md:justify-evenly ">
        <button className={`category-btn ${filterCategory == "all" ? "bg-gray-800 text-white hover:bg-gray-600" : "bg-[#eeeeee] hover:bg-gray-300"}` } onClick={() => setFilterCategory("all")}>All</button>
        <button className={`category-btn ${filterCategory == "Expenses" ? "bg-gray-800 text-white hover:bg-gray-600" : "bg-[#eeeeee] hover:bg-gray-300"}` } onClick={() => setFilterCategory("Expenses")}>Expenses</button>
        <button className={`category-btn ${filterCategory == "Income" ? "bg-gray-800 text-white hover:bg-gray-600" : "bg-[#eeeeee] hover:bg-gray-300"}` } onClick={() => setFilterCategory("Income")}>Income</button>
      </div>
  </>
}

export default Category;