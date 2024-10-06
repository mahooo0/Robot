import React from 'react';

export default function Product_Card_aute() {
    return (
        <div className="flex flex-col grow shrink self-stretch pb-3 my-auto min-w-[240px] w-[252px] mr-[20px]">
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f2334672e43d09fe664a20a3a2d6a244f121795c693594e5b64fdcd838fcbe7?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                alt="Roomba Combo® 10 Max Saug- und Wischroboter + AutoWash Dock"
                className="object-contain w-full rounded-3xl aspect-[1.24]"
            />
            <div className="flex flex-col mt-3 w-full">
                <header className="flex flex-col w-full">
                    <h2 className="w-full text-base font-medium text-black">
                        Roomba Combo® 10 Max Saug- und Wischroboter + AutoWash
                        Dock
                    </h2>
                    <p className="mt-2 text-sm text-black text-opacity-60">
                        Free Shipping on All Robot Orders
                    </p>
                </header>
                <footer className="flex justify-between items-center mt-3 w-full text-xl font-semibold text-center text-gray-600 whitespace-nowrap">
                    <div className="flex gap-1 items-center self-stretch my-auto">
                        <span className="self-stretch my-auto">300</span>{' '}
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a01ece6f47c5a4b7f0b7a066350aa1bbbf2e9274ea2ac15050a1eb4ec041530e?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                            alt="Currency symbol"
                            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                        />
                    </div>
                </footer>
            </div>
        </div>
    );
}
