import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ProductBundle = ({ PaketProducts }) => {
    const ProductCard = ({ title, discounted_price, image, isLarge }) => {
        const [isliked, setIsliked] = useState(false);
        const [ison, setIson] = useState(false);
        const cardRef = useRef(null);
        const isInView = useInView(cardRef, { once: true, amount: 0.3 });

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
                        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
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
                                    {title}
                                </motion.h2>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={
                                        isInView
                                            ? { opacity: 1 }
                                            : { opacity: 0 }
                                    }
                                    transition={{ delay: 0.3 }}
                                    className="flex gap-1 items-center self-start mt-4 font-semibold text-center text-gray-600 whitespace-nowrap"
                                >
                                    <span className="self-stretch my-auto">
                                        {discounted_price}
                                    </span>
                                    <img
                                        loading="lazy"
                                        src="/svg/manatGren.svg"
                                        alt=""
                                        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
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
                                    onClick={() => setIsliked((prev) => !prev)}
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
                                    src={image}
                                    alt={title}
                                    className="object-cover mt-3 w-full aspect-[1.22]"
                                />
                            </div>
                        </div>
                        <div className="absolute w-[294px] h-[60px] bottom-0 flex justify-center overflow-hidden">
                            <motion.button
                                variants={addToCartVariants}
                                initial="hidden"
                                animate={ison ? 'hover' : 'hidden'}
                                className="flex flex-row justify-center items-center h-[44px] w-[90%] bg-[#447355] text-white rounded-[100px]"
                            >
                                <img src="/svg/shop.svg" />
                                Səbətə əlavə et
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
                    <div className="flex flex-col mt-2">
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
                            {title}
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex gap-1 items-center self-start mt-4 text-xl font-semibold text-center text-gray-600 whitespace-nowrap"
                        >
                            <span className="self-stretch my-auto">
                                {discounted_price}
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
                        onClick={() => setIsliked((prev) => !prev)}
                    >
                        <motion.img
                            animate={{ scale: isliked ? [1, 1.2, 1] : 1 }}
                            transition={{ duration: 0.3 }}
                            src={
                                isliked ? '/svg/heartRed.svg' : '/svg/heart.svg'
                            }
                        />
                    </motion.div>
                </div>
                <motion.img
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={
                        isInView
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0.9 }
                    }
                    transition={{ delay: 0.4 }}
                    loading="lazy"
                    src={image}
                    alt={title}
                    className="object-cover self-end -mt-1 w-56 max-w-full aspect-[1.18]"
                />
                <div className="absolute w-[294px] h-[60px] bottom-0 flex justify-center overflow-hidden">
                    <motion.button
                        variants={addToCartVariants}
                        initial="hidden"
                        animate={ison ? 'hover' : 'hidden'}
                        className="flex flex-row justify-center items-center h-[44px] w-[90%] bg-[#447355] text-white rounded-[100px]"
                    >
                        <img src="/svg/shop.svg" />
                        Səbətə əlavə et
                    </motion.button>
                </div>
            </motion.article>
        );
    };

    return (
        <main className="flex flex-col max-w-full w-full max-md:mt-10">
            <section className="flex flex-col mt-10 w-full max-md:max-w-full">
                <div className="flex flex-wrap-reverse gap-5 items-center w-full max-md:max-w-full justify-between">
                    {PaketProducts.slice(0, 3).map((product, index) => (
                        <ProductCard
                            key={index}
                            {...product}
                            isLarge={index === 0}
                        />
                    ))}
                </div>
                <div className="flex flex-wrap gap-5 items-center mt-5 w-full max-md:max-w-full">
                    {PaketProducts.slice(3, 6).map((product, index) => (
                        <ProductCard
                            key={index + 3}
                            {...product}
                            isLarge={index === 2}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default ProductBundle;
