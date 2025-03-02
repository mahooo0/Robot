import React from 'react';
import { motion } from 'framer-motion';

function IROSComponent({ data, Translates, isWhyPage = false }) {
    const menuItems = [
        Translates.Üstünlüyü,
        Translates.Haqqında,
        Translates.Detallar,
        Translates.Tez_tez_verilən_suallar,
    ];
    const WhymenuItems = [
        Translates.Seçimdə_kömək_etmək,
        Translates.Etibarlı_dəstək,
    ];

    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
        },
    };
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <motion.section
            initial="hidden"
            animate="visible"
            className="self-center mt-5 w-full max-w-[1400px] max-md:max-w-full"
        >
            <div className="flex gap-5 max-md:flex-col">
                <motion.section
                    variants={fadeInUp}
                    className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full"
                >
                    <div className="flex overflow-hidden flex-col px-10 pt-12 pb-7 mx-auto w-full h-full text-white rounded-3xl bg-[#87A28E] max-md:px-5 max-md:mt-5 max-md:max-w-full">
                        <div className="flex flex-col max-w-full w-[366px]">
                            <h1 className="text-5xl font-semibold max-md:text-4xl">
                                {data.title}{' '}
                            </h1>
                            <p className="mt-3 text-base max-md:max-w-full">
                                {data.description}
                            </p>
                        </div>
                        <nav className="flex z-10 flex-wrap gap-5 items-center mt-44 text-base font-medium max-md:mt-10 max-md:max-w-full">
                            {isWhyPage
                                ? WhymenuItems.map((item, index) => (
                                      <button
                                          key={index}
                                          onClick={() =>
                                              scrollToSection(
                                                  index === 0
                                                      ? 'Seçimdə_kömək_etmək'
                                                      : 'Etibarlı_dəstək'
                                              )
                                          }
                                          // href={`#${item
                                          //     .toLowerCase()
                                          //     .replace(/\s+/g, '-')}`}
                                          className="gap-2.5 self-stretch py-3 my-auto whitespace-nowrap"
                                      >
                                          {item}
                                      </button>
                                  ))
                                : menuItems.map((item, index) => (
                                      <button
                                          key={index}
                                          onClick={() =>
                                              scrollToSection(
                                                  index === 0
                                                      ? 'Üstünlüyü'
                                                      : index === 1
                                                      ? 'Haqqında'
                                                      : index === 2
                                                      ? 'Detallar'
                                                      : 'Tez_tez_verilən_suallar'
                                              )
                                          }
                                          // href={`#${item
                                          //     .toLowerCase()
                                          //     .replace(/\s+/g, '-')}`}
                                          className="gap-2.5 self-stretch py-3 my-auto whitespace-nowrap"
                                      >
                                          {item}
                                      </button>
                                  ))}
                        </nav>
                        <div className="shrink-0 max-w-full h-0.5 border-2 border-solid border-white border-opacity-20 w-[495px]" />
                    </div>
                </motion.section>
                <motion.section
                    variants={fadeInUp}
                    className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full"
                >
                    <motion.video
                        loading="lazy"
                        src={data.image}
                        autoPlay
                        loop
                        alt="iRobot OS interface demonstration"
                        className="object-cover grow w-full rounded-3xl aspect-[1.78] max-md:mt-5 max-md:max-w-full"
                        controls={false}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                    />
                </motion.section>
            </div>
        </motion.section>
    );
}

export default IROSComponent;
