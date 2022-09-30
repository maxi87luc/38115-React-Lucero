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
        <Route exact path='/EVA/Dama' element={
          <ItemListContainer greeting={{material: "EVA", genero: "dama"}}/>
        } />
        <Route exact path='/EVA/Hombre' element={
          <ItemListContainer greeting={{material: "EVA", genero: "hombre"}}/>
        } />
        <Route exact path='/Caucho/Dama' element={
          <ItemListContainer greeting={{material: "Caucho", genero: "dama"}}/>
        } />
        <Route exact path='/Caucho/Hombre' element={
          <ItemListContainer greeting={{material: "Caucho", genero: "hombre"}}/>
        } />
        <Route exact path='/EVA-Caucho/Dama' element={
          <ItemListContainer greeting={{material: "EVA-Caucho", genero: "dama"}}/>
        } />
        <Route exact path='/EVA-Caucho/Hombre' element={
          <ItemListContainer greeting={{material: "EVA-Caucho", genero: "hombre"}}/>
        } />
        <Route exact path='/:id' element={
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
