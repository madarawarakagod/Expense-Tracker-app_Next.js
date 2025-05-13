import React from 'react'

function BudgetItem(budget) {
  return (
    <div>
        <div>
            <h2>{budget?.icon}</h2>
        </div>
    </div>
  )
}

export default BudgetItem