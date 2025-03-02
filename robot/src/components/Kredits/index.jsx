import React, { useEffect } from 'react';
import KreditCard from './ProductCard';
import GETRequest from '@/services/QueryREq';
import { useRouter } from 'next/router';

export default function KreditMain({ translates }) {
    const router = useRouter();
    const { lang } = router.query;
    const { data: credits, isLoading: loading } = GETRequest(
        `/credits`,
        'credits',
        [lang]
    );
    useEffect(() => {
        console.log('credits', credits);
    }, [credits]);
    return (
        <div className="flex overflow-hidden flex-col px-10 pt-10 mx-auto w-full bg-[#F1F5F0] pb-[100px] max-md:px-5 max-md:pb-24 max-md:mt-3 max-md:max-w-full">
            <div className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full">
                <h1 className="text-3xl font-semibold text-center text-green-950">
                    {translates?.Kreditlərim}
                </h1>
            </div>
            <div className="flex flex-col gap-3 mt-4 ">
                {loading ? <>loading</> : credits.map(() => <KreditCard />)}
            </div>
        </div>
    );
}
