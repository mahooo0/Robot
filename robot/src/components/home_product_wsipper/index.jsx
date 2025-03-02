import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ProductDisplay from './Product_card_swipper';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const Hero_Swipper = ({ data }) => {
    const swiperRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const router = useRouter();
    const { lang = 'az' } = router.query;
    const handleSwiperChange = (swiper) => {
        setCurrentSlide(swiper.activeIndex);
    };

    const handleSlideChange = (index) => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(index);
            setCurrentSlide(index);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="overflow-hidden lg:h-[540px] h-full lg:w-[40%] w-full relative"
        >
            <Swiper
                className="h-full"
                ref={swiperRef}
                onSlideChange={handleSwiperChange} // Track slide changes
            >
                {data.map((item) => (
                    <SwiperSlide
                        className="h-full"
                        onClick={() => {
                            localStorage.setItem(
                                'Productslug',
                                JSON.stringify(item.slug)
                            );
                            router.push(`/${lang}/products/${item.slug[lang]}`);
                        }}
                    >
                        <ProductDisplay data={item} />
                    </SwiperSlide>
                ))}

                {/* <SwiperSlide>
                    <ProductDisplay />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductDisplay />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductDisplay />
                </SwiperSlide> */}
            </Swiper>

            {/* Custom Pagination */}
            <div className=" absolute flex justify-center bottom-5   right-5 z-[5000] ">
                {[...Array(data.length)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleSlideChange(index)}
                        className={`w-6 h-2 mx-[2px] rounded-[100px] ${
                            currentSlide === index
                                ? 'bg-white'
                                : 'bg-white bg-opacity-20'
                        }`}
                    />
                ))}
            </div>
        </motion.div>
    );
};

export default Hero_Swipper;
