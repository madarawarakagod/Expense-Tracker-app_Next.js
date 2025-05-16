
import React from 'react'
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

function BarChartDashboard({budgetList}){
    return(
        <div className='border rounded-lg p-5'>
            <h2 className='font-b'>Activity</h2>
            <ResponsiveContainer width={'80%'} height={300}>
            <BarChart
           
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
                </ResponsiveContainer>

        </div>
    )
}

export default BarChartDashboard