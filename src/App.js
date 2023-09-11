import './App.css';
import Navbar from './Navbar';
import { BrowserRouter} from 'react-router-dom';
function App() {
  return (

    <div>
      
    <div className="App">
          
          {/* <Top/> */}
          <BrowserRouter>
              <Navbar/>
          </BrowserRouter>
         
    </div>
    </div>
  );
}

export default App;
