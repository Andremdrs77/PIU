import { useState } from 'react'
import './App.css'
import Props from './components/Props'
import Card from './components/Card'
import crazyfrog from './assets/crazyfrog.jpg'

function App() {

  return (
    <>
      <Props name={3} newname="vasconewname"/>
      <Props name={"Props2"} newname="crazyfrog" imagem={crazyfrog}/>
      <Card/>
    </>
  )
}

export default App
