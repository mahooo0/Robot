import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { MenuState } from './recoil/Atom';

const productItems = [
    { name: 'Endirimli məhsullar' },
    { name: 'Endirimli aksessuarlar' },
];
const imges = [
    'https://s3-alpha-sig.figma.com/img/07df/fa2c/9fb38a84b066a8d2bf593f2c08b3f3ce?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=deD~jMvHdQ0VbAzihVISVBcylO5Al9ywUdGHga7uzxK1N1xGlZnmvAabJdGGPohOy8ysATLJWdgI~38h2gmzzJCvcsXaPrxUGeq5t66hMwKuIS93GLOB~TPX3mjtMrxxEv6B8L22lcCfUi9mOW4tv-5BV4UN15bvYPJ8OpDPivBPRZOi2PIGJapb2hL5e7wlyCkRyw1sc74vE8QE~DXmO47sRr5xTNPMGzXBS3AMxC9VER4hRrU4n1vcSfHGhFk9HGL5-jxQ8qskPHPUxYpY7TB7OL53Ecwmf47LynjK8uWnaXmLkkrno7JLTS64Z2G25jdy1cMNAF14qxPini0Bag__',
    'https://s3-alpha-sig.figma.com/img/4c72/adec/1c7cde4bb71c634c96c8301bd98f61d2?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q4raCtqobDw06a9azFoqkupY3RNzlEq37bkaLRSh8b37Y9byH-Hdhs0XbenLER7joddUoWJgEwiDX07n2R2hyjuaWsYCLmUV4T0gXwOCLduVwhD2yx~jpWKiDKQvN9Eq-FqbAwfVCpzVllwbEHT~-DtNEsuQTGk33QrbjSqPUQ0JWByoQi1Z33yb0hSrAS2SNEiQT9j~LttH6MIH5bg94F0EJtizExe792P1V1dUre9YnUy5Is-nxD57WO~F5zh5sDUnwnNwu-nw3Hr6~FlY7g~2dr7fXForS4p6~atNDiGlnxsU09UeOYn6BVCAZ2hS~xp3Fbc8GZNbN9myrscF2A__',
];

function OfferNavigation({ offerindex }) {
    const [activeindex, setactiveindex] = useState(offerindex);
    const router = useRouter();
    return (
        <nav className="overflow-hidden bg-white border-t border-gray-600 max-w-[723px]  ">
            <div className="flex gap-5 max-md:flex-col">
                <section className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full max-md:pl-5  pl-7">
                    <ul className="flex flex-col items-start self-stretch my-auto w-full text-base font-medium text-black text-opacity-80 max-md:mt-10 gap-[14px]">
                        {productItems.map((item, index) => (
                            <div>
                                <li
                                    key={index}
                                    onClick={() => {
                                        setactiveindex(index);
                                        switch (index) {
                                            case 0:
                                                router.push(
                                                    '/products/SaleProduct'
                                                );
                                                console.log('0');

                                                break;
                                            case 1:
                                                router.push(
                                                    '/aksesuares/saleAksesuares'
                                                );
                                                console.log('0');

                                                break;
                                        }
                                    }}
                                    className={`gap-2.5 self-stretch cursor-pointer ${
                                        index === offerindex
                                            ? 'text-[#69BE56] border-b border-solid border-b-[#69BE56]'
                                            : ''
                                    }`}
                                >
                                    {item.name}
                                </li>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/acb6b3e7b956d8e5b04cdb13ca7d6f493152cc982d81f63d71168e374f96caf3?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                    className="object-contain mt-[14px] aspect-[16.39] w-[31px]"
                                    alt=""
                                />
                            </div>
                        ))}
                    </ul>
                </section>
                <div className="flex flex-col ml-5 w-[26%] max-md:ml-0 max-md:w-full">
                    <div className="flex overflow-hidden flex-col justify-center items-center self-stretch px-5 m-auto w-40 h-40 bg-stone-200 rounded-[100px] max-md:mt-10">
                        <img
                            loading="lazy"
                            src={imges[offerindex ? offerindex : 0]}
                            className="object-contain aspect-square w-[120px]"
                            alt="Product"
                        />
                    </div>
                </div>
                <aside className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
                    <div className="flex overflow-hidden flex-col grow px-5 pt-7 pb-16 w-full text-white bg-[#8E98B8] max-md:mt-9">
                        <div className="flex flex-col">
                            <h2 className="text-base font-semibold">
                                Keçidlər
                            </h2>
                            <ul className="flex flex-col mt-5 max-w-full text-sm w-[218px]  cursor-pointer">
                                <li
                                    onClick={() =>
                                        router.push('/products/compare')
                                    }
                                >
                                    Məhsulu müqayisə et
                                </li>
                                <li
                                    className="mt-4"
                                    onClick={() => router.push('/user/help')}
                                >
                                    Hansı məhsul mənə uyğundur?
                                </li>
                                <li
                                    onClick={() => router.push('/products')}
                                    className="mt-4"
                                >
                                    Bütün məhsullar
                                </li>
                            </ul>
                        </div>
                    </div>
                </aside>
            </div>
        </nav>
    );
}

const OfferNav = ({ activeIndex, offerindex }) => {
    const [isopen, setisopen] = useState(false);
    const [menu, setMenu] = useRecoilState(MenuState);
    const router = useRouter();
    useEffect(() => {
        const handleRouteChange = () => {
            setMenu((prevMenu) => ({
                ...prevMenu,
                offerbar: false, // Close the product menu
            }));
        };

        router.events.on('routeChangeStart', handleRouteChange);

        // Clean up the event listener on component unmount
        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
        };
    }, [router.events, setMenu]);
    return (
        <li
            className=" "

            // onMouseLeave={() => setisopen(false)}
            // onMouseEnter={() => setisopen(true)}
        >
            <p
                // onClick={() => {
                //     router.push('/products');
                // }}
                className={`text-[14px] font-normal cursor-pointer ${
                    activeIndex === 3 ? 'text-[#447355]' : 'text-black'
                }`}
                onClick={() =>
                    setMenu({
                        prodctbar: false,
                        aksesuaresbar: false,
                        whybar: false,
                        offerbar: !menu.offerbar,
                    })
                }
            >
                Fürsətlər və təkliflər
            </p>
            <div
                className=" absolute top-[100%] z-30 left-0"
                style={!menu.offerbar ? { display: 'none' } : {}}
            >
                <OfferNavigation offerindex={offerindex} />
            </div>
        </li>
    );
};
export default OfferNav;
