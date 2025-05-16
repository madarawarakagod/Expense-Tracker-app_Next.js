
import React from 'react'
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from 'recharts'

function BarChartDashboard({budgetList}){
    return(
        <div className='border rounded-lg p-5'>
            <h2 className='font-b'>Activity</h2>
            <BarChart
            width={500}
            height={300}
            data={budgetList}
            margin={{
                top:7
            }}
           
            >
                <XAxis dataKey='name'/>
                <YAxis/>
                <Tooltip/>
                
                <Legend/>
                <Bar dataKey='totalSpend' stackId='a' fill='#262626'/>
                 <Bar dataKey='amount' stackId='a' fill=' #a6a6a6'/>
                </BarChart>

        </div>
    )
}

export default BarChartDashboard