import './App.css'
import Home from './Pages/Home'
import Favourite from './Pages/Favourites';
import {Routes, Route} from "react-router-dom";
import { MovieProvider } from './Contexts/MovieContext';
import NavBAr from './Components/NavBar';


function App() {

  return (
    <MovieProvider>
    <div>
      <NavBAr />
    
    <main className='main-content'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>

    </main>
    </div>
    </MovieProvider>
  )
}



export default App
