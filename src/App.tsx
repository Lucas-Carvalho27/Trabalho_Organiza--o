import './App.css'

import { useState } from 'react';
import InstructionQueue from '../simulador/Concrete/InstructionQueue'
import Barramento from '../simulador/Concrete/Barramento'
import LoadBuss from '../simulador/Concrete/LoadBuffer'
import Clock from '../simulador/Concrete/Clock'

let clockComponents = new Clock();
let clockBus = new Clock();


let fila = new InstructionQueue(1);
fila.addInstruction(2368208896); // lw $t0, 0($t1)
fila.addInstruction(2368208896);
fila.addInstruction(2368208896);
fila.addInstruction(17518624);   // add $t2, $t0, $t3
fila.addInstruction(17519640);   // mult $t0, $t3
fila.addInstruction(2368223232); // lw $t4, 0($t1)  

let loadBus = new Barramento();
let instructionBus = new Barramento();

fila.out.push(loadBus);
fila.out.push(instructionBus);

let loadBuffer = new LoadBuss(1, 2000);
loadBus.addDestination(loadBuffer);

clockComponents.addElement(fila);
clockComponents.addElement(loadBuffer);
clockBus.addElement(loadBus);


function ciclarClock() {
  clockComponents.tick();
  clockBus.tick();
  loadBuffer.printLoadBuffer();
}

function App() {
  const [_, reload] = useState(0);
  let lista = fila.instructionBuffer;


  const handleClick = (): void => {
    ciclarClock();
    lista = fila.instructionBuffer;
    reload(Math.random());

  };

  return (
    <div>
      <h3>Tabela de números</h3>
      <button onClick={handleClick}>Adicionar número</button>

      <table border={1} cellPadding={8} style={{ marginTop: 10 }}>
        <thead>
          <tr>
            <th>Índice</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {lista.map((num, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{num}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App
