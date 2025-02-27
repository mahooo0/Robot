import React from 'react';
import { motion } from 'framer-motion';
import Green_to_green from '@/components/btns/green_to_green';
import { useRouter } from 'next/router';
import ProductCardNew from '@/components/ProductCards/productNew';
import { useRecoilState } from 'recoil';
import { ProductFilters } from '@/components/recoil/Atom';

export default function NewProductsSection({ NewProducts, Translates }) {
    const router = useRouter();
    const { lang = 'az' } = router.query;
    const [Filters, setFilters] = useRecoilState(ProductFilters);

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Triggers animation when 20% of section is in view
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        staggerChildren: 0.2,
                        duration: 0.6,
                        ease: 'easeOut',
                    },
                },
            }}
        >
            {/* Title & Button */}
            <motion.div
                className="flex justify-between items-center lg:px-[60px] px-[30px] mt-[104px] flex-wrap"
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
            >
                <motion.h3
                    className="lg:text-[40px] md:text-[32px] text-[28px] font-semibold"
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5 }}
                >
                    {Translates?.Yeni_Məhsullar}
                </motion.h3>

                <motion.div
                    variants={{
                        hidden: { opacity: 0, scale: 0.9 },
                        visible: { opacity: 1, scale: 1 },
                    }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Green_to_green
                        action={() => {
                            router.push(`/${lang}/products`);
                            setFilters({ ...Filters, is_new: '1' });
                        }}
                    >
                        {Translates?.Yeni_Məhsullar}{' '}
                    </Green_to_green>
                </motion.div>
            </motion.div>

            {/* Product Cards */}
            <motion.div
                className="flex lg:flex-row flex-col gap-5 lg:px-[60px] px-[30px] mt-10"
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <motion.div
                    className="lg:w-1/2 w-full"
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <ProductCardNew
                        data={NewProducts[0]}
                        Translates={Translates}
                    />
                </motion.div>
                <motion.div
                    className="lg:w-1/2 w-full"
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <ProductCardNew
                        data={NewProducts[1]}
                        Translates={Translates}
                    />
                </motion.div>
            </motion.div>
        </motion.section>
    );
}
