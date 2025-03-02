import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { ProductFilters } from './recoil/Atom';
import ToggleSwitch from './checkbox';

const FilterCategory = ({ label, value, options, onChange }) => (
    <div className="flex overflow-hidden flex-col justify-center self-stretch px-5 py-4 my-auto bg-[#ECF1EA] rounded-3xl min-w-[240px] w-[322px]">
        <div className="flex flex-col">
            <label
                htmlFor={`${label.toLowerCase()}-select`}
                className="text-sm text-black text-opacity-60"
            >
                {label}
            </label>
            <div className="flex overflow-hidden flex-col justify-center  mt-2 w-full text-base bg-white rounded-xl text-black text-opacity-90">
                <div className="flex gap-10 items-center">
                    <select
                        id={`${label.toLowerCase()}-select`}
                        className="flex-grow bg-transparent outline-none p-3 border-transparent border-r-8 max-w-[282px] "
                        value={value}
                        onChange={onChange}
                    >
                        <option value="">Select</option>
                        {options.map((option) => (
                            <option
                                className="max-w-[282px] text-wrap"
                                value={option.id}
                            >
                                {option.title}
                            </option>
                        ))}

                        {/* <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option> */}
                    </select>
                </div>
            </div>
        </div>
    </div>
);

const FilterPrice = ({
    label,
    minPrice,
    maxPrice,
    onMinPriceChange,
    onMaxPriceChange,
}) => (
    <div className="flex overflow-hidden gap-3 self-stretch px-5 py-4 my-auto whitespace-nowrap bg-[#ECF1EA] rounded-3xl min-w-[240px] text-black text-opacity-60 w-[321px] ">
        <div className="flex flex-col">
            <label htmlFor="min-price" className="self-start text-sm">
                {label}
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
const FilterArea = ({ label, Area, onAreaChange }) => (
    <div className="flex overflow-hidden gap-3 self-stretch px-5 py-4 my-auto whitespace-nowrap bg-[#ECF1EA] rounded-3xl min-w-[240px] text-black text-opacity-60 w-[321px] ">
        <div className="flex flex-col w-full">
            <label htmlFor="min-price" className="self-start text-sm">
                {label}
            </label>
            <input
                type="number"
                id="min-price"
                placeholder="Min."
                className="overflow-hidden px-4 py-3 mt-2 text-base bg-white rounded-xl max-md:pr-5 "
                aria-label="Minimum price"
                value={Area}
                onChange={onAreaChange}
            />
        </div>
    </div>
);
const FilterComponent = ({
    productCategories,
    accessorySeries,
    productTypes,
    Translates,
}) => {
    const [Filters, setFilters] = useRecoilState(ProductFilters);
    console.log('productTypes', productTypes);

    return (
        <section className="flex flex-col gap-3 items-center mt-10 w-fit justify-between lg:px-[60px] md:px-[30px] px-0 h-fit">
            <article className="w-full  flex justify-between px-[20px] items-center">
                <h6 className="text-[20px] font-medium">{Translates.Filter}</h6>
                <button
                    className=" text-[14px] text-[#337FFF] font-normal"
                    onClick={() =>
                        setFilters({
                            minPrice: '',
                            maxPrice: '',
                            Area: '',
                            category: '',
                            series: '',
                            type: '',
                            title: '',
                            sort: '',
                            is_new: false,
                            is_paket: false,
                            is_discounted: false,
                            is_bestseller: false,
                        })
                    }
                >
                    {Translates.Təmizlə}
                </button>
            </article>
            <FilterPrice
                label={Translates.Qiymət}
                minPrice={Filters.minPrice}
                maxPrice={Filters.maxPrice}
                onMinPriceChange={(e) =>
                    setFilters({ ...Filters, minPrice: e.target.value })
                }
                onMaxPriceChange={(e) =>
                    setFilters({ ...Filters, maxPrice: e.target.value })
                }
            />
            {/* {categories.map((categoryItem, index) => (
                <FilterCategory key={index} {...categoryItem} />
            ))} */}
            <FilterCategory
                label={Translates.Category}
                value={Filters.category}
                options={productCategories}
                onChange={(e) =>
                    setFilters({ ...Filters, category: e.target.value })
                }
            />
            <FilterCategory
                label={Translates.Seriya}
                value={Filters.series}
                options={accessorySeries}
                onChange={(e) =>
                    setFilters({ ...Filters, series: e.target.value })
                }
            />
            <FilterCategory
                label={Translates.Type}
                value={Filters.type}
                options={productTypes}
                onChange={(e) =>
                    setFilters({ ...Filters, type: e.target.value })
                }
            />
            <FilterArea
                label={Translates.room_are}
                Area={Filters.Area}
                onAreaChange={(e) =>
                    setFilters({ ...Filters, Area: e.target.value })
                }
            />
            <div className="w-full grid grid-cols-2 justify-center  items-center justify-items-center gap-3">
                <div className="w-fit min-w-[100px] flex flex-col gap-2">
                    <label htmlFor="">{Translates.iscoundet}</label>
                    <ToggleSwitch
                        defaultChecked={Filters.is_discounted}
                        onChange={(e) =>
                            setFilters({
                                ...Filters,
                                is_discounted: e,
                            })
                        }
                    />
                </div>
                <div className="w-fit min-w-[100px] flex flex-col gap-2">
                    <label htmlFor="">{Translates.new}</label>
                    <ToggleSwitch
                        defaultChecked={Filters.is_new}
                        onChange={(e) =>
                            setFilters({
                                ...Filters,
                                is_new: e,
                            })
                        }
                    />
                </div>
                <div className="w-fit min-w-[100px] flex flex-col gap-2">
                    <label htmlFor="">{Translates.bundles}</label>
                    <ToggleSwitch
                        defaultChecked={Filters.is_paket}
                        onChange={(e) =>
                            setFilters({
                                ...Filters,
                                is_paket: e,
                            })
                        }
                    />
                </div>
                <div className="w-fit min-w-[100px] flex flex-col gap-2">
                    <label htmlFor="">{Translates.bestseller}</label>
                    <ToggleSwitch
                        defaultChecked={Filters.is_bestseller}
                        onChange={(e) =>
                            setFilters({
                                ...Filters,
                                is_bestseller: e,
                            })
                        }
                    />
                </div>
            </div>
        </section>
    );
};

export default FilterComponent;
