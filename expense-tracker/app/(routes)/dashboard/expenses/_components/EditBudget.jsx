"use client"
import React, {useState} from 'react'
import { PenBox } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import EmojiPicker from 'emoji-picker-react';
import { useUser } from '@clerk/nextjs';
import { Input } from '@/components/ui/input';



function EditBudget({budgetInfo}) {
    const [emojiIcon,setEmojiIcon]=useState(budgetInfo?.icon);
       const [openEmojiPicker,setOpenEmojiPicker]=useState(false)
  
        const [name,setName]=useState();
        const [amount,setAmount]=useState();
  
        const {user}=useUser(); 

        const onUpdateBudget=()=>{

        }
  return (
    <div>
         
             <Dialog>
             <DialogTrigger asChild>
             <Button className='flex gap-2'><PenBox/>Edit</Button>
         
           </DialogTrigger>
           <DialogContent>
             <DialogHeader>
               <DialogTitle>Update Budget</DialogTitle>
               <DialogDescription>
                <div className='mt-5'> 
               <Button variant="outline" 
             
               className="text-lg"
               onClick={()=>setOpenEmojiPicker(!openEmojiPicker)}
               >{emojiIcon} </Button> 
             
                 <div className='absolute z-20'>
                <EmojiPicker 
                      open={openEmojiPicker}
                      onEmojiClick={(e)=>{
                       setEmojiIcon(e.emoji)
                       setOpenEmojiPicker(false)
                     
                     }}
                      />
         I       </div>
                  <div className='mt-2'> 
                  <h2 className='text-black font-medium my-1'> Budget Name</h2>
                  <Input placeholder="e.g. Home Decor"
                  defaultValue={budgetInfo.name}
                  onChange={(e)=>setName(e.target.value)} /> 
         
                  </div> 
                   <div className='mt-2'> 
                  <h2 className='text-black font-medium my-1'> Budget Amount</h2>
                  <Input type="number"
                  defaultValue={budgetInfo.amount}
                   placeholder="e.g. 5000" 
                   onChange={(e)=>setAmount(e.target.value)}/> 
                  </div> 
                  <Button 
                      disabled={!(name&&amount)}
                      onClick={()=>onUpdateBudget()}
                  className="mt-5 w-full">Update Budget</Button>
               </div>
                
                
               
               </DialogDescription>
             </DialogHeader>
           </DialogContent>
         </Dialog>
         
    </div>
  )
}

export default EditBudget