import React from 'react';
import { motion } from 'framer-motion';

export default function TypesOfRobots({ typesOfRobots, Translates }) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full flex justify-center"
        >
            <div className="flex flex-col self-center mt-24 w-full max-w-[1005px] max-md:mt-10 max-md:max-w-full h-fit">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-4xl font-semibold text-center text-green-950 max-md:max-w-full"
                >
                    {Translates.Robot_növləri}
                </motion.h2>

                <div className="flex flex-wrap gap-5 justify-center items-start mt-10 w-full max-md:max-w-full">
                    {typesOfRobots.map((robot, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.3 + index * 0.1,
                            }}
                            whileHover={{ scale: 1.05 }}
                            className="flex flex-col grow shrink min-w-[240px] w-[252px]"
                        >
                            <div className="flex overflow-hidden flex-col justify-center px-5 py-14 w-full rounded-3xl bg-[#E7F0E4]">
                                <img
                                    loading="lazy"
                                    src={robot.icon}
                                    alt={robot.title}
                                    className="object-contain w-full aspect-[2]"
                                />
                            </div>
                            <div className="flex flex-col items-center self-center mt-5 text-center text-green-950">
                                <h3 className="text-xl font-semibold">
                                    {robot.title}
                                </h3>
                                <p className="mt-3 text-sm">
                                    {robot.description}
                                </p>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
