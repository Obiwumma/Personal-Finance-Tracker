import { useState } from "react";

function Category() {
  const [dropdown, setDropdown] = useState(false)
  const [selected, setSelected] = useState('All')

  function handleCategory() {
    setDropdown(!dropdown)
  }

  function handleSome() {
    setSelected("some")
    setDropdown(!dropdown)
  }

  function handleFew() {
    setSelected("Few")
    setDropdown(!dropdown)
  }

  function handleAll() {
    setSelected("All")
    setDropdown(!dropdown)
  }

  return <>
    <div className="relative bg-white border rounded-lg md:w-[50%] ">
        {/* <!-- Fake select button --> */}
        <button onClick={handleCategory} class=" w-full px-4 py-2 bg-[#b0b4b9] border rounded">
          {selected}
          <span className="float-right">▼</span>
        </button>
        
        {/* <!-- Dropdown options --> */}
        {
          dropdown ? 
          <div className="absolute  w-full bg-white border rounded shadow-lg">
            <div onClick={handleAll} className="p-2 hover:bg-blue-100">All</div>
            <div onClick={handleSome} className="p-2 hover:bg-blue-100">Some</div>
            <div onClick={handleFew}  className="p-2 hover:bg-blue-100">Few</div>
          </div> : null
        }
      </div>
  </>
}

export default Category;