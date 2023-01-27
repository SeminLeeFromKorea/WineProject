import RedWineAPI from "../SY/RedWineAPI";
import WhiteWineAPI from "../JW/WhiteWineAPI";
import { Link } from "react-router-dom";

const Home = () => {


    return(
        <>
        {/* <RedWineAPI/>
        <WhiteWineAPI/> */}

        <Link to='./red'>RED</Link>
        <Link to='./white'>WHITE</Link>
        </>
    )
}

export default Home;