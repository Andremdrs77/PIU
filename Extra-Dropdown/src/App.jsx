import './App.css'
import Dropdown from './components/Dropdown'
import Item from './components/Item'

function App() {

  return (
    <>
      <Dropdown>
        <Item conteudo="Item 1"/>
        <Item conteudo="Item 2"/>
        <Item conteudo="Item 3"/>
      </Dropdown>
    </>
  )
}

export default App
