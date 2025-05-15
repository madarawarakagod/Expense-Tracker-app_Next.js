import { PiggyBank } from 'lucide-react' 
import React from 'react' 

function CardInfo({budgetList}) { 
  return ( 
        <div className='mt-7 grid grid-cols-1 md:grid-cols-3 gap-5'> 
        <div className='p-7 border rounded-lg rounded-lg flex items-center justify-between ' > 
        <div> 
         <h2 className='text-sm'>Total Budget</h2> 
         <h2 className='font-bold text-2xl'>$15000</h2> 
        </div> 
       <PiggyBank className='bg-primary p-3 h-12 w-12 rounded text-white'/>

       </div> 
        <div className='p-7 border rounded-lg rounded-lg flex items-center justify-between ' > 
        <div> 
         <h2 className='text-sm'>Total Budget</h2> 
         <h2 className='font-bold text-2xl'>$15000</h2> 
        </div> 
       <PiggyBank className='bg-primary p-3 h-12 w-12 rounded text-white'/>

       </div> 
   </div>
  )
}

export default CardInfo