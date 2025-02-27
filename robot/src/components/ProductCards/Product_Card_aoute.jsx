import { ROUTES } from '@/Helpers/Routes';
import GETRequest from '@/services/QueryREq';
import { axiosInstance } from '@/services/Requests';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export default function Product_Card_aute({ bgcolor = '#EEEEEE', data }) {
    const [isliked, setIsliked] = useState(false);
    const [includes, setincludes] = useState(false);
    const [ison, setIson] = useState(false);
    const router = useRouter();
    const { lang = 'az' } = router.query;
    const Path = router.asPath;
    const isAcsesuares = Path.includes('aksesuares');
    // console.log('isAcsesuares', isAcsesuares);

    const { data: favorites } = GETRequest(`/favorites`, 'favorites', [lang]);
    const { data: basked } = GETRequest(`/basket_items`, 'basket_items', [
        lang,
    ]);
    const { data: translates } = GETRequest(`/translates`, 'translates', [
        lang,
    ]);
    console.log('basked', basked);
    const checkLikedProducts = () => {
        if (favorites?.some((item) => item.product.id === data?.id)) {
            setIsliked(true);
        } else {
            setIsliked(false);
        }
    };
    const queryClient = useQueryClient();
    useEffect(() => {
        // Initial check on render
        checkLikedProducts();
    }, [favorites]);
    useEffect(() => {
        if (basked?.basket_items.find((item) => item.product.id === data?.id)) {
            console.log('include');
            setincludes(true);
        }
        basked?.basket_items;
        // // Initial check on render
        // // checkLikedProducts();

        console.log('BAAAA', data);
    }, [basked]);
    const addToBasket = async (Data) => {
        const response = await axiosInstance.post(
            '/basket_items',
            {
                product_id: Data.product_id,
                quantity: Data.quantity,
                price: Data.price,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${Data.token}`,
                },
            }
        );
        // .then(() => {
        //     toast.success('sucses');
        //     setincludes(true);
        //     queryClient.invalidateQueries({ queryKey: ['basket_items'] });
        // })
        // .catch(() => {
        //     toast.error('eror');
        // });
        return response.data;
    };
    const mutation = useMutation({
        mutationFn: addToBasket,
        onSuccess: () => {
            toast.success('Məhsul səbətə əlavə edildi');
            // setBtnLoadin(false);
            setincludes(true);
            toast.success('sucses');
            setincludes(true);
            queryClient.invalidateQueries({ queryKey: ['basket_items'] });
        },
        onError: (error) => {
            toast.error('Xəta baş verdi');
            console.error(error);
        },
    });
    return (
        <div
            className="flex flex-col min-w-[320px] grow shrink self-stretch  pb-3 my-auto  w-[252px] max-w-[700px]  relative cursor-pointer"
            onMouseEnter={() => setIson(true)}
            onMouseLeave={() => setIson(false)}
        >
            <div
                className={` relative   rounded-2xl  `}
                style={{ background: bgcolor }}
            >
                <img
                    onClick={() => {
                        router.push(
                            `/${lang}/${
                                isAcsesuares ? 'aksesuares' : 'products'
                            }/${data?.slug[lang]}`
                        );
                        localStorage.setItem(
                            'slug',
                            JSON.stringify(data?.slug)
                        );
                    }}
                    loading="lazy"
                    src={data?.image}
                    alt="Roomba Combo® 10 Max Saug- und Wischroboter + AutoWash Dock"
                    className="object-cover w-full rounded-3xl aspect-[1.24]"
                />
                <div className="absolute w-full h-[60px] bottom-0 flex justify-center overflow-hidden">
                    <button
                        onClick={async () => {
                            if (!includes) {
                                const userStr =
                                    localStorage.getItem('user-info');
                                if (userStr) {
                                    const user = JSON.parse(userStr);
                                    mutation.mutate({
                                        product_id: data?.id,
                                        quantity: 1,
                                        price: +data?.discounted_price,
                                        token: user.token,
                                    });
                                    // await addToBasket({
                                    //     product_id: data?.id,
                                    //     quantity: 1,
                                    //     price: +data?.discounted_price,
                                    //     token: user.token,
                                    // });
                                } else {
                                    router.push(`/${lang}/login_register`);
                                }
                            }
                        }}
                        className={`flex flex-row justify-center items-center h-[44px] gap-2 w-[90%] bg-[#447355] text-white rounded-[100px]  transition duration-300  ${
                            ison ? ' ' : ' translate-y-20'
                        }`}
                    >
                        {!includes ? (
                            <>
                                <img src="/svg/shop.svg" />
                                {translates?.Səbətə_əlavə_et}
                            </>
                        ) : (
                            <>
                                {' '}
                                <img
                                    src="/svg/ok.svg"
                                    className="w-[25px] aspect-square"
                                />
                                {translates?.sebete_eleve_olunub}
                            </>
                        )}
                    </button>
                </div>
            </div>

            <div
                className="flex flex-col mt-3 w-full"
                onClick={() =>
                    router.push(
                        `/${lang}/${isAcsesuares ? 'aksesuares' : 'products'}/${
                            data?.slug[lang]
                        }`
                    )
                }
            >
                <div className="flex flex-col w-full">
                    <h2 className="w-full text-base font-medium text-black">
                        {data?.title}
                    </h2>
                    <div
                        className="mt-2 text-sm text-black text-opacity-60"
                        dangerouslySetInnerHTML={{ __html: data?.description }}
                    />
                </div>
                <div className="flex justify-between items-center mt-3 w-full text-xl font-semibold text-center text-gray-600 whitespace-nowrap">
                    <div className="flex gap-1 items-center self-stretch my-auto">
                        <div className="flex flex-row gap-2 ">
                            {data?.price === data?.discounted_price || (
                                <div className="line-through flex flex-row">
                                    <span className="self-stretch my-auto flex flex-row gap-1 items-center text-[#B9B8B8]">
                                        {data?.price}{' '}
                                        <svg
                                            width="18"
                                            height="16"
                                            viewBox="0 0 18 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M17.9587 11.0093C17.7723 6.78005 14.9704 3.51404 10.6427 2.4699V1.93904C10.6427 1.04255 9.91492 0.314819 9.01843 0.314819C8.97273 0.314819 8.93054 0.318335 8.88484 0.32185C8.04109 0.392163 7.39422 1.09529 7.39422 1.94255V2.44529C1.94148 3.89021 -0.392893 7.60974 0.0535911 14.1523C0.0500754 14.6093 0.180154 14.9996 0.433279 15.2738C0.675857 15.541 1.00984 15.6816 1.41765 15.6851C2.21922 15.6851 2.72898 15.0664 2.75359 14.0715C2.76062 13.7023 2.76414 13.3261 2.76414 12.9605C2.76414 12.0922 2.76765 11.1922 2.88015 10.3168C3.1825 7.94724 5.11961 5.83083 7.39422 5.38435V11.1957C7.39422 12.0922 8.12195 12.8199 9.01843 12.8199H9.02547H9.0325C9.13093 12.8199 9.22586 12.8093 9.32078 12.7918C10.0872 12.6441 10.6427 11.9761 10.6427 11.1957V5.38787L10.6532 5.39138C12.9208 5.83435 14.8544 7.95076 15.1462 10.3133C15.2552 11.1886 15.2587 12.0886 15.2587 12.957C15.2587 13.3508 15.2622 13.7586 15.2727 14.1558C15.2973 15.0875 15.8212 15.6886 16.6087 15.6886H16.6157C17.4243 15.6851 17.9552 15.0804 17.9762 14.1523L17.9798 13.9414C18.0009 12.9781 18.0219 11.9832 17.9587 11.0093Z"
                                                fill="#B9B8B8"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            )}
                            <span className="self-stretch my-auto">
                                {' '}
                                {data?.discounted_price}
                            </span>{' '}
                        </div>

                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a01ece6f47c5a4b7f0b7a066350aa1bbbf2e9274ea2ac15050a1eb4ec041530e?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                            alt="Currency symbol"
                            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                        />
                    </div>
                </div>
            </div>
            <div
                className={`${(bgcolor = '#EEEEEE'
                    ? 'bg-[#F6F6F6]'
                    : 'bg-white')} w-[44px] h-[44px] rounded-full flex justify-center items-center  absolute top-3 right-3 `}
                onClick={async () => {
                    const userStr = localStorage.getItem('user-info');
                    if (userStr) {
                        const User = JSON.parse(userStr);
                        console.log('User', User);

                        if (User) {
                            axiosInstance
                                .post(
                                    '/favorites/toggleFavorite',
                                    { product_id: data?.id },
                                    {
                                        headers: {
                                            Authorization: `Bearer ${User.token}`,
                                            Accept: 'application/json',
                                        },
                                    }
                                )
                                .then(() => {
                                    // toast.success(
                                    //     'Product is sucsesfully aded to favorites'
                                    // );
                                    if (isliked) {
                                        setIsliked(false);
                                    } else {
                                        setIsliked(true);
                                    }
                                    queryClient.invalidateQueries({
                                        queryKey: ['favorites'],
                                    });
                                })
                                .catch((error) => {
                                    console.log(error);
                                });
                        }
                    } else {
                        router.push(`/${lang}/login_register`);
                        // navigate();
                    }
                }}
            >
                <img src={isliked ? '/svg/heartRed.svg' : '/svg/heart.svg'} />
            </div>
        </div>
    );
}
