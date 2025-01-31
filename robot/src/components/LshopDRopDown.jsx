import React, { useState } from 'react';
import Green_to_green from './btns/green_to_green';
import { useRouter } from 'next/router';

const cartItems = [
    {
        id: 1,
        name: 'Roomba Combo® 10 Max Saug- und Wischroboter + AutoWash',
        image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/323e9e3a898c310e34463462e571635bb144adf09f6909dab57e70b17dc7062d?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        price: 300,
    },
    {
        id: 2,
        name: 'Roomba Combo® 10 Max Saug- und Wischroboter + AutoWash',
        image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/323e9e3a898c310e34463462e571635bb144adf09f6909dab57e70b17dc7062d?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        price: 300,
    },
];

function ShopDrop({ setshow_Like_modal }) {
    const [items, setItems] = useState(cartItems);
    const router = useRouter();
    const updateQuantity = (id, change) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id
                    ? {
                          ...item,
                          quantity: Math.max(1, (item.quantity || 1) + change),
                      }
                    : item
            )
        );
    };

    const removeItem = (id) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const total = items.reduce(
        (sum, item) => sum + item.price * (item.quantity || 1),
        0
    );

    return (
        <section className="flex overflow-hidden flex-col items-center pt-10 bg-white rounded-3xl max-w-[511px] ">
            {items.map((item) => (
                <React.Fragment key={item.id}>
                    <div className="flex flex-row  items-center justify-between gap-12 w-full max-w-[431px] max-md:max-w-full mx-10">
                        <div className="flex gap-8 items-center mt-6 text-sm font-medium max-md:max-w-full">
                            <div className="flex gap-2.5 items-center self-stretch my-auto min-w-[240px] text-green-950">
                                <img
                                    loading="lazy"
                                    src={item.image}
                                    alt={item.name}
                                    className="object-contain shrink-0 self-stretch my-auto rounded-3xl aspect-[1.12] w-[134px]"
                                />
                                <div className="self-stretch my-auto w-[152px]">
                                    {item.name}
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-5 justify-between mt-3 w-full text-lg font-semibold text-center text-[#447355] whitespace-nowrap max-md:max-w-full">
                            <div className="flex gap-10 items-center self-start">
                                <div className="flex gap-1 items-center self-stretch my-auto">
                                    <div className="self-stretch my-auto w-[38px]">
                                        {item.price * (item.quantity || 1)}
                                    </div>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a478df7b2b80cf3bbb777fd40b5ecc3c2556ce1ada548152089b301f54cbe965?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                        alt=""
                                        className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="shrink-0 mt-4 max-w-full h-px border border-solid border-black border-opacity-10 w-[431px] mx-10" />
                </React.Fragment>
            ))}
        </section>
    );
}

export default ShopDrop;
