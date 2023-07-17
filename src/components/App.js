
import React, { useEffect, useState } from 'react'
import './../styles/App.css';

const App = () => {
  const [num, setNum] = useState(0);
    const [ans, setAns] = useState(0);
    let sum = 0;

    const calculateSum = () => {

        for(let i=1; i<=num; i++){
            sum += i;
        }

        return sum;
    }

    useEffect(() => {
        calculateSum();
        setAns(sum);
    }, [num])
  
  return (
    <div>
        {/* Do not remove the main div */}
    <h1>Sum Calculator</h1>
        <input type='number' onChange={(e) => setNum(e.target.value)}/>
        <p>Sum: {ans}</p>
    </div>
  )
}

export default App
