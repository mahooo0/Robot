import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FilterCategory = ({ label, value, icon, onChange, options }) => (
    <motion.div
        className="flex overflow-hidden flex-col  justify-center self-stretch px-5 py-4 my-auto bg-[#ECF1EA] rounded-3xl min-w-[240px] w-[322px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
        <div className="flex flex-col">
            <label
                htmlFor={`${label.toLowerCase()}-select`}
                className="text-sm text-black text-opacity-60"
            >
                {label}
            </label>
            <motion.div
                className="flex overflow-hidden flex-col justify-center mt-2 w-full text-base bg-white rounded-xl text-black text-opacity-90"
                whileHover={{ scale: 1.05 }}
            >
                <div className="flex gap-10 items-center">
                    <select
                        id={`${label.toLowerCase()}-select`}
                        className="flex-grow bg-transparent outline-none p-3  border-transparent border-l-8 max-w-[282px]"
                        value={value}
                        onChange={onChange}
                    >
                        {options?.map((option) => (
                            <option
                                className="max-w-[282px] text-wrap"
                                value={option.value}
                            >
                                {option.title}
                            </option>
                        ))}
                    </select>
                </div>
            </motion.div>
        </div>
    </motion.div>
);

const FilterPrice = ({
    minPrice,
    maxPrice,
    onMinPriceChange,
    onMaxPriceChange,
}) => (
    <motion.div
        className="flex overflow-hidden w-full gap-3 self-stretch px-5 py-4 my-auto whitespace-nowrap bg-[#ECF1EA] rounded-3xl min-w-[240px] text-black text-opacity-60 "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
        <div className="flex flex-col  w-1/2">
            <label htmlFor="min-price" className="self-start text-sm">
                Qiymət
            </label>
            <motion.input
                type="number"
                id="min-price"
                placeholder="Min."
                className="overflow-hidden px-4 py-3 mt-2 text-base bg-white rounded-xl max-md:pr-5 w-full"
                aria-label="Minimum price"
                value={minPrice}
                onChange={onMinPriceChange}
                whileHover={{ scale: 1.05 }}
            />
        </div>
        <motion.input
            type="number"
            id="max-price"
            placeholder="Max."
            className="overflow-hidden self-end px-4 py-3 mt-7 text-base bg-white rounded-xl max-md:pr-5 w-1/2"
            aria-label="Maximum price"
            value={maxPrice}
            onChange={onMaxPriceChange}
            whileHover={{ scale: 1.05 }}
        />
    </motion.div>
);

const FilterAcsesuares = ({ accessoryCategories, accessoryTypes }) => {
    const [category, setCategory] = useState('Robot tozsoranlar');
    const [Tipe, setTipe] = useState('Məhsulun seriası');
    const [accessories, setAccessories] = useState('Aksesuarın növü');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const categories = [
        {
            label: 'Kateqoriya',
            value: category,
            onChange: (e) => setCategory(e.target.value),
            options: accessoryCategories.map((category) => ({
                value: category.title,
                title: category.title,
            })),
        },
        {
            label: 'tipi',
            value: Tipe,
            options: accessoryTypes.map((category) => ({
                value: category.title,
                title: category.title,
            })),
            onChange: (e) => setTipe(e.target.value),
        },
    ];

    return (
        <motion.section
            className=" flex-row gap-3 grid lg:grid-cols-3 grid-cols-1 items-center mt-10 flex-wrap lg:justify-between justify-center lg:px-[60px] md:px-[30px] px-3 h-fit w-[100%]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <FilterPrice
                minPrice={minPrice}
                maxPrice={maxPrice}
                onMinPriceChange={(e) => setMinPrice(e.target.value)}
                onMaxPriceChange={(e) => setMaxPrice(e.target.value)}
            />
            {categories.map((categoryItem, index) => (
                <FilterCategory key={index} {...categoryItem} />
            ))}
        </motion.section>
    );
};

export default FilterAcsesuares;
