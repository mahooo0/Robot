import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRouter } from 'next/router';
import GETRequest from '@/services/QueryREq';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { axiosInstance } from '@/services/Requests';
import toast from 'react-hot-toast';

const ProductCard2 = ({ data, isLarge }) => {
    const [isliked, setIsliked] = useState(false);
    const [includes, setincludes] = useState(false);

    const [ison, setIson] = useState(false);
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true, amount: 0.3 });
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
        // basked?.basket_items;
        // // Initial check on render
        // // checkLikedProducts();
    }, [basked]);
    const addToBasket = async (Data) => {
        await axiosInstance.post(
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
        // return response.data;
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

    //--desing
    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                type: 'spring',
                damping: 25,
                stiffness: 100,
            },
        },
    };

    const heartButtonVariants = {
        initial: { scale: 1 },
        hover: { scale: 1.1 },
        tap: { scale: 0.95 },
    };

    const addToCartVariants = {
        hidden: { y: 60 },
        hover: {
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 25,
            },
        },
    };

    if (isLarge) {
        return (
            <motion.article
                ref={cardRef}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                whileHover="hover"
                className="relative overflow-hidden grow shrink self-stretch pt-3 pl-5 my-auto rounded-3xl bg-[#ECF3EA] min-w-[240px] w-[587px] lg:h-[300px] max-md:max-w-full"
                onMouseEnter={() => setIson(true)}
                onMouseLeave={() => setIson(false)}
            >
                <div className="flex gap-5 max-md:flex-col">
                    <div
                        className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full"
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
                    >
                        <div className="flex flex-col mt-2 w-full text-xl max-md:mt-10">
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                animate={
                                    isInView
                                        ? { opacity: 1, x: 0 }
                                        : { opacity: 0, x: -20 }
                                }
                                transition={{ delay: 0.2 }}
                                className="font-medium text-black"
                            >
                                {data.title}
                            </motion.h2>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={
                                    isInView ? { opacity: 1 } : { opacity: 0 }
                                }
                                transition={{ delay: 0.3 }}
                                className="flex gap-1 items-center self-start mt-4 font-semibold text-center text-gray-600 whitespace-nowrap"
                            >
                                <span className="self-stretch my-auto">
                                    {data.discounted_price}
                                </span>
                                <img
                                    loading="lazy"
                                    src="/svg/manatGren.svg"
                                    alt=""
                                    className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                                    onClick={() => {
                                        router.push(
                                            `/${lang}/${
                                                isAcsesuares
                                                    ? 'aksesuares'
                                                    : 'products'
                                            }/${data?.slug[lang]}`
                                        );
                                        localStorage.setItem(
                                            'slug',
                                            JSON.stringify(data?.slug)
                                        );
                                    }}
                                />
                            </motion.div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow max-md:mt-10">
                            <motion.div
                                variants={heartButtonVariants}
                                whileHover="hover"
                                whileTap="tap"
                                className="bg-white w-[44px] h-[44px] rounded-full flex justify-center items-center absolute top-3 right-3"
                                onClick={async () => {
                                    const userStr =
                                        localStorage.getItem('user-info');
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
                                                    queryClient.invalidateQueries(
                                                        {
                                                            queryKey: [
                                                                'favorites',
                                                            ],
                                                        }
                                                    );
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
                                <motion.img
                                    animate={{
                                        scale: isliked ? [1, 1.2, 1] : 1,
                                    }}
                                    transition={{ duration: 0.3 }}
                                    src={
                                        isliked
                                            ? '/svg/heartRed.svg'
                                            : '/svg/heart.svg'
                                    }
                                />
                            </motion.div>
                            <motion.img
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={
                                    isInView
                                        ? { opacity: 1, scale: 1 }
                                        : { opacity: 0, scale: 0.9 }
                                }
                                transition={{ delay: 0.4 }}
                                loading="lazy"
                                src={data.image}
                                alt={data.title}
                                className="object-cover mt-3 w-full aspect-[1.22]"
                            />
                        </div>
                    </div>
                    <div className="absolute w-[294px] h-[60px] bottom-0 flex justify-center overflow-hidden">
                        <motion.button
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
                                    } else {
                                        router.push(`/${lang}/login_register`);
                                    }
                                }
                            }}
                            variants={addToCartVariants}
                            initial="hidden"
                            animate={ison ? 'hover' : 'hidden'}
                            className="flex flex-row justify-center items-center h-[44px] w-[90%] bg-[#447355] text-white rounded-[100px]"
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
                            )}{' '}
                        </motion.button>
                    </div>
                </div>
            </motion.article>
        );
    }

    return (
        <motion.article
            ref={cardRef}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            whileHover="hover"
            className="relative flex overflow-hidden flex-col grow shrink self-stretch pt-3 pl-5 rounded-3xl bg-[#ECF3EA] min-w-[240px] w-[252px]"
            onMouseEnter={() => setIson(true)}
            onMouseLeave={() => setIson(false)}
        >
            <div className="flex z-10 gap-10 items-start self-start">
                <div
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
                    className="flex flex-col mt-2"
                >
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        animate={
                            isInView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: -20 }
                        }
                        transition={{ delay: 0.2 }}
                        className="text-base font-medium text-black max-w-[188px]"
                    >
                        {data.title}
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex gap-1 items-center self-start mt-4 text-xl font-semibold text-center text-gray-600 whitespace-nowrap"
                    >
                        <span className="self-stretch my-auto">
                            {data.discounted_price}
                        </span>
                        <img
                            loading="lazy"
                            src="/svg/manatGren.svg"
                            alt=""
                            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                        />
                    </motion.div>
                </div>
                <motion.div
                    variants={heartButtonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="bg-white w-[44px] h-[44px] rounded-full flex justify-center items-center absolute top-3 right-3"
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
                    <motion.img
                        animate={{ scale: isliked ? [1, 1.2, 1] : 1 }}
                        transition={{ duration: 0.3 }}
                        src={isliked ? '/svg/heartRed.svg' : '/svg/heart.svg'}
                    />
                </motion.div>
            </div>
            <motion.img
                onClick={() => {
                    router.push(
                        `/${lang}/${isAcsesuares ? 'aksesuares' : 'products'}/${
                            data?.slug[lang]
                        }`
                    );
                    localStorage.setItem('slug', JSON.stringify(data?.slug));
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                    isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.9 }
                }
                transition={{ delay: 0.4 }}
                loading="lazy"
                src={data.image}
                alt={data.title}
                className="object-cover self-end -mt-1 w-56 max-w-full aspect-[1.18]"
            />
            <div className="absolute w-[294px] h-[60px] bottom-0 flex justify-center overflow-hidden">
                <motion.button
                    onClick={async () => {
                        if (!includes) {
                            const userStr = localStorage.getItem('user-info');
                            if (userStr) {
                                const user = JSON.parse(userStr);
                                mutation.mutate({
                                    product_id: data?.id,
                                    quantity: 1,
                                    price: +data?.discounted_price,
                                    token: user.token,
                                });
                            } else {
                                router.push(`/${lang}/login_register`);
                            }
                        }
                    }}
                    variants={addToCartVariants}
                    initial="hidden"
                    animate={ison ? 'hover' : 'hidden'}
                    className="flex flex-row justify-center items-center h-[44px] w-[90%] bg-[#447355] text-white rounded-[100px]"
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
                    )}{' '}
                </motion.button>
            </div>
        </motion.article>
    );
};
export default ProductCard2;
