import { ROUTES } from '@/Helpers/Routes';
import GETRequest from '@/services/QueryREq';
import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import { useRouter } from 'next/router';
import { axiosInstance } from '@/services/Requests';
import toast from 'react-hot-toast';

function Footer() {
    const router = useRouter();
    const { lang = 'az' } = router.query;
    const { data: translates } = GETRequest(`/translates`, 'translates', [
        lang,
    ]);
    const { data: logo, isLoading: logoLoading } = GETRequest(`/logo`, 'logo', [
        lang,
    ]);
    const productLinks = [
        {
            text: translates?.Məhsulları_müqayisə_et,
            opacity: '90',
            page: `/${lang}/products/compare`,
        },
        {
            text: translates?.Hansı_məhsul_mənə_uyğundur,
            page: `/${lang}/user/help`,
            opacity: '80',
        },
        {
            text: translates?.Braava_Robot_Mops,
            page: `/${lang}/products/mop`,
            opacity: '90',
        },
        {
            text: translates?.İrobot_Paket_məhsullar,
            page: `/${lang}/products/bundles`,
            opacity: '90',
        },
        {
            text: translates?.Roomba_Robot_Vacuums,
            page: `/${lang}/products/vakumus`,
            opacity: '90',
        },
    ];
    const { data } = GETRequest('/socials', 'socials', [lang]);
    console.log('data', data);

    const supportLinks = [
        { text: translates?.Bizimlə_əlaqə, page: `/${lang}/contact` },
        { text: translates?.Sifarişi_izlə, page: `/${lang}/user/orders` },
        {
            text: translates?.Qaydalar_və_şərtlər,
            page: `/${lang}/privacy-policy`,
        },
        { text: translates?.Geri_qaytarmalar, page: `/${lang}/privacy-policy` },
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
    const [email, setEmail] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Submitted Email:', email);
        axiosInstance
            .post(`subscribe`, { email: email })
            .then(() => {
                toast.success('sucsesfully subscribed');
            })
            .catch((err) => {
                console.log('err', err);
                toast.error('some thing went wrong ');
            });
    };
    return (
        <footer className="flex overflow-hidden flex-col pt-11 pb-7 w-full bg-neutral-950 max-md:max-w-full">
            <img
                loading="lazy"
                src={logo?.image}
                alt="Company logo"
                className="object-contain self-center w-40 max-w-full aspect-[3.91]"
            />
            <div className="flex flex-col px-16 mt-7 w-full max-md:px-5 max-md:max-w-full">
                <hr className="shrink-0 h-px border border-solid border-white border-opacity-10 max-md:max-w-full" />
                <div className="flex flex-wrap gap-10 justify-between items-start mt-7 w-full max-md:max-w-full">
                    <div className="flex gap-10 items-start min-w-[240px] max-md:max-w-full flex-wrap">
                        <nav className="flex flex-col w-[218px]">
                            <h2 className="text-base font-medium text-white">
                                {translates?.Məhsullar}
                            </h2>
                            <ul className="flex flex-col mt-5 max-w-full text-sm text-white w-[218px]">
                                {productLinks.map((link, index) => (
                                    <motion.li
                                        key={index}
                                        className={`mt-4 first:mt-0 text-white text-opacity-${link.opacity}`}
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Link
                                            href={`${link.page}`}
                                            className="hover:underline"
                                        >
                                            {link.text}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </nav>
                        <nav className="flex flex-col w-[134px]">
                            <h2 className="text-base font-medium text-white">
                                {translates?.Dəstək}
                            </h2>
                            <ul className="flex flex-col mt-5 max-w-full text-sm text-white text-opacity-90 w-[134px]">
                                {supportLinks.map((link, index) => (
                                    <motion.li
                                        key={index}
                                        className="mt-4 first:mt-0"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Link
                                            href={`${link.page}`}
                                            className="hover:underline"
                                        >
                                            {link.text}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <section className="flex flex-col min-w-[240px] w-[423px] max-md:max-w-full">
                        <p className="text-sm text-white">
                            {translates?.Footer_desc}
                        </p>
                        <form
                            onSubmit={handleSubmit}
                            className="flex overflow-hidden gap-5 justify-between py-1.5 pr-1.5 pl-4 mt-5 w-full border border-solid bg-white bg-opacity-0 border-white border-opacity-10 rounded-[100px] max-md:max-w-full flex-nowrap"
                        >
                            <label htmlFor="email" className="sr-only">
                                {translates?.Email}
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
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="bg-transparent border-none text-white text-opacity-60 focus:outline-none w-full"
                                />
                            </div>
                            <button
                                type="submit"
                                className="gap-2.5 self-stretch px-6 py-3 text-sm font-medium text-white bg-[#69BE56] rounded-[100px] max-md:px-5 text-nowrap"
                            >
                                {translates?.Abunə_ol}
                            </button>
                        </form>
                    </section>
                </div>
                <div className="flex gap-4 items-center self-end mt-7">
                    {data?.map((icon, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Link href={icon.link}>
                                <img
                                    loading="lazy"
                                    src={icon.icon}
                                    alt={icon.title}
                                    className="object-contain shrink-0 self-s</Link>tretch my-auto w-10 rounded-lg aspect-square"
                                />
                            </Link>
                        </motion.div>
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
