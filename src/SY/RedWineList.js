import styled from './RedWine.module.css';
import RedWineDetail from './RedWineDetail';
import { useNavigate } from 'react-router-dom';


const RedWineList =  ( {data} ) => {

    //console.log(data); //{item} 하나씩 들어옴
    const navigate = useNavigate();    
    const handleClick = (e)=>{
        const pTag = e.target.parentElement.nextElementSibling.children;
        // console.log(pTag);

        const pTag_arr = [];
        for(let i = 1; i < pTag.length; i++){
            pTag_arr.push(pTag[i].innerHTML);
        }

        // console.log(pTag_arr);

        sessionStorage.setItem('red_detail', JSON.stringify({'redImg':e.target.src,
                                                            'redInfo':pTag_arr})
                              );
        
        navigate("/redDetail");
        
       
    }
    
     return (
        <div>
            <ul className={styled.redwine_wrap} onClick={handleClick}>
                {data.map( (item) => 
                    <li key={item.id} >
                            <div className={styled.imageList}>
                                <img src={item.image} alt={item.wine} onClick={handleClick} />
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