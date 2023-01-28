import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './layout/Home';
import Layout from './layout/Layout';
import WhiteWineDetail from './JW/WhiteWineDetail';
import WhiteWineAPI from './JW/WhiteWineAPI';
import RedWineAPI from './SY/RedWineAPI';
import RedWineDetail from './SY/RedWineDetail';
import MapAPI from './SM/MapAPI';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
          <Route element={<Layout/>}>
            <Route path='/white' element={<WhiteWineAPI/>}/>
            <Route path='/red' element={<RedWineAPI/>}/>

            <Route path='/whitedetail' element={<WhiteWineDetail/>}/>
            <Route path='/redDetail' element={<RedWineDetail/>}/>
          </Route>
        {/* <Route path='/map' element={<MapAPI/>}></Route> */}
      </Routes>
      
    </>
  );
}

export default App;
