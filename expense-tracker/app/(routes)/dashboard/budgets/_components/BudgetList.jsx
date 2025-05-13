"use client"
import React, { useEffect } from 'react'
import CreateBudget from './CreateBudget'
import { db } from '@/utils/dbConfig'
import { eq,getTableColumns,sql } from 'drizzle-orm'
import { Budgets,Expenses } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'

function BudgetList() {
  
  const [budgetList,setbudgetList]=useState([]);
  const {user}=useUser();
useEffect(()=>{
    user&&getBudgetList();  
},[user])

      const getBudgetList=async()=> { 

        const result= await db.select({ 
       ...getTableColumns(Budgets), 
       totalSpend:sql `sum(${Expenses.amount})`.mapWith (Number), 
       totalItem: sql `count(${Expenses.id})`.mapWith(Number) 
      }).from(Budgets) 
       .leftJoin(Expenses,eq(Budgets.id,Expenses.budgetId)) 
       .where(eq(Budgets.createdBy,user?.primaryEmailAddress?.emailAddress))
       .groupBy(Budgets.id);
        setbudgetList(result);
      
}    
    


  return (
    <div className='mt-7'>
    <div className='grid grid-cols-1 md:cols-2 lg:grid-cols-3'>

    <CreateBudget/>
    {budgetList.map((budget,index)=>(
      <BudgetItem budget={budget}/>
    ))}
    </div>
    </div>
  )
}

export default BudgetList
