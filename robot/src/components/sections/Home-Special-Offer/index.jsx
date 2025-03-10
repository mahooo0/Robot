import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Green_to_green from '@/components/btns/green_to_green';
import { useRouter } from 'next/router';

export default function Special_Offer_Login({
    Home_Special_Offers,
    Translates,
}) {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
    const router = useRouter();
    const { lang = 'az' } = router.query;
    const containerVariants = {
        hidden: {
            opacity: 0,
            y: 100,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: 'easeOut',
            },
        },
    };

    const leftImageVariants = {
        hidden: {
            opacity: 0,
            x: -100,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: 'easeOut',
                delay: 0.2,
            },
        },
    };

    const contentVariants = {
        hidden: {
            opacity: 0,
            scale: 0.9,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
                delay: 0.4,
            },
        },
    };

    const rightImageVariants = {
        hidden: {
            opacity: 0,
            x: 100,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: 'easeOut',
                delay: 0.2,
            },
        },
    };

    return (
        <motion.section
            ref={sectionRef}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="overflow-hidden self-stretch pt-10 mt-24 w-full bg-neutral-950 max-md:mt-10 max-md:max-w-full"
        >
            <div className="flex gap-5 max-md:flex-col">
                <motion.div
                    variants={leftImageVariants}
                    className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full items-center"
                >
                    <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        loading="lazy"
                        src={Home_Special_Offers.image}
                        alt="Special offer illustration"
                        className="object-contain grow shrink-0 max-w-full aspect-[1.06] w-[343px] max-md:mt-10"
                    />
                </motion.div>

                <motion.div
                    variants={contentVariants}
                    className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full"
                >
                    <div className="flex flex-col justify-center items-center self-stretch my-auto w-full text-white max-md:mt-10">
                        <motion.div className="flex flex-col items-center max-w-full text-center w-[376px]">
                            <motion.h2
                                className="text-4xl font-semibold"
                                initial={{ opacity: 0, y: 20 }}
                                animate={
                                    isInView
                                        ? { opacity: 1, y: 0 }
                                        : { opacity: 0, y: 20 }
                                }
                                transition={{ delay: 0.5, duration: 0.6 }}
                            >
                                {Home_Special_Offers.title}{' '}
                            </motion.h2>
                            <motion.p
                                className="mt-2 text-base"
                                initial={{ opacity: 0 }}
                                animate={
                                    isInView ? { opacity: 1 } : { opacity: 0 }
                                }
                                transition={{ delay: 0.7, duration: 0.6 }}
                            >
                                {Home_Special_Offers.description}
                            </motion.p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={
                                isInView
                                    ? { opacity: 1, y: 0 }
                                    : { opacity: 0, y: 20 }
                            }
                            transition={{ delay: 0.9, duration: 0.6 }}
                        >
                            <Green_to_green
                                classNAME="mt-[32px]"
                                action={() =>
                                    router.push(`/${lang}/login_register`)
                                }
                            >
                                {Translates.Qeydiyyatdan_keç}
                            </Green_to_green>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div
                    variants={rightImageVariants}
                    className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full justify-center items-center"
                >
                    <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        loading="lazy"
                        src={Home_Special_Offers.image1}
                        alt="Special offer promotion"
                        className="object-contain grow shrink-0 mt-2 max-w-full aspect-[0.97] w-[303px] max-md:mt-10"
                    />
                </motion.div>
            </div>
        </motion.section>
    );
}
