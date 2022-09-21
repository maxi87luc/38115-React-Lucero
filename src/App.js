
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'

function App() {

  
  return (
    <div className="App">
      <header>
        <NavBar></NavBar>
      </header>
      <ItemListContainer>
        <p>Inserte su texto AQUI!!!!</p>
      </ItemListContainer>
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
