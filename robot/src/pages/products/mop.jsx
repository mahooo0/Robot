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
            <Header activeIndex={1} />
            <main>
                {' '}
                <section
                    className="flex overflow-hidden flex-col items-start px-16 pt-24 pb-7 w-full max-md:px-5 max-md:max-w-full"
                    style={{
                        backgroundImage:
                            'url(https://s3-alpha-sig.figma.com/img/42f2/dca5/f123173f15914af2bf267decfc316dd0?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QB52-iINlwWMSEwIwJ8ykPsuW4S0SP7cUYbKfcYmvbeFJLAr9NkvgsMfREQIS8DhyzgX5FieDrZ4aAeFUCXu-1YAOcwUBFQ-GVTEnBOKCkKvUcel1iASwJ~tA3PS8DXG17h2kzzbbsdMNztvonIk~rqY-ytnCLWckb0yGwU1k~BbvMVRujDm3Tn2DdAiElnPZf~52AVjwTkSLBdA4OpOYm-6vxbLOomYxQBpG-xq9l3eYYCPVOM2pgFSHbnaGIDvnN0z6RYrap7atmNyTt-moxnvxnkuWCwWMbzxelicnpsPKT5p7e58JM3k8JLZLnRQuOJJALbnHxdAqUnZ0WuYiw__)',
                        backgroundSize: 'cover', // This makes the image cover the entire div
                        backgroundPosition: 'center', // Centers the image
                        backgroundRepeat: 'no-repeat', // Prevents the image from repeating
                        width: '100%', // Sets the width to fill the parent container
                        height: '100%', // Sets the height to fill the parent container
                    }}
                >
                    <div className="flex flex-col max-w-full min-h-[226px] w-[404px]">
                        <h1 className="flex-1 text-5xl font-semibold text-green-950 max-md:text-4xl">
                            Özləri üçün əla. Birlikdə daha yaxşı
                        </h1>
                        <p className="text-[16px] font-normal mt-3">
                            Robot tozsoranınızı və süpürgənizi bir paket kimi
                            alın və daha ucuz qiymətə təmizlik etmək arzusunda
                            olan komandanı əldə edin
                        </p>
                        <button className="gap-2.5 self-start px-7 py-3.5 mt-7 text-base font-medium text-white bg-green-400 rounded-[100px] max-md:px-5">
                            Müqayisə et
                        </button>
                    </div>
                    <div className="flex flex-col items-center mt-16 w-[50px] max-md:mt-10 animate-bounce">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/28271d8b28a86de88dc412579eda58a62e2a42ef9b71127030f85d3001fde1b9?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                            alt="Roomba vacuum cleaner"
                            className="object-contain w-full aspect-square"
                        />
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1896a0c6cb827c87623a0963e92bd5903a565448674710f1b4c5940f05f8425?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                            alt="Roomba accessory"
                            className="object-contain mt-2.5 aspect-square w-[26px]"
                        />
                    </div>
                </section>
                <section className="w-full lg:px-[60px] px-[30px] mt-[100px]">
                    <h2 className="text-[#447355] text-[40px] font-semibold text-center">
                        Ən güclü təmizlik üçün{' '}
                    </h2>

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
                            desc={'Free Shipping on All Robot Orders'}
                            title="Roomba Combo® 10 Max Saug- und Wischroboter + AutoWash Dock"
                            price={300}
                            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/589a6fc8a10678a08f38e26b3e681773e5c2b98eb237cc16ab22563d23fbb54c?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                        />
                        <ProductCard_MD
                            desc={'Free Shipping on All Robot Orders'}
                            title="Roomba Combo® 10 Max Saug- und Wischroboter + AutoWash Dock"
                            price={300}
                            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/589a6fc8a10678a08f38e26b3e681773e5c2b98eb237cc16ab22563d23fbb54c?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                        />
                    </div>
                </section>
                <section className="flex overflow-hidden flex-col justify-center px-20 py-16 w-full bg-[#ECF3EA] max-md:px-5 max-md:max-w-full mt-[100px]">
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
                <section className="my-[100px] lg:px-[145px] ">
                    <h2 className="text-[40px] font-semibold text-center text-[#447355] ">
                        Digər kateqoriyalar
                    </h2>
                    <ProductCategories />
                </section>
            </main>
            <Footer />
        </div>
    );
}
