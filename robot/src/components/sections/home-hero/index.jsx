import React from 'react';
import { motion } from 'framer-motion';
import Hero_Swipper from '@/components/home_product_wsipper';

export default function Home_Hero() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex lg:flex-row flex-col p-5 gap-5 h-fit"
        >
            <motion.video
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                className="lg:w-[60%] w-full rounded-[20px] lg:h-[540px] object-cover"
                playsInline
                controls={false}
                autoPlay
                muted
                loop
                controlsList="nodownload"
                width="600"
                src="https://s3-figma-videos-production-sig.figma.com/video/1213020028553192391/TEAM/24fe/37d5/-68ca-4f7c-b9c4-18adc1ca0a2f?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Fpf21rESjKJJYjiZV2M-u-z6~VaNzet-WP8x8tEJX2dyURd2bzuUIynqOK-~xgkvJ9Bu0ad9Fw35CPtKSCKJ2ugl6l~38U2~kMWAXKkdTy2XjmSYvYCka6mPSvk9xdGXyXD7G-KvVVQP5cr5UBG-30O1mO-CdbMpoFpepzF9kQWIbOM~w84UcHv3VHtPbF0th7Q0mwHix68rLbVG7zWCkO6U1366Ls5LoZ-1IOj2r4QskLBkhDRMoouE5jMgyt8~ILiQaYMiJmdBL1ge6UiXBiX0Wt3DBdEJWnCx~PHlAxCh~7gaFGPXNNN3Gl5kPJRJVimAhcGim4VnPjy30khzmA__"
            ></motion.video>

            {/* <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                > */}
            <Hero_Swipper />
            {/* </motion.div> */}
        </motion.section>
    );
}
