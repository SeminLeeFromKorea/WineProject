import {useEffect, useState} from 'react';


const RedWineAPI = () => {

    const [data, setData] = useState("");
    const getData = async () => {
      const resp = await fetch('https://api.sampleapis.com/wines/reds');
      const json = await resp.json();
      console.log(json);
      setData(json);

    }
  
    useEffect(() => {
      getData();
    }, []);
  
    return (
      <>
      </>
    )
}

export default RedWineAPI;