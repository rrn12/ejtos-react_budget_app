import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
var i = 0
const Budget = () => {
    const { dispatch } = useContext(AppContext);
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        if(newBudget<20000){
        const expense = {
            cost: newBudget,
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
    if (i===0){
        i=i+1
    return (
<div className='alert alert-secondary'>
<span>Budget: £{newBudget}</span>
<input type="number" step="10" value={budget} onChange={handleBudgetChange}></input>
</div>
    );
    }
    else{
        return (
            <div className='alert alert-secondary'>
            <span>Budget: £{newBudget}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
            </div>
                ); 
    }
};
export default Budget;