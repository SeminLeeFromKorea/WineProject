import {useEffect, useState} from 'react';


const WhiteWineAPI = () => {

    const [data, setData] = useState("");
    const getData = async () => {
      const resp = await fetch('https://api.sampleapis.com/wines/whites');
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

export default WhiteWineAPI;