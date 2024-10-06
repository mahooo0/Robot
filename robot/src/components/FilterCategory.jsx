import React, { useState } from 'react';

const FilterCategory = ({ label, value, icon, onChange }) => (
    <div className="flex overflow-hidden flex-col justify-center self-stretch px-5 py-4 my-auto bg-[#ECF1EA] rounded-3xl min-w-[240px] w-[322px]">
        <div className="flex flex-col">
            <label
                htmlFor={`${label.toLowerCase()}-select`}
                className="text-sm text-black text-opacity-60"
            >
                {label}
            </label>
            <div className="flex overflow-hidden flex-col justify-center p-3 mt-2 w-full text-base bg-white rounded-xl text-black text-opacity-90">
                <div className="flex gap-10 items-center">
                    <select
                        id={`${label.toLowerCase()}-select`}
                        className="flex-grow bg-transparent outline-none"
                        value={value}
                        onChange={onChange}
                    >
                        <option value="">{value}</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
);

const FilterPrice = ({
    minPrice,
    maxPrice,
    onMinPriceChange,
    onMaxPriceChange,
}) => (
    <div className="flex overflow-hidden gap-3 self-stretch px-5 py-4 my-auto whitespace-nowrap bg-[#ECF1EA] rounded-3xl min-w-[240px] text-black text-opacity-60 w-[321px]">
        <div className="flex flex-col">
            <label htmlFor="min-price" className="self-start text-sm">
                Qiymət
            </label>
            <input
                type="number"
                id="min-price"
                placeholder="Min."
                className="overflow-hidden px-4 py-3 mt-2 text-base bg-white rounded-xl max-md:pr-5 w-[135px]"
                aria-label="Minimum price"
                value={minPrice}
                onChange={onMinPriceChange}
            />
        </div>
        <input
            type="number"
            id="max-price"
            placeholder="Max."
            className="overflow-hidden self-end px-4 py-3 mt-7 text-base bg-white rounded-xl max-md:pr-5 w-[135px]"
            aria-label="Maximum price"
            value={maxPrice}
            onChange={onMaxPriceChange}
        />
    </div>
);

const FilterComponent = () => {
    const [category, setCategory] = useState('Robot tozsoranlar');
    const [series, setSeries] = useState('Məhsulun seriası');
    const [accessories, setAccessories] = useState('Aksesuarın növü');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const categories = [
        {
            label: 'Kateqoriya',
            value: category,
            icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/339991d818341b5e260ee198244b282711ee5d333890db5843cfbb70f53832de?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            onChange: (e) => setCategory(e.target.value),
        },
        {
            label: 'Seria',
            value: series,
            icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a4479f02213db463f128f3a021b1e603302278f74bcd1c0743f8bcde2ad7b2d9?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            onChange: (e) => setSeries(e.target.value),
        },
        {
            label: 'Aksesuarlar',
            value: accessories,
            icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5747c6f93a93671224ab95dfb4e2b0ea744f3af7293ebc7f0d6dbade89f9e5f5?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            onChange: (e) => setAccessories(e.target.value),
        },
    ];

    return (
        <section className="flex flex-wrap gap-3 items-center mt-10 w-full justify-between lg:px-[60px] px-[30px]">
            {categories.map((categoryItem, index) => (
                <FilterCategory key={index} {...categoryItem} />
            ))}
            <FilterPrice
                minPrice={minPrice}
                maxPrice={maxPrice}
                onMinPriceChange={(e) => setMinPrice(e.target.value)}
                onMaxPriceChange={(e) => setMaxPrice(e.target.value)}
            />
        </section>
    );
};

export default FilterComponent;
