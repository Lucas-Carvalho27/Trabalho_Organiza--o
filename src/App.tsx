import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Clock from '../Simulator/Clock'
import Adder from '../Simulator/Comcretos/Adder'

function App() {

  let clock = new Clock("unico");
  let Ader1 = new Adder(1, "primeiro", clock, 4)
  let Ader2 = new Adder(1, "segundo", clock, 4)
  let Ader3 = new Adder(1, "terceiro", clock, 4)

  Ader1.connect(Ader2);
  Ader2.connect(Ader3);

  clock.tick()


}

export default App
