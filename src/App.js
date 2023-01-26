import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './layout/Home';
import Layout from './layout/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
        </Route>
      </Routes>
      
    </>
  );
}

export default App;
