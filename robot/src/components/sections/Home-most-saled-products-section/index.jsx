import Green_to_none from '@/components/btns/green_to_none';
import SalesSwipper from '@/components/sales.swipper.jsx';
import React from 'react';
import { motion } from 'framer-motion';

export default function SalesSection({ MostSaledProducts, Translates }) {
    // console.log('MostSaledProducts', MostSaledProducts);

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }} // Trigger the animation only once
        >
            <motion.div
                className="flex justify-between items-center lg:px-[60px] mt-[104px] flex-wrap gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }} // Trigger the animation only once
            >
                <h3 className="lg:text-[40px] md:text-[32px]  px-[30px] text-[28px] font-semibold">
                    {Translates?.Ən_çox_satılanlar}
                </h3>
                <motion.div
                    className="flex gap-3 flex-nowrap overflow-x-auto scrollbar-hide"
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.2 },
                        },
                    }}
                    viewport={{ once: true }} // Trigger the animation only once
                >
                    {[
                        'Robot Tozsoranlar',
                        'Robot Tozsoranlar',
                        'Robot Tozsoranlar',
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <Green_to_none isactive={index === 1}>
                                {item}
                            </Green_to_none>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
            <SalesSwipper data={MostSaledProducts} />
        </motion.section>
    );
}
