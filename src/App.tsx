import './App.css'

import Clock from '../Simulator/Clock'
import Adder from '../Simulator/Comcretos/Adder'
import Const from '../Simulator/Comcretos/ConstComponent'
import Pc from '../Simulator/Comcretos/Pc'
import Multiplexador from '../Simulator/Comcretos/Multiplexador'
import Men from '../Simulator/Comcretos/InstructionMemory'

function App() {



  let clock = new Clock("main");

  let pc = new Pc("pc1", clock);

  let mem = new Men("mem1", clock);

  let adder1 = new Adder("adder1", clock);

  let mux = new Multiplexador("mux1", clock);

  let const4 = new Const(4, "const4", clock);

  pc.connect(mem);

  pc.connect(adder1);
  const4.connect(adder1);

  adder1.connect(mux);

  mux.connect(pc);



  clock.tick();
  clock.tick();
  clock.tick();

  return (
    <></>
  )

}

export default App
