import React, {useState } from "react";

const TimeFormat = sec =>{
  return new Date(sec * 1000).toISOString().substr(14, 5)
}

function Clock() {
     
    const [breakLength, setBreakLength] = useState(1)
    const [sessionLength, setSessionLength] = useState(1)
    const [timer, setTimer] = useState(10)
    const [intervalId, setIntervalId] = useState(0)
    const [timeOutInterval, setTimeOutInterval] = useState(0)
    const [toggleTimer, settoggleTimer] = useState('session')
    


    const resetSession = ()=>{
      if(intervalId) {
        clearInterval(intervalId);
        setIntervalId(0);
        
      }
      setBreakLength(5)
      setSessionLength(25)
      setTimer(1500)
    }

   
    const toggleStartStop= ()=>{
     
     //IF INTERVAL TRUE [NON ZERO] THEN CLEAR AND EXIT
      if(intervalId) {
        clearInterval(intervalId);
        setIntervalId(0);
        
        return;
      }
      
      const newIntervalId = setInterval(() => {
        // if(timer === 1 && toggleTimer ==="session"){
          //   setTimer(breakLength*60)
          //   settoggleTimer('break')
          //   return
          // }else if(timer === 1 && toggleTimer ==="break"){
            //   setTimer(sessionLength*60)
            //   settoggleTimer('session')
            //   return
            // }
            setTimer(prevCount => prevCount - 1);
      }, 1000);
      
      //SAVE THE INTERVAL ID TO CLEAR IT LATER
      setIntervalId(newIntervalId);

      //CLEAR THE INTERVALL AFTER SESSION COMPLETED 

      const newTimeOutInterval = 
      setTimeout(()=>{
        clearInterval(newIntervalId)
        setIntervalId(0);
        setTimer(5)
        toggleStartStop()
        
      },(timer * 1000) );
      setTimeOutInterval(newTimeOutInterval)
    }



    ////////////////////////////////////////////////////
    /// SET BREAK AND SESSION LENGTH
    const breakIncrement = ()=>{
        console.log(breakLength)
        if(breakLength !== 60){
          setBreakLength(prevBreakLength => prevBreakLength + 1)
        }
    }
    const breakDecrement = ()=>{
        if(breakLength !== 1){
        setBreakLength(prevBreakLength => prevBreakLength - 1)
        }
    }

    const sessionIncrement = ()=>{
      if(sessionLength !== 60){
        setSessionLength(prevSessionLength => prevSessionLength + 1)
        setTimer(prev=>prev+(60))
      }
    }

    const sessionDecrement = ()=>{
      if(sessionLength !== 0){
        setSessionLength(prevSessionLength => prevSessionLength - 1)
        setTimer(prev=>prev-(60))
      }
    }
    /////////////////////////////////////////////////////////
    ////////////
    return (
    <div className="calculator-body">
      <div className="Clock-break">
        <h1 id="break-label">Break Length</h1>
        <button id="break-increment" onClick={breakIncrement}>Increment</button>
        <button id="break-decrement" onClick={breakDecrement}>decrement</button>
        <h3 id="break-length"> {breakLength} </h3>
      </div>
      
      <div className="Clock-session">
        <h1 id="session-label">Session Length</h1>
        <button id="session-increment" onClick={sessionIncrement}>Increment</button>
        <button id="session-decrement" onClick={sessionDecrement}>decrement</button>
        <h3 id="session-length"> {sessionLength} </h3>
      </div>

      <div className="session-display">
        <h1 id="timer-label">Session</h1>
        <h1 id="time-left"> {TimeFormat(timer)} </h1>
      </div>

      <div className="session-controls">
        <button id="start_stop" onClick={toggleStartStop} >START-STOP</button>
        <button id="reset" onClick={resetSession} >RESET</button>
      </div>
    </div>
  );
}

export default Clock;
