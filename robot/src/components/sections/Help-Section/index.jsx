import HelpCard from '@/components/HelpCard';
import { useRouter } from 'next/router';
import React from 'react';
import { motion } from 'framer-motion';

export default function HelpSection({ helpData, translates }) {
    const router = useRouter();
    const { lang } = router.query;

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="flex overflow-hidden flex-col justify-center px-20 py-16 w-full bg-[#ECF3EA] max-md:px-5 max-md:max-w-full mt-[100px]"
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col w-full max-md:max-w-full items-center"
            >
                <h2 className="text-4xl font-semibold text-[#132A1B] max-md:max-w-full text-center">
                    {translates?.Seçim_etməkdə_kömək_edək}
                </h2>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    transition={{ staggerChildren: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-10 justify-center items-start mt-12 w-full max-md:mt-10 max-md:max-w-full"
                >
                    {helpData?.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                        >
                            <HelpCard
                                title={item.title}
                                description={item.description}
                                imageSrc={item.icon}
                                linkText={
                                    index === 0
                                        ? translates.Testdən_keç
                                        : index === 1
                                        ? translates.Bizimlə_əlaqə
                                        : undefined
                                }
                                page={
                                    index === 0
                                        ? `/${lang}/user/help`
                                        : index === 1
                                        ? `/${lang}/contact`
                                        : undefined
                                }
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </motion.section>
    );
}
