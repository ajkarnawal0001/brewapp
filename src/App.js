import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Home } from './Component/LandingPage/Home';
function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;


// Y8AJMgyM63-5TEJuzvez2Gg1OJ0lAQKbc8AjpuaykZM
// aj9nSICnl6g4SWb12Cw9SgBvpom9oxVX7vAoL-wfl1k