import Container from "../../../Container/Container";


const SectionTitle = ({title, subTitle}) => {
    return (
        <Container>
         <div className="mt-10 mb-10">
            <h2 className="text-3xl font-bold">{title}</h2> 
            <p className="mt-2">{subTitle}</p>
         </div>
        </Container>
    );
};

export default SectionTitle;