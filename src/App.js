import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from "./Pages/HomePages";
import 'bootstrap/dist/css/bootstrap.min.css';
import PokeDetails from './Pages/PokeDetail';
import { Navbar } from 'react-bootstrap';
import NavBarPerso from './Components/NavBarPerso';
import PokemonGeneration from './Pages/PokemonGeneration';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <NavBarPerso/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pokemon/details/" element={<PokeDetails/>}/>
          <Route path="/pokemon/generation/:generation" element={<PokemonGeneration/>}/>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
