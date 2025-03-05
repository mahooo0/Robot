import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useRecoilState } from 'recoil';
import { CompareProducts } from './recoil/Atom';
import { useEffect } from 'react';
import GETRequest from '@/services/QueryREq';
import { useRouter } from 'next/router';

const CompareSwipper2 = ({ translates }) => {
    const [compareProducts, setCompareProducts] =
        useRecoilState(CompareProducts);

    const router = useRouter();
    const { lang } = router.query;
    const queryString = compareProducts.length
        ? `?${compareProducts.map((id) => `product_ids[]=${id}`).join('&')}`
        : '';

    const { data: products, isLoading: ProductLoading } = GETRequest(
        `/getDifferentProducts${queryString}`,
        'getDifferentProducts',
        [lang, compareProducts]
    );
    useEffect(() => {
        console.log('compareProducts', compareProducts);
        console.log('products', products);
    }, [compareProducts, products]);

    return (
        <Swiper
            spaceBetween={30} // Adjust the space between slides
            slidesPerView={'auto'} // Set how many slides to show at once
            navigation // Enable navigation buttons
            pagination={{ clickable: false }} // Enable pagination
            style={{ height: 'fit-content' }} // Set a fixed height for the swiper
        >
            {!products &&
                Array(10)
                    .fill()
                    .map((_, slideIndex) => (
                        <SwiperSlide
                            key={slideIndex}
                            className="lg:!w-[27%] md:!w-2/5 !w-fit"
                        >
                            <div className="min-w-[350px] max-sm:w-full max-sm:min-w-0 flex flex-col justify-center items-center lg:ml-[310px] md:ml-[310px] ml-[0] animate-pulse">
                                <article className="flex overflow-hidden flex-col justify-center p-5 bg-gray-200 rounded-3xl w-full max-w-[310px]">
                                    <div className="flex overflow-hidden flex-col w-full">
                                        <div className="bg-gray-300 w-full h-[180px] rounded-md"></div>
                                    </div>
                                    <div className="flex flex-col mt-3 w-full text-xl font-semibold text-center">
                                        <div className="bg-gray-300 h-6 w-3/4 mx-auto rounded-md"></div>
                                        <div className="flex gap-1 items-center self-center mt-3 text-gray-600 whitespace-nowrap">
                                            <div className="bg-gray-300 h-4 w-10 rounded-md"></div>
                                            <div className="bg-gray-300 h-4 w-4 rounded-full"></div>
                                        </div>
                                    </div>
                                    <hr className="mt-3.5 w-full border border-solid border-black border-opacity-10" />
                                    <div className="flex gap-3 items-center self-center mt-3.5">
                                        {Array(3)
                                            .fill(0)
                                            .map((_, index) => (
                                                <div
                                                    key={index}
                                                    className="bg-gray-300 w-7 h-7 rounded-full"
                                                ></div>
                                            ))}
                                    </div>
                                    <div className="flex overflow-hidden opacity-0 flex-col justify-center px-16 py-2.5 mt-5 w-full text-sm font-medium text-center text-white bg-gray-300 rounded-[100px] max-md:px-5"></div>
                                </article>
                                {Array(5)
                                    .fill(0)
                                    .map((_, index) => (
                                        <div
                                            key={index}
                                            className="h-[86px] w-full flex flex-col items-center justify-center border-t  border-black border-opacity-15"
                                        >
                                            <div className="hidden max-sm:flex bg-gray-300 h-4 w-20 rounded-md"></div>
                                            <div className="bg-gray-300 h-6 w-6 rounded-full"></div>
                                        </div>
                                    ))}
                            </div>
                        </SwiperSlide>
                    ))}
            {products?.map((item, slideIndex) => (
                <SwiperSlide
                    key={slideIndex}
                    className="lg:!w-[27%] md:!w-2/5 !w-fit"
                >
                    <div className="min-w-[350px] max-sm:w-fit max-sm:min-w-0  flex flex-col justify-center items-center lg:ml-[310px] md:ml-[310px] ml-[0]">
                        <article className="flex overflow-hidden flex-col justify-center p-5 bg-white rounded-3xl max-w-[310px]">
                            <div className="flex overflow-hidden flex-col w-full">
                                <img
                                    loading="lazy"
                                    src={item.image}
                                    alt="Roomba j7+ vacuum cleaner"
                                    className="object-contain w-full aspect-[1.58]"
                                />
                            </div>
                            <div className="flex flex-col mt-3 w-full text-xl font-semibold text-center">
                                <h2 className="text-green-950">{item.title}</h2>
                                <div className="flex gap-1 items-center self-center mt-3 text-gray-600 whitespace-nowrap">
                                    <span className="self-stretch my-auto">
                                        {item.discounted_price}
                                    </span>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/623a323ef27bd752e2cdcfd65e406571e6d882b8055ec7fb7b5939460d489c72?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                        alt="Currency symbol"
                                        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                                    />
                                </div>
                            </div>{' '}
                            <hr className="mt-3.5 w-full border border-solid border-black border-opacity-10" />
                            <div className="flex gap-3 items-center self-center mt-3.5">
                                {[
                                    {
                                        src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/33f439e1321c156789730bb7dc3fdc7dc93f1662f04a031934f79cc1736c118d?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
                                        alt: 'Feature 1',
                                    },
                                    {
                                        src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c1f197adb17f25da618b5523ec91897859541b10391d0430c05d2968a5790c09?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
                                        alt: 'Feature 2',
                                    },
                                    {
                                        src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/016919d07388aa49fb526bb5142684603ffa6f4d6d4f5d852e9674e9eaaa206a?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
                                        alt: 'Feature 3',
                                    },
                                ].map((feature, index) => (
                                    <img
                                        key={index}
                                        loading="lazy"
                                        src={feature.src}
                                        alt={feature.alt}
                                        className="object-contain shrink-0 self-stretch my-auto w-7 aspect-square"
                                    />
                                ))}
                            </div>
                            <button
                                disabled
                                className="flex overflow-hidden  opacity-0 flex-col justify-center px-16 py-2.5 mt-5 w-full text-sm font-medium text-center text-white bg-[#447355] rounded-[100px] max-md:px-5"
                            >
                                <div className="flex gap-2 items-center">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca813736e3d20413816b1472926f080a936022c13cb81932b5fc51d32c67b74c?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                        alt=""
                                        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                                    />
                                    <span className="self-stretch my-auto">
                                        Səbətə əlavə et
                                    </span>
                                </div>
                            </button>
                        </article>

                        <div className=" h-[86px]  gap-2 flex-col w-full flex items-center justify-center max-sm:border-t mt-[28px] border-black border-opacity-15">
                            <p className="hidden max-sm:flex">
                                discounted price
                            </p>
                            {/* <img src="/svg/qalocka.svg" /> */}
                            <p>{item.discounted_price}</p>
                        </div>
                        <div className=" h-[86px]  gap-2 flex-col w-full flex items-center justify-center max-sm:border-t  border-black border-opacity-15">
                            <p className="hidden max-sm:flex">category</p>
                            <p>{item.category}</p>
                        </div>
                        <div className=" h-[86px]  gap-2 flex-col w-full flex items-center justify-center max-sm:border-t  border-black border-opacity-15">
                            <p className="hidden max-sm:flex">type</p>
                            <p>{item.type}</p>
                        </div>
                        <div className=" h-[86px]  gap-2 flex-col w-full flex items-center justify-center max-sm:border-t  border-black border-opacity-15">
                            <p className="hidden max-sm:flex">room_area</p>
                            <p>{item.room_area}</p>
                        </div>
                        <div className=" h-[86px]  gap-2 flex-col w-full flex items-center justify-center max-sm:border-t  border-black border-opacity-15">
                            <p className="hidden max-sm:flex">color</p>
                            <p>{item.color || 'not mation'}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
            <SwiperSlide
                key={'slideIndex'}
                className="lg:!w-[27%] md:!w-2/5 !w-fit"
            >
                <div className="min-w-[350px] max-sm:hidden opacity-0 max-sm:w-fit max-sm:min-w-0 flex flex-col justify-center items-center lg:ml-[310px] md:ml-[310px] ml-[0] ">
                    <article className="flex overflow-hidden flex-col justify-center p-5 bg-gray-200 rounded-3xl max-w-[310px]">
                        <div className="flex overflow-hidden flex-col w-full">
                            <div className="bg-gray-300 w-full h-[180px] rounded-md"></div>
                        </div>
                        <div className="flex flex-col mt-3 w-full text-xl font-semibold text-center">
                            <div className="bg-gray-300 h-6 w-3/4 mx-auto rounded-md"></div>
                            <div className="flex gap-1 items-center self-center mt-3 text-gray-600 whitespace-nowrap">
                                <div className="bg-gray-300 h-4 w-10 rounded-md"></div>
                                <div className="bg-gray-300 h-4 w-4 rounded-full"></div>
                            </div>
                        </div>
                        <hr className="mt-3.5 w-full border border-solid border-black border-opacity-10" />
                        <div className="flex gap-3 items-center self-center mt-3.5">
                            {Array(3)
                                .fill(0)
                                .map((_, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-300 w-7 h-7 rounded-full"
                                    ></div>
                                ))}
                        </div>
                        <div className="flex overflow-hidden opacity-0 flex-col justify-center px-16 py-2.5 mt-5 w-full text-sm font-medium text-center text-white bg-gray-300 rounded-[100px] max-md:px-5"></div>
                    </article>
                    {Array(5)
                        .fill(0)
                        .map((_, index) => (
                            <div
                                key={index}
                                className="h-[86px] w-full flex flex-col items-center justify-center border-t mt-[28px] border-black border-opacity-15"
                            >
                                <div className="hidden max-sm:flex bg-gray-300 h-4 w-20 rounded-md"></div>
                                <div className="bg-gray-300 h-6 w-6 rounded-full"></div>
                            </div>
                        ))}
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default CompareSwipper2;
