import Container from "../../../Container/Container";
import Best3Colleges from "./Best3Colleges/Best3Colleges";
import Gallary from "./Gallary/Gallary";
import Review from "./Review/Review";
import Search from "./Search";

const Home = () => {
    return (
        <Container>
            <div className="px-2">
                <Search></Search>
            </div>
            <div className="px-2">
             <Best3Colleges></Best3Colleges>
            </div>
            <div className="px-2 mb-5">
              <Gallary></Gallary>
            </div>
            <div className="px-2 mb-5 mt-20 py-7 ">
            <Review></Review>
            </div>
        </Container>
    );
};

export default Home;