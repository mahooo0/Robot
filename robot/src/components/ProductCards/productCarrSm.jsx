// import { useRouter } from 'next/router';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

function ProductCardSm({ data }) {
    const [isliked, setIsliked] = useState(false);
    const [ison, setIson] = useState(false);
    const router = useRouter();
    return (
        <div
            className="flex flex-col self-stretch pb-3 my-auto min-w-[240px] w-[315px] "
            onMouseEnter={() => setIson(true)}
            onMouseLeave={() => setIson(false)}
        >
            {/* <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/466926b11f6e79747a27e3238e99e0394ce656859176fb20ec5246044287ce72?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                alt="Roomba Combo® 10 Max Saug- und Wischroboter + AutoWash Dock"
                className="object-contain w-full rounded-3xl aspect-[1.24]"
            /> */}
            <div className="w-full rounded-3xl aspect-[1.24] bg-[#EEEEEE] flex justify-center items-center relative">
                <div
                    className="bg-white w-[44px] h-[44px] rounded-full cursor-pointer flex justify-center items-center  absolute top-3 right-3 "
                    onClick={() => setIsliked((prew) => !prew)}
                >
                    <img
                        src={isliked ? '/svg/heartRed.svg' : '/svg/heart.svg'}
                    />
                </div>
                <div
                    className="bg-[#8E98B8] w-[54px] h-[34px] rounded-full flex justify-center items-center  absolute top-3 left-3  text-white text-[12px] font-medium"
                    onClick={() => setIsliked((prew) => !prew)}
                >
                    Yeni
                </div>
                <img
                    onClick={() => router.push('/products/id')}
                    src={data.image}
                    className=" w-full aspect-square  object-cover rounded-3xl"
                />
                <div className="absolute w-full h-[60px] bottom-0 flex justify-center overflow-hidden">
                    <button
                        className={`flex flex-row justify-center items-center h-[44px] w-[90%] bg-[#447355] text-white rounded-[100px]  transition duration-300  ${
                            ison ? ' ' : ' translate-y-20'
                        }`}
                    >
                        <img src="/svg/shop.svg" />
                        Səbətə əlavə et
                    </button>
                </div>
            </div>
            <div
                className="flex flex-col mt-3 w-full"
                onClick={() => router.push('/products/id')}
            >
                <div className="flex flex-col w-full">
                    <h2 className="w-full text-base font-medium text-black">
                        {data.title}
                    </h2>
                    <p className="mt-2 text-sm text-black text-opacity-60">
                        {data.description}
                    </p>
                </div>
                <div className="flex justify-start items-center mt-3 w-full text-xl font-semibold text-center gap-3 text-gray-600 whitespace-nowrap">
                    <div className="flex gap-1 items-center self-stretch my-auto">
                        <span className="self-stretch my-auto text-[#447355]">
                            {data.discounted_price}
                        </span>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5648739e75c8c179e167d0023704a6e142ead8f8683c602828ae66a648aac62?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                            alt=""
                            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                        />
                    </div>
                    {data.discounted_price === data.price || (
                        <div className="flex gap-1 items-center self-stretch my-auto line-through  ">
                            <span className="self-stretch my-auto text-[#B9B8B8]">
                                {data.price}
                            </span>
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clip-path="url(#clip0_1488_846)">
                                    <path
                                        d="M17.9577 12.0093C17.7714 7.78005 14.9694 4.51404 10.6417 3.4699V2.93904C10.6417 2.04255 9.91394 1.31482 9.01746 1.31482C8.97176 1.31482 8.92957 1.31833 8.88386 1.32185C8.04011 1.39216 7.39324 2.09529 7.39324 2.94255V3.44529C1.94051 4.89021 -0.39387 8.60974 0.0526145 15.1523C0.0490989 15.6093 0.179177 15.9996 0.432302 16.2738C0.67488 16.541 1.00886 16.6816 1.41668 16.6851C2.21824 16.6851 2.72801 16.0664 2.75261 15.0715C2.75965 14.7023 2.76316 14.3261 2.76316 13.9605C2.76316 13.0922 2.76668 12.1922 2.87918 11.3168C3.18152 8.94724 5.11863 6.83083 7.39324 6.38435V12.1957C7.39324 13.0922 8.12097 13.8199 9.01746 13.8199H9.02449H9.03152C9.12996 13.8199 9.22488 13.8093 9.3198 13.7918C10.0862 13.6441 10.6417 12.9761 10.6417 12.1957V6.38787L10.6522 6.39138C12.9198 6.83435 14.8534 8.95076 15.1452 11.3133C15.2542 12.1886 15.2577 13.0886 15.2577 13.957C15.2577 14.3508 15.2612 14.7586 15.2718 15.1558C15.2964 16.0875 15.8202 16.6886 16.6077 16.6886H16.6147C17.4233 16.6851 17.9542 16.0804 17.9753 15.1523L17.9788 14.9414C17.9999 13.9781 18.021 12.9832 17.9577 12.0093Z"
                                        fill="#B9B8B8"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1488_846">
                                        <rect
                                            width="18"
                                            height="18"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProductCardSm;
