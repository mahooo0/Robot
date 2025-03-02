import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useRecoilState } from 'recoil';
import { CompareProducts } from './recoil/Atom';

const ProductCard = ({ data }) => {
    const [active, setActive] = useState(false);
    const [compareProducts, setCompareProducts] =
        useRecoilState(CompareProducts);

    const toggleActive = () => {
        if (active) {
            setCompareProducts(compareProducts.filter((id) => id !== data?.id));
        } else {
            setCompareProducts([...compareProducts, data?.id]);
        }
        setActive(!active);
    };

    return (
        <div
            onClick={toggleActive}
            className={`w-[223px] h-[261px] rounded-[20px] flex justify-center flex-col items-center relative mt-3 bg-white bg-opacity-40 ${
                active ? 'border-[2px] border-[#447355]' : ''
            }`}
        >
            <img
                className="max-h-[200px]"
                src={data?.image}
                alt={data?.title}
            />
            <p>{data?.title}</p>
            {active && (
                <div className="absolute -top-2 -right-2 w-[36px] h-[36px] bg-[#447355] rounded-full flex justify-center items-center text-white">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clipPath="url(#clip0_325_581)">
                            <path
                                d="M15 5L5 15"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M5 5L15 15"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_325_581">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            )}
        </div>
    );
};

export default function CompareSwipperUpper({ products, isLoading }) {
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
        <div className="mt-10 w-full relative">
            <Swiper
                ref={swiperRef}
                slidesPerView={'auto'}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
            >
                {isLoading
                    ? Array.from({ length: 10 }).map((item) => (
                          <SwiperSlide className="!w-[250px] ml-[60px]">
                              <div
                                  className={`w-[223px] h-[261px] rounded-[20px] flex justify-center flex-col items-center relative mt-3 bg-gray-300 animate-pulse`}
                              >
                                  <div className="max-h-[200px] w-full bg-gray-400 rounded-md"></div>
                                  <div className="w-3/4 h-4 bg-gray-400 rounded-md mt-3"></div>
                                  <div className="absolute -top-2 -right-2 w-[36px] h-[36px] bg-gray-500 rounded-full flex justify-center items-center">
                                      <svg
                                          width="20"
                                          height="20"
                                          viewBox="0 0 20 20"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                      >
                                          <g clipPath="url(#clip0_325_581)">
                                              <path
                                                  d="M15 5L5 15"
                                                  stroke="white"
                                                  strokeWidth="2"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                              />
                                              <path
                                                  d="M5 5L15 15"
                                                  stroke="white"
                                                  strokeWidth="2"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                              />
                                          </g>
                                          <defs>
                                              <clipPath id="clip0_325_581">
                                                  <rect
                                                      width="20"
                                                      height="20"
                                                      fill="white"
                                                  />
                                              </clipPath>
                                          </defs>
                                      </svg>
                                  </div>
                              </div>
                          </SwiperSlide>
                      ))
                    : products?.map((item) => (
                          <SwiperSlide
                              key={item.id}
                              className="!w-[250px] ml-[60px]"
                          >
                              <ProductCard data={item} />
                          </SwiperSlide>
                      ))}
                {}
            </Swiper>
            <div className="flex gap-3 items-center justify-end absolute -top-[50px] right-[60px]">
                <button
                    onClick={handlePrev}
                    className="bg-white w-12 h-12 rounded-full flex justify-center items-center"
                >
                    <img
                        src="/svg/Strelka_black.svg"
                        alt="Previous"
                        className="w-6 aspect-square"
                    />
                </button>
                <button
                    onClick={handleNext}
                    className="bg-white w-12 h-12 rounded-full flex justify-center items-center"
                >
                    <img
                        src="/svg/Strelka_black.svg"
                        alt="Next"
                        className="w-6 aspect-square rotate-180"
                    />
                </button>
            </div>
        </div>
    );
}
