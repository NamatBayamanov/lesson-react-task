
import "./App.scss";


import Logo from "./components/Logo/Logo";
import PizzaCart from "./components/PizzaCart/PizzaCart";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="wrapper">
          <Logo/>

          <Navbar/>

          <main className="Main">
            <h2 className="main__title">All pizza</h2>
            <PizzaCart/>
            <PizzaCart/>
            <PizzaCart/>
            <PizzaCart/>
            <PizzaCart/>
            <PizzaCart/>
          </main>

          
        </div>
      </div>
    </div>
  );
}

export default App;
