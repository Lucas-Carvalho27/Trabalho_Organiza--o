import './App.css'

import InstructionQueue from '../simulador/Concrete/InstructionQueue'
import Barramento from '../simulador/Concrete/Barramento'
import LoadBuss from '../simulador/Concrete/LoadBuffer'


let fila = new InstructionQueue(1);
fila.addInstruction(35);
fila.addInstruction(10);
fila.addInstruction(20);
fila.addInstruction(35);
fila.addInstruction(15);

let loadBus = new Barramento();
let instructionBus = new Barramento();

fila.out.push(loadBus);
fila.out.push(instructionBus);

let loadBuffer = new LoadBuss(1, 4);
loadBus.addDestination(loadBuffer);



function App() {




  return (
    <></>
  )

}

export default App
