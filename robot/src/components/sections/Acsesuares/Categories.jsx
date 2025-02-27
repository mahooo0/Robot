import React from 'react';
import { motion } from 'framer-motion';
import { useRecoilState } from 'recoil';
import { AcsesuaresFilters } from '@/components/recoil/Atom';

function AccessoryCard({ image, title, id }) {
    const [Filters, setFilter] = useRecoilState(AcsesuaresFilters);

    return (
        <motion.article
            onClick={() => {
                setFilter({ ...Filters, series: id });
            }}
            className="flex flex-col self-stretch my-auto w-[166px]  cursor-pointer"
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

export default function Acsesuares_Categories({ AccessorySeries, Translates }) {
    // console.log('AccessorySeries', AccessorySeries);

    return (
        <motion.section
            className="flex flex-col mt-[48px] lg:px-[60px] md:px-[30px] px-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <h1 className="text-5xl font-semibold text-center text-green-950 max-md:max-w-full max-md:text-4xl">
                {Translates.Roomba_akssesuarlar}
            </h1>
            <motion.div
                className=" flex overflow-hidden flex-col justify-center px-10 py-7 mt-10 w-full rounded-3xl bg-[#8E98B8] max-md:px-5"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex flex-col w-full max-md:max-w-full">
                    <h2 className="text-lg font-semibold text-[#BCC5E3] max-md:max-w-full">
                        {
                            Translates.Robotunuz_üçün_hissələri_və_aksesuarları_tapın
                        }
                    </h2>
                    <div className="flex flex-wrap gap-5 items-center justify-center mt-5 w-full text-base font-medium text-center text-white max-md:max-w-full">
                        {AccessorySeries.map((accessory, index) => (
                            <AccessoryCard
                                key={accessory.id}
                                id={accessory.id}
                                {...accessory}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.section>
    );
}
