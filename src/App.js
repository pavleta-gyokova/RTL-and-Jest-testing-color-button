import './App.css';
import {useState} from 'react'

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [ disabled, setdisabled ] = useState(false);
  const  newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  return (
   <div> 
   <button style={{backgroundColor : buttonColor}} onClick={()=> setButtonColor(newButtonColor)} disabled={disabled}>
      Change to {newButtonColor}
   </button>
   <input 
   type="checkbox"
   id="disable-button-checkbox"
   defaultChecked={disabled}
   aria-checked={disabled}
   onChange={(e) => setdisabled(e.target.checked)}
   />
   <label htmlFor='disable-button-checkbox'>Disable button</label>
   </div>
  );
}

export default App;
