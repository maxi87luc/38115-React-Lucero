import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import Home from './components/Home'




function App() {

  
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path='/'  element={
          <Home/>
        } />
        <Route exact path='/category/:material/:genero' element={
          <ItemListContainer/>
        } />
     
        <Route exact path='/item/:id' element={
          <ItemDetailContainer/>
        } />
          
      </Routes>
    </Router>
    
  );
}

export default App;




// function App() {
//   return (
//     <div className="App">      
//       <header>
//         <NavBar/>
//       </header>     
//     </div>
//   );
// }

// export default App;
