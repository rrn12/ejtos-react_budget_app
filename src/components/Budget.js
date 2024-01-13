import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch } = useContext(AppContext);
    const { budget, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        if(newBudget<=20000){
        const expense = {
            cost: event.target.value,
        };
        dispatch({
            type: 'SET_BUDGET',
            payload: expense.cost
        });
    }
        else{
            alert("The value cannot exceed 20000");
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;