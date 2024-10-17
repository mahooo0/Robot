import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const CompareSwipper2 = () => {
    return (
        <Swiper
            spaceBetween={30} // Adjust the space between slides
            slidesPerView={'auto'} // Set how many slides to show at once
            navigation // Enable navigation buttons
            pagination={{ clickable: true }} // Enable pagination
            style={{ height: 'fit-content' }} // Set a fixed height for the swiper
        >
            {Array(10)
                .fill()
                .map((_, slideIndex) => (
                    <SwiperSlide
                        key={slideIndex}
                        className="lg:!w-1/5 md:!w-2/5 w-1/2"
                    >
                        <div className="min-w-[350px]  flex flex-col justify-center items-center lg:ml-[310px] md:ml-[310px] ml-[0]">
                            <article className="flex overflow-hidden flex-col justify-center p-5 bg-white rounded-3xl max-w-[310px]">
                                <div className="flex overflow-hidden flex-col w-full">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d48fcf0f889827cd2db215110756d59f500b508608aea7299e6cfa1a220f558?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                        alt="Roomba j7+ vacuum cleaner"
                                        className="object-contain w-full aspect-[1.58]"
                                    />
                                </div>
                                <div className="flex flex-col mt-3 w-full text-xl font-semibold text-center">
                                    <h2 className="text-green-950">
                                        Roomba® j7+
                                    </h2>
                                    <div className="flex gap-1 items-center self-center mt-3 text-gray-600 whitespace-nowrap">
                                        <span className="self-stretch my-auto">
                                            300
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
                                <button className="flex overflow-hidden flex-col justify-center px-16 py-2.5 mt-5 w-full text-sm font-medium text-center text-white bg-gray-600 rounded-[100px] max-md:px-5">
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
                            <div className=" h-[86px] w-full flex items-center justify-center border-t mt-[28px] border-black border-opacity-15">
                                <p>Lorem Ipsum is simply dummy</p>
                            </div>
                            <div className=" h-[86px] w-full flex items-center justify-center border-t mt-[28px] border-black border-opacity-15">
                                <img src="/svg/qalocka.svg" />
                            </div>
                            <div className=" h-[86px] w-full flex items-center justify-center border-t mt-[28px] border-black border-opacity-15">
                                <img src="/svg/qalocka.svg" />
                            </div>
                            <div className=" h-[86px] w-full flex items-center justify-center border-t mt-[28px] border-black border-opacity-15">
                                <img src="/svg/qalocka.svg" />
                            </div>
                            <div className=" h-[86px] w-full flex items-center justify-center border-t mt-[28px] border-black border-opacity-15">
                                <img src="/svg/qalocka.svg" />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
        </Swiper>
    );
};

export default CompareSwipper2;
