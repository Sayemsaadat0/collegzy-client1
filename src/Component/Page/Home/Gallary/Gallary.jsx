import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Container from "../../../../Container/Container";

const Gallary = () => {

    const images = [
        "https://i.ibb.co/XD2DQ8H/1.png",
        "https://i.ibb.co/XC0VcqW/2.png",
        "https://i.ibb.co/TYZnT49/rewrewr-2.png",
        "https://i.ibb.co/bRnVBFY/rewrewr-1.png",
        "https://i.ibb.co/xsSszJw/faf-1.png",
        "https://i.ibb.co/k25BjNz/3.png",
        "https://i.ibb.co/m0R9Z3f/faf-3.png",
        "https://i.ibb.co/84Y1DcP/rewrewr-3.png",
        "https://i.ibb.co/WBHhHf1/faf-2.png"
      
       

    ]
    return (
        <Container>
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
                <Masonry columnsCount={4} gutter="20px">
                    {images.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            style={{ width: "100%", display: "block" }}
                            alt=""
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </Container>
    );
};

export default Gallary;