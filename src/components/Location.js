import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Location = () => {
  const {dispatch } = useContext(AppContext);
  //const {currency}=useContext(AppContext);
  //const [newCurrency, setNewCurrency] = useState(currency);
    const changeLocation = (event)=>{
        //setNewCurrency(event.target.value)
        const expense = {
            cost: event.target.value,
        };
        dispatch({
            type: 'CHG_CURRENCY',
            payload: expense.cost,
        })
    }
    

  return (
        <div className='alert alert-secondary'> Currency {
      <select name="Location" id="Location" onChange={changeLocation}>
        <option value="$">$ Dollar</option>
        <option value="£">£ Pound</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Ruppee</option>
      </select>	
      }	
    </div>
    );
};

export default Location;