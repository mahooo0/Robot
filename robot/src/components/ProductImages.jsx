import React, { useState } from 'react';

const thumbnailImages = [
    {
        src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/85ce4404a2e46923f2aeb39da1668b31b0a6d24ebad5f75d98feb8035b760995?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        alt: 'Thumbnail 1',
    },
    {
        src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/646c47e57efd9781c2765204a2e211121c859040ce46154c6cd55165f3b7b94c?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        alt: 'Thumbnail 2',
    },
    {
        src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/57abd785f414e1e69c721239a8abe55e010ef2cbb1bf30e2974d764bcc53d620?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        alt: 'Thumbnail 3',
    },
    {
        src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ad46fd6f82f1628f0caefaee9ec24be988d4dc3ef0c1643ed018b86f7933a40d?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        alt: 'Thumbnail 4',
    },
    {
        src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e1e3e844284810b2275b1919510326d6e9a397f569e83a10ce7ce79381c32c57?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        alt: 'Thumbnail 5',
    },
];

function ProductImages({ product }) {
    const [imgid, setimgid] = useState(0);
    return (
        <section className="flex flex-col lg:w-1/2 w-full max-md:mt-10 max-md:max-w-full">
            <div className="flex overflow-hidden flex-col w-full rounded-3xl border border-solid border-zinc-100 max-md:max-w-full">
                <img
                    loading="lazy"
                    src={product?.sliders[imgid]?.image}
                    alt="Main gallery image"
                    className="object-cover w-full aspect-[1.23] max-md:max-w-full"
                />
            </div>
            <div className="flex flex-wrap gap-3.5 items-center self-start mt-2 max-md:max-w-full">
                <div className="flex flex-wrap gap-3 items-center self-stretch my-auto min-w-[240px] max-md:max-w-full">
                    {product?.sliders?.map((image, index) => (
                        <div
                            className={` rounded-xl ${
                                index === imgid ? 'border border-[#69BE56]' : ''
                            }`}
                        >
                            <img
                                onClick={() => setimgid(index)}
                                key={index}
                                loading="lazy"
                                src={image.image}
                                alt={image.alt}
                                className="object-cover shrink-0 self-stretch my-auto rounded-xl aspect-square w-[100px]"
                            />
                        </div>
                    ))}
                    <div className="flex justify-center items-center rounded-full bg-white w-12 h-12 shadow-[0px_4px_8px_rgba(19,42,27,0.12)]">
                        <img
                            onClick={() =>
                                setimgid((prew) =>
                                    prew + 1 < product?.sliders.length
                                        ? prew + 1
                                        : 0
                                )
                            }
                            loading="lazy"
                            src="/svg/Strelka_black.svg"
                            alt="Profile"
                            className="object-contain shrink-0 self-stretch my-auto w-6  rotate-180 aspect-square "
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductImages;
