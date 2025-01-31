import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';

export default function Contact({ data }) {
    console.log('data:', data);
    const { translates, contact_items, map } = data;

    return (
        <div>
            <Header activeIndex={0} />
            <section className="lg:px-[60px] px-[30px] mb-[100px]">
                <ContactSection
                    contact_items={contact_items}
                    translates={translates}
                />
                <div
                    className="div-iframe"
                    dangerouslySetInnerHTML={{
                        __html: map?.map,
                    }}
                ></div>
            </section>
            <Footer />
        </div>
    );
}
