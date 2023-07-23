import Container from "../../../Container/Container";
import Best3Colleges from "../Best3Colleges/Best3Colleges";
import Search from "./Search";

const Home = () => {
    return (
        <Container >
            <div className="px-2">
                <Search></Search>
            </div>
            <div className="px-2">
               <Best3Colleges></Best3Colleges>
            </div>
        </Container>
    );
};

export default Home;