import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';

export default function contact() {
    return (
        <div>
            <Header activeIndex={0} />
            <section className="lg:px-[60px] px-[30px] mb-[100px]">
                <ContactSection />
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.835935232095!2d49.808453799999995!3d40.41248519999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403087a2dfe50a9d%3A0x13a7cc0c688f80bb!2s20%20Yanvar%2C%20Bak%C4%B1!5e0!3m2!1sru!2saz!4v1728310229553!5m2!1sru!2saz"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full mt-5 rounded-[20px]"
                />
            </section>
            <Footer />
        </div>
    );
}
