import Green_to_green from '@/components/btns/green_to_green';
import OTP from '@/components/Otp';
import { axiosInstance } from '@/services/Requests';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export default function login_register() {
    const [sucses, setsucses] = useState('1');
    const [Otp, setOtp] = useState('1');
    const [showPassword, setShowPassword] = useState(false);
    const [Email, setEmail] = useState(false);
    const router = useRouter();
    const MyComponent = ({ sucses }) => {
        let content;

        switch (sucses) {
            case '1':
                content = (
                    <div className="flex justify-center items-center lg:w-1/2 md:w-1/2 w-full h-full flex-col">
                        <div className="flex flex-col items-center self-center max-w-full text-center w-[360px]">
                            <h1 className="text-4xl font-semibold text-green-950">
                                Şifrəni bərpası
                            </h1>
                        </div>
                        <form
                            onSubmit={async (e) => {
                                e.preventDefault();
                                const email = e.target.email.value;
                                axiosInstance
                                    .post('password-reset/request', {
                                        email,
                                    })
                                    .then(() => {
                                        setEmail(email);
                                        // toast.success("code")
                                        setsucses('2');
                                    })
                                    .catch(() => {
                                        toast.error('some thing went wrong');
                                    });
                            }}
                        >
                            <div className="overflow-hidden px-5 mt-10 py-4 min-w-[360px] w-full bg-white border border-solid border-black border-opacity-10 rounded-[100px]">
                                <label className="sr-only" htmlFor="email">
                                    Name
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    className="w-full bg-transparent outline-none"
                                    aria-label="Name"
                                />
                            </div>
                            <Green_to_green
                                classNAME="w-full mt-[28px] "
                                type="submit"
                            >
                                Göndər
                            </Green_to_green>
                        </form>
                    </div>
                );
                break;
            case '2':
                content = (
                    <div className="flex justify-center items-center lg:w-1/2 md:w-1/2 w-full h-full flex-col">
                        <div className="flex justify-center items-center w-[140px] h-[140px] rounded-full border border-[#69BE56]">
                            <img src="/svg/QalockaGreen.svg" />
                        </div>
                        <p className="w-[457px] text-[20px] font-medium text-center mt-[28px]">
                            <a
                                className="text-[#1661A7]"
                                onClick={() => setsucses('3')}
                            >
                                ilahanazarli@gmail.com
                            </a>{' '}
                            email ünvanına link göndərildi.
                        </p>
                    </div>
                );
                break;
            case '3':
                content = (
                    <OTP
                        email={Email}
                        onComplete={(otpcode) => {
                            console.log('otp', otpcode);
                            setOtp(otpcode);
                            setsucses('4');
                        }}
                    />
                    //otp here
                );
                break;
            case '4':
                content = (
                    <div className="flex justify-center items-center lg:w-1/2 md:w-1/2 w-full h-full flex-col">
                        <div className="flex flex-col items-center self-center max-w-full text-center w-[360px]">
                            <h1 className="text-4xl font-semibold text-green-950">
                                Şifrəni bərpası
                            </h1>
                        </div>
                        <div>
                            {' '}
                            <div className="overflow-hidden px-5 mt-10 py-4 min-w-[360px] w-full bg-white border border-solid border-black border-opacity-10 rounded-[100px]">
                                <label
                                    className="sr-only"
                                    // htmlFor={label.toLowerCase().replace(/\s+/g, '-')}
                                >
                                    Şifrə
                                </label>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Şifrə"
                                    aria-label="Şifrə"
                                    // value={password}
                                    // onChange={(e) =>
                                    //     setPassword(e.target.value)
                                    // }
                                    className="w-full bg-transparent border-none outline-none"
                                />
                            </div>
                            <div className="overflow-hidden px-5 mt-3 py-4 min-w-[360px] w-full bg-white border border-solid border-black border-opacity-10 rounded-[100px]">
                                <label
                                    className="sr-only"
                                    // htmlFor={label.toLowerCase().replace(/\s+/g, '-')}
                                >
                                    Şifrənin təkrarı
                                </label>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Şifrə"
                                    aria-label="Şifrə"
                                    // value={password}
                                    // onChange={(e) =>
                                    //     setPassword(e.target.value)
                                    // }
                                    className="w-full bg-transparent border-none outline-none"
                                />
                            </div>
                            <Green_to_green
                                classNAME="w-full mt-[28px] "
                                action={() => setsucses('4')}
                            >
                                Göndər
                            </Green_to_green>
                        </div>
                    </div>
                );
                break;

            case '5':
                setTimeout(() => {
                    router.push('/user');
                }, 1000);
                content = (
                    <div className="flex justify-center items-center lg:w-1/2 md:w-1/2 w-full h-full flex-col">
                        <div className="flex justify-center items-center w-[140px] h-[140px] rounded-full border border-[#69BE56]">
                            <img
                                src="/svg/QalockaGreen.svg"
                                alt="Success Icon"
                            />
                        </div>
                        <p className="w-[457px] text-[20px] font-medium text-center mt-[28px]">
                            Şifrəniz uğurla bərpa edildi!
                        </p>
                    </div>
                );
                break;
            default:
                content = (
                    <div className="flex justify-center items-center lg:w-1/2 md:w-1/2 w-full h-full flex-col">
                        <header className="flex flex-col items-center self-center max-w-full text-center w-[360px]">
                            <h1 className="text-4xl font-semibold text-green-950">
                                Şifrəni bərpası
                            </h1>
                        </header>
                        <div>
                            {' '}
                            <div className="overflow-hidden px-5 mt-10 py-4 min-w-[360px] w-full bg-white border border-solid border-black border-opacity-10 rounded-[100px]">
                                <label
                                    className="sr-only"
                                    // htmlFor={label.toLowerCase().replace(/\s+/g, '-')}
                                >
                                    Name
                                </label>
                                <input
                                    type="Email"
                                    // id={label.toLowerCase().replace(/\s+/g, '-')}
                                    placeholder="Email"
                                    className="w-full bg-transparent outline-none"
                                    aria-label="Name"
                                />
                            </div>
                            <Green_to_green
                                classNAME="w-full mt-[28px] "
                                action={() => setsucses(true)}
                            >
                                Göndər
                            </Green_to_green>
                        </div>
                    </div>
                );
        }

        return <>{content}</>;
    };
    useEffect(() => {
        if (sucses == '2') {
            setTimeout(() => {
                setsucses('3');
            }, 300);
        }
    }, [sucses]);
    return (
        <div className="w-full h-[100vh] bg-[#F2F5F0] flex flex-row  relative">
            <MyComponent sucses={sucses} />
            <div className="lg:block md:block hidden p-5 h-full rounded-3xl overflow-hidden ">
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
