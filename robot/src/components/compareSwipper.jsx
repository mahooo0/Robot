import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const ProductCard = () => {
    const [active, setactive] = useState(false);
    if (!active) {
        return (
            <div
                onClick={() => {
                    setactive((prew) => !prew);
                }}
                className="w-[223px] h-[261px]  rounded-[20px] flex justify-center flex-col items-center relative  mt-3 bg-white bg-opacity-40"
            >
                <img
                    className="w-[192px]"
                    src="https://s3-alpha-sig.figma.com/img/3895/885b/b4dc72dce0886c76386fba2a1189d96b?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q5PJi-QBEuFaBIqSL3u15QS883vqcu6yM~Y1Z6QXqfaowjIranPxhXz4GmhDKiGHi-3zaToSKeSjvjBB3IuGJLXeU-K3ZknEZHf4bOt51QCsXJ0xgq2IF-720fHc~B76nrd9UFdXBLoIHBj85PemCLapmop0flf-UqQ6A3ByRIXk2GKggbXVI-QoYxvEigVmHa4-g1RxnU5nMdzOwhglVfwGNoMM48DOo3FjhzBVD4vKpcA67JFBpHX0emEX8eOo~Nze9bTUXfJJm4didSkQLP4CTzlRImv~zj-CDFaiRh6XJXRfuorXZ7EY8WM3tutyArTCtUjdP9An-xpF11CaIg__"
                />
                <p> Roomba® j7+</p>
            </div>
        );
    }
    return (
        <div className="w-[223px] h-[261px] border-[2px] border-[#447355] rounded-[20px] flex justify-center flex-col items-center relative  mt-3">
            <img
                className="w-[192px]"
                src="https://s3-alpha-sig.figma.com/img/3895/885b/b4dc72dce0886c76386fba2a1189d96b?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q5PJi-QBEuFaBIqSL3u15QS883vqcu6yM~Y1Z6QXqfaowjIranPxhXz4GmhDKiGHi-3zaToSKeSjvjBB3IuGJLXeU-K3ZknEZHf4bOt51QCsXJ0xgq2IF-720fHc~B76nrd9UFdXBLoIHBj85PemCLapmop0flf-UqQ6A3ByRIXk2GKggbXVI-QoYxvEigVmHa4-g1RxnU5nMdzOwhglVfwGNoMM48DOo3FjhzBVD4vKpcA67JFBpHX0emEX8eOo~Nze9bTUXfJJm4didSkQLP4CTzlRImv~zj-CDFaiRh6XJXRfuorXZ7EY8WM3tutyArTCtUjdP9An-xpF11CaIg__"
            />
            <p> Roomba® j7+</p>
            <div
                onClick={() => {
                    setactive((prew) => !prew);
                }}
                className="absolute -top-2 -right-2 w-[36px] h-[36px] bg-[#447355] rounded-full flex justify-center items-center text-white"
            >
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clip-path="url(#clip0_325_581)">
                        <path
                            d="M15 5L5 15"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M5 5L15 15"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_325_581">
                            <rect width="20" height="20" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
        </div>
    );
};
export default function CompareSwipperUpper() {
    // Update slides on window resize

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
        <div className=" mt-10 w-full relative">
            <Swiper
                className=""
                ref={swiperRef}
                slidesPerView={'auto'}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
            >
                <SwiperSlide className="!w-[250px] ml-[60px]">
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide className="!w-[250px]">
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide className="!w-[250px]">
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide className="!w-[250px]">
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide className="!w-[250px]">
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide className="!w-[250px]">
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide className="!w-[250px]">
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide className="!w-[250px]">
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide className="!w-[250px]">
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide className="!w-[250px]">
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide className="!w-[250px]">
                    <ProductCard />
                </SwiperSlide>
            </Swiper>
            <div>
                <div className="flex gap-3 items-center self-end justify-end  absolute -top-[50px] right-[60px] ">
                    <button
                        onClick={handlePrev}
                        className="bg-white  w-12 h-12 rounded-full flex justify-center items-center"
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
                        className="bg-white  w-12 h-12 rounded-full flex justify-center items-center"
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
