

const WhiteWineDetail = () => {

    const wine = sessionStorage.getItem('detail');
    // console.log(JSON.parse(wine));
    const whiteInfo = JSON.parse(wine);
    console.log(whiteInfo.info);

    return (
        <>
        <h3>디테일 페이지</h3>
        <div>
            <img src={whiteInfo.img} alt={whiteInfo.info[0]}/>
        </div>
        <div>
            {whiteInfo.info[0]} <br/> {/* 이름 */}
            {whiteInfo.info[1]} <br/> {/* 장소 */}
            {whiteInfo.info[2]} <br/> {/* 와이너리 */}
            {whiteInfo.info[3]} <br/> {/* 평점 */}
            {whiteInfo.info[4]} <br/> {/* 리뷰어 */}
        </div>
        </>
    )
}

export default WhiteWineDetail;