import Container from "../../../Container/Container";
import Search from "./Search";

const Home = () => {
    return (
        <Container >
            <div className="px-2">
                <Search></Search>
            </div>
        </Container>
    );
};

export default Home;