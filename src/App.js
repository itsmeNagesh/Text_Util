
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import service from './Components/service'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
 <>
 
 <Navbar tittle="Text navbar"/>
 <Textform define="TextUtils(text converter).."/>
<service/>
 </>
  );
}

export default App;
