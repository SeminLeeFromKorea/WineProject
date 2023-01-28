import styled from './WhiteWineDetail.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import MapAPI from '../SM/MapAPI';

const WhiteWineDetail = () => {

    const wine = sessionStorage.getItem('detail');
    // console.log(JSON.parse(wine));
    const whiteInfo = JSON.parse(wine); //변수에 받아서 파싱
    // console.log(whiteInfo.info);
 
    const [visible, setVisible] = useState(false);

    const handleMap = () => {
        setVisible(true);
    }

    const [ex, setEx] = useState(true);

    const handleEx = (e) => {
        if(e.target.innerHTML === "리뷰") {
            setEx(false);
        } else if (e.target.innerHTML === "상세 페이지"){
            setEx(true);
        }

    }

    return (
        <>
        <div className={styled.detail_header}>
        <span className={styled.titleText}>This is</span>
        <span className={styled.titleName}>{whiteInfo.info[0]}</span>
        <span className={styled.titleText}>white wine 🍷</span>
        </div>
        
        {/* 상위 상세페이지 */}    
        <section className={styled.article_top}>
            <div>
                <img src={whiteInfo.img} alt={whiteInfo.info[0]}/>
            </div>
            <div>
                {/* {whiteInfo.info[0]} <br/> */} {/* 이름 */}
                <p className={styled.place}>location: {whiteInfo.info[1]}</p> {/* 장소 */}
                <p>{whiteInfo.info[2]}</p> {/* 와이너리 */}
                <p>{whiteInfo.info[3]}</p> {/* 평점 */}
                <p>{whiteInfo.info[4]}</p> {/* 리뷰어 */}
                <button onClick={handleMap}>{visible ? null : "지도보이기"}</button>
                { visible ? <MapAPI/> : null }

                <button>좋아요</button>
            </div>
            <div className={styled.page_wrap}>
                <button className={styled.page_btn} onClick={handleEx}>상세 페이지</button>
                <button className={styled.page_btn} onClick={handleEx}>리뷰</button>
            </div>
        </section>

        {/* 하위 상세페이지 */}
        <section className={styled.article_bottom}>
            <div>{!ex ? <article>
                    <h3>리뷰</h3>
            </article> : <article>
                    <h3>상세 페이지</h3>
            </article>}</div>


            <article>
                    <h3>이것이 바로 화이트와인 종류</h3>
            </article>
            <article>
                    <h3>지금 이 와인 종류</h3>
            </article>
            <article>
                    <h3>뭘ㅏㄲ요~~~</h3>
            </article>


        </section>
        </>
    )
}

export default WhiteWineDetail;