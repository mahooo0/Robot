import Product_Card_aute from '@/components/ProductCards/Product_Card_aoute';
import ProductCard_MD from '@/components/ProductCards/Product_lg_card';
import React from 'react';
import { motion } from 'framer-motion';

export default function ProductBundle({ ProductBundle1 }) {
    return (
        <section className="px-5 md:px-12 lg:px-16 mt-12">
            {/* First Row (4 Items) */}
            <motion.div
                className="flex flex-wrap justify-center sm:justify-between gap-5 "
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
            >
                {' '}
                {ProductBundle1.slice(0, 4).map((item, index) => (
                    <Product_Card_aute data={item} />
                ))}
            </motion.div>
            {/* Second Row (3 Items) */}
            <motion.div
                className="flex flex-wrap justify-center sm:justify-between gap-5 "
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
            >
                {' '}
                {ProductBundle1.slice(4, 7).map((item, index) => (
                    <Product_Card_aute data={item} />
                ))}
            </motion.div>

            {/* Third Row (2 Large Items) */}
            <motion.div
                className="flex flex-wrap justify-center sm:justify-between gap-5 "
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
            >
                {' '}
                {ProductBundle1.slice(7, 9).map((card, index) => (
                    <ProductCard_MD
                        data={card}
                        isLarge={true}
                        bgcolor={'#EEEEEE'}
                    />
                ))}
            </motion.div>
        </section>
    );
}
