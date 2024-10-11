import React, { useState } from 'react';

function ProductCardSm() {
    const [isliked, setIsliked] = useState(false);
    const [ison, setIson] = useState(false);

    return (
        <article
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
                    className="bg-white w-[44px] h-[44px] rounded-full flex justify-center items-center  absolute top-3 right-3 "
                    onClick={() => setIsliked((prew) => !prew)}
                >
                    <img
                        src={isliked ? '/svg/heartRed.svg' : '/svg/heart.svg'}
                    />
                </div>
                <img src="https://s3-alpha-sig.figma.com/img/062a/6c94/e9387bfd561c7718aeb38d6d402d3173?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cJTCUiZRdP4cY4Er4P6uXpOzZNn2gbhkHwts6PzYBMnXK~qM3xpyjBPKQe1-7UfHjSwKILykLaNtwLfQghxoogxZGqHMdeEuCyBQM8RQopi254d8T-56CwQZ1MuzASazAsl9FFFlC2SHd03gNg5eQpDQpIPRBnoCxaEIhdNWgUFBbghSWiwemMIIhqLT93w89M1DPPxDebQv1RCu3cLV435nb1CKdw9RfBK6ihzM8bmJMV2vynSqsOBog7bo63wwZ9asEvQinKAfvNT8O~t6YZiFYa1FSwopyvnmrSNnF8Tja2C5gsw~CBQUH2Tc62HHNnFDgxAB2ugJhhIjrVR1qw__" />
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
