import './App.css'
//Incorporar componente
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Main/ItemListContainer';

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
