import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { MenuState } from './recoil/Atom';
import { motion } from 'framer-motion';
import GETRequest from '@/services/QueryREq';

const productItems = [
    { name: 'Roomba Robot Vacuums' },
    { name: 'Braava Robot Mops' },
    { name: 'Clean Base Docks' },
    { name: 'İrobot Bundles' },
];
const imges = [
    'https://s3-alpha-sig.figma.com/img/07df/fa2c/9fb38a84b066a8d2bf593f2c08b3f3ce?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=deD~jMvHdQ0VbAzihVISVBcylO5Al9ywUdGHga7uzxK1N1xGlZnmvAabJdGGPohOy8ysATLJWdgI~38h2gmzzJCvcsXaPrxUGeq5t66hMwKuIS93GLOB~TPX3mjtMrxxEv6B8L22lcCfUi9mOW4tv-5BV4UN15bvYPJ8OpDPivBPRZOi2PIGJapb2hL5e7wlyCkRyw1sc74vE8QE~DXmO47sRr5xTNPMGzXBS3AMxC9VER4hRrU4n1vcSfHGhFk9HGL5-jxQ8qskPHPUxYpY7TB7OL53Ecwmf47LynjK8uWnaXmLkkrno7JLTS64Z2G25jdy1cMNAF14qxPini0Bag__',
    'https://s3-alpha-sig.figma.com/img/4c72/adec/1c7cde4bb71c634c96c8301bd98f61d2?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q4raCtqobDw06a9azFoqkupY3RNzlEq37bkaLRSh8b37Y9byH-Hdhs0XbenLER7joddUoWJgEwiDX07n2R2hyjuaWsYCLmUV4T0gXwOCLduVwhD2yx~jpWKiDKQvN9Eq-FqbAwfVCpzVllwbEHT~-DtNEsuQTGk33QrbjSqPUQ0JWByoQi1Z33yb0hSrAS2SNEiQT9j~LttH6MIH5bg94F0EJtizExe792P1V1dUre9YnUy5Is-nxD57WO~F5zh5sDUnwnNwu-nw3Hr6~FlY7g~2dr7fXForS4p6~atNDiGlnxsU09UeOYn6BVCAZ2hS~xp3Fbc8GZNbN9myrscF2A__',
    'https://s3-alpha-sig.figma.com/img/b07c/a034/cd013b6588838244984c0b3d870e7f88?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JjbXnw7PH1XbzrWGL9wElHJnwbLgCiYwA9mt-HKNcqYC56rHBIKFvz52UWrqK48D0ZtTkhh2~XgLrAN9xc5zUsKE1irnNbtxG9ObnGnNgrLoavUF-ASPS6TJz7v4ly0aNXuyU48bHNJFotGCIbTG81p~WelkGQv9KoiXT~LA53U2nYqSATzmgxAohiud2v18ITy6oB9XyoPynZZ8gp6s2hIrXz-X24M5rGRBbTgRSrB2cPbcWv83zZxlBVhaMGX7QQxjEe4HcBL8HERJ1gZOUDKrYMVmwodItjCoTOkVSDAQsAC7k14j1TyEErN0lNnU1X~chcnILTWEm9WKWT8skw__',
    ,
    'https://s3-alpha-sig.figma.com/img/b07c/a034/cd013b6588838244984c0b3d870e7f88?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JjbXnw7PH1XbzrWGL9wElHJnwbLgCiYwA9mt-HKNcqYC56rHBIKFvz52UWrqK48D0ZtTkhh2~XgLrAN9xc5zUsKE1irnNbtxG9ObnGnNgrLoavUF-ASPS6TJz7v4ly0aNXuyU48bHNJFotGCIbTG81p~WelkGQv9KoiXT~LA53U2nYqSATzmgxAohiud2v18ITy6oB9XyoPynZZ8gp6s2hIrXz-X24M5rGRBbTgRSrB2cPbcWv83zZxlBVhaMGX7QQxjEe4HcBL8HERJ1gZOUDKrYMVmwodItjCoTOkVSDAQsAC7k14j1TyEErN0lNnU1X~chcnILTWEm9WKWT8skw__',
];

function ProductNavigation({ productIndex }) {
    const [activeindex, setactiveindex] = useState(productIndex);
    const router = useRouter();
    const { lang = 'az' } = router.query;
    const { data: translates } = GETRequest(`/translates`, 'translates', [
        lang,
    ]);
    return (
        <motion.nav
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="overflow-hidden bg-white border-t border-gray-600 max-w-[723px]"
        >
            <div className="flex gap-5 max-md:flex-col">
                <motion.section
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { staggerChildren: 0.1 },
                        },
                    }}
                    className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full pl-7 max-md:pl-5"
                >
                    <ul className="flex flex-col items-start self-stretch my-auto w-full text-base font-medium text-black text-opacity-80 max-md:mt-10 gap-[14px]">
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 10 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <motion.li
                                onClick={() => {
                                    setactiveindex(0);
                                    router.push(`/${lang}/products/vakumus`);
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    color: '#69BE56',
                                }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 300,
                                }}
                                className={`gap-2.5 self-stretch cursor-pointer transition-all duration-150 ${
                                    productIndex === 0
                                        ? 'text-[#69BE56] border-b border-solid border-b-[#69BE56]'
                                        : 'hover:text-[#69BE56] hover:border-b hover:border-[#69BE56]'
                                }`}
                            >
                                {translates?.Roomba_Robot_Vacuums}
                            </motion.li>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/acb6b3e7b956d8e5b04cdb13ca7d6f493152cc982d81f63d71168e374f96caf3?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                className="object-contain mt-[14px] aspect-[16.39] w-[31px]"
                                alt=""
                            />
                        </motion.div>
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 10 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <motion.li
                                onClick={() => {
                                    setactiveindex(1);
                                    router.push(`/${lang}/products/mop`);
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    color: '#69BE56',
                                }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 300,
                                }}
                                className={`gap-2.5 self-stretch cursor-pointer transition-all duration-150 ${
                                    productIndex === 1
                                        ? 'text-[#69BE56] border-b border-solid border-b-[#69BE56]'
                                        : 'hover:text-[#69BE56] hover:border-b hover:border-[#69BE56]'
                                }`}
                            >
                                {' '}
                                {translates?.Braava_Robot_Mops}
                            </motion.li>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/acb6b3e7b956d8e5b04cdb13ca7d6f493152cc982d81f63d71168e374f96caf3?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                className="object-contain mt-[14px] aspect-[16.39] w-[31px]"
                                alt=""
                            />
                        </motion.div>
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 10 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <motion.li
                                onClick={() => {
                                    setactiveindex(2);
                                    router.push(`/${lang}/products`);
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    color: '#69BE56',
                                }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 300,
                                }}
                                className={`gap-2.5 self-stretch cursor-pointer transition-all duration-150 ${
                                    productIndex === 2
                                        ? 'text-[#69BE56] border-b border-solid border-b-[#69BE56]'
                                        : 'hover:text-[#69BE56] hover:border-b hover:border-[#69BE56]'
                                }`}
                            >
                                {' '}
                                {translates?.Clean_Base_Docks}
                            </motion.li>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/acb6b3e7b956d8e5b04cdb13ca7d6f493152cc982d81f63d71168e374f96caf3?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                className="object-contain mt-[14px] aspect-[16.39] w-[31px]"
                                alt=""
                            />
                        </motion.div>
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 10 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <motion.li
                                onClick={() => {
                                    setactiveindex(3);
                                    router.push(`/${lang}/products/bundles`);
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    color: '#69BE56',
                                }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 300,
                                }}
                                className={`gap-2.5 self-stretch cursor-pointer transition-all duration-150 ${
                                    productIndex === 3
                                        ? 'text-[#69BE56] border-b border-solid border-b-[#69BE56]'
                                        : 'hover:text-[#69BE56] hover:border-b hover:border-[#69BE56]'
                                }`}
                            >
                                {translates?.İrobot_Bundles}
                            </motion.li>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/acb6b3e7b956d8e5b04cdb13ca7d6f493152cc982d81f63d71168e374f96caf3?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                className="object-contain mt-[14px] aspect-[16.39] w-[31px]"
                                alt=""
                            />
                        </motion.div>
                    </ul>
                </motion.section>

                {/* Center Product Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="flex flex-col ml-5 w-[26%] max-md:ml-0 max-md:w-full"
                >
                    <div className="flex overflow-hidden flex-col justify-center items-center self-stretch px-5 m-auto w-40 h-40 bg-stone-200 rounded-[100px] max-md:mt-10">
                        <img
                            loading="lazy"
                            src={imges[productIndex ? productIndex : 0]}
                            className="object-contain aspect-square w-[120px]"
                            alt="Product"
                        />
                    </div>
                </motion.div>

                {/* Right Section */}
                <motion.aside
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
                    className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full"
                >
                    <div className="flex overflow-hidden flex-col grow px-5 pt-7 pb-16 w-full text-white bg-[#8E98B8] max-md:mt-9">
                        <div className="flex flex-col">
                            <h2 className="text-base font-semibold">
                                {translates?.Keçidlər}
                            </h2>
                            <ul className="flex flex-col mt-5 max-w-full text-sm w-[218px] cursor-pointer">
                                <motion.li
                                    whileHover={{ scale: 1.05 }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 300,
                                    }}
                                    className="hover:underline"
                                    onClick={() =>
                                        router.push(`/${lang}/products/compare`)
                                    }
                                >
                                    {translates?.Məhsulu_müqayisə_et}
                                </motion.li>
                                <motion.li
                                    whileHover={{ scale: 1.05 }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 300,
                                    }}
                                    className="mt-4 hover:underline"
                                    onClick={() =>
                                        router.push(`/${lang}/user/help`)
                                    }
                                >
                                    {translates?.Hansı_məhsul_mənə_uyğundur}
                                </motion.li>
                                <motion.li
                                    whileHover={{ scale: 1.05 }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 300,
                                    }}
                                    className="mt-4 hover:underline"
                                    onClick={() =>
                                        router.push(`/${lang}/products`)
                                    }
                                >
                                    {translates?.Bütün_məhsullar}
                                </motion.li>
                            </ul>
                        </div>
                    </div>
                </motion.aside>
            </div>
        </motion.nav>
    );
}

const ProductNav = ({ activeIndex, productIndex }) => {
    const [menu, setMenu] = useRecoilState(MenuState);
    const router = useRouter();
    const { lang = 'az' } = router.query;
    const { data: translates } = GETRequest(`/translates`, 'translates', [
        lang,
    ]);
    useEffect(() => {
        const handleRouteChange = () => {
            setMenu((prevMenu) => ({
                ...prevMenu,
                prodctbar: false, // Close the product menu on route change
            }));
        };

        router.events.on('routeChangeStart', handleRouteChange);
        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
        };
    }, [router.events, setMenu]);

    return (
        <li className="relative">
            <p
                className={`text-[14px] font-normal cursor-pointer ${
                    activeIndex === 1 ? 'text-[#447355]' : 'text-black'
                }`}
                onClick={() =>
                    setMenu({
                        prodctbar: !menu.prodctbar,
                        aksesuaresbar: false,
                        offerbar: false,
                        whybar: false,
                    })
                }
            >
                {translates?.Məhsullar}
            </p>

            {/* Animated dropdown */}
            <motion.div
                className="absolute z-30 left-0 top-[50px] bg-white shadow-md rounded-md overflow-hidden"
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{
                    opacity: menu.prodctbar ? 1 : 0,
                    y: menu.prodctbar ? 0 : -10,
                    scale: menu.prodctbar ? 1 : 0.95,
                }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
                {menu.prodctbar && (
                    <ProductNavigation productIndex={productIndex} />
                )}
            </motion.div>
        </li>
    );
};
export default ProductNav;
