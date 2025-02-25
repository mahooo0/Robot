import React from 'react';
import { motion } from 'framer-motion';

const accessories = [
    {
        id: 1,
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/7ddc08e5bd0ef9acfc8e820f59ee306485176226ad4345706fe6d8f82adfebdc',
        name: 'Serianın adı',
    },
    {
        id: 2,
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/56cd3bc182d1332007afd4b610464b4c49e3e85ae5ff0b35d1ba635fd21e456d',
        name: 'Serianın adı',
    },
    {
        id: 3,
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/f60310f91161fefb913d93a1d8df8bdfc240d7bb560dee1dd69c12a03acaf825',
        name: 'Serianın adı',
    },
    {
        id: 4,
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/ebc7c9689703decacabb263d72ecef947a9ee1b441d4892f9b3ed082621f655c',
        name: 'Serianın adı',
    },
    {
        id: 5,
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/98cbb732917ce624d1a9df99d1ed653c8ebb397790a289da47bd263eef5a6153',
        name: 'Serianın adı',
    },
    {
        id: 6,
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/ebc7c9689703decacabb263d72ecef947a9ee1b441d4892f9b3ed082621f655c',
        name: 'Serianın adı',
    },
    {
        id: 7,
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/637b8a51edd4a50002e7e2e99fc2a73bd82e88e1e27efda87dbf65db42c85a13',
        name: 'Serianın adı',
    },
];

function AccessoryCard({ image, title }) {
    return (
        <motion.article
            className="flex flex-col self-stretch my-auto w-[166px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
        >
            <motion.img
                loading="lazy"
                src={image}
                alt={`${title} accessory`}
                className="object-contain self-center max-w-full rounded-3xl aspect-square w-[148px]"
                whileHover={{ rotate: 5 }}
            />
            <h3 className="mt-3">{title}</h3>
        </motion.article>
    );
}

export default function Acsesuares_Categories({ AccessorySeries }) {
    return (
        <motion.section
            className="flex flex-col mt-[48px] lg:px-[60px] md:px-[30px] px-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <h1 className="text-5xl font-semibold text-center text-green-950 max-md:max-w-full max-md:text-4xl">
                Roomba akssesuarlar
            </h1>
            <motion.div
                className=" flex overflow-hidden flex-col justify-center px-10 py-7 mt-10 w-full rounded-3xl bg-[#8E98B8] max-md:px-5"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex flex-col w-full max-md:max-w-full">
                    <h2 className="text-lg font-semibold text-[#BCC5E3] max-md:max-w-full">
                        Robotunuz üçün hissələri və aksesuarları tapın
                    </h2>
                    <div className="flex flex-wrap gap-5 items-center justify-center mt-5 w-full text-base font-medium text-center text-white max-md:max-w-full">
                        {AccessorySeries.map((accessory, index) => (
                            <AccessoryCard key={accessory.id} {...accessory} />
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.section>
    );
}
