import './App.css'
//Incorporar componente
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <>
      <div>
        <NavBar />
        <ItemListContainer greeting= "Hola, Usuario"/>
      </div>
    </>
  )
}

export default App
