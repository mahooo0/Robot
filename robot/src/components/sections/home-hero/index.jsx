import React from 'react';
import { motion } from 'framer-motion';
import Hero_Swipper from '@/components/home_product_wsipper';

export default function Home_Hero({ hero }) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex lg:flex-row flex-col p-5 gap-5 h-fit"
        >
            <motion.video
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                className="lg:w-[60%] w-full rounded-[20px] lg:h-[540px] object-cover"
                playsInline
                controls={false}
                autoPlay
                muted
                loop
                controlsList="nodownload"
                width="600"
                src={hero.video}
            ></motion.video>

            {/* <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                > */}
            <Hero_Swipper data={hero.products} />
            {/* </motion.div> */}
        </motion.section>
    );
}
