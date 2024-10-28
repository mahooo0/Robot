import React from 'react';
import Green_to_green from '../btns/green_to_green';
import { useRouter } from 'next/router';

const products = [
    {
        price: '100',
        imageUrl:
            'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/265e3837aca9ab72255b3f209fa885220c4ce8140a1e0c7910b5483242a02297?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
        productName: 'Roomba Combo® 10 Max Saug- und Wischroboter + AutoWash',
    },
    {
        price: '100',
        imageUrl:
            'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/265e3837aca9ab72255b3f209fa885220c4ce8140a1e0c7910b5483242a02297?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
        productName: 'Roomba Combo® 10 Max Saug- und Wischroboter + AutoWash',
    },
];

function ProductCardKredit() {
    return (
        <section className="flex flex-col rounded-3xl w-full mt-[20px]">
            <div className="flex flex-col justify-center p-6 w-full rounded-3xl bg-stone-50">
                <div className="flex flex-col items-start">
                    {products.map((product, index) => (
                        <React.Fragment key={index}>
                            <article className="flex flex-col mt-5 w-full max-w-[247px]">
                                <div className="flex gap-1 items-center self-start">
                                    <p className="self-stretch my-auto text-xs text-black text-opacity-60">
                                        3 ay:
                                    </p>
                                    <div className="flex gap-0.5 items-center self-stretch my-auto text-sm font-semibold text-center text-gray-600 whitespace-nowrap">
                                        <span className="self-stretch my-auto">
                                            {product.price}
                                        </span>
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/b5643bd5de60b263692fc31cdd24617b356d55a160f3a40cab6730bf8c59c929?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                                            alt=""
                                            className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-3 items-center mt-2 w-full text-xs text-green-950">
                                    <img
                                        loading="lazy"
                                        src={product.imageUrl}
                                        alt={product.productName}
                                        className="object-contain shrink-0 self-stretch my-auto rounded-xl aspect-[1.2] w-[83px]"
                                    />
                                    <p className="self-stretch my-auto w-[152px]">
                                        {product.productName}
                                    </p>
                                </div>
                            </article>
                            {index < products.length - 1 && (
                                <div className="self-stretch mt-5 w-full border border-solid border-zinc-300 min-h-[1px]" />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
}
function OrderSummary() {
    const router = useRouter();
    return (
        <div className="lg:w-[25%] w-full">
            <section className="flex flex-col justify-center px-6 py-7 rounded-3xl bg-stone-50 max-md:px-5  h-fit">
                <div className="flex flex-col">
                    <h2 className="text-lg font-medium text-black">
                        Ümumi sifariş
                    </h2>
                    <div className="flex flex-col mt-5 w-full">
                        <div className="flex flex-col w-full">
                            <div className="flex flex-col w-full text-sm">
                                <div className="flex gap-10 items-center">
                                    <div className="self-stretch my-auto text-black text-opacity-60">
                                        Məbləğ:
                                    </div>
                                    <div className="self-stretch my-auto font-medium text-green-950">
                                        250 AZN
                                    </div>
                                </div>
                                <div className="flex gap-10 items-center mt-4 w-full">
                                    <div className="self-stretch my-auto text-black text-opacity-60">
                                        Çatdırılma:
                                    </div>
                                    <div className="self-stretch my-auto font-medium text-green-950">
                                        5 AZN
                                    </div>
                                </div>
                                <div className="flex gap-10 items-center mt-4">
                                    <div className="self-stretch my-auto text-black text-opacity-60">
                                        Endirim
                                    </div>
                                    <div className="self-stretch my-auto font-semibold text-rose-600">
                                        5 AZN
                                    </div>
                                </div>
                            </div>
                            <hr className="mt-3 w-full border border-solid border-zinc-300" />
                            <div className="flex gap-10 items-center mt-3 text-base">
                                <div className="self-stretch my-auto font-medium text-black text-opacity-80">
                                    Cəmi məbləğ:
                                </div>
                                <div className="self-stretch my-auto font-semibold text-green-400">
                                    260 AZN
                                </div>
                            </div>
                        </div>
                        <Green_to_green
                            classNAME="mt-[28px]"
                            action={() => router.push('/basked/offer')}
                        >
                            Sifariş et
                        </Green_to_green>
                        {/* <button className="gap-2.5 self-stretch px-7 py-3.5 mt-7 w-full text-base font-medium text-white bg-green-400 rounded-[100px] max-md:px-5">
                      
                    </button> */}
                    </div>
                </div>
            </section>
            <ProductCardKredit />
        </div>
    );
}

export default OrderSummary;
