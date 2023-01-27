import styled from './RedWine.module.css';

const RedWineDetail = ()=> {

    const wine = sessionStorage.getItem('red_detail');
    // console.log(JSON.parse(wine));
    const detailInfo = JSON.parse(wine);

    return(        

        <div className={styled.detail_wrap}>
            <div >
                <div className={styled.detailImg_wrap}>
                    <img src={detailInfo.redImg} alt={detailInfo.redInfo[0]}/>
                </div>
            </div>
            <div>
                <div>이름:{detailInfo.redInfo[0]}</div>
                <div>
                    <dl>장소:{detailInfo.redInfo[1]}</dl>
                    <dl>와이너리:{detailInfo.redInfo[2]}</dl>
                    <dl>평점:{detailInfo.redInfo[3]}</dl>
                    <dl>리뷰어:{detailInfo.redInfo[4]}</dl>
                </div>
                <div>
                    <button>하트❤</button>
                    <button>지도보기</button>
                </div>
            </div>
            {/* 
            <nav>
                <ul>
                    <li>상품설명</li>
                    <li>상세정보</li>
                    <li>후기</li>
                    <li>문의</li>
                </ul>
            </nav>

            <div>
                내요요요요용
            </div> */}

        </div>
    )
}
export default RedWineDetail;