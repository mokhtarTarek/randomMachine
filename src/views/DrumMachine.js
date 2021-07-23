import React from "react";
import { data } from "../data";
const bankOne = data.drumMachine.bankOne;
//const bankTwo = data.drumMachine.bankTwo;

const Drumpad = ({ bankOne }) => {

    const playSound = (keyTrigger) => {
        console.log(keyTrigger);
        let sound = document.getElementById(keyTrigger)
        console.log(sound)
        //sound.play()

    }
  return (
    <div className="drum-machine-pad">
      {bankOne.map((x) => (
        <div id={x.id} className="drum-pad" key={x.keyCode} onClick= {playSound(x.keyTrigger)}>
          <audio id={x.keyTrigger} src={x.url} className="clip" />
          {x.keyTrigger}
        </div>
      ))}
    </div>
  );
};


function DrumMachine() {

  

  return (
    <div id="drum-machine" className="drum-machine-body">
      <div id="display" className="drum-machine-display">
        <Drumpad bankOne={bankOne} />
      </div>
    </div>
  );
}

export default DrumMachine;
