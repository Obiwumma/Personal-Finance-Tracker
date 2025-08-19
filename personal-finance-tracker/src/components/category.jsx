import { useState } from "react";

function Category() {
  const [selected, setSelected] = useState('All')

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
        <button className="category-btn">All</button>
        <button className="category-btn">Expenses</button>
        <button className="category-btn">Income</button>
      </div>
  </>
}

export default Category;