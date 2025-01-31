import FilterAcsesuares from '@/components/Filteracsesuares';
import FilterComponent from '@/components/FilterCategory';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import NavigationBar from '@/components/Navication_bar';
import ProductBundle from '@/components/Product_bundle';
import Product_Card_aute from '@/components/ProductCards/Product_Card_aoute';
import ProductCard_MD from '@/components/ProductCards/Product_lg_card';
import ProductCardSm from '@/components/ProductCards/productCarrSm';
import React, { useState } from 'react';

export default function Aksesuares() {
    const [searchQuery, setSearchQuery] = useState('');
    const accessories = [
        {
            id: 1,
            imageSrc:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/7ddc08e5bd0ef9acfc8e820f59ee306485176226ad4345706fe6d8f82adfebdc?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            name: 'Serianın adı',
        },
        {
            id: 2,
            imageSrc:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/56cd3bc182d1332007afd4b610464b4c49e3e85ae5ff0b35d1ba635fd21e456d?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            name: 'Serianın adı',
        },
        {
            id: 3,
            imageSrc:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/f60310f91161fefb913d93a1d8df8bdfc240d7bb560dee1dd69c12a03acaf825?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            name: 'Serianın adı',
        },
        {
            id: 4,
            imageSrc:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/ebc7c9689703decacabb263d72ecef947a9ee1b441d4892f9b3ed082621f655c?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            name: 'Serianın adı',
        },
        {
            id: 5,
            imageSrc:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/98cbb732917ce624d1a9df99d1ed653c8ebb397790a289da47bd263eef5a6153?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            name: 'Serianın adı',
        },
        {
            id: 6,
            imageSrc:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/ebc7c9689703decacabb263d72ecef947a9ee1b441d4892f9b3ed082621f655c?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            name: 'Serianın adı',
        },
        {
            id: 7,
            imageSrc:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/637b8a51edd4a50002e7e2e99fc2a73bd82e88e1e27efda87dbf65db42c85a13?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            name: 'Serianın adı',
        },
    ];
    function AccessoryCard({ imageSrc, name }) {
        return (
            <article className="flex flex-col self-stretch my-auto w-[166px]">
                <img
                    loading="lazy"
                    src={imageSrc}
                    alt={`${name} accessory`}
                    className="object-contain self-center max-w-full rounded-3xl aspect-square w-[148px]"
                />
                <h3 className="mt-3">{name}</h3>
            </article>
        );
    }

    return (
        <div>
            <Header activeIndex={2} productIndex={2} />
            {/* <section className="w-full lg:px-[60px] px-[30px] py-5">
                <div className=" rounded-[20px] overflow-hidden flex relative flex-col justify-center items-center px-20 py-28 mt-5 w-full  min-h-[440px] max-md:px-5 max-md:py-24 max-md:max-w-full">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/63a73b9b37a8a74a1090d1e82286b001915b6d04b87406cc3f6b3dc4ef3916df?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                        alt="Background"
                        className="object-cover absolute inset-0 size-full"
                    />
                    <div className="flex relative flex-col mb-0 max-w-full w-[631px] max-md:mb-2.5">
                        <h1 className="text-5xl font-semibold text-center text-white max-md:max-w-full max-md:text-4xl">
                            Axtardığınız bütün ev robotları!
                        </h1>
                        <form
                            onSubmit={handleSearchSubmit}
                            className="flex overflow-hidden flex-wrap gap-5 justify-between self-center py-1 pr-1 pl-5 mt-7 max-w-full text-base whitespace-nowrap border border-solid bg-white bg-opacity-80 border-white border-opacity-20 rounded-[100px] text-black text-opacity-60 w-[505px]"
                        >
                            <label htmlFor="searchInput" className="sr-only">
                                Search
                            </label>
                            <input
                                type="text"
                                id="searchInput"
                                value={searchQuery}
                                onChange={handleSearchChange}
                                placeholder="Axtar"
                                className="my-auto bg-transparent border-none outline-none flex-grow"
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
                        </form>
                    </div>
                </div>
            </section> */}
            <section className="flex flex-col mt-[48px]">
                <h1 className="text-5xl font-semibold text-center text-green-950 max-md:max-w-full max-md:text-4xl">
                    Roomba akssesuarlar
                </h1>
                <div className=" mx-5 flex overflow-hidden flex-col justify-center px-10 py-7 mt-10 w-[97%] rounded-3xl bg-[#8E98B8] max-md:px-5 ">
                    <div className="flex flex-col w-full max-md:max-w-full">
                        <h2 className="text-lg font-semibold text-[#BCC5E3] max-md:max-w-full">
                            Robotunuz üçün hissələri və aksesuarları tapın
                        </h2>
                        <div className="flex flex-wrap gap-5 items-center justify-center mt-5 w-full text-base font-medium text-center text-white max-md:max-w-full">
                            {accessories.map((accessory) => (
                                <AccessoryCard
                                    key={accessory.id}
                                    {...accessory}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <FilterAcsesuares />
            <section className=" lg:px-[60px] px-[30px] mt-[60px]">
                <div className="w-full flex justify-between items-center flex-wrap">
                    <p className="text-[16px] font-normal text-opacity-60">
                        200 Məhsul
                    </p>
                    <div className="flex flex-row gap-3 items-center flex-wrap">
                        <p className="text-[16px] font-normal text-opacity-60">
                            Sırala{' '}
                        </p>
                        <div className="p-3 bg-[#ECF1EA] w-[283px] h-[48px] rounded-[10px] ">
                            <select
                                name=""
                                id=""
                                className=" bg-[#ECF1EA]  w-full"
                            >
                                <option value="">option1</option>
                                <option value="">option2</option>
                                <option value="">option3</option>
                                <option value="">option4</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row flex-wrap justify-between mt-7 gap-5">
                    <Product_Card_aute />
                    <Product_Card_aute />
                    <Product_Card_aute />
                    <Product_Card_aute />
                </div>
                <div className="flex flex-row flex-wrap justify-between mt-7 gap-5">
                    <Product_Card_aute />
                    <Product_Card_aute />
                    <Product_Card_aute />
                </div>
                <div className="flex flex-row flex-wrap justify-between mt-7 gap-5">
                    <ProductCard_MD
                        // desc={'Free Shipping on All Robot Orders'}
                        title="Roomba Combo® 10 Max Saug- und Wischroboter + AutoWash Dock"
                        price={300}
                        bgcolor={'#EEEEEE'}
                        isLarge={true}
                        imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/589a6fc8a10678a08f38e26b3e681773e5c2b98eb237cc16ab22563d23fbb54c?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                    />
                    <ProductCard_MD
                        // desc={'Free Shipping on All Robot Orders'}
                        title="Roomba Combo® 10 Max Saug- und Wischroboter + AutoWash Dock"
                        price={300}
                        bgcolor={'#EEEEEE'}
                        isLarge={true}
                        imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/589a6fc8a10678a08f38e26b3e681773e5c2b98eb237cc16ab22563d23fbb54c?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                    />
                </div>

                <div className="flex flex-row flex-wrap justify-between mt-7 gap-5">
                    <Product_Card_aute />
                    <Product_Card_aute />
                    <Product_Card_aute />
                </div>
            </section>
            <div className="flex justify-center mt-[48px] mb-[100px]">
                <NavigationBar />
            </div>

            <Footer />
        </div>
    );
}
