
import React from 'react';
import Container from '../../../../Container/Container';

const DetailsCard = ({ img, name, intro }) => {
    return (
        <Container>
            <div className="card image-full ">
                <img className='w-full' src={img} alt="" />
                <div className="card-body text-center">
                    <div className='flex flex-col justify-center items-center '>
                        <h2 className='font-bold text-3xl  '>{name}</h2>
                        <p>{intro}</p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default DetailsCard;