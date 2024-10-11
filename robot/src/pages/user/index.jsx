import Header from '@/components/Header';
import Settings from '@/components/Setting';
import UserAside from '@/components/UserAside';
import React from 'react';

export default function index() {
    return (
        <div className="h-[100vh] w-full bg-[F1F5F0]   relative">
            <Header activeIndex={0} />
            <div className="flex flex-row h-full">
                <div className=" w-[20%] h-[100%] mr-3">
                    <UserAside active={0} />
                </div>
                <Settings />
            </div>
        </div>
    );
}
