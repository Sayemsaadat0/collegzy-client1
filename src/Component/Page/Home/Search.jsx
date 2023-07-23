import Container from "../../../Container/Container";

const Search = () => {
    return (
        <Container>
            <div className="join flex justify-center m-6">
                <input className="input input-bordered join-item md:w-[30%] " placeholder="Find Your College" />
                <button className="btn md:join-item md:w-[20%]">Search College</button>
            </div>
        </Container>
    );
};

export default Search;