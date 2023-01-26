import styled from './RedWine.module.css';


const RedWineList =  ( {item} ) => {

     console.log({item}); //{item} 하나씩 들어옴
     const {id, image, location, rating, wine, winary} = item; //구조분해 할당

     return (
        <div>
             <li>
                <a href="#">
                    <div className={styled.imageList}>
                    
                        <img src={image === null? "사진 없음" : image} alt={wine} />
                    </div>
                    <div className={styled.textList}>
                        {/* <p>{id}</p> */}
                        <p>{wine}</p>
                        <p>{location}</p>
                        <p>{winary}</p>
                        <p>{rating.average}</p>
                        <p>{rating.reviews}</p>
                    </div>
                </a>
            </li>
        </div>
    )
 
}
export default RedWineList;