import React from 'react';

export const ProductCard_MD = ({ title, desc, price, imageSrc }) => {
    return (
        <article className="overflow-hidden grow shrink self-stretch pt-3 pl-5 my-auto rounded-3xl bg-[#EEEEEE] min-w-[240px] w-[587px] lg:h-[300px]  max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col mt-2 w-full text-xl max-md:mt-10">
                        <h2 className="font-medium text-black">{title}</h2>
                        <p className="text-[14px] font-normal text-opacity-60">
                            {desc}
                        </p>
                        <div className="flex gap-1 items-center self-start mt-4 font-semibold text-center text-gray-600 whitespace-nowrap">
                            <span className="self-stretch my-auto">
                                {price}
                            </span>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0aab139c6013a4d6935695496f50361c38a6518cb494c71627b3eab60ec3581d?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                alt=""
                                className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow max-md:mt-10">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/54722cc51ec5f592681f0b44cb471b6c12feb7296ba1ffd9c343aae455f6cdb8?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                            alt=""
                            className="object-contain self-end w-11 aspect-square rounded-[100px] max-md:mr-2.5"
                        />
                        <img
                            loading="lazy"
                            src={imageSrc}
                            alt={title}
                            className="object-contain mt-3 w-full aspect-[1.22]"
                        />
                    </div>
                </div>
            </div>
        </article>
    );
};
