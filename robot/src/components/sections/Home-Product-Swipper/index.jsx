import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SalesSwipper from '@/components/sales.swipper.jsx';

export default function ProductSwipperSection({ Ttile, data, Translates }) {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, {
        once: true,
        amount: 0.2,
        margin: '100px 0px 0px 0px',
    });

    const headerVariants = {
        hidden: {
            opacity: 0,
            y: 30,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    };

    const buttonVariants = {
        hidden: {
            opacity: 0,
            x: 20,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                delay: 0.2,
                ease: 'easeOut',
            },
        },
        hover: {
            x: 5,
            transition: {
                duration: 0.2,
                ease: 'easeInOut',
            },
        },
    };

    const swiperVariants = {
        hidden: {
            opacity: 0,
            y: 40,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                delay: 0.3,
                ease: 'easeOut',
            },
        },
    };

    return (
        <motion.section
            ref={sectionRef}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
        >
            <div className="flex justify-between items-center lg:px-[60px] px-[30px] mt-[104px] flex-wrap gap-4">
                <motion.h3
                    variants={headerVariants}
                    className="lg:text-[40px] md:text-[32px] text-[28px] font-semibold"
                >
                    {Ttile}
                </motion.h3>

                <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    className="flex flex-row gap-2 text-[#447355] border-b border-[#447355]"
                    onClick={() => router.push('/products')}
                >
                    <p>{Translates?.Bütün_məhsullar}</p>
                    <motion.img
                        src="/svg/Strelka_green.svg"
                        initial={{ x: 0 }}
                        animate={{ x: isInView ? 0 : -20 }}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                    />
                </motion.button>
            </div>

            <motion.div variants={swiperVariants}>
                <SalesSwipper data={data} />
            </motion.div>
        </motion.section>
    );
}
