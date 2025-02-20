import React, { useState } from 'react';

export default function ProductCard_MD({
    data,
    title,
    price,
    isLarge,
    bgcolor = '#ECF3EA',
}) {
    const [isliked, setIsliked] = useState(false);
    const [ison, setIson] = useState(false);
    if (isLarge) {
        return (
            <article
                onMouseEnter={() => setIson(true)}
                onMouseLeave={() => setIson(false)}
                className={`relative overflow-hidden grow shrink self-stretch pt-3 pl-5 my-auto rounded-3xl
                   bg-[${bgcolor}]
                  min-w-[240px] w-[587px] lg:h-[300px]  max-md:max-w-full`}
            >
                <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col mt-2 w-full text-xl max-md:mt-10">
                            <h2 className="font-medium text-black">
                                {data?.title}
                            </h2>
                            <div className="flex gap-1 items-center self-start mt-4 font-semibold text-center text-gray-600 whitespace-nowrap">
                                <span className="self-stretch my-auto">
                                    {data?.discounted_price}
                                </span>
                                <img
                                    loading="lazy"
                                    src="/svg/manatGren.svg"
                                    alt=""
                                    className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow max-md:mt-10">
                            <div
                                className="bg-white w-[44px] h-[44px] rounded-full flex justify-center items-center  absolute top-3 right-3 "
                                onClick={() => setIsliked((prew) => !prew)}
                            >
                                <img
                                    src={
                                        isliked
                                            ? '/svg/heartRed.svg'
                                            : '/svg/heart.svg'
                                    }
                                />
                            </div>
                            {/* <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/54722cc51ec5f592681f0b44cb471b6c12feb7296ba1ffd9c343aae455f6cdb8?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                alt=""
                                className="object-contain self-end w-11 aspect-square rounded-[100px] max-md:mr-2.5"
                            /> */}

                            <img
                                loading="lazy"
                                src={data.image}
                                alt={title}
                                className="object-contain mt-3 w-full aspect-[1.22]"
                            />
                        </div>
                    </div>
                    <div className="absolute w-[294px] h-[60px] bottom-0 flex justify-center overflow-hidden">
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
            </article>
        );
    }
    return (
        <article
            onMouseEnter={() => setIson(true)}
            onMouseLeave={() => setIson(false)}
            className={`relative flex overflow-hidden flex-col grow shrink self-stretch pt-3 pl-5  rounded-3xl bg-[${bgcolor}] min-w-[240px] w-[252px]`}
        >
            <div className="flex z-10 gap-10 items-start self-start">
                <div className="flex flex-col mt-2">
                    <h2 className="text-base font-medium text-black max-w-[188px]">
                        {data?.title}
                    </h2>
                    <div className="flex gap-1 items-center self-start mt-4 text-xl font-semibold text-center text-gray-600 whitespace-nowrap">
                        <span className="self-stretch my-auto">
                            {data?.discounted_price}
                        </span>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b26a8b65b9fe8d48031c636517216313534680818af9931be7c0a12c45b87ba?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                            alt=""
                            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                        />
                    </div>
                </div>
                <div
                    className="bg-white w-[44px] h-[44px] rounded-full flex justify-center items-center  absolute top-3 right-3 "
                    onClick={() => setIsliked((prew) => !prew)}
                >
                    <img
                        src={isliked ? '/svg/heartRed.svg' : '/svg/heart.svg'}
                    />
                </div>
            </div>
            <img
                loading="lazy"
                src={data?.image}
                alt={title}
                className="object-contain self-end -mt-1 w-56 max-w-full aspect-[1.18]"
            />
            <div className="absolute w-[294px] h-[60px] bottom-0 flex justify-center overflow-hidden">
                <button
                    className={`flex flex-row justify-center items-center h-[44px] w-[90%] bg-[#447355] text-white rounded-[100px]  transition duration-300  ${
                        ison ? ' ' : ' translate-y-20'
                    }`}
                >
                    <img src="/svg/shop.svg" />
                    Səbətə əlavə et
                </button>
            </div>
        </article>
    );
}
