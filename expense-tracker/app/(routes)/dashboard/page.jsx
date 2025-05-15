'use client'
import React, { useEffect, useState } from 'react'
import  { UserButton,useUser } from '@clerk/nextjs'
import CardInfo from './_components/CardInfo';
import { db } from '@/utils/dbConfig';
import { desc, eq, getTableColumns, sql } from 'drizzle-orm';
import { Budgets, Expenses } from '@/utils/schema';

function Dashboard() 
{
 
    const {user}=useUser();
    const [budgetList,setBudgetList]=useState();
    
  
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
           .groupBy(Budgets.id)
           .orderBy(desc(Budgets.id));
    
    
            setBudgetList(result);
    
  }

  return (
    <div className='p-8'>
     <h2 className='font-bold text-3xl'>Hi, {user?.fullName}</h2>
     <p className='text-gray-500'>Here's what happening with your money,Let Manage your expenses</p>

     <CardInfo BudgetList={budgetList}/>
    </div>
  )
}

export default Dashboard