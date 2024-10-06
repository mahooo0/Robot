import React from 'react';

function Footer() {
    const productLinks = [
        { text: 'Məhsulları müqayisə et', opacity: '90' },
        { text: 'Hansı məhsul mənə uyğundur?', opacity: '80' },
        { text: 'Braava Robot Mops', opacity: '90' },
        { text: 'İrobot Paket məhsullar', opacity: '90' },
        { text: 'Roomba Robot Vacuums', opacity: '90' },
    ];

    const supportLinks = [
        'Bizimlə əlaqə',
        'Sifarişi izlə',
        'Qaydalar və şərtlər',
        'Geri qaytarmalar',
    ];

    const socialIcons = [
        {
            src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4efb53b90c1957633fbaaa1b256b89a30e3ea7b24cf819ef37ae0e5ea8bcb00f?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            alt: 'Social media icon 1',
        },
        {
            src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ca03592769745b0ac94bdcab19df1a9a8630f9fcc99a5557605b8964309796be?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            alt: 'Social media icon 2',
        },
        {
            src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a556019d5488a1f9bffc7e956246f81602127b31c3c1327742504b2a29d625ad?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            alt: 'Social media icon 3',
        },
        {
            src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c2577445e92db173489a2e17361cc6f5d49de34be60880d010acd905303cb08a?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            alt: 'Social media icon 4',
        },
        {
            src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/268acfe8fde10186766c2efa8ad2f493faad1dd49b7288cf704d8558c784b78f?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            alt: 'Social media icon 5',
        },
    ];

    return (
        <footer className="flex overflow-hidden flex-col pt-11 pb-7 w-full bg-neutral-950 max-md:max-w-full">
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f060ee9f104ed380ef1d7c8af2e078a619de7661b3f83b01a5e731b49d11667?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                alt="Company logo"
                className="object-contain self-center w-40 max-w-full aspect-[3.91]"
            />
            <div className="flex flex-col px-16 mt-7 w-full max-md:px-5 max-md:max-w-full">
                <hr className="shrink-0 h-px border border-solid border-white border-opacity-10 max-md:max-w-full" />
                <div className="flex flex-wrap gap-10 justify-between items-start mt-7 w-full max-md:max-w-full">
                    <div className="flex gap-10 items-start min-w-[240px] max-md:max-w-full flex-wrap">
                        <nav className="flex flex-col w-[218px]">
                            <h2 className="text-base font-medium text-white">
                                Məhsullar
                            </h2>
                            <ul className="flex flex-col mt-5 max-w-full text-sm text-white w-[218px]">
                                {productLinks.map((link, index) => (
                                    <li
                                        key={index}
                                        className={`mt-4 first:mt-0 text-white text-opacity-${link.opacity}`}
                                    >
                                        <a href="#" className="hover:underline">
                                            {link.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <nav className="flex flex-col w-[134px]">
                            <h2 className="text-base font-medium text-white">
                                Dəstək
                            </h2>
                            <ul className="flex flex-col mt-5 max-w-full text-sm text-white text-opacity-90 w-[134px]">
                                {supportLinks.map((link, index) => (
                                    <li key={index} className="mt-4 first:mt-0">
                                        <a href="#" className="hover:underline">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <section className="flex flex-col min-w-[240px] w-[423px] max-md:max-w-full">
                        <p className="text-sm text-white">
                            iRobot'tan en son teklifler, yeni ürünler ve daha
                            fazlası için e-posta adresinizi aşağıya girin.
                        </p>
                        <form className="flex overflow-hidden gap-5 justify-between py-1.5 pr-1.5 pl-4 mt-5 w-full border border-solid bg-white bg-opacity-0 border-white border-opacity-10 rounded-[100px] max-md:max-w-full flex-wrap">
                            <label htmlFor="email" className="sr-only">
                                Email
                            </label>
                            <div className="flex gap-2 items-center my-auto text-base whitespace-nowrap text-white text-opacity-60">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ca1885a07c65370b537a46cbf924d16c04909dccc372cd6bc1fbfd574e4faa9?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                    alt=""
                                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                                />
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Email"
                                    className="bg-transparent border-none text-white text-opacity-60 focus:outline-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className="gap-2.5 self-stretch px-6 py-3 text-sm font-medium text-white bg-green-400 rounded-[100px] max-md:px-5"
                            >
                                Abunə ol
                            </button>
                        </form>
                    </section>
                </div>
                <div className="flex gap-4 items-center self-end mt-7">
                    {socialIcons.map((icon, index) => (
                        <a
                            href="#"
                            key={index}
                            className="focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                        >
                            <img
                                loading="lazy"
                                src={icon.src}
                                alt={icon.alt}
                                className="object-contain shrink-0 self-stretch my-auto w-10 rounded-lg aspect-square"
                            />
                        </a>
                    ))}
                </div>
            </div>
            <hr className="mt-6 w-full border border-solid border-white border-opacity-10 min-h-[1px] max-md:max-w-full" />
            <div className="self-center mt-7 text-sm text-white">
                ©2024 | İrobot
            </div>
        </footer>
    );
}

export default Footer;
