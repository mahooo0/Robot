import React, { useState } from 'react';
import Green_to_green from './btns/green_to_green';

function BuyProduct() {
    const [selectedColor, setSelectedColor] = useState('Qara');

    const colors = [
        {
            src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/df70ec6dd093c9f46f6ebebe92870926a3e6619f8a8402391f795679658ef6aa?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            alt: 'Black color option',
            name: 'Qara',
        },
        {
            src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/52c0bb8b4cb2aa7b9b4bf92996e98324b2a7481e693724900863a395b4e55053?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            alt: 'White color option',
            name: 'Ağ',
        },
        {
            src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4fd90f4a558a2fbff94374ec23f14b1830e0504b656c5aa1d347c70851e2ab4a?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            alt: 'Gray color option',
            name: 'Boz',
        },
    ];

    return (
        <div className="flex flex-col lg:w-1/2 w-full max-md:mt-10 max-md:max-w-full">
            <header className="flex flex-col w-full max-md:max-w-full">
                <h1 className="text-3xl font-semibold text-green-950 max-md:max-w-full">
                    Roomba Combo® 10 Max Saug- und Wischroboter + AutoWash Dock
                </h1>
                <div className="flex flex-col mt-3 max-w-full w-[338px]">
                    <p className="text-base text-black text-opacity-80">
                        Sizin kimi təmizləyən Wi-Fi ilə əlaqəli robot.
                    </p>
                    <p className="mt-3 text-sm text-black text-opacity-60">
                        Məhsulun kodu:1234567
                    </p>
                </div>
            </header>

            <section className="flex flex-col items-start mt-6 max-w-full w-[275px]">
                <div className="flex gap-1 items-center text-3xl font-semibold text-center text-gray-600 whitespace-nowrap">
                    <span className="self-stretch my-auto">300</span>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/db23202b25be894761cc22da7ac523baa970cd1986084bc7b91870bcecde8099?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                        alt=""
                        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    />
                </div>

                <div className="flex flex-col mt-6 max-w-full w-[251px]">
                    <p className="text-sm text-black text-opacity-60">
                        Rəng: {selectedColor}
                    </p>
                    <div className="flex gap-2 items-center mt-3 w-full">
                        {colors.map((color, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedColor(color.name)}
                                className={`p-1 rounded-xl ${
                                    selectedColor === color.name
                                        ? 'ring-2 ring-[#69BE56]'
                                        : ''
                                }`}
                            >
                                <img
                                    loading="lazy"
                                    src={color.src}
                                    alt={color.alt}
                                    className="object-contain shrink-0 self-stretch my-auto rounded-xl aspect-[1.05] w-[78px]"
                                />
                            </button>
                        ))}
                    </div>
                </div>

                <div className="gap-2.5 self-stretch px-5 py-2.5 mt-6 text-sm font-medium text-[#69BE56] w-fit rounded-xl border border-green-400 border-solid">
                    Stokda var
                </div>

                <div className="flex gap-4 items-center self-stretch mt-6 w-full font-medium">
                    <div className="flex gap-2 items-center self-stretch my-auto text-base whitespace-nowrap text-green-950">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/663bbb6caf356c4bfb0d0cec22e73bc13d9e198e8c71078cfaf94a093c411c77?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                            alt=""
                            className="object-contain shrink-0 self-stretch my-auto aspect-[5] w-[140px]"
                        />
                        <span className="self-stretch my-auto">4.6</span>
                    </div>
                    <button className="gap-2.5 self-stretch p-0.5 my-auto text-sm text-gray-600 border-b border-solid border-b-gray-600">
                        Rəylərə bax
                    </button>
                </div>
            </section>

            <div className="flex flex-wrap gap-2 items-center mt-10 w-full text-base font-medium text-white max-md:max-w-full">
                <Green_to_green classNAME="w-[90%]">
                    Səbətə əlavə et
                </Green_to_green>

                <button aria-label="Add to favorites">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4859b1da4f31208985107585278929c19d44d5b4ca351ecce3beb5420ef81896?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                        alt="Favorite icon"
                        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[52px]"
                    />
                </button>
            </div>
        </div>
    );
}

export default BuyProduct;
