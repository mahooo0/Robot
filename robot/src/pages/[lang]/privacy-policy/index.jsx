import Footer from '@/components/Footer';
import Header from '@/components/Header';
import GETRequest from '@/services/QueryREq';
import { useRouter } from 'next/router';
import React from 'react';

export default function index() {
    const router = useRouter();
    const { lang } = router.query;
    const { data: rule } = GETRequest(`/rule`, 'rule', [lang]);

    return (
        <div>
            <Header activeIndex={0} />
            <main className="flex flex-col gap-3 p-6">
                <h1>{rule?.title}</h1>
                <div
                    dangerouslySetInnerHTML={{ __html: rule?.description }}
                ></div>
            </main>
            <Footer />
        </div>
    );
}
