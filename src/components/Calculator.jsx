
import React from 'react'
import { useState } from 'react'
import './style.css'



const Calculator = () => {


    const [result, setResult] = useState("");



    const handleresult =(e) =>{
         setResult(result.concat(e.target.value));
    }

    const deletion = () =>{
        setResult(" ")
    }

    const calculator = () =>{
 

        
        setResult(eval(result).toString());
    }

    return (
        <div className='calc'>
            <input type='text' placeholder='0' id='answer' value={result}/>
            <input type='button' value="9" className='btn' onClick={handleresult} />
            <input type='button' value="8" className='btn' onClick={handleresult} />
            <input type='button' value="7" className='btn' onClick={handleresult} />
            <input type='button' value="6" className='btn' onClick={handleresult} />
            <input type='button' value="5" className='btn' onClick={handleresult} />
            <input type='button' value="4" className='btn' onClick={handleresult} />
            <input type='button' value="3" className='btn' onClick={handleresult} />
            <input type='button' value="2" className='btn' onClick={handleresult} />
            <input type='button' value="1" className='btn' onClick={handleresult} />
            <input type='button' value="0" className='btn' onClick={handleresult} />
            <input type='button' value="+" className='btn' onClick={handleresult} />
            <input type='button' value="-" className='btn' onClick={handleresult} />
            <input type='button' value="/" className='btn' onClick={handleresult} />
            <input type='button' value="*" className='btn' onClick={handleresult} />
            <input type='button' value="Clear" className='btn' onClick={deletion} />
            <input type='button' value="=" className='btn' onClick={calculator} />
            
        </div>
    )
}

export default Calculator
