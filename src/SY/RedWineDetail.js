import styled from './RedWine.module.css';

const RedWineDetail = ()=> {

    return(
        <div className={styled.detail_wrap}>
            {/* float-left */}
            <div >
                <div className={styled.detailImg_wrap}>
                    <img ></img>
                </div>
            </div>
            <div>
                <div>제목</div>
                <div>가격?</div>
                <div>
                    <dl>원산지</dl>
                    <dl>평점</dl>
                    <dl>리뷰?</dl>
                </div>
                <div>
                    <button>하트</button>
                    <button>지도보기</button>
                </div>
            </div>

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
            </div>

        </div>
    )
}
export default RedWineDetail;