import GETRequest from '@/services/QueryREq';
import { useRouter } from 'next/router';
import React from 'react';

function UserAside({ active, translates }) {
    const router = useRouter();
    const { lang } = router.query;
    // const { data: translates } = GETRequest(`/translates`, 'translates', [
    //     lang,
    // ]);

    const menuItems = [
        {
            icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/62105f4dd100c43868d88a294261801888dc691b2834a74ff01a0b36d76e0d8e?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            text: translates?.Tənzimləmələr,
        },
        {
            icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9eb7d5c398a10506cc489eaf4756ac25f7b0769f75137d46182508a2a8759c7c?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            text: translates?.Sifarişlərim,
        },
        {
            icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/15d6e564cf1e866c69e33a3bfe32ce14b7b8eac3d002c167c67b53f9e749a9ab?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            text: translates?.Bəyəndiklərim,
        },
        {
            icon: '/image/kredit.png',
            text: translates?.Kreditlərim,
        },
        {
            icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7061b30f6f65f4d4982cbc393e956d18cbaffcfdaed9a9476c0c3110fefebdf4?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            text: translates?.Çıxış,
            textColor: 'text-rose-600',
        },
    ];

    const Router = (index) => {
        switch (index) {
            case 0:
                router.push(`/${lang}/user`);
                break;
            case 1:
                router.push(`/${lang}/user/orders`);
                break;
            case 2:
                router.push(`/${lang}/user/liked`);
                break;
            case 3:
                router.push(`/${lang}/user/kredits`);
                break;
            case 4:
                localStorage.removeItem('user-info');
                router.push(`/${lang}`);
                break;
        }
    };

    return (
        <aside className="flex overflow-hidden h-full flex-col grow px-5 pt-5 w-full text-base bg-[#F1F5F0] max-md:pb-24 max-md:mt-3">
            <div className="flex flex-col self-center max-w-full font-medium text-black w-[122px]">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1f1b628a1bdffc4af6dbbde03769db38732ca0c0a134eb6b33fe35ac9df3eb1?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                    alt="İlaha Nazarova's profile picture"
                    className="object-contain self-center w-20 aspect-square rounded-[100px]"
                />
                <h1 className="mt-3 text-center">İlaha Nazarova</h1>
            </div>
            <hr className="mt-4 w-full border border-solid border-black border-opacity-10" />
            <div className="flex flex-col mt-4 w-full whitespace-nowrap text-green-950 justify-center items-center">
                {menuItems.map((item, index) => (
                    <div
                        key={index}
                        className={`flex w-fit overflow-hidden flex-col justify-center cursor-pointer p-1 ${
                            index === active ? 'bg-[#87A28E]' : 'bg-white'
                        } rounded-3xl ${
                            index === active
                                ? 'text-white'
                                : item.textColor || ''
                        } ${index === active ? 'mt-2' : 'mt-2'}`}
                    >
                        <div
                            className="flex gap-3 items-center"
                            onClick={() => Router(index)}
                        >
                            <img
                                loading="lazy"
                                src={item.icon}
                                alt=""
                                className="object-contain shrink-0 self-stretch my-auto w-12 rounded-3xl aspect-square"
                            />
                            <div className="self-stretch my-auto w-[182px] lg:block  hidden">
                                {item.text}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    );
}

export default UserAside;
