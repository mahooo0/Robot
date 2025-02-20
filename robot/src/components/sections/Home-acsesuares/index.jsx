import Green_to_green from '@/components/btns/green_to_green';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import React from 'react';

export default function AcsesuaresSection({ Home_acsesuares, Translates }) {
    const router = useRouter();

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} // Ensures animation runs only once
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{
                backgroundImage: `url("${Home_acsesuares.image}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '100%',
            }}
            className="mb-[100px] flex overflow-hidden flex-col justify-center items-end self-stretch px-20 py-28 mt-24 w-full max-md:px-5 max-md:py-24 max-md:mt-10 max-md:max-w-full"
        >
            <div className="flex flex-col mb-0 max-w-full w-[393px] max-md:mb-2.5">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
                    className="flex flex-col w-full"
                >
                    <h1 className="text-4xl font-semibold text-green-950">
                        {Home_acsesuares.title}
                    </h1>
                    <p className="mt-5 text-base text-black text-opacity-80 text-[16px] font-medium">
                        {Home_acsesuares.description}
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.7, ease: 'easeOut' }}
                    className="mt-7"
                >
                    <Green_to_green action={() => router.push('/aksesuares')}>
                        {Translates?.Aksesuarlara_bax}
                    </Green_to_green>
                </motion.div>
            </div>
        </motion.section>
    );
}
