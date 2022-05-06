import { Outlet } from "react-router-dom";
import './App.css';
import HeaderFooter from './components/HeaderFooter';

function App() {
  return (
    <div className="App">
      <HeaderFooter>
        <Outlet/>
      </HeaderFooter>
    </div>
  );
}

export default App;
