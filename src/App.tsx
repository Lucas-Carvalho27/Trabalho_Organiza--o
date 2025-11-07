import './App.css'


import InstructionQueue from '../Simulator/InstructionQueue';
import LoadBuffer from '../Simulator/Load/LoadBuffer';
import MemoryModule from '../Simulator/MemoryModule';







let memoryModule = new MemoryModule(1024, 2);
let loadBuffer = new LoadBuffer(3, memoryModule);

let instructionQueue = new InstructionQueue(6, loadBuffer);



function App() {




  return (
    <></>
  )

}

export default App
