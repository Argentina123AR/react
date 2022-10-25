
import './App.css';
import NavBar from './components/NavBar';


function App() {
  var Style= {
    border: 'solid 2px pink',
    padding: '20px'
  }

  return (
    <>
      <NavBar/>
      <h1 className='text' font-bold underline font-mono>Nosotras Insumos</h1>
    </>
  );
}

export default App;
