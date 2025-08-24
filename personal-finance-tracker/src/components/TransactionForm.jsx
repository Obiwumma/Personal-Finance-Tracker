import { useState } from "react";
import { useForm } from 'react-hook-form';

import { useTransactionStore } from "../store/transactionStore";

function TransactionForm({ onClose}) {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const addTransaction = useTransactionStore((state) => state.addTransaction)




  const onHandleSubmit = (data) => {
        console.log(data)
        onClose()
        addTransaction({
      ...data,
      id: Date.now(), 
    });
        reset();
      };
  
  return(
    <>
      <div className="">
        <form onSubmit={handleSubmit(onHandleSubmit)} className="space-y-4">
          {/* Description */}
      <div>
        <label>Description</label>
        <input
          type="text"
          {...register("description", { required: "Description is required" })}
          className="border p-2 w-full"
        />
        {errors.description && (
          <p className="text-red-500 text-sm italic">{errors.description.message}</p>
        )}
      </div>


          {/* Amount */}
      <div>
        <label>Amount</label>
        <input
          type="number"
          {...register("amount", {
            required: "Amount is required",
            min: { value: 1, message: "Amount must be greater than 0" },
          })}
          className="border p-2 w-full"
        />
        {errors.amount && (
          <p className="text-red-500 text-sm italic">{errors.amount.message}</p>
        )}
      </div>


          {/* Category */}
      <div>
        <label>Category</label>
        <select
          {...register("category", { required: "Category is required" })}
          className="border p-2 w-full"
        >
          <option value="">-- Select Category --</option>
          <option value="Income">Income</option>
          <option value="Expenses">Expenses</option>
        </select>
        {errors.category && (
          <p className="text-red-500 text-sm italic">{errors.category.message}</p>
        )}
      </div>


          {/* Date */}
      <div>
        <label>Date</label>
        <input
          type="date"
          {...register("date", { required: "Date is required" })}
          className="border p-2 w-full"
        />
        {errors.date && (
          <p className="text-red-500 text-sm italic">{errors.date.message}</p>
        )}
      </div>


          <div className="flex justify-between">
            <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={onClose}>CLOSE</button>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded"  >
            SUBMIT
          </button>
          </div>
        </form>
        
      </div>
    </>
  )
}

export default TransactionForm;