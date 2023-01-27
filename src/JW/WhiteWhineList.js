import { useNavigate } from 'react-router-dom';
import WhiteWineDetail from './WhiteWineDetail';
import styled from './WhiteWineList.module.css';

const WhiteWineList = ( {data} ) => {

    // const {id, image, location, rating, wine, winary} = data; //구조분해 할당 못함
    const navigate = useNavigate();

    const handleClick = (e) => {
        
        // console.log(e);

        const x = e.target.parentElement.nextElementSibling.children;         
        const arr = [];

        for(let i = 1 ; i < x.length; i++) {
            arr.push(x[i].innerHTML);
        }

        // console.log(arr);
        sessionStorage.setItem('detail', JSON.stringify({'img': e.target.src,
                                                        'info': arr})
                              );
        navigate("/whitedetail");
        
    }

    return (
        
        <>
            <div className={styled.whitewine_container}>
            <h3> 화이트 와인 관련 이미지 </h3>
            <ul className={styled.whitewine_wrap}>
            
                {
                    data.map( (item) =>  /* 데이터 60개만 가져옴 */
                        <div className={styled.box} key={item.id}>
                            <li  >
                                    <div className={styled.imageList}>
                                        <img src={item.image} alt={item.wine} onClick={handleClick}/>
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
                        </div>
                    )
                }

            </ul>
            </div>
        </>
    )
}

export default WhiteWineList;