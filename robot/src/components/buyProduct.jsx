import React, { useEffect, useState } from 'react';
import Green_to_green from './btns/green_to_green';
import { InstallmentPayment } from './mouthly_period';
import Green_to_none from './btns/green_to_none';
import { axiosInstance } from '@/services/Requests';
import toast from 'react-hot-toast';
import GETRequest from '@/services/QueryREq';
import { useRouter } from 'next/router';
import { useQueryClient } from '@tanstack/react-query';

function BuyProduct({ product, translates }) {
    const [selectedColor, setSelectedColor] = useState('Qara');
    const [isliked, setIsliked] = useState(false);
    const [includes, setincludes] = useState(false);

    const router = useRouter();
    const { lang } = router.query;
    const { data: favorites } = GETRequest(`/favorites`, 'favorites', [lang]);
    const checkLikedProducts = () => {
        if (favorites?.some((item) => item.product.id === product?.id)) {
            setIsliked(true);
        } else {
            setIsliked(false);
        }
    };
    useEffect(() => {
        // Initial check on render
        checkLikedProducts();
    }, [favorites]);
    const { data: basked } = GETRequest(`/basket_items`, 'basket_items', [
        lang,
    ]);
    useEffect(() => {
        if (
            basked?.basket_items.find((item) => item.product.id === product?.id)
        ) {
            console.log('include');
            setincludes(true);
        }
        basked?.basket_items;
        // // Initial check on render
        // // checkLikedProducts();
    }, [basked]);
    const addToBasket = async (Data) => {
        const response = await axiosInstance
            .post(
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
            )
            .then(() => {
                toast.success('sucses');
                setincludes(true);
                // queryClient.invalidateQueries({ queryKey: ['basket_items'] });
            })
            .catch(() => {
                toast.error('eror');
            });
        // return response.data;
    };
    console.log('product', product);
    const queryClient = useQueryClient();

    return (
        <div className="flex flex-col lg:w-1/2 w-full max-md:mt-10 max-md:max-w-full">
            <header className="flex flex-col w-full max-md:max-w-full">
                <h1 className="text-3xl font-semibold text-green-950 max-md:max-w-full">
                    {product?.title}{' '}
                </h1>
                <div className="flex flex-col mt-3 max-w-full w-[338px]">
                    <p
                        className="text-base text-black text-opacity-80"
                        dangerouslySetInnerHTML={{
                            __html: product?.description,
                        }}
                    />

                    <p className="mt-3 text-sm text-black text-opacity-60">
                        {translates.Məhsulun_kodu}:{product?.code}
                    </p>
                </div>
            </header>

            <section className="flex flex-col items-start mt-6 max-w-full w-[275px]">
                <div className="flex gap-1 items-center text-3xl font-semibold text-center text-gray-600 whitespace-nowrap">
                    <span className="self-stretch my-auto">
                        {product?.price}
                    </span>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/db23202b25be894761cc22da7ac523baa970cd1986084bc7b91870bcecde8099?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                        alt=""
                        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    />
                </div>
                <InstallmentPayment product={product} />
                <div className="flex flex-col mt-6 max-w-full w-[251px]">
                    <p className="text-sm text-black text-opacity-60">
                        {translates.Rəng}: {selectedColor}
                    </p>
                    <div className="flex gap-2 items-center mt-3 w-full">
                        {product?.product_colors.map((color, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedColor(color.color)}
                                className={`p-1 rounded-xl ${
                                    selectedColor === color.color
                                        ? 'ring-2 ring-[#69BE56]'
                                        : ''
                                }`}
                            >
                                <img
                                    loading="lazy"
                                    src={color.image}
                                    alt={color.alt}
                                    className="object-cover shrink-0 self-stretch my-auto rounded-xl aspect-[1.05] w-[78px]"
                                />
                            </button>
                        ))}
                    </div>
                </div>
                {product?.is_stock ? (
                    <div className="gap-2.5 self-stretch px-5 py-2.5 mt-6 text-sm font-medium text-[#69BE56] w-fit rounded-xl border border-green-400 border-solid">
                        {translates.Stokda_var}
                    </div>
                ) : (
                    <div className="gap-2.5 self-stretch px-5 py-2.5 mt-6 text-sm font-medium text-red-600 w-fit rounded-xl border border-red-600 border-solid">
                        {translates.Stokda_yoxdu}
                    </div>
                )}

                <div className="flex gap-4 items-center self-stretch mt-6 w-full font-medium flex-wrap">
                    <div className="flex gap-2 items-center self-stretch my-auto text-base whitespace-nowrap text-green-950">
                        {Array.from({ length: product?.avg_star }).map(
                            (item) => (
                                <svg
                                    width="24"
                                    height="23"
                                    viewBox="0 0 24 23"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M11.0489 1.35014C11.3483 0.428834 12.6517 0.428836 12.9511 1.35015L14.9187 7.40587C15.0526 7.8179 15.4365 8.09686 15.8697 8.09686H22.2371C23.2058 8.09686 23.6086 9.33647 22.8249 9.90587L17.6736 13.6485C17.3231 13.9032 17.1764 14.3545 17.3103 14.7666L19.2779 20.8223C19.5773 21.7436 18.5228 22.5097 17.7391 21.9403L12.5878 18.1977C12.2373 17.943 11.7627 17.943 11.4122 18.1977L6.2609 21.9403C5.47719 22.5097 4.42271 21.7436 4.72206 20.8223L6.68969 14.7666C6.82356 14.3545 6.6769 13.9032 6.32642 13.6485L1.17511 9.90587C0.391392 9.33647 0.794168 8.09686 1.76289 8.09686H8.13026C8.56349 8.09686 8.94744 7.8179 9.08132 7.40587L11.0489 1.35014Z"
                                        fill="#FABD21"
                                    />
                                </svg>
                            )
                        )}
                        {/* <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/663bbb6caf356c4bfb0d0cec22e73bc13d9e198e8c71078cfaf94a093c411c77?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                            alt=""
                            className="object-contain shrink-0 self-stretch my-auto aspect-[5] w-[140px]"
                        /> */}
                        <span className="self-stretch my-auto">
                            {product?.avg_star}
                        </span>
                    </div>
                </div>
            </section>

            <div className="flex lg:flex-row flex-col  gap-2 items-center mt-10 w-full text-base font-medium text-white max-md:max-w-full">
                {' '}
                <Green_to_green
                    classNAME="w-full"
                    action={
                        includes
                            ? () => {}
                            : async () => {
                                  const userStr =
                                      localStorage.getItem('user-info');
                                  if (userStr) {
                                      const user = JSON.parse(userStr);

                                      await addToBasket({
                                          product_id: product?.id,
                                          quantity: 1,
                                          price: +product?.discounted_price,
                                          token: user.token,
                                      });
                                  }
                              }
                    }
                >
                    {includes
                        ? translates?.sebete_eleve_olunub
                        : translates.Səbətə_əlavə_et}
                </Green_to_green>
                {/* <Green_to_none classNAME="w-1/2">
                    {translates.İndi_al}
                </Green_to_none> */}
                <button
                    aria-label="Add to favorites"
                    className="bg-[#E7F0E4] w-[52px] h-[52px] rounded-full flex justify-center items-center   "
                    onClick={async () => {
                        const userStr = localStorage.getItem('user-info');
                        if (userStr) {
                            const User = JSON.parse(userStr);
                            console.log('User', User);

                            if (User) {
                                axiosInstance
                                    .post(
                                        '/favorites/toggleFavorite',
                                        { product_id: product?.id },
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
                    <img
                        loading="lazy"
                        src={isliked ? '/svg/heartRed.svg' : '/svg/heart.svg'}
                        alt="Favorite icon"
                        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[22px]"
                    />
                </button>
            </div>
        </div>
    );
}

export default BuyProduct;
