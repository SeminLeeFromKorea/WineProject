import {useEffect, useState} from 'react';
import { PuffLoader } from 'react-spinners';
import WhiteWineList from './WhiteWhineList';

import styled from './WhiteWineList.module.css';

const WhiteWineAPI = () => {

    const [data, setData] = useState("");
    const getData = async () => {
      const resp = await fetch('https://api.sampleapis.com/wines/whites');
      const json = await resp.json();
      console.log(json);
      setData(json);
      setLoading(true); //로딩완료
    }
  
    useEffect(() => {
      getData();
    }, []);
  
    const [loading, setLoading] = useState(false);
    if (loading === false) {
      return <div className={styled.loading}>
                <PuffLoader
                  color="#36d7b7"
                  cssOverride={{}}
                  loading
                  size={100}
                  speedMultiplier={1}
                />
              </div>
    }

    return (
      
      <div className={styled.whitewine_container}>
        <h3> 화이트 와인 관련 이미지 </h3>
        <ul className={styled.whitewine_wrap}>
          {
            data.map( function(item) {
              if(item.id !== 18 && item.id !== 42 && item.id !== 85 && item.id !== 154 && item.id !== 169 && item.id !== 186 && item.id !== 193 &&
                 item.id !== 204 && item.id !== 208 && item.id !== 215 && item.id !== 219 && item.id !== 237 && item.id !== 248 && item.id !== 250 &&
                 item.id !== 264 && item.id !== 265 && item.id !== 328 && item.id !== 333 && item.id !== 340 && item.id !== 379 && item.id !== 394 &&
                 item.id !== 441 && item.id !== 442) {
                return <WhiteWineList key={item.id} item={item}/> 
              }
            } )
          }
        </ul>
      </div>
    )
}

export default WhiteWineAPI;