import Header from '@/components/Header';
import LoginForum from '@/components/LoiinForum';
import React from 'react';

export default function login_register() {
    return (
        <div className="w-full h-[100vh] bg-[#F2F5F0] flex flex-row  relative">
            <div className="flex justify-center items-center lg:w-1/2 md:w-1/2 w-full h-full">
                <LoginForum />
            </div>
            <div className="w-1/2 p-5 h-full rounded-3xl overflow-hidden  lg:block md:block hidden">
                <img
                    className="w-full h-full object-cover rounded-3xl"
                    src="https://s3-alpha-sig.figma.com/img/2f73/d843/e07270bf6d5658a1dcb43323a99e1812?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ltJ7Oc3QJNRqyRcFqc3uwP7MqgtPRlcav2S4y~HNC2LpjooE4lJOadrjLdk9uyNwlOUrrA0boqIJWVHPfHOVWHe5qLzEax7V0ff4pay7fM6-c0CcvQQFU~-lMAnKrjmFq0t6YFYBLz~MrMn-22xCqu6XTewOXwtEKbEobUEAMjrfy0WgWxr0QvPEIY-AQhd4IlRKJqpv-iVNoDEX-OJx2QZ7xmMecIqR~wKdGNVZZhgePamwy0Gbg4K~NPlcqd4BUM1pQDl3XNsWCL0fFwRKs~kFLPhh9yxLantQEQPpLc414lwLwWS9kplnG2J9yKzLeLVRfVAniN0UiyVVPZbF2Q__"
                />
            </div>
            <div className=" absolute rounded-full w-[48px] h-[48px] flex justify-center items-center top-[60px] left-[60px] bg-white ">
                <img src="/svg/Strelka_black.svg" className=" rotate-180" />
            </div>
        </div>
    );
}
