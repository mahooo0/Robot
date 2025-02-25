import React, { useState } from 'react';
import Green_to_green from './btns/green_to_green';
import { useRouter } from 'next/router';
import GETRequest from '@/services/QueryREq';
import { axiosInstance } from '@/services/Requests';
import toast from 'react-hot-toast';
import { useQueryClient } from '@tanstack/react-query';
import { ROUTES } from '@/Helpers/Routes';
import Link from 'next/link';

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

function LikedDrop({ setshow_Like_modal }) {
    const [items, setItems] = useState(cartItems);
    const router = useRouter();
    const queryClient = useQueryClient();
    const updateQuantity = async (id, change) => {
        // setItems((prevItems) =>
        //     prevItems.map((item) =>
        //         item.id === id
        //             ? {
        //                   ...item,
        //                   quantity: Math.max(1, (item.quantity || 1) + change),
        //               }
        //             : item
        //     )
        // );
        const userStr = localStorage.getItem('user-info');
        const user = JSON.parse(userStr);
        await axiosInstance
            .put(
                `/basket_items/${id}`,
                {
                    price: change.price,
                    quantity: change.quantity,
                },
                {
                    headers: {
                        Authorization: `Bearer ${user.token}`,
                    },
                }
            )
            .then(() => {
                toast.success('Basket successfully updated');
                queryClient.invalidateQueries({ queryKey: ['basket_items'] });
            })
            .catch((error) => {
                console.log('Basket Error ', error);
            });
    };

    const removeItem = async (id) => {
        // setItems((prevItems) => prevItems.filter((item) => item.id !== id));
        const userStr = localStorage.getItem('user-info');
        const user = JSON.parse(userStr);
        await axiosInstance
            .delete(
                `/basket_items/${id}`,

                {
                    headers: {
                        Authorization: `Bearer ${user.token}`,
                    },
                }
            )
            .then(() => {
                toast.success('Basket item deleted ');
                queryClient.invalidateQueries({ queryKey: ['basket_items'] });
            })
            .catch((error) => {
                console.log('Basket Error ', error);
            });
    };

    const total = items.reduce(
        (sum, item) => sum + item.price * (item.quantity || 1),
        0
    );
    const { lang = 'az' } = router.query;
    const { data: basked } = GETRequest(`/basket_items`, 'basket_items', [
        lang,
    ]);
    const { data: translates } = GETRequest(`/translates`, 'translates', [
        lang,
    ]);
    return (
        <section className="flex overflow-hidden flex-col items-center pt-5 bg-white rounded-3xl w-[500px] shadow-2xl">
            <div className="flex gap-5 justify-between w-full font-medium  max-md:max-w-full px-8">
                <h1 className="text-xl text-center text-green-950">
                    {translates?.Səbətdəki_məhsullarım}
                </h1>
                <div
                    onClick={() => {
                        // setshow_Like_modal(false);
                        router.push(`/${lang}/${ROUTES.basked[lang]}`);
                    }}
                    className="flex gap-2 items-center py-0.5 my-auto text-sm text-[#447355] whitespace-nowrap border-b border-solid cursor-pointer border-b-[#447355]"
                >
                    <span className="self-stretch my-auto">
                        {' '}
                        {translates?.Səbətim}
                    </span>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/11a78accdea54741767ffa5d718cfe0a38197a4360bf86f18d1a53124f4395c8?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                        alt=""
                        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                    />
                </div>
            </div>
            <hr className="shrink-0 mt-5 max-w-full h-px border border-solid border-black border-opacity-10 w-[431px] " />
            <div className="w-full h-[300px] overflow-y-scroll px-5 overflow-x-hidden srollbar">
                {basked?.basket_items.map((item) => (
                    <React.Fragment key={item.product.id}>
                        <div className="flex flex-col w-full  max-md:max-w-full ">
                            <div className="flex gap-8 items-center mt-6 text-sm font-medium max-md:max-w-full">
                                <div className="flex gap-1 items-center self-stretch my-auto min-w-[240px] text-green-950">
                                    <img
                                        loading="lazy"
                                        src={item.product.image}
                                        alt={item.product.name}
                                        className="object-cover shrink-0 self-stretch my-auto rounded-3xl aspect-[1.12] w-[134px]"
                                    />
                                    <div className="self-stretch my-auto w-[152px] text-[16px]">
                                        {item.product.title}
                                    </div>
                                </div>
                                <div className="flex gap-1 items-center self-stretch my-auto text-white whitespace-nowrap">
                                    <button
                                        disabled={item.quantity === 1}
                                        aria-label="Decrease quantity"
                                        onClick={() =>
                                            updateQuantity(item.id, {
                                                price: item.product
                                                    .discounted_price,
                                                quantity: item.quantity - 1,
                                            })
                                        }
                                    >
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/50385a4178c23ce3a807e1227d7fef5fcce5f778a7586427607d31568be94bd3?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                            alt=""
                                            className="object-contain shrink-0 self-stretch my-auto w-8 rounded-lg aspect-square"
                                        />
                                    </button>
                                    <div className="overflow-hidden self-stretch px-2.5 my-auto w-8 h-8 rounded-lg bg-[#A6B9AB] flex justify-center items-center">
                                        {item.quantity || 1}
                                    </div>
                                    <button
                                        aria-label="Increase quantity"
                                        onClick={() =>
                                            updateQuantity(item.id, {
                                                price: item.product
                                                    .discounted_price,
                                                quantity: item.quantity + 1,
                                            })
                                        }
                                    >
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/162aad484a82b444bd938f0e61a506d01d4fa1b7340bfa6358661cd7052327a5?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                            alt=""
                                            className="object-contain shrink-0 self-stretch my-auto w-8 rounded-lg aspect-square"
                                        />
                                    </button>
                                </div>
                            </div>
                            <div className="flex gap-5 justify-between mt-3 w-full text-lg font-semibold text-center text-[#447355] whitespace-nowrap max-md:max-w-full">
                                <div className="flex gap-10 items-center self-start">
                                    <div className="flex gap-1 items-center self-stretch my-auto">
                                        <div className="self-stretch my-auto ">
                                            {item.product.discounted_price * 1}
                                        </div>
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a478df7b2b80cf3bbb777fd40b5ecc3c2556ce1ada548152089b301f54cbe965?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                            alt=""
                                            className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
                                        />
                                    </div>
                                </div>
                                <button
                                    aria-label="Remove item"
                                    onClick={() => removeItem(item.id)}
                                >
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b17535fad7e7866c42a7c8fd890fc9886ee737424d1b623f5f51ddf17e69d0a?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                        alt=""
                                        className="object-contain shrink-0 w-7 aspect-square"
                                    />
                                </button>
                            </div>
                        </div>
                        <hr className="shrink-0 mt-4 max-w-full h-px border border-solid border-black border-opacity-10 w-[431px] mx-10" />
                    </React.Fragment>
                ))}
                {basked?.basket_items.length === 0 && (
                    <>
                        <div className="w-full h-full flex justify-center items-center felx flex-col gap-3">
                            <img
                                src="/image/empty.png"
                                className="w-1/2 "
                                alt=""
                            />
                            <h4 className="text-xl text-center text-green-950">
                                {translates?.Səbət_bosdu}
                            </h4>
                        </div>
                    </>
                )}
            </div>
            <div className="flex overflow-hidden flex-wrap gap-5 justify-between self-stretch px-10 py-5 mt-10 w-full bg-stone-100 max-md:px-5 max-md:max-w-full">
                <div className="flex gap-3 items-center my-auto">
                    <div className="self-stretch my-auto text-sm text-black text-opacity-60">
                        {translates?.Cəmi_məbləğ}:
                    </div>
                    <div className="flex gap-10 items-center self-stretch my-auto text-lg font-semibold text-center text-[#447355] whitespace-nowrap">
                        <div className="flex gap-1 items-center self-stretch my-auto">
                            <div className="self-stretch my-auto ">
                                {basked?.total_price}
                            </div>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4111369cf474db9b6a7f1e65fe4bc2385339457b2d3ab4a2cb0cf676ac9e2dfb?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                alt=""
                                className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
                            />
                        </div>
                    </div>
                </div>
                <Link href={`/${lang}/basked`}>
                    <Green_to_green>{translates?.Sifariş_et}</Green_to_green>
                </Link>
                {/* <button className="gap-2.5 self-stretch px-7 py-3.5 text-base font-medium text-white bg-green-400 rounded-[100px] max-md:px-5">
                    Sifariş et
                </button> */}
            </div>
        </section>
    );
}

export default LikedDrop;
