import React from 'react';
import Header from '@/components/Header';
import Product_Card_aute from '@/components/ProductCards/Product_Card_aoute';
import ProductCard_MD from '@/components/ProductCards/Product_lg_card';
import HelpCard from '@/components/HelpCard';
import Footer from '@/components/Footer';
function AccessoryCard({ imageSrc, title }) {
    return (
        <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[380px]">
            <div className="flex overflow-hidden flex-col justify-center items-center px-3 w-full rounded-3xl aspect-square bg-zinc-100">
                <img
                    loading="lazy"
                    src={imageSrc}
                    alt={`${title} accessory`}
                    className="object-contain w-full rounded-3xl aspect-square"
                />
            </div>
            <h2 className="mt-5 text-xl font-semibold text-center underline text-green-950">
                <span className="underline">{title}</span>
            </h2>
        </div>
    );
}
export default function SaleAksesuares() {
    const helpData = [
        {
            imageSrc:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/3bcd91055783e850ce350db9e3b1e18a036771ee4dbb602d047b0e9ceee40d68?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            title: 'Testdən keç',
            description:
                'Hansı məhsulun sizin üçün uyğun olduğunu müəyyən etmək üçün məhsul testimizdə bir neçə sadə suala cavab verin. Testdən keçin',
            linkText: 'Testdən keç',
            page: '/user/help',
        },
        {
            imageSrc:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/274fcf70462b6cfce6ed1a77a92ed79c22246f989eba9ebe4321020077cf9d53?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            title: 'Ekspert məsləhəti',
            description:
                'Hansı məhsulun sizin üçün uyğun olduğunu müəyyən etmək üçün məhsul testimizdə bir neçə sadə suala cavab verin. Testdən keçin',
            linkText: 'Bizimlə əlaqə',
            page: '/contact',
        },
        {
            imageSrc:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/79161b1f02d51e9a189b3e58d236194f37f61ff45fdcf797e0654e2adb59b400?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            title: 'Mağazamıza yaxınlaş',
            description:
                'Hansı məhsulun sizin üçün uyğun olduğunu müəyyən etmək üçün məhsul testimizdə bir neçə sadə suala cavab verin. Testdən keçin',
        },
    ];
    const accessoryData = [
        {
            imageSrc:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/0d8f03a61e4345f187388eb23d0f4f97f47976994676c02240e9890a9ac3cd31?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            title: 'Roomba® Accessories',
        },
        {
            imageSrc:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/e1b6748103a06a36633e2adb9193144275307484f932a29bb070efb3334caf74?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            title: 'Braava® Accessories',
        },
        {
            imageSrc:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/e27fff2cdec8d80ff2a97f7eaa489d4a547a7cfd8a4ed6adf95f5eaffc2b0b68?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            title: 'Roomba Combo® Accessories',
        },
    ];
    return (
        <div>
            {' '}
            <Header activeIndex={3} offerindex={1} />
            <main>
                <h2 className=" text-[48px] font-semibold text-center  mt-[40px] ">
                    Endirimli aksesuarlar
                </h2>
                <section className="flex flex-wrap gap-5 items-center self-center mt-10 max-md:max-w-full justify-center">
                    {accessoryData.map((accessory, index) => (
                        <AccessoryCard
                            key={index}
                            imageSrc={accessory.imageSrc}
                            title={accessory.title}
                        />
                    ))}
                </section>
                <section className="w-full lg:px-[60px] px-[30px] mt-[40px] bg-[#ECF3EA] py-[100px]">
                    <h2 className=" text-[48px] font-semibold text-center  mt-[40px]  text-[#447355]">
                        20% Endirim{' '}
                    </h2>
                    <div className="flex flex-row flex-wrap justify-between mt-7 gap-5">
                        <Product_Card_aute bgcolor="#FFFFFF" />
                        <Product_Card_aute bgcolor="#FFFFFF" />
                        <Product_Card_aute bgcolor="#FFFFFF" />
                    </div>
                    <div className="flex flex-row flex-wrap justify-between mt-7 gap-5">
                        <ProductCard_MD
                            bgcolor="#FFFFFF"
                            desc={'Free Shipping on All Robot Orders'}
                            title="Roomba Combo® 10 Max Saug- und Wischroboter + AutoWash Dock"
                            price={300}
                            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/589a6fc8a10678a08f38e26b3e681773e5c2b98eb237cc16ab22563d23fbb54c?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                        />
                        <ProductCard_MD
                            bgcolor="#FFFFFF"
                            desc={'Free Shipping on All Robot Orders'}
                            title="Roomba Combo® 10 Max Saug- und Wischroboter + AutoWash Dock"
                            price={300}
                            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/589a6fc8a10678a08f38e26b3e681773e5c2b98eb237cc16ab22563d23fbb54c?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                        />
                    </div>
                </section>
                <section className="w-full lg:px-[60px] px-[30px] mt-[40px] bg-[#FFFFFF] py-[100px]">
                    <h2 className=" text-[48px] font-semibold text-center  mt-[40px]  text-[#447355]">
                        20% Endirim{' '}
                    </h2>
                    <div className="flex flex-row flex-wrap justify-between mt-7 gap-5">
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
                </section>
            </main>
            <Footer />
        </div>
    );
}
