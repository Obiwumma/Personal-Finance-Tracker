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
    <div className="flex gap-4 bg-[#ffffff] border rounded-lg w-[80%] p-2 md:w-[50%]  ">
        <button className="category-btn">All</button>
        <button className="category-btn">Expenses</button>
        <button className="category-btn">Income</button>
      </div>
  </>
}

export default Category;