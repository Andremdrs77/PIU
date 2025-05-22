import { useState } from 'react'
import './App.css'
import Galeria from './components/Galeria.jsx'
import Card from './components/Card.jsx'
import crazyfrog from './assets/crazyfrog.jpg'
import ben10 from './assets/ben10.png'
import picapau from './assets/PicaPau_antigo.png'
import prohyas from './assets/Prohyas.png'
import vambre from './assets/Vambre.png'
import vegeta from './assets/Vedita.png'
import caraquetentoufuraromadara from './assets/CaraQueTentouFurarOMadara.png'
function App() {

  return (
    <>
          <Card imagem={ben10}/>
          <Card imagem={picapau}/>
          <Card imagem={prohyas}/>
          <Card imagem={vambre}/>
          <Card imagem={vegeta}/>
          <Card imagem={caraquetentoufuraromadara}/>
    </>
  )

}

export default App
