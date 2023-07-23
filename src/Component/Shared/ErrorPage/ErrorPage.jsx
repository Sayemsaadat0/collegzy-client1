import { Link } from 'react-router-dom';
import Container from '../../../Container/Container';

const ErrorPage = () => {
    return (
        <Container>
            <img src="https://i.ibb.co/DprsfqF/portfulio-2.gif" alt="" />

            <div className='flex justify-center'>
                <Link to='/' className='btn'>Go to Home</Link>
            </div>
        </Container>
    );
};

export default ErrorPage;