import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Feed from './pages/Feed';
import Required from './hoc/Required';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Routes>
          <Route path='' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/feed' element={
          <Required><Feed/></Required> }/>
       </Routes>
    </div>
  );
}

export default App;
