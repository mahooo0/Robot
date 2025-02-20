import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Home_IRobo_Bunner({ Home_İRobot_evinizin }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex overflow-hidden flex-col justify-center self-stretch px-16 py-24 mt-24 w-full bg-[#E7F0E4] max-md:px-5 max-md:mt-10 max-md:max-w-full"
        >
            <div className="flex flex-col max-md:max-w-full">
                <div className="flex flex-col items-center self-center max-w-full text-center w-[922px]">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-4xl font-semibold max-md:max-w-full"
                    >
                        {Home_İRobot_evinizin.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="mt-4 text-base text-black text-opacity-60 max-md:max-w-full"
                    >
                        {Home_İRobot_evinizin.description}
                    </motion.p>
                </div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="flex overflow-hidden flex-col justify-center p-5 mt-10 w-full bg-white rounded-3xl max-md:max-w-full"
                >
                    <video
                        className="w-full rounded-[20px] lg:h-[540px] object-cover"
                        playsInline
                        controls={false}
                        autoPlay={true}
                        muted
                        loop
                        width="600"
                        src={Home_İRobot_evinizin.image}
                    ></video>
                </motion.div>
            </div>
        </motion.section>
    );
}
