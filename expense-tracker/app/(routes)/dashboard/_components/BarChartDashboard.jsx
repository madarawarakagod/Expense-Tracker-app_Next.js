import { BarChart } from 'lucide-react'
import React from 'react'
import { Bar, Legend, Tooltip, XAxis, YAxis } from 'recharts'

function BarChartDashboard(budgetlist){
    return(
        <div>
            <BarChart
            width={500}
            height={300}
            data={budgetlist}
            margin={{
                top:5,
                right:5,
                left:5,
                bottom:5
            }}
            >
                <XAxis dataKey='name'/>
                <YAxis/>
                <Tooltip/>
                
                <Legend/>
                <Bar datKey='totalspend' stackId='a' fill='#4845d2'/>
                 <Bar datKey='amount' stackId='a' fill='#4845d2'/>
                </BarChart>

        </div>
    )
}

export default BarChartDashboard