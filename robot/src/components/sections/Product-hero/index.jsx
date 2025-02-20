import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ProductHero({ Product_Hero, Translates }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        console.log('Search submitted:', searchQuery);
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full lg:px-[60px] px-[30px] py-5"
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="rounded-[20px] overflow-hidden flex relative flex-col justify-center items-center px-20 py-28 mt-5 w-full min-h-[440px] max-md:px-5 max-md:py-24 max-md:max-w-full"
            >
                <motion.video
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    loading="lazy"
                    src={Product_Hero.image}
                    autoPlay
                    loop
                    muted
                    className="object-cover absolute inset-0 size-full "
                />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                    className="flex relative flex-col mb-0 max-w-full w-[631px] max-md:mb-2.5"
                >
                    <h1 className="text-5xl font-semibold text-center text-white max-md:max-w-full max-md:text-4xl">
                        {Product_Hero.title}
                    </h1>
                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.5,
                            ease: 'easeOut',
                        }}
                        onSubmit={handleSearchSubmit}
                        className="flex overflow-hidden flex-nowrap gap-5 justify-between self-center py-1 pr-1 pl-5 mt-7 max-w-full text-base whitespace-nowrap border border-solid bg-white bg-opacity-80 border-white border-opacity-20 rounded-[100px] text-black text-opacity-60 w-[505px]"
                    >
                        <label htmlFor="searchInput" className="sr-only">
                            Search
                        </label>
                        <input
                            type="text"
                            id="searchInput"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            placeholder={Translates.Axtar}
                            className="my-auto bg-transparent w-full border-none outline-none flex-grow"
                        />
                        <button
                            type="submit"
                            aria-label="Search"
                            className="flex items-center justify-center w-12 h-12"
                        >
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c0d99b161e97a7dcc0fb884f8ea9546725030c9eca6eb0e2997a2102e324987?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                alt=""
                                className="object-contain shrink-0 w-full h-full"
                            />
                        </button>
                    </motion.form>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}
