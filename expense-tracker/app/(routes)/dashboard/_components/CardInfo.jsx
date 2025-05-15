import { PiggyBank, ReceiptText, Wallet } from 'lucide-react' 
import React, { useEffect, useState } from 'react' 

function CardInfo({budgetList}) { 

    const [totalBudget,setTotalBudget]=useState(0);
    useEffect(()=>{
        budgetList&&CalculateCardInfo();
    },[budgetList])
    const CalculateCardInfo=()=>
    {
        console.log(budgetList);
        let totalBudget_=0;
        let totalSpend_=0;

        budgetList.forEach(element=>{
           totalBudget_=totalBudget_+Number(element.amount)
           totalSpend_=totalSpend_+element.totalSpend
        });
        console.log(totalBudget_,totalSpend_)
    }
  return ( 
        <div className='mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'> 
        <div className='p-7 border rounded-lg rounded-lg flex items-center justify-between ' > 
        <div> 
         <h2 className='text-sm'>Total Budget</h2> 
         <h2 className='font-bold text-2xl'>$15000</h2> 
        </div> 
       <PiggyBank className='bg-primary p-3 h-12 w-12 rounded text-white'/>

       </div> 
        <div className='p-7 border rounded-lg rounded-lg flex items-center justify-between ' > 
        <div> 
         <h2 className='text-sm'>Total Spend</h2> 
         <h2 className='font-bold text-2xl'>$15000</h2> 
        </div> 
       <ReceiptText className='bg-primary p-3 h-12 w-12 rounded text-white'/>

       </div> 
        <div className='p-7 border rounded-lg rounded-lg flex items-center justify-between ' > 
        <div> 
         <h2 className='text-sm'>No. of Budget</h2> 
         <h2 className='font-bold text-2xl'>$15000</h2> 
        </div> 
       <Wallet className='bg-primary p-3 h-12 w-12 rounded text-white'/>

       </div> 
   </div>
  )
}

export default CardInfo