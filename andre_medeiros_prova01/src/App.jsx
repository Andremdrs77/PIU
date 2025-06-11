import './App.css'
import Contador from './components/Contador'
import ListaCarros from './components/ListaCarros'
import ListaVermelhos from './components/ListaVermelhos'
function App() {

  return (
    <>
      <Contador/>
      <ListaCarros/>
      <ListaVermelhos/> 
      {/* Coloquei todos os itens importados, um abaixo do outro, para que eles apareçam nesta mesma ordem no projeto */}
    </>
  )
}

export default App
