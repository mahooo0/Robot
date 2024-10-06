import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HelpCard from '@/components/HelpCard';
import Product_Card_aute from '@/components/ProductCards/Product_Card_aoute';
import { ProductCard_MD } from '@/components/ProductCards/Product_lg_card';
import ProductCategories from '@/components/ProductCategorys';
import React from 'react';

export default function category() {
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
                            'url(https://s3-alpha-sig.figma.com/img/1eef/cebc/325df84941b7a72afd9fef7abe155873?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JZ-oW1-43Zy1DJo2rkIsWGa06L1YvApFwikGv3dpeovZP65WanNQrBlX23dsgSp~dtDm8Hu0U1bfv-v0LPAi7EX2koksPd7Y12~OKvF3gi0p~u3XbGKRw9Rhp43Hh2H7qKeSOqXWnlpn38UY2Nc23AgtWKdIu40HOBlDRYo3fP~ek5ajcvB7PvA2RPyTxuKzPnju8Z1Ii7iGUoHaq4J6fdnxj1B1pcCogdgbwC4LaJ5zCKzeh-BuzHsFOYZJzsDhcODLLVVgdKQOkz-VXuj6j2pQq4G9jjBWVHIUNZ6WzdG~l07vdoi~GA90N3qlIdy0gE6HgjLE6mJQf4cLK5JOHA__)',
                        backgroundSize: 'cover', // This makes the image cover the entire div
                        backgroundPosition: 'center', // Centers the image
                        backgroundRepeat: 'no-repeat', // Prevents the image from repeating
                        width: '100%', // Sets the width to fill the parent container
                        height: '100%', // Sets the height to fill the parent container
                    }}
                >
                    <div className="flex flex-col max-w-full min-h-[226px] w-[404px]">
                        <h1 className="flex-1 text-5xl font-semibold text-green-950 max-md:text-4xl">
                            Roomba Robot Vacuums
                        </h1>
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
                <section className="w-full flex justify-center">
                    <div className="flex flex-col self-center mt-24 w-full  max-w-[1005px] max-md:mt-10 max-md:max-w-full h-fit">
                        <h2 className="text-4xl font-semibold text-center text-green-950 max-md:max-w-full">
                            Robot növləri
                        </h2>
                        <div className="flex flex-wrap gap-5 justify-center items-start mt-10 w-full max-md:max-w-full">
                            {robotTypes.map((robot, index) => (
                                <article
                                    key={index}
                                    className="flex flex-col grow shrink min-w-[240px] w-[252px]"
                                >
                                    <div className="flex overflow-hidden flex-col justify-center px-5 py-14 w-full rounded-3xl bg-[#E7F0E4]">
                                        <img
                                            loading="lazy"
                                            src={robot.imageSrc}
                                            alt={robot.title}
                                            className="object-contain w-full aspect-[2]"
                                        />
                                    </div>
                                    <div className="flex flex-col items-center self-center mt-5 text-center text-green-950">
                                        <h3 className="text-xl font-semibold">
                                            {robot.title}
                                        </h3>
                                        <p className="mt-3 text-sm">
                                            {robot.description}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>{' '}
                    </div>
                </section>
                <section className="w-full lg:px-[60px] px-[30px] mt-[100px]">
                    <h2 className="text-[#447355] text-[40px] font-semibold text-center">
                        2 si 1-də Robot tozsoranlar
                    </h2>
                    <video
                        className="w-full rounded-[20px] lg:h-[540px] object-cover mt-[40px]"
                        playsInline
                        controls={false}
                        autoPlay
                        muted
                        loop
                        controlsList="nodownload"
                        width="600"
                        src="https://mts.caratcons.az/uploads/heros/92992459.mp4"
                    ></video>
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
                <section className="w-full lg:px-[60px] px-[30px] mt-[100px] bg-[#ECF3EA] py-[100px]">
                    <h2 className="text-[#447355] text-[40px] font-semibold text-center">
                        Swap & Mop Robot Vacuums{' '}
                    </h2>
                    <video
                        className="w-full rounded-[20px] lg:h-[540px] object-cover mt-[40px]"
                        playsInline
                        controls={false}
                        autoPlay
                        muted
                        loop
                        controlsList="nodownload"
                        width="600"
                        src="https://mts.caratcons.az/uploads/heros/92992459.mp4"
                    ></video>
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
                <section className="w-full lg:px-[60px] px-[30px] mt-[100px]">
                    <h2 className="text-[#447355] text-[40px] font-semibold text-center">
                        Robot Vacuums
                    </h2>
                    <video
                        className="w-full rounded-[20px] lg:h-[540px] object-cover mt-[40px]"
                        playsInline
                        controls={false}
                        autoPlay
                        muted
                        loop
                        controlsList="nodownload"
                        width="600"
                        src="https://mts.caratcons.az/uploads/heros/92992459.mp4"
                    ></video>
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
                        <h2 className="self-start text-4xl font-semibold text-center text-[#447355] max-md:max-w-full">
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
