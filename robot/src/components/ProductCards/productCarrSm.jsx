// import { useRouter } from 'next/router';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

function ProductCardSm() {
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
                    src="https://s3-alpha-sig.figma.com/img/062a/6c94/e9387bfd561c7718aeb38d6d402d3173?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W0RyGo8EKjkOurF5BZo~tcdPdKpcDy7OSbRtBz2QlDNDO50Hqtsdmzjq8Pa4j8ZvUCyXK2bbEzgkqcnV6q08pECi83cWjNhQI04IQomJlKAjTh1I7cfosI~SUJuNtVQj6jIUDo33wIr30JPaGSI-a~rtNjhuOJrnI8YcRI6Z7ys~QXkNdcxDY55HmwOQhC6kS0FEkWeVSXji-iJN9Vz64Lar4BGsSe9eQLEJpVxcHL~aDJkOruTsYNj3fI2u8DUt~hkai1geh8q680w07uZWSWOlwS28az70qiYvJ0c3p~sKr1AUkVLeu0jQjflkLx~cTHcUgAwuNdYIUcBDNCa~0Q__"
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
                        Roomba Combo® 10 Max Saug- und Wischroboter + AutoWash
                        Dock
                    </h2>
                    <p className="mt-2 text-sm text-black text-opacity-60">
                        Free Shipping on All Robot Orders
                    </p>
                </div>
                <div className="flex justify-between items-center mt-3 w-full text-xl font-semibold text-center text-gray-600 whitespace-nowrap">
                    <div className="flex gap-1 items-center self-stretch my-auto">
                        <span className="self-stretch my-auto text-[#447355]">
                            300
                        </span>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5648739e75c8c179e167d0023704a6e142ead8f8683c602828ae66a648aac62?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                            alt=""
                            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCardSm;
