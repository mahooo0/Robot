import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { MenuState } from './recoil/Atom';
import { ROUTES } from '@/Helpers/Routes';
import { motion } from 'framer-motion';
import GETRequest from '@/services/QueryREq';

const productItems = [
    { name: 'İRobot OS' },
    { name: 'Niyə İRobot' },
    { name: 'İRobot mobil tətbiqi' },
    { name: 'Buyers Guide' },
];

function WhyNavigation({ whyindex, translates }) {
    const [activeindex, setactiveindex] = useState(whyindex);
    const router = useRouter();
    const { lang = 'az' } = router.query;
    // const { data: translates } = GETRequest(`/translates`, 'translates', [
    //     lang,
    // ]);
    return (
        <motion.nav
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="overflow-hidden bg-white border-t border-gray-600 max-w-[723px] "
        >
            <div className="flex gap-5 max-md:flex-col">
                <section className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full max-md:pl-5  pl-7">
                    <ul className="flex flex-col items-start self-stretch my-auto w-full text-base font-medium text-black text-opacity-80 max-md:mt-10 gap-[14px]">
                        <div>
                            <li
                                onClick={() => {
                                    setactiveindex(0);
                                    router.push(`/${lang}/about/irobut-os`);
                                }}
                                className={`gap-2.5 self-stretch cursor-pointer ${
                                    0 === whyindex
                                        ? 'text-[#69BE56] border-b border-solid border-b-[#69BE56]'
                                        : ''
                                }`}
                            >
                                {translates?.İRobot_OS}
                            </li>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/acb6b3e7b956d8e5b04cdb13ca7d6f493152cc982d81f63d71168e374f96caf3?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                className="object-contain mt-[14px] aspect-[16.39] w-[31px]"
                                alt=""
                            />
                        </div>
                        <div>
                            <li
                                onClick={() => {
                                    setactiveindex(1);
                                    router.push(`/${lang}/about/why-us`);
                                }}
                                className={`gap-2.5 self-stretch cursor-pointer ${
                                    1 === whyindex
                                        ? 'text-[#69BE56] border-b border-solid border-b-[#69BE56]'
                                        : ''
                                }`}
                            >
                                {translates?.Niyə_İrobot}
                            </li>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/acb6b3e7b956d8e5b04cdb13ca7d6f493152cc982d81f63d71168e374f96caf3?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                className="object-contain mt-[14px] aspect-[16.39] w-[31px]"
                                alt=""
                            />
                        </div>
                        <div>
                            <li
                                onClick={() => {
                                    setactiveindex(2);
                                    router.push(`/${lang}/about/controll`);
                                }}
                                className={`gap-2.5 self-stretch cursor-pointer ${
                                    2 === whyindex
                                        ? 'text-[#69BE56] border-b border-solid border-b-[#69BE56]'
                                        : ''
                                }`}
                            >
                                {translates?.İRobot_mobil_tətbiqi}
                            </li>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/acb6b3e7b956d8e5b04cdb13ca7d6f493152cc982d81f63d71168e374f96caf3?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                className="object-contain mt-[14px] aspect-[16.39] w-[31px]"
                                alt=""
                            />
                        </div>
                        <div>
                            <li
                                onClick={() => {
                                    setactiveindex(3);
                                    router.push(`/${lang}/about`);
                                }}
                                className={`gap-2.5 self-stretch cursor-pointer ${
                                    3 === whyindex
                                        ? 'text-[#69BE56] border-b border-solid border-b-[#69BE56]'
                                        : ''
                                }`}
                            >
                                {' '}
                                {translates?.Buyers_Guide}
                            </li>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/acb6b3e7b956d8e5b04cdb13ca7d6f493152cc982d81f63d71168e374f96caf3?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                className="object-contain mt-[14px] aspect-[16.39] w-[31px]"
                                alt=""
                            />
                        </div>
                    </ul>
                </section>
                <div className="flex flex-col ml-5 w-[26%] max-md:ml-0 max-md:w-full">
                    <div className="flex overflow-hidden flex-col justify-center items-center self-stretch  m-auto w-40 h-40 bg-stone-200 rounded-[100px] max-md:mt-10">
                        <img
                            loading="lazy"
                            src={'/image/about.png'}
                            className="object-cover "
                            alt="Product"
                        />
                    </div>
                </div>
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

const WhyNav = ({ activeIndex, whyindex, translates }) => {
    const [menu, setMenu] = useRecoilState(MenuState);
    const router = useRouter();
    const { lang = 'az' } = router.query;

    // Refs for detecting clicks outside
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                setMenu((prevMenu) => ({
                    ...prevMenu,
                    whybar: false, // Close the menu
                }));
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setMenu]);

    useEffect(() => {
        const handleRouteChange = () => {
            setMenu((prevMenu) => ({
                ...prevMenu,
                whybar: false, // Close on route change
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
                ref={buttonRef} // Attach ref to the `<p>` element
                className={`text-[14px] font-normal cursor-pointer ${
                    activeIndex === 4 ? 'text-[#447355]' : 'text-black'
                }`}
                onClick={() =>
                    setMenu((prevMenu) => ({
                        prodctbar: false,
                        aksesuaresbar: false,
                        whybar: !prevMenu.whybar, // Toggle instead of setting directly
                        offerbar: false,
                    }))
                }
            >
                {translates?.Niyə_İrobot || 'Niyə İrobot'}
            </p>

            <motion.div
                ref={dropdownRef} // Attach ref to dropdown
                className="absolute z-30 left-0 top-[50px] bg-white shadow-md rounded-md overflow-hidden"
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{
                    opacity: menu.whybar ? 1 : 0,
                    y: menu.whybar ? 0 : -10,
                    scale: menu.whybar ? 1 : 0.95,
                }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
                {menu.whybar && (
                    <WhyNavigation
                        whyindex={whyindex}
                        translates={translates}
                    />
                )}
            </motion.div>
        </li>
    );
};
export default WhyNav;
