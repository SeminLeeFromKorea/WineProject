import {useEffect, useState} from 'react';
import RedWineList from './RedWineList';
import styled from './RedWine.module.css';
import { PuffLoader } from 'react-spinners';

const RedWineAPI = () => {

  const [data, setData] = useState("");

  // const [img, setImg] = useState("");

  const getData = async () => {
    const resp = await fetch('https://api.sampleapis.com/wines/reds');
    const json = await resp.json();      
    setData(json);
    setLoading(true); //로딩완료
    
  }

  useEffect(() => {
    getData();
  }, []);

  const [loading, setLoading] = useState(false);
  if(loading === false){
    return <div>
      <PuffLoader
      color="#36d7b7"
      cssOverride={{}}
      loading
      size={100}
      speedMultiplier={1}
      />
    </div>
  } 
 
  // const=  data.map( item => <RedWineList key={item.id} item={item} /> )
  const imgList = data.map( function(item){
    if(item.id !== 1 && item.id !== 16 && item.id !==21 && item.id !== 25 && item.id !== 26 && item.id !== 31 && item.id !== 33 && item.id !== 40 && item.id !== 43 && item.id !== 46 && item.id !== 54 && item.id !== 55 && item.id !== 58 && item.id !== 63){
      return <RedWineList key={item.id} item={item} />
    }
  })


  

  return (
    <div className={styled.redwine_container}>
      <h3>레드와인 구매창?</h3>
      <ul className={styled.redwine_wrap}>
        {imgList}
      </ul>
    </div>
    
      
    
  )
}

export default RedWineAPI;