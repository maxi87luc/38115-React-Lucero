
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'



function App() {

  
  return (
    <div className="App">
      <header>
        <NavBar></NavBar>
      </header>
      <ItemListContainer greeting={{material: "Caucho", genero: "hombre"}} />
        
        
              
      
    </div>
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
