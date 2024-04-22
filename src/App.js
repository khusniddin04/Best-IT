import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';



function App() {
  return (
    <div className="App">
     <Header/>
     <Search/>
     <Outlet/>
    
      
    </div>
  );
}

export default App;
