import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useRouter } from 'next/router';
import React from 'react';

export default function NotFoundPage() {
    const router = useRouter();

    return (
        <div>
            <Header activeIndex={0} />
            <motion.main
                className="w-full flex justify-center"
                initial={{ opacity: 0, y: 50 }} // Start hidden & moved down
                animate={{ opacity: 1, y: 0 }} // Fade in & move up
                exit={{ opacity: 0, y: -20 }} // Fade out & move up on exit
                transition={{ duration: 0.5, ease: 'easeInOut' }} // Smooth animation
            >
                <div className="flex flex-col self-center mt-10 mb-10 max-w-full w-[532px] max-md:mt-10">
                    <motion.div
                        className="flex flex-wrap gap-1 items-center self-end font-bold text-center whitespace-nowrap text-[200px] text-neutral-600 w-full max-md:text-4xl"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        <img src="/svg/404.svg" className="w-full" />
                    </motion.div>
                    <motion.section
                        className="flex flex-col mt-5 w-full max-md:max-w-full"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <div className="flex flex-col w-full text-center max-md:max-w-full">
                            <h1 className="text-xl font-semibold text-green-950 max-md:max-w-full">
                                OPPS! Səhifə tapılmadı
                            </h1>
                            <p className="self-center mt-2 text-sm text-black text-opacity-80 max-md:max-w-full">
                                Axtardığınız səhfə tapılmadı və ya error baş
                                verdi.
                            </p>
                        </div>
                        <motion.div
                            className="flex gap-3 justify-center items-center self-center mt-10 w-60 max-w-full text-base font-medium text-green-950"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            <button
                                onClick={() => router.push('/')}
                                className="flex gap-2.5 justify-center items-center self-stretch px-7 py-3.5 my-auto w-60 border border-solid border-gray-600 border-opacity-40 rounded-[100px] max-md:px-5"
                            >
                                <span className="self-stretch my-auto">
                                    Ana səhifəyə qayıt
                                </span>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7aeea7760b4d6d15a1fcb6e680e5c21d4e66e4942ba25bfcdc02db6d571b36b8?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                    alt=""
                                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                                />
                            </button>
                        </motion.div>
                    </motion.section>
                </div>
            </motion.main>
            <Footer />
        </div>
    );
}
