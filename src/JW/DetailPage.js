import styled from './DetailPage.module.css';

const DetailPage = () => {

    return (
        <>
            <h1 className={styled.title}>White Wine?</h1>
            <article className={styled.type_wrap}>
                {/* <h3>화이트 와인 종류</h3> */}
                <div className={styled.type_text}>
                </div>
                <img className={styled.type_img1} src={'/img/s1.jpg'}/>
                <img className={styled.type_img2} src={'/img/10.jpg'}/>

            </article>

            <article className={styled.current_wrap}>
                <img className={styled.type_img3} src={'/img/p10.jpg'}/>

                <img className={styled.type_img4} src={'/img/18.jpg'}/>
                <img className={styled.type_img5} src={'/img/3.jpg'}/>
                    <h3>이 와인에 관한 내용</h3>
                    <p>뫼르소는 샤르도네 품종으로 유명한 부르고뉴 지역의 유명 산지입니다. 뫼르소에는 3개의 유명한 프리미에 크뤼 포도밭이 존재하죠. 그중 하나인 페리에르(Les Perrières) 포도밭의 포도로 양조한 와인으로 아카시아꽃, 꿀, 라임, 크렘 브륄레, 아몬드, 헤이즐넛 등 다채로운 향과 놀라운 맛을 지녔어요. 밀도 있는 풍만한 바디와 구조감이 인상적이며 충분한 숙성 잠재력을 지녔어요. 와인의 순수한 풍미를 가리는 짙은 오크 캐릭터를 지양하기 때문에 새로운 오크는 약 15% 정도만 사용했어요. 프랑스의 전설적인 셰프인 폴 보퀴즈가 선택한 뛰어난 퀄리티의 뫼르소를 꼭 경험해 보세요.</p>
            </article>

            <article className={styled.tasting_wrap}>
                <h3>tasting note</h3>
                <img src={'./img/tasting.jpg'}/>

            </article>

            <article className={styled.place_wrap}>
                <h3>winery & regions</h3>
                {/* <img src={require('./img/p9.jpg')}/> */}
                {/* <img src={require('./img/p1.jpg')}/> */}
                <img src={'./img/p3.jpg'}/>
                <img src={'./img/regions.jpg'}/>
                도멘 미쉘롯<br/>
                니콜라 메스트레<br/>
                <p>
                오직 뫼르소만을 6세대에 걸쳐 양조해온 유서 깊은 와이너리입니다. 뫼르소 프리미에 크뤼 4개, 빌라주 7개를 포함해 약 19ha 규모의 포도밭을 소유하고 있죠. 뛰어난 품질의 포도를 얻기 위해 매우 섬세하게 짠 경작 스케줄에 따라 움직이며, 각 테루아가 가진 캐릭터와 퀄리티를 최대한 표현하고자 노력합니다. 뫼르소의 토양은 진흙 토대에 석회석, 자갈이 어우러져 있는데요, 이런 환경 덕분에 풍만한 볼륨감, 놀라운 균형미, 매력적인 산도와 피니시를 가진 와인을 탄생시킬 수 있어요. 현재는 이십 대의 젊은 세대가 와인 메이킹 노하우를 이어 받아 전통적인 부르고뉴 스타일의 양조를 지켜나가고 있습니다. 
                </p>
            </article>
        </>
    )
}

export default DetailPage;