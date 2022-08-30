import logo from './logo.svg';
import './App.css';
import HomeContainer from "./Container/HomeContainer";
import Header from './Components/Header';
import Home from './Components/Home';
function App() {
  return (
    <>
    <div className='App'>
    <Header></Header>
    <Home/>
    </div>
    </>
  );
}

export default App;
