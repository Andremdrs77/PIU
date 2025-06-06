import './App.css'
import { useState } from 'react'
import Card from './components/Card.jsx'
import Galeria from './components/Galeria.jsx'
import Tema from './components/Tema.jsx'
import Detalhe from './components/Detalhe.jsx'

import ben10 from './assets/ben10.png'
import picapau from './assets/PicaPau_antigo.png'
import prohyas from './assets/Prohyas.png'
import vambre from './assets/Vambre.png'
import vegeta from './assets/Vedita.png'
import caraquetentoufuraromadara from './assets/CaraQueTentouFurarOMadara.png'
import pastorjunior from './assets/PastorJunior.png'

function App() {
  const [selecionado, setSelecionado] = useState(null)

  return (
    <div>
      <Tema>
        <h1>Galeria de Personagens</h1>
        <Galeria>
          <Card imagem={ben10} nome="Ben 10" onClick={() => setSelecionado({imagem: ben10, descricao: "Omnitrix, activa reparación celular[...]"})}/>
          <Card imagem={picapau} nome="Pica-Pau" onClick={() => setSelecionado({imagem: picapau, descricao: "Melhor desenho da minha infância."})}/>
          <Card imagem={prohyas} nome="Prohyas" onClick={() => setSelecionado({imagem: prohyas, descricao: "Irmão da Vambre em Poderosas Magiespadas!"})}/>
          <Card imagem={vambre} nome="Vambre" onClick={() => setSelecionado({imagem: vambre, descricao: "Irmã do Prohyas em Poderosas Magiespadas!"})}/>
          <Card imagem={vegeta} nome="Vegeta" onClick={() => setSelecionado({imagem: vegeta, descricao: "Vedita!! Carregou duas esferas do Puronga."})}/>
          <Card imagem={caraquetentoufuraromadara} nome="Cara que tentou furar o Madara" onClick={() => setSelecionado({imagem: caraquetentoufuraromadara, descricao: "Ele tentou furar o Madara."})}/>
          <Card imagem={pastorjunior} nome="Pastor Júnior" onClick={() => setSelecionado({imagem: pastorjunior, descricao: "Pode? Pode!"})}/>
        </Galeria>

        {selecionado && (<Detalhe imagem={selecionado.imagem} descricao={selecionado.descricao} onClose={() => setSelecionado(null)}/>)}

      </Tema>
    </div>
  )
}

export default App
