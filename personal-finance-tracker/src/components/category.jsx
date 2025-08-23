import { useState } from "react";
import { useTransactionStore } from "../store/transactionStore";

function Category() {
  const {  setFilterCategory } = useTransactionStore()

  // function handleCategory() {
  //   setDropdown(!dropdown)
  // }

  // function handleSome() {
  //   setSelected("some")
  //   setDropdown(!dropdown)
  // }

  // function handleFew() {
  //   setSelected("Few")
  //   setDropdown(!dropdown)
  // }

  // function handleAll() {
  //   setSelected("All")
  //   setDropdown(!dropdown)
  // }

  return <>
    <div className="flex gap-4 bg-[#ffffff] border rounded-lg p-2 overflow-auto md:w-[50%] md:items-center md:justify-evenly ">
        <button className="category-btn" onClick={() => setFilterCategory("all")}>All</button>
        <button className="category-btn" onClick={() => setFilterCategory("Income")}>Expenses</button>
        <button className="category-btn" onClick={() => setFilterCategory("Expenses")}>Income</button>
      </div>
  </>
}

export default Category;