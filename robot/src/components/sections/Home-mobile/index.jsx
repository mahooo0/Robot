import React from 'react';
import { motion } from 'framer-motion';

export default function MobileSection({ Home_mobile_section }) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex relative flex-col max-w-[100vw] overflow-hidden justify-center items-start px-16 py-64 w-full min-h-[800px] max-md:px-5 max-md:py-24 max-md:max-w-full"
        >
            <motion.img
                loading="lazy"
                src={Home_mobile_section.image}
                alt=""
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="object-cover absolute inset-0 size-full"
            />
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
                className="flex relative flex-col mb-0 max-w-full w-[713px] max-md:mb-2.5"
            >
                <h1 className="text-4xl font-semibold text-green-950 max-md:max-w-full">
                    {Home_mobile_section.title}
                </h1>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                delay: 0.5,
                                duration: 0.7,
                                staggerChildren: 0.2,
                            },
                        },
                    }}
                    className="flex gap-2.5 items-center self-start mt-12 max-md:mt-10"
                >
                    <motion.a
                        href="#"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/35e332e583c02e31964a20847a93183f06e9f16265b972557cea88db62cb3282?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                            alt="Download on the App Store"
                            className="object-contain shrink-0 self-stretch my-auto aspect-[3.46] w-[204px]"
                        />
                    </motion.a>
                    <motion.a
                        href="#"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/384dec7c977891ca12aeeebc9eb14692b16aec493d138ec6c029edf172bc44db?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                            alt="Download on the App Store"
                            className="object-contain shrink-0 self-stretch my-auto aspect-[3.46] w-[204px]"
                        />
                    </motion.a>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}
