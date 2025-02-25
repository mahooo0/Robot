import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ProducutCard2 from './ProducutCard2';

const ProductBundle = ({ PaketProducts }) => {
    return (
        <main className="flex flex-col max-w-full w-full max-md:mt-10">
            <section className="flex flex-col mt-10 w-full max-md:max-w-full">
                <div className="flex flex-wrap-reverse gap-5 items-center w-full max-md:max-w-full justify-between">
                    {PaketProducts.slice(0, 3).map((product, index) => (
                        <ProducutCard2
                            key={index}
                            data={product}
                            // {...product}
                            isLarge={index === 0}
                        />
                    ))}
                </div>
                <div className="flex flex-wrap gap-5 items-center mt-5 w-full max-md:max-w-full">
                    {PaketProducts.slice(3, 6).map((product, index) => (
                        <ProducutCard2
                            data={product}
                            key={index + 3}
                            // {...product}
                            isLarge={index === 2}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default ProductBundle;
