import './App.css'
//Incorporar componente
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/Main/ItemDetailContainer';

const App = () => {
  return (
    <>
      <div>
        <NavBar />
        <ItemDetailContainer/>
      </div>
    </>
  )
}

export default App
