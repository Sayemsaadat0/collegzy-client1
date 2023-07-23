import Container from '../../../../Container/Container';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaQuoteRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';

const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('Reviews.json')
            .then((response) => response.json())
            .then((data) => setReviews(data))
            .catch((error) => console.error('Error fetching reviews:', error));
    }, []);

    return (
        <Container>
            <div className='md:flex block'>

                <div className='mdw-1/3 md:flex justify-center flex-col  text-center items-center'>
                     <div className='flex justify-center'>
                        <FaQuoteRight className='text-4xl'></FaQuoteRight>
                    </div>
                    <SectionTitle title={'what our client are saying'} subTitle={'Glowing reviews and heartfelt testimonials from our satisfied customers. See why they love us!'}></SectionTitle>
                </div>
                <div className='md:w-2/3'>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {reviews.map((review, index) => (
                            <SwiperSlide key={index}>
                                <div className="card bg-base-100 border shadow-md hover:bg-blue-100 hover:shadow-blue-400  duration-500">
                                    <div className="card-body">
                                        <div className='flex justify-center'>
                                            <img className='rounded-full w-20' src={review.image} alt="" />
                                        </div>
                                        <h2 className="card-title">{review.name}</h2>
                                        <h2 className="">Ratings : {review.ratings}</h2>
                                        <h2 className="">{review.title}</h2>
                                        <p>{review.details}</p>

                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </Container>
    );
};

export default Review;