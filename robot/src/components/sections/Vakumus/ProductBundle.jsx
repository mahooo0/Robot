import Product_Card_aute from '@/components/ProductCards/Product_Card_aoute';
import ProductCard_MD from '@/components/ProductCards/Product_lg_card';
import React from 'react';
import { motion } from 'framer-motion';

export default function ProductBundle({ ProductBundle1 }) {
    const products = [
        { type: 'small' },
        { type: 'small' },
        { type: 'small' },
        { type: 'small' },
        { type: 'small' },
        { type: 'small' },
        { type: 'small' },
        {
            type: 'large',
            title: 'Roomba Combo® 10 Max Saug- und Wischroboter + AutoWash Dock',
            price: 300,
            bgcolor: '#EEEEEE',
            imageSrc:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/589a6fc8a10678a08f38e26b3e681773e5c2b98eb237cc16ab22563d23fbb54c?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        },
        {
            type: 'large',
            title: 'Roomba Combo® 10 Max Saug- und Wischroboter + AutoWash Dock',
            price: 300,
            bgcolor: '#EEEEEE',
            imageSrc:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/589a6fc8a10678a08f38e26b3e681773e5c2b98eb237cc16ab22563d23fbb54c?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        },
    ];

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
