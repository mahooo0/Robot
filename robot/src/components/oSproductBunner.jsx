import React from 'react';

const leftFeatures = [
    {
        text: 'Ev heyvanları tullantıları da daxil olmaqla obyektləri aşkarlayır',
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/0d9463a6640df0f0171d95378acdb21deb5fafb6313799ec2399a01cb71241c0?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
    },
    {
        text: 'Əvvəlcə ən çirkli otağa üstünlük verir',
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/fc0c7e2694be62ebd9b32b2177c05d6548dc23e7e3ff9b958c4537a9bda1fa52?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
    },
    {
        text: 'Otaq üzrə məqsədyönlü təmizlik',
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/5ab9cbc530096fffdcdfd1f689b3bae8049de8a63f9d9e1fa255e5b397ce4ee0?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
    },
    {
        text: 'Uzaqda olarkən təmizlik',
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/aebf2cc731e582aaf54cdb7b0354e89935827d4fb7d43a0f400db630d4d23cce?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
    },
];

const rightFeatures = [
    {
        text: 'Səsli köməkçi',
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/309090e342a84119d97fa43f3fd791794a2efe659db46587617f417d0015aef3?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
    },
    {
        text: 'Evinizi öğrenir ve xatırlayır',
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/675b879726cc5de74f0b6b3125580a2e0ee2e1b95c3fd6f1b2fc664c0e61c557?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
    },
    {
        text: 'Fərdiləşdirilmiş planlama',
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/001e9507abc8c8626aca576ca6f44b7b7708311e14f00596156c0a04bc311ee7?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
    },
    {
        text: 'Fərdi təmizlik',
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/0f31f57fea23f8d8d2daf142075808ea1c7df7f2156ff12aff04a324f28f9268?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
    },
];

function FeatureItem({ text, imageSrc, imageAlt, className = '' }) {
    return (
        <div
            className={`flex gap-3 items-center mt-16 max-md:mt-10 ${className}`}
        >
            <img
                loading="lazy"
                src={imageSrc}
                alt={imageAlt}
                className="object-contain shrink-0 self-stretch my-auto w-14 aspect-square"
            />
            <div className="self-stretch my-auto">{text}</div>
        </div>
    );
}

function ProductFeatures({ Translates }) {
    return (
        <section className="self-center pb-14 max-w-full w-[1303px]">
            <h2 className="text-center text-[40px] font-semibold text-[#132A1B] ml-8 max-md:max-w-full mt-[100px]">
                {Translates.Məhsulların_xüsusiyyətləri}
            </h2>
            <div className="flex lg:gap-5 gap-0 max-md:flex-col">
                <div className="flex flex-col w-[26%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col self-stretch my-auto w-full text-base text-right text-green-950 max-md:mt-10">
                        {leftFeatures.map((feature, index) => (
                            <FeatureItem
                                key={index}
                                text={feature.text}
                                imageSrc={feature.imageSrc}
                                imageAlt=""
                                className={`lg:flex-row-reverse flex-row`}
                            />
                        ))}
                    </div>
                </div>
                <div className="lg:flex hidden flex-col ml-5 w-[52%] max-md:ml-0 max-md:w-full">
                    <div className=" flex flex-col grow text-4xl font-semibold text-center text-green-950 max-md:mt-7 max-md:max-w-full ">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/86a9cd7979e78391560d810c5b0d687174e080030483a72033d81ab886916fa8?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                            alt="Product features illustration"
                            className="object-contain mt-[120px] w-full aspect-[1.43] max-md:mt-10 max-md:max-w-full"
                        />
                    </div>
                </div>
                <div className="flex flex-col ml-5 w-[22%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col self-stretch my-auto w-full text-base text-green-950 ">
                        {rightFeatures.map((feature, index) => (
                            <FeatureItem
                                key={index}
                                text={feature.text}
                                imageSrc={feature.imageSrc}
                                imageAlt=""
                                className={index === 2 ? 'max-md:mr-1' : ''}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductFeatures;
