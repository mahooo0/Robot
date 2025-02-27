import { motion } from 'framer-motion';
import White_to_green from '@/components/btns/white_to_green';
import React from 'react';
import { useRouter } from 'next/router';

export default function SpecialOfferSection({ SpecialOffer, Translates }) {
    const router = useRouter();
    console.log('SpecialOffer', SpecialOffer);

    return (
        <section className="lg:px-[60px] px-[30px]">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                style={{
                    backgroundImage: `url("${SpecialOffer.image}")`,
                }}
                className="flex overflow-hidden flex-col items-start pt-10 pr-20 pb-28 pl-10 mt-24 max-w-full rounded-3xl w-full max-md:px-5 max-md:pb-24 max-md:mt-10"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="gap-1 self-stretch px-3 py-1.5 text-sm text-center w-fit text-white rounded bg-white bg-opacity-10"
                >
                    {Translates.Xüsusi_təklif}
                </motion.div>

                <div className="flex flex-col mt-11 mb-0 max-w-full w-[495px] max-md:mt-10 max-md:mb-2.5">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.7 }}
                        className="flex flex-col w-full font-semibold text-white max-md:max-w-full"
                    >
                        <div className="flex gap-1 items-center self-start px-3 py-1.5 text-xl text-center whitespace-nowrap bg-[#69BE56] rounded">
                            <div className="flex gap-1 items-center self-stretch my-auto">
                                <div className="self-stretch my-auto">
                                    {SpecialOffer.discounted_price}
                                </div>
                                <img
                                    loading="lazy"
                                    src="/svg/manat.svg"
                                    className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                                    alt=""
                                />
                            </div>
                        </div>
                        <h2 className="mt-3 text-4xl max-md:max-w-full">
                            {SpecialOffer.title}
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        className="mt-[28px]"
                    >
                        <White_to_green
                            action={() => router.push('products/id')}
                        >
                            {Translates.Məhsula_bax}
                        </White_to_green>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
