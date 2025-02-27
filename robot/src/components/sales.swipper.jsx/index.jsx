import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ProductCardSm from '../ProductCards/productCarrSm';
import strelka from '../../../public/svg/Strelka_black.svg';
import Product_Card_aute from '../ProductCards/Product_Card_aoute';
export default function SalesSwipper({ data }) {
    console.log('data', data);

    const [slidesPerView, setSlidesPerView] = useState(4); // Default value

    const updateSlidesPerView = () => {
        const width = window.innerWidth;

        if (width >= 1024) {
            setSlidesPerView(4);
        } else if (width >= 768) {
            setSlidesPerView(3);
        } else if (width >= 640) {
            setSlidesPerView(2);
        } else {
            setSlidesPerView(1); // Minimum 1 slide for smaller screens
        }
    };

    // Update slides on window resize
    useEffect(() => {
        updateSlidesPerView(); // Set initial value
        window.addEventListener('resize', updateSlidesPerView);

        return () => {
            window.removeEventListener('resize', updateSlidesPerView); // Cleanup
        };
    }, []);
    const swiperRef = useRef(null);

    const handleNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const handlePrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };
    return (
        <div className="lg:pl-[60px] pl-[30px] mt-10">
            <Swiper
                ref={swiperRef}
                slidesPerView={'auto'}
                spaceBetween={20}
                // breakpoints={{
                //     640: {
                //         slidesPerView: 2,
                //     },
                //     768: {
                //         slidesPerView: 2,
                //     },
                //     1024: {
                //         slidesPerView: 4,
                //     },
                // }}
            >
                {data?.map((item) => (
                    <SwiperSlide className="!w-fit min-w-[280px]">
                        <Product_Card_aute data={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="lg:pr-[60px] pr-[30px]">
                <div className="flex gap-3 items-center self-end justify-end mt-5">
                    <button
                        onClick={handlePrev}
                        className="bg-[#ECF3EA]  w-12 h-12 rounded-full flex justify-center items-center"
                    >
                        <img
                            loading="lazy"
                            src="/svg/Strelka_black.svg"
                            alt={'alt'}
                            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square rounded-[100px]"
                        />
                    </button>
                    <button
                        onClick={handleNext}
                        className="bg-[#ECF3EA]  w-12 h-12 rounded-full flex justify-center items-center"
                    >
                        <img
                            loading="lazy"
                            src="/svg/Strelka_black.svg"
                            alt={'alt'}
                            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square rounded-[100px]  rotate-180"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}
