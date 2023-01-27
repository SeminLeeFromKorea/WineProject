import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './layout/Home';
import Layout from './layout/Layout';
import WhiteWineDetail from './JW/WhiteWineDetail';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/detail' element={<WhiteWineDetail/>}/>
        </Route>
      </Routes>
      
    </>
  );
}

export default App;
