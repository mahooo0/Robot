import React, { useState } from 'react';
// import strelka from '../../public/svg/strelka_white';
function ProductDisplay({ data }) {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        'https://cdn.builder.io/api/v1/image/assets/TEMP/ba11824ff3848c159c637498654beba7a744b5fb3391990d138077d74fcea315?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        'https://cdn.builder.io/api/v1/image/assets/TEMP/3ba2a3e937a089f83f9fdb0d31ee77e4adff6d6f1cda500388791b46649d2530?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        'http://b.io/ext_7-',
    ];

    const handleImageChange = (index) => {
        setCurrentImage(index);
    };

    return (
        <div className="relative h-full flex overflow-hidden flex-col px-7 pt-7 mx-auto w-full rounded-3xl bg-[#354C3D] max-md:pl-5 max-md:mt-5 max-md:max-w-full">
            <div className="flex flex-wrap gap-10 w-full text-white max-md:mr-2 max-md:max-w-full">
                <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                    <h2 className="text-xl font-semibold">{data.title}</h2>
                    <p className="mt-2 text-sm">Məhsulun kodu: {data.id}</p>
                </div>
                <div className="flex gap-1 items-center self-start px-3 py-1.5 text-xl font-semibold text-center whitespace-nowrap bg-green-400 rounded-lg">
                    <span className="self-stretch my-auto">
                        {data.discounted_price}
                    </span>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e492fe52ba26c8f9a0439b1823a8407ac500ab1a85b2cf54f7be0e84df24e20?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                        alt=""
                    />
                </div>
            </div>
            <div className="flex self-end mt-6 max-w-full w-[494px]">
                <div className="flex relative flex-col grow shrink-0 items-center px-12 pt-20 pb-52 basis-0 min-h-[340px] w-fit max-md:px-5 max-md:pb-24 max-md:max-w-full">
                    <img
                        loading="lazy"
                        src={data.image}
                        className="object-cover absolute inset-0 size-full"
                        alt={`Product image`}
                    />
                    {/* <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ba2a3e937a089f83f9fdb0d31ee77e4adff6d6f1cda500388791b46649d2530?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                        className="object-contain w-14 aspect-square rounded-[100px] shadow-[0px_0px_12px_rgba(0,0,0,0.3)]"
                        alt="Product detail"
                    /> */}
                </div>
            </div>
            <div className=" absolute top-0  w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 duration-150">
                <div className=" bg-white w-[56px] h-[56px] bg-opacity-[24%] bg-blur flex justify-center items-center rounded-full backdrop-blur-sm">
                    <img src="/svg/strelka_white.svg" alt="" />
                </div>
            </div>
        </div>
    );
}

export default ProductDisplay;
