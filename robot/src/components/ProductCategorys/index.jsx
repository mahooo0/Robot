'use client';

import React from 'react';
import ProductCategory from './ProductCategory';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import GETRequest from '@/services/QueryREq';

function ProductCategories() {
    const router = useRouter();
    const lang =
        typeof window !== 'undefined'
            ? window.location.pathname.split('/')[1] || 'az'
            : 'az';
    const { data: translates } = GETRequest(`/translates`, 'translates', [
        lang,
    ]);
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
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
            className="flex flex-wrap gap-3 items-center self-center mt-24 text-base font-medium text-center text-green-950 max-md:mt-10 max-md:max-w-full w-full justify-center"
        >
            {/* <Link href={`/${lang}/products/vakumus`}> */}
            <div
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >
                <ProductCategory
                    page={`/${lang}/products/vakumus`}
                    imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/cd246dd94eab99e1db5adaf10efa4700554c945670f23a9b05f9e2d2bea3648c?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                    altText={translates?.Roomba_Robot_Vacuums}
                    categoryName={translates?.Roomba_Robot_Vacuums}
                />
            </div>
            {/* </Link> */}
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >
                <ProductCategory
                    page={`/${lang}/products/bundles`}
                    imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/e434cb3881babaee55346cf2d84f48f8ae78bb54ef9d05b660c88eee2a59ad47?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                    altText={translates?.İrobot_Bundles}
                    categoryName={translates?.İrobot_Bundles}
                />
            </motion.div>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >
                <ProductCategory
                    page={`/${lang}/products/mops`}
                    imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/365e4077801de9a62cb1fa33d69a89c832dc5ad1c17ffdda81b8744fe0ea53cf?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                    altText={translates?.Braava_Robot_Mops}
                    categoryName={translates?.Braava_Robot_Mops}
                />
            </motion.div>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >
                <ProductCategory
                    page={`/${lang}/aksesuares`}
                    imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/11b800b0e2827a14b83af5bfd87559f5773da1d833c332948488153acb3b32f6?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                    altText={translates?.Accessories}
                    categoryName={translates?.Accessories}
                />
            </motion.div>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >
                <ProductCategory
                    page={`/${lang}/products/SaleProduct`}
                    imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/4d8ed3924259ad6c025d58c3f1043687eb55812abe2c7b6e052df6e5e98086ca?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                    altText={translates?.Endirimli_məhsullar}
                    categoryName={translates?.Endirimli_məhsullar}
                />
            </motion.div>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >
                <ProductCategory
                    page={`/${lang}/products`}
                    imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/537bdc1e1ca03ff53799902b724328b9dc5f11a2fc2325f5fef4802620bbb49a?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                    altText={translates?.Bütün_məhsullar}
                    categoryName={translates?.Bütün_məhsullar}
                />
            </motion.div>
        </motion.section>
    );
}

export default ProductCategories;
