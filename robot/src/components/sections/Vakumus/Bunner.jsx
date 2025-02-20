import React from 'react';
import { motion } from 'framer-motion';

export default function VAkumusBunner({ Vakumus_Bunner }) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full lg:px-[60px] px-[30px] mt-[100px]"
            viewport={{ once: true }}
        >
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[#447355] text-[40px] font-semibold text-center"
                id="vakumus"
                viewport={{ once: true }}
            >
                {Vakumus_Bunner.title}
            </motion.h2>

            <motion.video
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                className="w-full rounded-[20px] lg:h-[540px] object-cover mt-[40px]"
                playsInline
                controls={false}
                autoPlay
                muted
                loop
                controlsList="nodownload"
                width="600"
                src={Vakumus_Bunner.image}
                viewport={{ once: true }}
            ></motion.video>
        </motion.section>
    );
}
