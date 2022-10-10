import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import Home from './components/Home'
import Cart from './components/Cart'




function App() {

  
  return (
    <Router>
      
      
      <Routes>
        <Route exact path='/'  element={
          <>
            <NavBar/>
            <Home/>
          </>
        } />
        <Route exact path='/category/:material/:genero' element={
          <>
            <NavBar/>
            <ItemListContainer/>
          </>
        } />
     
        <Route exact path='/item/:id' element={
          <>
            <NavBar/>
            <ItemDetailContainer/>
          </>
        } />

        <Route exact path='/cart' element={
          <Cart/>
        } />

      
          
      </Routes>
    </Router>
    
  );
}

export default App;





