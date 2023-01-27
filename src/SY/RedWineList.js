import styled from './RedWine.module.css';
import RedWineDetail from './RedWineDetail';


const RedWineList =  ( {data} ) => {

     console.log(data); //{item} 하나씩 들어옴
    //  const {id, image, location, rating, wine, winary} = data; //구조분해 할당

    const handleClick = (e)=>{

        return <RedWineDetail/>
        // console.log(e.target.tagName);
    }
    
     return (

        <div>
            <ul className={styled.redwine_wrap} onClick={handleClick}>
                {data.map( (item) => 
                    <li key={item.id} >
                            <div className={styled.imageList}>
                                <img src={item.image} alt={item.wine} />
                            </div>
                            <div className={styled.textList}>
                                <p>{item.id}</p>
                                <p>{item.wine}</p>
                                <p>{item.location}</p>
                                <p>{item.winary}</p>
                                <p>{item.rating.average}</p>
                                <p>{item.rating.reviews}</p>
                            </div>
                    </li>
                    )
                }
             
            </ul>
        </div>
    ); 
};
export default RedWineList;