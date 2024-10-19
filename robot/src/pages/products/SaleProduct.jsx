import Green_to_green from '@/components/btns/green_to_green';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HelpCard from '@/components/HelpCard';
import Product_Card_aute from '@/components/ProductCards/Product_Card_aoute';
import { ProductCard_MD } from '@/components/ProductCards/Product_lg_card';
import ProductCategories from '@/components/ProductCategorys';
import React from 'react';

export default function Paket() {
    const robotTypes = [
        {
            imageSrc:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/d258d7a5af1b6527c4c63161762a541f86e82ae2ed23425d29760922bd583eb5?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            title: '2-si 1-də robot tozsoranlar',
            description: 'Vacuum and mop simultaneously',
        },
        {
            imageSrc:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/fe2d3e37a64e26833f8bf586cca7314530934d538572bc8b25aa9dce2187338c?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            title: 'Dəyişdirilə bilən və silinən robot tozsoranlar',
            description: 'Vacuum or mop with a swap of a bin',
        },
        {
            imageSrc:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/e1ff51fcc7ee45f5c2421292e9eb061261a04bdc1180048ffed48106cac16421?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            title: 'Robot tozsoranlar',
            description: 'Powerful and advanced hands free cleaning',
        },
    ];
    const helpData = [
        {
            imageSrc:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/3bcd91055783e850ce350db9e3b1e18a036771ee4dbb602d047b0e9ceee40d68?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            title: 'Testdən keç',
            description:
                'Hansı məhsulun sizin üçün uyğun olduğunu müəyyən etmək üçün məhsul testimizdə bir neçə sadə suala cavab verin. Testdən keçin',
            linkText: 'Testdən keç',
        },
        {
            imageSrc:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/274fcf70462b6cfce6ed1a77a92ed79c22246f989eba9ebe4321020077cf9d53?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            title: 'Ekspert məsləhəti',
            description:
                'Hansı məhsulun sizin üçün uyğun olduğunu müəyyən etmək üçün məhsul testimizdə bir neçə sadə suala cavab verin. Testdən keçin',
            linkText: 'Bizimlə əlaqə',
        },
        {
            imageSrc:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/79161b1f02d51e9a189b3e58d236194f37f61ff45fdcf797e0654e2adb59b400?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            title: 'Mağazamıza yaxınlaş',
            description:
                'Hansı məhsulun sizin üçün uyğun olduğunu müəyyən etmək üçün məhsul testimizdə bir neçə sadə suala cavab verin. Testdən keçin',
        },
    ];
    return (
        <div>
            {' '}
            <Header activeIndex={3} offerindex={0} />
            <main>
                {' '}
                <h2 className="text-[#447355] text-[48px] font-semibold text-center  mt-[40px] ">
                    Ən son təkliflərimizi satın alın!
                </h2>
                <section className="w-full lg:px-[60px] px-[30px] mt-[40px]">
                    <div className="flex overflow-hidden flex-col rounded-3xl">
                        <div className="flex relative flex-col justify-center items-start px-16 py-36 w-full min-h-[500px] max-md:px-5 max-md:py-24 max-md:max-w-full">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/30ac7dca8cac70c81d2a2b76d8348a8fc43464158543b52ae0dfebec18e95514?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                alt=""
                                className="object-cover absolute inset-0 size-full"
                            />
                            <div className="flex relative flex-col mb-0 max-w-full w-[632px] max-md:mb-2.5">
                                <div className="flex flex-col w-full max-md:max-w-full">
                                    <div className="flex gap-3 items-center self-start p-3 text-center whitespace-nowrap rounded-lg bg-white bg-opacity-10 text-white text-opacity-90">
                                        <div className="flex gap-1 items-center self-stretch my-auto text-base font-medium">
                                            <div className="self-stretch my-auto">
                                                250
                                            </div>
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/43137e5c7694df430fd38df9b4fe9bc5011ffda5389f80be936fa84043d7adfd?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                                alt=""
                                                className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
                                            />
                                        </div>
                                        <div className="self-stretch my-auto text-sm">
                                            Qənaət
                                        </div>
                                    </div>
                                    <div className="flex flex-col mt-5 w-full font-semibold max-md:max-w-full">
                                        <h1 className="text-5xl text-white max-md:max-w-full max-md:text-4xl">
                                            Roomba Combo® j9+ now
                                        </h1>
                                        <div className="flex gap-1 items-center self-start px-3 py-1.5 mt-6 text-2xl text-center text-white whitespace-nowrap bg-green-400 rounded-lg">
                                            <div className="self-stretch my-auto">
                                                300
                                            </div>
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6c76cdb1075d3c17072e071aa7352e0ee9c478db97e08495a72cf654bd52bcf?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                                alt=""
                                                className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row flex-wrap justify-between mt-7">
                        <Product_Card_aute />
                        <Product_Card_aute />
                        <Product_Card_aute />
                        <Product_Card_aute />
                    </div>
                    <div className="flex flex-row flex-wrap justify-between mt-7">
                        <Product_Card_aute />
                        <Product_Card_aute />
                        <Product_Card_aute />
                    </div>
                    <div className="flex flex-row flex-wrap justify-between mt-7 gap-5">
                        <ProductCard_MD
                            bgcolor="#EEEEEE"
                            desc={'Free Shipping on All Robot Orders'}
                            title="Roomba Combo® 10 Max Saug- und Wischroboter + AutoWash Dock"
                            price={300}
                            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/589a6fc8a10678a08f38e26b3e681773e5c2b98eb237cc16ab22563d23fbb54c?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                        />
                        <ProductCard_MD
                            bgcolor="#EEEEEE"
                            desc={'Free Shipping on All Robot Orders'}
                            title="Roomba Combo® 10 Max Saug- und Wischroboter + AutoWash Dock"
                            price={300}
                            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/589a6fc8a10678a08f38e26b3e681773e5c2b98eb237cc16ab22563d23fbb54c?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                        />
                    </div>
                </section>
                <section className="w-full lg:px-[60px] px-[30px] mt-[40px]">
                    <div className="flex overflow-hidden flex-col rounded-3xl">
                        <div className="flex relative flex-col justify-center items-start px-16 py-36 w-full min-h-[500px] max-md:px-5 max-md:py-24 max-md:max-w-full">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/30ac7dca8cac70c81d2a2b76d8348a8fc43464158543b52ae0dfebec18e95514?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                alt=""
                                className="object-cover absolute inset-0 size-full"
                            />
                            <div className="flex relative flex-col mb-0 max-w-full w-[632px] max-md:mb-2.5">
                                <div className="flex flex-col w-full max-md:max-w-full">
                                    <div className="flex gap-3 items-center self-start p-3 text-center whitespace-nowrap rounded-lg bg-white bg-opacity-10 text-white text-opacity-90">
                                        <div className="flex gap-1 items-center self-stretch my-auto text-base font-medium">
                                            <div className="self-stretch my-auto">
                                                250
                                            </div>
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/43137e5c7694df430fd38df9b4fe9bc5011ffda5389f80be936fa84043d7adfd?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                                alt=""
                                                className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
                                            />
                                        </div>
                                        <div className="self-stretch my-auto text-sm">
                                            Qənaət
                                        </div>
                                    </div>
                                    <div className="flex flex-col mt-5 w-full font-semibold max-md:max-w-full">
                                        <h1 className="text-5xl text-white max-md:max-w-full max-md:text-4xl">
                                            Roomba Combo® j9+ now
                                        </h1>
                                        <div className="flex gap-1 items-center self-start px-3 py-1.5 mt-6 text-2xl text-center text-white whitespace-nowrap bg-green-400 rounded-lg">
                                            <div className="self-stretch my-auto">
                                                300
                                            </div>
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6c76cdb1075d3c17072e071aa7352e0ee9c478db97e08495a72cf654bd52bcf?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                                alt=""
                                                className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row flex-wrap justify-between mt-7">
                        <Product_Card_aute />
                        <Product_Card_aute />
                        <Product_Card_aute />
                        <Product_Card_aute />
                    </div>
                    {/* <div className="flex flex-row flex-wrap justify-between mt-7">
                        <Product_Card_aute />
                        <Product_Card_aute />
                        <Product_Card_aute />
                    </div> */}
                    <div className="flex flex-row flex-wrap justify-between mt-7 gap-5">
                        <ProductCard_MD
                            bgcolor="#EEEEEE"
                            desc={'Free Shipping on All Robot Orders'}
                            title="Roomba Combo® 10 Max Saug- und Wischroboter + AutoWash Dock"
                            price={300}
                            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/589a6fc8a10678a08f38e26b3e681773e5c2b98eb237cc16ab22563d23fbb54c?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                        />
                        <ProductCard_MD
                            bgcolor="#EEEEEE"
                            desc={'Free Shipping on All Robot Orders'}
                            title="Roomba Combo® 10 Max Saug- und Wischroboter + AutoWash Dock"
                            price={300}
                            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/589a6fc8a10678a08f38e26b3e681773e5c2b98eb237cc16ab22563d23fbb54c?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                        />
                    </div>
                </section>
                <section className="flex overflow-hidden flex-col justify-center px-20 py-16 w-full bg-[#ECF3EA] max-md:px-5 max-md:max-w-full my-[100px] ">
                    <div className="flex flex-col w-full max-md:max-w-full">
                        <h2 className="self-start text-4xl font-semibold text-center text-[#132A1B] max-md:max-w-full">
                            Seçim etməkdə kömək edək!
                        </h2>
                        <div className="flex flex-wrap gap-10 justify-center items-start mt-12 w-full max-md:mt-10 max-md:max-w-full">
                            {helpData.map((item, index) => (
                                <HelpCard key={index} {...item} />
                            ))}
                        </div>
                    </div>
                </section>{' '}
            </main>
            <Footer />
        </div>
    );
}
