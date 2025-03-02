import { useRouter } from 'next/router';
import React from 'react';

function ProductCardNew({ data, Translates }) {
    const router = useRouter();
    const { lang = 'az' } = router.query;
    return (
        <article
            onClick={() => {
                localStorage.setItem('Productslug', JSON.stringify(data.slug));
                router.push(`/${lang}/products/${data.slug[lang]}`);
            }}
            className="flex relative overflow-hidden cursor-pointer flex-col grow shrink self-stretch pt-7 pl-7 my-auto rounded-3xl bg-[#132A1B] min-w-[240px] lg:w-full  md:lg:w-full max-md:max-w-full"
        >
            <div className="flex z-10 flex-wrap gap-5 justify-between max-w-full w-full ">
                <div className="flex flex-col text-xl font-semibold">
                    <h2 className=" max-w-[369px]  text-white text-wrap lg:text-[20px] md:text-[16px] text-[14px]">
                        {data.title}
                    </h2>
                    <div className="flex gap-1 items-center self-start px-3 py-1.5 mt-5 text-center whitespace-nowrap bg-[#69BE56] rounded-lg">
                        <span className="self-stretch my-auto text-white">
                            {data.discounted_price}
                        </span>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/009270e1ce116514e5911bccc51f8f433b87dfeae2bbe85a88a807188790b2bf?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                            alt=""
                        />
                    </div>
                </div>
                <div className="gap-1 self-start px-3 py-1.5 text-sm text-center whitespace-nowrap rounded bg-white text-white bg-opacity-20 mr-6">
                    {Translates?.Yeni}
                </div>
            </div>
            <img
                loading="lazy"
                src={data.image}
                className="object-contain self-end -mt-2.5 max-w-full aspect-[1.06] w-[380px]"
                alt="Roomba Combo® 10 Max Saug- und Wischroboter + AutoWash Dock"
            />{' '}
            <div className="w-[100%]   absolute  top-[0%] left-0 h-[100%] rounded-full">
                <svg
                    className="w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                    width="650"
                    height="600"
                    viewBox="0 0 650 500"
                    fill="none"
                >
                    <g filter="url(#filter0_f_14_510)">
                        <circle cx="325" cy="250" r="125" fill="#E7F0E4" />
                    </g>
                    <defs>
                        <filter
                            id="filter0_f_14_510"
                            x="-200"
                            y="-275"
                            width="1050"
                            height="1050"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                        >
                            <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                            />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                            />
                            <feGaussianBlur
                                stdDeviation="200"
                                result="effect1_foregroundBlur_14_510"
                            />
                        </filter>
                    </defs>
                </svg>
            </div>
        </article>
    );
}

export default ProductCardNew;
