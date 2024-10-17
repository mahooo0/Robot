import React, { useState } from 'react';

export default function Product_Card_aute() {
    const [isliked, setIsliked] = useState(false);
    const [ison, setIson] = useState(false);

    return (
        <div
            className="flex flex-col grow shrink self-stretch pb-3 my-auto min-w-[240px] w-[252px] mr-[20px] relative"
            onMouseEnter={() => setIson(true)}
            onMouseLeave={() => setIson(false)}
        >
            <div className=" relative  ">
                <img
                    loading="lazy"
                    src="/svg/ph.svg"
                    alt="Roomba Combo® 10 Max Saug- und Wischroboter + AutoWash Dock"
                    className="object-cover w-full rounded-3xl aspect-[1.24]"
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

            <div className="flex flex-col mt-3 w-full">
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
                        <span className="self-stretch my-auto">300</span>{' '}
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a01ece6f47c5a4b7f0b7a066350aa1bbbf2e9274ea2ac15050a1eb4ec041530e?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                            alt="Currency symbol"
                            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                        />
                    </div>
                </div>
            </div>
            <div
                className="bg-white w-[44px] h-[44px] rounded-full flex justify-center items-center  absolute top-3 right-3 "
                onClick={() => setIsliked((prew) => !prew)}
            >
                <img src={isliked ? '/svg/heartRed.svg' : '/svg/heart.svg'} />
            </div>
        </div>
    );
}
