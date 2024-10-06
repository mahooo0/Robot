import React from 'react';

function ProductCardSm() {
    return (
        <article className="flex flex-col self-stretch pb-3 my-auto min-w-[240px] w-[315px]">
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/466926b11f6e79747a27e3238e99e0394ce656859176fb20ec5246044287ce72?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
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
                        <span className="self-stretch my-auto">300</span>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5648739e75c8c179e167d0023704a6e142ead8f8683c602828ae66a648aac62?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                            alt=""
                            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                        />
                    </div>
                </footer>
            </div>
        </article>
    );
}

export default ProductCardSm;
