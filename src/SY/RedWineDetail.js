import styled from './RedWineDetail.module.css';
import MapAPI from '../SM/MapAPI';
import { useState } from 'react';
import img from './img/wine2.jpg';
import winery from './img/wine3.jpg';
import wineRegions from './img/wine4.jpg';


const RedWineDetail = ()=> {

    const wine = sessionStorage.getItem('red_detail');
    // console.log(JSON.parse(wine));
    const detailInfo = JSON.parse(wine);


    //지도버튼
    const [visible, setVisible] = useState(false);
    const handleMap = () => {
        setVisible(true);
    }

    return(        

        <div className={styled.detail_wrap}>
            <div >

                <span className={styled.detailTitle}>This is </span> 
                <span className={styled.detailNameList}>{detailInfo.redInfo[0]}</span> 
                <span className={styled.detailTitle}>RedWine</span>
            </div>
                <div className={styled.detailImg_wrap}>
                    <img src={detailInfo.redImg} alt={detailInfo.redInfo[0]}/>
                </div>
            <div>
                
                <div>
                    <p>장소:{detailInfo.redInfo[1]}</p>
                    <p>와이너리:{detailInfo.redInfo[2]}</p>
                    <p>평점:{detailInfo.redInfo[3]}</p>
                    <p>리뷰어:{detailInfo.redInfo[4]}</p>
                </div>
                <div>
                    <button>하트❤</button>
                    <button onClick={handleMap}>{visible ? null : "지도보이기"}</button>
                    { visible ? <MapAPI/> : null }
                </div>
            </div>
            
            <nav className={styled.detailInfo_wrap}>
                <ul className={styled.detailInfo}>
                    <li><a>상품설명</a></li>
                    <li><a>상세정보</a></li>
                    <li><a>후기</a></li>
                    <li><a>문의</a></li>
                </ul>
            </nav>

            <div>
                <img src={img}/>
                <img src={winery}/>
                <img src={wineRegions}/>
            </div>


        </div>
    )
}
export default RedWineDetail;