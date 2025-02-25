import Header from '@/components/Header';
import Orders from '@/components/Orders';
import UserAside from '@/components/UserAside';
import GETRequest from '@/services/QueryREq';

import { useRouter } from 'next/router';
import React from 'react';

export default function index() {
    return (
        <div className="h-[100vh] w-full bg-[F1F5F0]   relative">
            <Header activeIndex={0} />
            <div className="flex flex-row h-full">
                <div className="w-[20%] h-[100%] mr-3">
                    <UserAside active={1} />
                </div>
                <Orders />
            </div>
        </div>
    );
}
