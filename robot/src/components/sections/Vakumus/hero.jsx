import Green_to_green from '@/components/btns/green_to_green';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import React from 'react';

export default function VakumusHero({ Vakumus_Hero, Translates }) {
    const router = useRouter();

    const scrollToElement = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex overflow-hidden flex-col items-start px-16 pt-24 pb-7 w-full max-md:px-5 max-md:max-w-full"
            style={{
                backgroundImage: `url("${Vakumus_Hero.image}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '100%',
            }}
        >
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col max-w-full min-h-[226px] w-[404px]"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex-1 text-5xl font-semibold text-green-950 max-md:text-4xl"
                >
                    {Vakumus_Hero.title}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-[16px] font-normal mt-3 mb-7"
                >
                    {Vakumus_Hero.description}
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <Green_to_green
                        action={() => router.push('/products/compare')}
                    >
                        {Translates.Müqayisə_et}
                    </Green_to_green>
                </motion.div>
            </motion.div>

            <motion.div
                className="flex flex-col items-center mt-16 w-[50px] max-md:mt-10"
                animate={{ y: [0, -10, 0] }}
                transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: 'easeInOut',
                }}
                onClick={() => scrollToElement('vakumus')}
            >
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/28271d8b28a86de88dc412579eda58a62e2a42ef9b71127030f85d3001fde1b9?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                    alt="Roomba vacuum cleaner"
                    className="object-contain w-full aspect-square"
                />
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1896a0c6cb827c87623a0963e92bd5903a565448674710f1b4c5940f05f8425?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                    alt="Roomba accessory"
                    className="object-contain mt-2.5 aspect-square w-[26px]"
                />
            </motion.div>
        </motion.section>
    );
}
