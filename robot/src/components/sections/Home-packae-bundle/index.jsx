import Green_to_green from '@/components/btns/green_to_green';
import ProductBundle from '@/components/Product_bundle';
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { ProductFilters } from '@/components/recoil/Atom';
import { useRecoilState } from 'recoil';

export default function Paket_bundle({ Translates, PaketProducts }) {
    const router = useRouter();
    const { lang = 'az' } = router.query;
    const [Filters, setFilters] = useRecoilState(ProductFilters);
    return (
        <section className="lg:px-[60px] px-[30px]">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="flex justify-between items-center mt-[104px] flex-wrap"
            >
                <motion.h3
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="lg:text-[40px] md:text-[32px] text-[28px] font-semibold"
                >
                    {Translates?.Paket_məhsullar}
                </motion.h3>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <Green_to_green
                        action={() => {
                            router.push(`/${lang}/products`);
                            setFilters({ ...Filters, is_paket: '1' });
                        }}
                    >
                        {Translates?.Bütün_məhsullar}
                    </Green_to_green>
                </motion.div>
            </motion.div>
            <ProductBundle PaketProducts={PaketProducts} />
        </section>
    );
}
