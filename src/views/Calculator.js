import React, {useState } from "react";



const isInvalidFormule = (value)=>{
  let myRegex = /^[\*\/]|^[0]{2}|\.\w*\./
  return myRegex.test(value)
}

const isEndWithOperator = (value)=>{
  let myRegex = /[\=\/\*\-\+\.]$/
  return myRegex.test(value)
}

const isDotExist = (value)=>{
  let myRegex = /[\.]/
  return myRegex.test(value)
}

const isNumber = (val)=>{
  let myRegex = /^[0123456789]/
  return myRegex.test(val)
}
const isOperator = (val)=>{
  let myRegex = /[\/\-\*\+]/
  return myRegex.test(val)
}

function Calculator() {
  const [formule, setFormule] = useState('');
  const [display, setDisplay] = useState('');

  const clear = ()=>{
    setDisplay('')
    setFormule('')
  }

  const HandleResult =   () => {
      if(/\=\s\d*|[\+\-\/\*]$/.test(formule)||formule===""){
        return
      }
      const rst =Math.round(100000000 * eval(formule)) / 100000000;
      setDisplay(rst)
      setFormule(formule.concat(` = ${rst}`))
  }

  const HandleFormuleChanges = (Inputvalue) => {
    if(/\=\s\d*/.test(formule) && isOperator(Inputvalue)){
      setFormule(display.toString().concat(Inputvalue))
      setDisplay(Inputvalue)
      return
    }
    let test = formule.concat(Inputvalue);

    

    if(!isInvalidFormule(test) ){
      //if the input is operator
      if(isEndWithOperator(formule) && isOperator(Inputvalue) ){
        if(/\D\-/.test(formule)){
          setFormule(formule.slice(0,-2).concat(Inputvalue))
          return
        }
        
        if(Inputvalue !== '-'){
          setFormule(formule.slice(0,-1).concat(Inputvalue))
          return
        }else if(Inputvalue === '-') {
          setFormule(formule.concat(Inputvalue))
        }
        
      }
      //if the input is a number
      else{
        setFormule(formule.concat(Inputvalue))
      }
    }

      if(Inputvalue === '.'){
        if(!isDotExist(display)){
          setDisplay(display.concat(Inputvalue))
        }
      }


      if(isNumber(Inputvalue)){
          if(!(display === '0' && Inputvalue ==='0')){
            
            setDisplay(display.toString().concat(Inputvalue))
          }
         
      }

      else if(isOperator(Inputvalue)){
          setDisplay(Inputvalue)
      }
   
  }
  return (
    <div className="calculator-body">
      <div className="calculator__container">
        <div  className="calculator__display">
          <span className="calculator__display--formula"> {formule} </span>
          <span id="display" className="calculator__display--result"> {formule!==''?display:0}  </span>
        </div>

        <div className="operator" id="clear"  onClick={clear}  className="calculator__button">
          AC
        </div>
       

        <div  id="divide"  onClick={e=>HandleFormuleChanges('/')} className="calculator__button operator">
          /
        </div>

        <div  id="multiply"  onClick={e=>HandleFormuleChanges('*')} className="calculator__button operator">
          x
        </div>

        <div id="seven" onClick={e=>HandleFormuleChanges('7')} className="calculator__button">
          7
        </div>

        <div id="eight"  onClick={e=>HandleFormuleChanges('8')} className="calculator__button">
          8
        </div>
        <div id="nine"  onClick={e=>HandleFormuleChanges('9')} className="calculator__button">
          9
        </div>

        <div  id="subtract"  onClick={e=>HandleFormuleChanges('-')} className="calculator__button operator">
          -
        </div>

        <div id="four"  onClick={e=>HandleFormuleChanges('4')} className="calculator__button">
          4
        </div>
        <div id="five"  onClick={e=>HandleFormuleChanges('5')} className="calculator__button">
          5
        </div>

        <div id="six"  onClick={e=>HandleFormuleChanges('6')} className="calculator__button">
          6
        </div>

        <div id="add"  onClick={e=>HandleFormuleChanges('+')} className="calculator__button operator">
          +
        </div>

        <div id="one"  onClick={e=>HandleFormuleChanges('1')} className="calculator__button">
          1
        </div>
        <div id="two"  onClick={e=>HandleFormuleChanges('2')} className="calculator__button">
          2
        </div>
        <div id="three"  onClick={e=>HandleFormuleChanges('3')} className="calculator__button">
          3
        </div>

        <div id="equals"  onClick={HandleResult} className="calculator__button">
          =
        </div>

        <div id="zero"  onClick={e=>HandleFormuleChanges('0')} className="calculator__button">
          0
        </div>

        <div id="decimal"  onClick={e=>HandleFormuleChanges('.')} className="calculator__button">
          .
        </div>

      </div>
      <div className="calculator-copy">
        <span>designed and coded by </span>
        <span>Mokhtar Tarek</span>
      </div>
    </div>
  );
}

export default Calculator;

