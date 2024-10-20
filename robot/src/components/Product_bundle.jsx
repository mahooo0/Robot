import React, { useState } from 'react';

const ProductBundle = () => {
    const productData = [
        {
            title: 'Roomba® j9+ & Braava jet® m6 Bundle',
            price: 300,
            imageSrc:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/cfd996d7ff077db468dc8dc796e80e0965d3406da8a7124347faf2dd0b9ff6c5?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            isLarge: true,
        },
        {
            title: 'Roomba® j9+ & Braava jet® m6 Bundle',
            price: 300,
            imageSrc:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/589a6fc8a10678a08f38e26b3e681773e5c2b98eb237cc16ab22563d23fbb54c?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            isLarge: false,
        },
        {
            title: 'Roomba® j9+ & Braava jet® m6 Bundle',
            price: 300,
            imageSrc:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/589a6fc8a10678a08f38e26b3e681773e5c2b98eb237cc16ab22563d23fbb54c?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            isLarge: false,
        },
        {
            title: 'Roomba® j9+ & Braava jet® m6 Bundle',
            price: 300,
            imageSrc:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/589a6fc8a10678a08f38e26b3e681773e5c2b98eb237cc16ab22563d23fbb54c?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            isLarge: false,
        },
        {
            title: 'Roomba® j9+ & Braava jet® m6 Bundle',
            price: 300,
            imageSrc:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/589a6fc8a10678a08f38e26b3e681773e5c2b98eb237cc16ab22563d23fbb54c?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            isLarge: false,
        },
        {
            title: 'Roomba® j9+ & Braava jet® m6 Bundle',
            price: 300,
            imageSrc:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/f80767f5494a2ee9a471c8fe28c0c3c8a730a6d8aa3db482b9fc86dfff1cd464?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            isLarge: true,
        },
    ];

    const ProductCard = ({ title, price, imageSrc, isLarge }) => {
        const [isliked, setIsliked] = useState(false);
        const [ison, setIson] = useState(false);
        if (isLarge) {
            return (
                <article
                    onMouseEnter={() => setIson(true)}
                    onMouseLeave={() => setIson(false)}
                    className="relative overflow-hidden grow shrink self-stretch pt-3 pl-5 my-auto rounded-3xl bg-[#ECF3EA] min-w-[240px] w-[587px] lg:h-[300px]  max-md:max-w-full"
                >
                    <div className="flex gap-5 max-md:flex-col">
                        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col mt-2 w-full text-xl max-md:mt-10">
                                <h2 className="font-medium text-black">
                                    {title}
                                </h2>
                                <div className="flex gap-1 items-center self-start mt-4 font-semibold text-center text-gray-600 whitespace-nowrap">
                                    <span className="self-stretch my-auto">
                                        {price}
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
                                    src={imageSrc}
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
                className=" relative flex overflow-hidden flex-col grow shrink self-stretch pt-3 pl-5  rounded-3xl bg-[#ECF3EA] min-w-[240px] w-[252px]"
            >
                <div className="flex z-10 gap-10 items-start self-start">
                    <div className="flex flex-col mt-2">
                        <h2 className="text-base font-medium text-black max-w-[188px]">
                            {title}
                        </h2>
                        <div className="flex gap-1 items-center self-start mt-4 text-xl font-semibold text-center text-gray-600 whitespace-nowrap">
                            <span className="self-stretch my-auto">
                                {price}
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
                            src={
                                isliked ? '/svg/heartRed.svg' : '/svg/heart.svg'
                            }
                        />
                    </div>
                </div>
                <img
                    loading="lazy"
                    src={imageSrc}
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
    };

    return (
        <main className="flex flex-col  max-w-full w-full max-md:mt-10">
            <section className="flex flex-col mt-10 w-full max-md:max-w-full">
                <div className="flex flex-wrap gap-5 items-center w-full max-md:max-w-full justify-between">
                    {productData.slice(0, 3).map((product, index) => (
                        <ProductCard key={index} {...product} />
                    ))}
                </div>
                <div className="flex flex-wrap gap-5 items-center mt-5 w-full max-md:max-w-full">
                    {productData.slice(3).map((product, index) => (
                        <ProductCard key={index + 3} {...product} />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default ProductBundle;
