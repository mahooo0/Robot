import React from 'react';
import Green_to_green from '../btns/green_to_green';
import { useRouter } from 'next/router';
import GETRequest from '@/services/QueryREq';
import { ROUTES } from '@/Helpers/Routes';
import { axiosInstance } from '@/services/Requests';
import { deliveryTypeState } from '../recoil/Atom';
import { useRecoilState } from 'recoil';
import toast from 'react-hot-toast';
import { useQueryClient } from '@tanstack/react-query';

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
    const router = useRouter();

    const { lang = 'az' } = router.query;
    const { data: basked } = GETRequest(`/basket_items`, 'basket_items', [
        lang,
    ]);
    console.log('ProductCardKredit', basked);
    if (basked?.basket_items[0]?.is_credit)
        return (
            <section className="flex flex-col rounded-3xl w-full mt-[20px]">
                <div className="flex flex-col justify-center p-6 w-full rounded-3xl bg-stone-50">
                    <div className="flex flex-col items-start">
                        {basked?.basket_items.map((product, index) => (
                            <React.Fragment key={index}>
                                <article className="flex flex-col mt-5 w-full max-w-[247px]">
                                    <div className="flex gap-1 items-center self-start">
                                        <p className="self-stretch my-auto text-xs text-black text-opacity-60">
                                            {product.month} ay:
                                        </p>
                                        <div className="flex gap-0.5 items-center self-stretch my-auto text-sm font-semibold text-center text-gray-600 whitespace-nowrap">
                                            <span className="self-stretch my-auto">
                                                {product.price}
                                            </span>
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/b5643bd5de60b263692fc31cdd24617b356d55a160f3a40cab6730bf8c59c929?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                                                alt=""
                                                className="object-cover shrink-0 self-stretch my-auto w-3 aspect-square"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex gap-3 items-center mt-2 w-full text-xs text-green-950">
                                        <img
                                            loading="lazy"
                                            src={product.product.image}
                                            alt={product.product.productName}
                                            className="object-cover shrink-0 self-stretch my-auto rounded-xl aspect-[1.2] w-[83px]"
                                        />
                                        <p className="self-stretch my-auto w-[152px]">
                                            {product.product.title}
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
function OrderSummary({ isConfrim, basked }) {
    const router = useRouter();
    const { lang = 'az' } = router.query;
    const [DeliveryTypeState, setDeliveryTypeState] =
        useRecoilState(deliveryTypeState);
    const { data: translates } = GETRequest(`/translates`, 'translates', [
        lang,
    ]);
    const [isLoading, setIsLoading] = React.useState(false);
    const queryClient = useQueryClient();
    return (
        <div className="lg:w-[25%] w-full">
            <section className="flex flex-col justify-center px-6 py-7 rounded-3xl bg-stone-50 max-md:px-5  h-fit">
                <div className="flex flex-col">
                    <h2 className="text-lg font-medium text-black">
                        {translates?.Ümumi_sifariş}
                    </h2>
                    <div className="flex flex-col mt-5 w-full">
                        <div className="flex flex-col w-full">
                            <div className="flex flex-col w-full text-sm">
                                <div className="flex gap-10 items-center justify-between">
                                    <div className="self-stretch my-auto text-black text-opacity-60">
                                        {translates?.Məbləğ}:
                                    </div>
                                    <div className="self-stretch my-auto font-medium text-green-950">
                                        {basked?.total_price} AZN
                                    </div>
                                </div>
                                <div className="flex gap-10 items-center mt-4 w-full justify-between">
                                    <div className="self-stretch my-auto text-black text-opacity-60">
                                        {translates?.Çatdırılma}:
                                    </div>
                                    <div className="self-stretch my-auto font-medium text-green-950">
                                        {basked?.delivered_price} AZN
                                    </div>
                                </div>
                                <div className="flex gap-10 items-center mt-4 justify-between">
                                    <div className="self-stretch my-auto text-black text-opacity-60">
                                        {translates?.Endirim}
                                    </div>
                                    <div className="self-stretch my-auto font-semibold text-rose-600">
                                        {basked?.discount} AZN
                                    </div>
                                </div>
                            </div>
                            <hr className="mt-3 w-full border border-solid border-zinc-300" />
                            <div className="flex gap-10 items-center mt-3 text-base justify-between">
                                <div className="self-stretch my-auto font-medium text-black text-opacity-80">
                                    {translates?.Cəmi_məbləğ}:
                                </div>
                                <div className="self-stretch my-auto font-semibold text-green-400">
                                    {basked?.final_price} AZN
                                </div>
                            </div>
                        </div>
                        {isConfrim ? (
                            <Green_to_green
                                classNAME="mt-[28px]"
                                action={async () => {
                                    setIsLoading(true);
                                    try {
                                        const userStr =
                                            localStorage.getItem('user-info');
                                        const user = JSON.parse(userStr);
                                        await axiosInstance.post(
                                            '/storeOrder',
                                            {
                                                is_deliver:
                                                    DeliveryTypeState.delivery,
                                                shop: DeliveryTypeState.shop,
                                                payment_type:
                                                    DeliveryTypeState.peymantType, // cash, online
                                                total_price:
                                                    basked?.total_price,
                                                discount: basked?.discount,
                                                delivered_price:
                                                    basked?.delivered_price,
                                                final_price:
                                                    basked?.final_price,
                                                address:
                                                    DeliveryTypeState.address,
                                                additional_info:
                                                    DeliveryTypeState.message,
                                            },
                                            {
                                                headers: {
                                                    Authorization: `Bearer ${user.token}`,
                                                },
                                            }
                                        );
                                        toast.success(
                                            'Order placed successfully!'
                                        );
                                        queryClient.invalidateQueries({
                                            queryKey: ['basket_items'],
                                        });
                                        router.push(`/${lang}/user`);
                                    } catch (error) {
                                        toast.error(
                                            'Failed to place order. Please try again.'
                                        );
                                    } finally {
                                        setIsLoading(false);
                                    }
                                }}
                            >
                                {isLoading ? 'Loading...' : 'testiq'}
                            </Green_to_green>
                        ) : (
                            <Green_to_green
                                classNAME="mt-[28px]"
                                action={() =>
                                    router.push(`/${lang}/basked/offer`)
                                }
                            >
                                {translates?.Sifariş_et}
                            </Green_to_green>
                        )}
                    </div>
                </div>
            </section>
            {isConfrim && <ProductCardKredit />}
        </div>
    );
}

export default OrderSummary;
