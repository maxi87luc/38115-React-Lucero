import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import Home from './components/Home'
import Cart from './components/Cart'
import {useContext} from 'react'
import CartContext from './components/CartContext'
import UserContext from './components/UserContext'
import LogIn from './components/LogIn'




function App() {

  
  return (
    <Router>

      
      <UserContext>  
      <CartContext>  
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
            <>
              
                <NavBar/>
                <Cart/>
                
            </>  
          } />

          <Route exact path='/login' element={
            <>
              
                <NavBar/>
                <LogIn/>
                
            </>  
          } />

        
            
        </Routes>
        </CartContext>
        </UserContext> 

    </Router>
    
  );
}

export default App;





