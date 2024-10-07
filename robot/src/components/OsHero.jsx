import React from 'react';

function IROSComponent() {
    const menuItems = [
        'Üstünlüyü',
        'Haqqında',
        'Detallar',
        'Tez-tez verilən suallar',
    ];

    return (
        <main className="self-center mt-5 w-full max-w-[1400px] max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
                <section className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
                    <div className="flex overflow-hidden flex-col px-10 pt-12 pb-7 mx-auto w-full text-white rounded-3xl bg-[#87A28E] max-md:px-5 max-md:mt-5 max-md:max-w-full">
                        <div className="flex flex-col max-w-full w-[366px]">
                            <h1 className="text-5xl font-semibold max-md:text-4xl">
                                iRobot OS
                            </h1>
                            <p className="mt-3 text-base max-md:max-w-full">
                                İstifadəçilərə robotlarının harada, nə vaxt və
                                necə təmizlənməsinə nəzarət etməyə imkan verən
                                eksklüziv əməliyyat sistemimiz.
                            </p>
                        </div>
                        <nav className="flex z-10 flex-wrap gap-8 items-center mt-44 text-base font-medium max-md:mt-10 max-md:max-w-full">
                            {menuItems.map((item, index) => (
                                <a
                                    key={index}
                                    href={`#${item
                                        .toLowerCase()
                                        .replace(/\s+/g, '-')}`}
                                    className="gap-2.5 self-stretch py-3 my-auto whitespace-nowrap"
                                >
                                    {item}
                                </a>
                            ))}
                        </nav>
                        <div className="shrink-0 max-w-full h-0.5 border-2 border-solid border-white border-opacity-20 w-[495px]" />
                    </div>
                </section>
                <section className="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fbce62d62c09351b0c64aaee82a3f39df60c9cf78c32ee852452cc86e4b88ab9?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                        alt="iRobot OS interface demonstration"
                        className="object-contain grow w-full rounded-3xl aspect-[1.78] max-md:mt-5 max-md:max-w-full"
                    />
                </section>
            </div>
        </main>
    );
}

export default IROSComponent;
