import React, { useState } from 'react';
import play from './fizzbuzz/player'

function FizzBuzz(){
    const [answer, setAnswer] = useState();
    const [input, setInput] = useState();
    return (
        <div className="FizzBuzz" >
            <input type="text" data-testid="fizzbuzz-input" onChange={(e)=> 
                setInput(e.target.value)}/>
            <input type="button" data-testid="fizzbuzz-button" onClick={()=>{
                setAnswer(play(input));
            }}/>

            <div data-testid="fizzbuzz-answer">
                {answer}
            </div>
            
        </div>
    );
}

export default FizzBuzz;