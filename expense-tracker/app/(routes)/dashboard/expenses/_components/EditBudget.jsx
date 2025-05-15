import React from 'react'
import { PenBox } from 'lucide-react';
import { Button } from "@/components/ui/button";

function EditBudget() {
  return (
    <div>
         <Button className='flex gap-2'><PenBox/>Edit</Button>
    </div>
  )
}

export default EditBudget