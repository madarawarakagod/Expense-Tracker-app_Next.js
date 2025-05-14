import React from 'react'
import { Trash } from 'lucide-react'

function ExpenseListTable({expensesList}) {
  return (
    <div className='mt-3'> 
   <div className="grid grid-cols-[200px_100px_300px_150px] bg-slate-200 p-2">
     <h2 className='font-bold'>Name</h2> 
     <h2 className='font-bold'>Amount</h2> 
     <h2 className='font-bold'>Date</h2> 
     <h2 className='font-bold'>Action</h2> 
     </div> 
    {expensesList.map((expenses, index)=>( 
       <div className="grid grid-cols-[200px_100px_300px_150px] bg-slate-50 p-2">
       <h2>{expenses.name}</h2> 
       <h2>{expenses.amount}</h2> 
       <h2>{expenses.createdAt}</h2> 
       <h2> 
       <Trash className='text-red-600'/>
       </h2> 
       </div>
       ))}
       </div>
  )
}

export default ExpenseListTable

