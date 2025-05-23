import './App.css'
import Card from './components/Card.jsx'
import Galeria from './components/Galeria.jsx'
import Tema from './components/Tema.jsx'

import ben10 from './assets/ben10.png'
import picapau from './assets/PicaPau_antigo.png'
import prohyas from './assets/Prohyas.png'
import vambre from './assets/Vambre.png'
import vegeta from './assets/Vedita.png'
import caraquetentoufuraromadara from './assets/CaraQueTentouFurarOMadara.png'
import pastorjunior from './assets/PastorJunior.png'

function App() {

  return (
    <div>
      <Tema>
        <h1>Galeria de Personagens</h1>
        <Galeria>
          <Card imagem={ben10} nome="Ben 10"/>
          <Card imagem={picapau} nome="Pica-Pau"/>
          <Card imagem={prohyas} nome="Prohyas"/>
          <Card imagem={vambre} nome="Vambre"/>
          <Card imagem={vegeta} nome="Vegeta"/>
          <Card imagem={caraquetentoufuraromadara} nome="Cara que tentou furar o Madara"/>
          <Card imagem={pastorjunior} nome="Pastor Júnior"/>
        </Galeria>
      </Tema>
    </div>
  )
}

export default App
