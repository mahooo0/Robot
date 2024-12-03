import Green_to_green from '@/components/btns/green_to_green';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HelpCard from '@/components/HelpCard';
import Product_Card_aute from '@/components/ProductCards/Product_Card_aoute';
import ProductCard_MD from '@/components/ProductCards/Product_lg_card';
import ProductCategories from '@/components/ProductCategorys';
import { useRouter } from 'next/router';
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
    const router = useRouter();
    const scrollToElement = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    return (
        <div>
            {' '}
            <Header activeIndex={1} productIndex={0} />
            <main>
                {' '}
                <section
                    className="flex overflow-hidden flex-col items-start px-16 pt-24 pb-7 w-full max-md:px-5 max-md:max-w-full"
                    style={{
                        backgroundImage:
                            'url("https://s3-alpha-sig.figma.com/img/1eef/cebc/325df84941b7a72afd9fef7abe155873?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WilPHOLACEovM5IPJtFsgr6Q58juqvL0Yyn8BWKgpYEsZaoRB8oq7phUIrO3O0mHt0S0hRfsTqdooiePIOyZOmPLlQ08Sv6ItGZ7T4XxHzjD3Vhhfet3zncYoiyf40z~Nf8C89kvGDJc2F1g2vVN5F88Pm6eQI7CiJqPJrhmrfxA27x8R2CS57nvQdE-7lOG6sP1c-klwGwpHQIwuq8flY1Su5MR8vYCwEDUJSRIJN8DQdJ2K5PsbkN5Df8f-hLS3mBmDjeE~~43aqeypaqI5qtH4skQes4a3Sja0bZQnh9RGMsZEK8vRskM1S9Rlyt8qIO-iHuX6ccuDz~Oda~Quw__")',
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
                        <div>
                            <Green_to_green
                                action={() => router.push('/products/compare')}
                            >
                                Müqayisə et
                            </Green_to_green>
                        </div>
                        {/* <button className="gap-2.5 self-start px-7 py-3.5 mt-7 text-base font-medium text-white bg-green-400 rounded-[100px] max-md:px-5">
                           
                        </button> */}
                    </div>
                    <div
                        className="flex flex-col items-center mt-16 w-[50px] max-md:mt-10 animate-bounce"
                        onClick={() => scrollToElement('vakumus')}
                    >
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
                    <h2
                        className="text-[#447355] text-[40px] font-semibold text-center"
                        id="vakumus"
                    >
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
                        src="https://s3-figma-videos-production-sig.figma.com/video/1133314765284192593/TEAM/a465/a8ac/-bbd3-400c-89be-40c710fb772c?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EPHDZuHUl37NSQfEFlN66kd5ajwqteggRiG3STU5jFJe80XVTOHWo1kCCmmc~D~xoyZjy2O-c4u6uVvnwuP12V8bzq8APAvq4WDFYmYGtVeKXjbym~NuvwpR6qHxjUyJiveqSBBaTUIvmMv31-ykBXDg2xpVQceOdINwLBSeeE-Rbo9gLflqz9MAwU-n-L0APf5NSlc61xqttXTjyQ88KEKPQhaejaVlbvEX1ImfSQ4EogUOS0QEjxFU9tSRH9XXW4xsF3dGIB9JaRvHlJF2idWvViJd1PUZYcYMiHIPS7Zq5d-o8n2DMUssZCLY0Fzv4Yb7ohat5CurQwg3pHkugA__"
                    ></video>
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
                            bgcolor="#EEEEEE"
                            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/589a6fc8a10678a08f38e26b3e681773e5c2b98eb237cc16ab22563d23fbb54c?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                        />
                        <ProductCard_MD
                            // desc={'Free Shipping on All Robot Orders'}
                            title="Roomba Combo® 10 Max Saug- und Wischroboter + AutoWash Dock"
                            price={300}
                            bgcolor="#EEEEEE"
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
                        src="https://s3-figma-videos-production-sig.figma.com/video/1133314765284192593/TEAM/5013/ce66/-60a4-46ce-a172-0e0be0967377?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l0gYp1ZUptmVgAI1bkng~XJz7aYcOzVEmn9Bj5fwFhA0yEwTmYyHWA~ihm8Z3pmtJz69PGk~4OI8dma7YG64Bt5Glw9ycSzQSzvj8qX-J46tx4oWWgP4exaSd0KYKUKefaKcNxdik-F7zEOvb377BX8x7xQXg00evkOGbPUDfafWUNl9ngRDLtuo5FwrYf9eS8Tr0~JhvkaZE5hBom0hpFpBir7thnLeDvaS6nucIFyKSt4Pg67oWB0fEmka0yFpl5sMe4Wtv08kJhiFn-MrAGRivYRhu3zSA3WOMcgQJfBOOc7-3zDO4hZ2ZLAIQk9s6B5uNNQ3qFpvQUAMlRKGww__"
                    ></video>
                    <div className="flex flex-row flex-wrap justify-between mt-7 gap-5">
                        <Product_Card_aute bgcolor="#FFFFFF" />
                        <Product_Card_aute bgcolor="#FFFFFF" />
                        <Product_Card_aute bgcolor="#FFFFFF" />
                        <Product_Card_aute bgcolor="#FFFFFF" />
                    </div>
                    <div className="flex flex-row flex-wrap justify-between mt-7 gap-5">
                        <Product_Card_aute bgcolor="#FFFFFF" />
                        <Product_Card_aute bgcolor="#FFFFFF" />
                        <Product_Card_aute bgcolor="#FFFFFF" />
                    </div>
                    <div className="flex flex-row flex-wrap justify-between mt-7 gap-5">
                        <ProductCard_MD
                            desc={'Free Shipping on All Robot Orders'}
                            title="Roomba Combo® 10 Max Saug- und Wischroboter + AutoWash Dock"
                            price={300}
                            bgcolor="#ffffff"
                            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/589a6fc8a10678a08f38e26b3e681773e5c2b98eb237cc16ab22563d23fbb54c?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                        />
                        <ProductCard_MD
                            bgcolor="#ffffff"
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
                        src="https://s3-figma-videos-production-sig.figma.com/video/1133314765284192593/TEAM/e048/9237/-063f-49d3-a1c4-916639a88b0e?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gqG1ablpa8UUjpSlPtDjjZWQ~6dU1RyHKEgEWNUmBNENIgtrEOKMdrgncRDXx-v-i7v~fS8YqX5Te5slSNDJQBC95PEphCT8lr24G7MJDhOT073zoj7SMHUfodZ1Nr1q7CX-F9LocenqQ-zQ~UTSU2k8jQj5gykhn4JqikGke5QN-nrArg-rRxi3TrmgGVwACI4PZBNuKWnkGiAeAucOMNghfR4472u5hB0kd5Pim8rv6CMo7EK5tVXWJjhTz-hgKEgmO85q0lWwveBiou1E5Do-EomRzz4lF7DDtQLlWZ3W~KYLtd0sHgKWoq8JfjzQUbG6441Q00OQM3OxdlIibw__"
                    ></video>
                    <div className="flex flex-row flex-wrap justify-between mt-7 gap-5 ">
                        <Product_Card_aute />
                        <Product_Card_aute />
                        <Product_Card_aute />
                        <Product_Card_aute />
                    </div>
                    <div className="flex flex-row flex-wrap justify-between mt-7 gap-5 ">
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
                <section className="flex overflow-hidden flex-col justify-center px-20 py-16 w-full bg-[#ECF3EA] max-md:px-5 max-md:max-w-full mt-[100px]">
                    <div className="flex flex-col w-full max-md:max-w-full items-center">
                        <h2 className=" text-4xl font-semibold  text-[#132A1B] max-md:max-w-full text-center">
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
