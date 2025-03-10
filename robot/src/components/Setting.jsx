import React, { useEffect, useState } from 'react';
import Green_to_green from './btns/green_to_green';
import toast from 'react-hot-toast';
import { axiosInstance } from '@/services/Requests';
import GETRequest from '@/services/QueryREq';
import { useRouter } from 'next/router';

const Settings = ({ translates }) => {
    const [show, setshow] = useState(false);
    const [User, setUSer] = useState(null);
    const [isConfrim, setisConfrim] = useState(false);
    const [Email, setEmail] = useState(null);
    const [Code, setCode] = useState('');
    const router = useRouter();
    const { lang } = router.query;
    // const { data: translates } = GETRequest(`/translates`, 'translates', [
    //     lang,
    // ]);

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        if (formData.newPassword === formData.confirmPassword) {
            await axiosInstance
                .post(
                    '/update',
                    {
                        email: User?.customer?.email,
                        name: formData.fullName,
                        phone: formData.phone,
                        password: formData.currentPassword,
                        new_password: formData.newPassword,
                        new_password_confirmation: formData.confirmPassword,
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${User.token}`,
                        },
                    }
                )
                .then(() => {
                    toast.success('user updated sucsesfully');
                })
                .catch((err) => {
                    console.log('eror', err);
                    toast.error('some thing went wrong');
                });
        } else {
            toast.error('new pasword  and confrim pasword need to match');
        }
    };
    const handleSubmit2 = async (e) => {
        e.preventDefault();
        console.log('Form submitted:', Email);
        if (isConfrim) {
            await axiosInstance
                .post(
                    '/change-email/verify',
                    {
                        new_email: Email,
                        verification_code: Code,
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${User.token}`,
                        },
                    }
                )
                .then(() => {
                    toast.success('user updated sucsesfully');
                    setisConfrim(true);
                    setshow(false);
                })
                .catch((err) => {
                    console.log('eror', err);
                    toast.error('some thing went wrong');
                });
        } else {
            await axiosInstance
                .post(
                    '/change-email/request',
                    {
                        new_email: Email,
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${User.token}`,
                        },
                    }
                )
                .then(() => {
                    toast.success('user updated sucsesfully');
                    setisConfrim(true);
                    e.preventDefault();
                })
                .catch((err) => {
                    console.log('eror', err);
                    toast.error('some thing went wrong');
                });
        }
    };
    useEffect(() => {
        const usrSte = localStorage.getItem('user-info');
        const User = JSON.parse(usrSte);
        console.log('User', User);
        setUSer(User);
    }, []);

    return (
        <main className="flex overflow-hidden flex-col px-10 pt-10 mx-auto w-full bg-[#F1F5F0] pb-[494px] max-md:px-5 max-md:pb-24 max-md:mt-3 max-md:max-w-full">
            <header className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full">
                <h1 className="text-3xl font-semibold text-center text-green-950">
                    {translates?.Tənzimləmələr}
                </h1>
                <nav
                    onClick={() => setshow(true)}
                    className="gap-2 self-stretch py-0.5 my-auto text-base font-medium text-[#447355]  border-b border-solid cursor-pointer border-b-[#447355]"
                >
                    {translates?.Email_adresini_dəyiş}
                </nav>
            </header>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col mt-7 w-full text-base max-md:max-w-full"
            >
                <div className="flex flex-wrap gap-5 items-center w-full text-black text-opacity-90 max-md:max-w-full">
                    <div className="flex flex-col grow shrink self-stretch my-auto min-w-[220px] w-[401px] max-md:max-w-full">
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            placeholder={User?.customer?.name}
                            className="overflow-hidden px-5 py-4 max-w-full bg-white border border-solid border-black border-opacity-10 rounded-[100px] w-[501px]"
                            aria-label="Ad və soyad"
                        />
                        {/* <div className="overflow-hidden px-5 py-4 max-w-full bg-white border border-solid border-black border-opacity-10 rounded-[100px] w-[501px]">
                            {User?.customer?.name}
                        </div> */}
                    </div>
                    <div className="flex flex-col grow shrink self-stretch my-auto whitespace-nowrap min-w-[220px] w-[401px] max-md:max-w-full">
                        {/* <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Email@gmail.com"
                            className="overflow-hidden px-5 py-4 max-w-full bg-white border border-solid border-black border-opacity-10 rounded-[100px] w-[501px]"
                            aria-label="Email"
                        /> */}
                        <div className="overflow-hidden px-5 py-4 max-w-full bg-white border border-solid border-black border-opacity-10 rounded-[100px] w-[501px]">
                            {User?.customer?.email}
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap gap-5 items-center mt-5 w-full max-md:max-w-full">
                    <div className="flex flex-col grow shrink self-stretch my-auto min-w-[220px] text-black text-opacity-90 w-[401px] max-md:max-w-full">
                        <input
                            type="number"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+994 00 000 00 00"
                            className="overflow-hidden px-5 py-4 max-w-full bg-white border border-solid border-black border-opacity-10 rounded-[100px] w-[501px]"
                            aria-label={User?.customer?.phone}
                        />
                        {/* <div className="overflow-hidden px-5 py-4 max-w-full bg-white border border-solid border-black border-opacity-10 rounded-[100px] w-[501px]">
                            {' '}
                            {User?.customer?.phone}
                        </div> */}
                    </div>
                    <div className="flex flex-col grow shrink self-stretch my-auto min-w-[220px] text-black text-opacity-60 w-[401px] max-md:max-w-full">
                        <input
                            type="password"
                            name="currentPassword"
                            value={formData.currentPassword}
                            onChange={handleInputChange}
                            placeholder="Mövcud şifrə"
                            className="overflow-hidden px-5 py-4 max-w-full bg-white border border-solid border-black border-opacity-10 rounded-[100px] w-[501px]"
                            aria-label="Mövcud şifrə"
                        />
                    </div>
                </div>
                <div className="flex flex-wrap gap-5 items-center mt-5 w-full text-black text-opacity-60 max-md:max-w-full">
                    <div className="flex flex-col grow shrink self-stretch my-auto whitespace-nowrap min-w-[220px] w-[401px] max-md:max-w-full">
                        <input
                            type="password"
                            name="newPassword"
                            value={formData.newPassword}
                            onChange={handleInputChange}
                            placeholder="Şifrə"
                            className="overflow-hidden px-5 py-4 max-w-full bg-white border border-solid border-black border-opacity-10 rounded-[100px] w-[501px]"
                            aria-label="Yeni şifrə"
                        />
                    </div>
                    <div className="flex flex-col grow shrink self-stretch my-auto min-w-[220px] w-[401px] max-md:max-w-full">
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            placeholder="Şifrənin təkrarı"
                            className="overflow-hidden px-5 py-4 max-w-full bg-white border border-solid border-black border-opacity-10 rounded-[100px] w-[501px]"
                            aria-label="Şifrənin təkrarı"
                        />
                    </div>
                </div>
                <div className="self-end ">
                    <Green_to_green classNAME=" mt-7">
                        {translates?.Yadda_saxla}
                    </Green_to_green>
                </div>
            </form>
            {/* email changing */}
            <div
                style={!show ? { display: 'none' } : {}}
                className=" fixed w-full h-[100vh] bg-black bg-opacity-60 z-[500000] top-0 left-0 flex justify-center items-center"
            >
                {' '}
                <div className="flex overflow-hidden flex-col pt-3 w-[520px] pb-32 px-10 bg-white rounded-3xl max-md:pb-24 max-md:px-5">
                    <img
                        onClick={() => setshow(false)}
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/55a17f7e6dc11eb063a6a7a77b75003cb2d6658a6b0d94f69a8804cf425b8474?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                        alt=""
                        className="object-contain self-end w-12 aspect-square"
                    />
                    <div className="flex flex-col mt-1 w-full max-w-[440px] max-md:max-w-full">
                        <header className="flex flex-col items-center w-full text-center max-md:max-w-full">
                            <h1 className="text-3xl font-medium text-black">
                                {translates?.Email_adresini_dəyiş}
                            </h1>
                            {!isConfrim ? (
                                <p className="mt-2 text-base text-black text-opacity-80">
                                    {translates?.Yeni_email}
                                </p>
                            ) : (
                                <p className="mt-2 text-base text-black text-opacity-80">
                                    {translates?.Yeni_email_adresinə}
                                </p>
                            )}
                        </header>
                        <form
                            onSubmit={handleSubmit2}
                            className="flex flex-col mt-10 w-full text-base max-md:max-w-full"
                        >
                            <div className="flex flex-col w-full whitespace-nowrap bg-white text-black text-opacity-60 max-md:max-w-full">
                                <label htmlFor="emailInput" className="sr-only">
                                    {isConfrim ? 'Email' : 'Kodu daxil et'}
                                </label>
                                <input
                                    id="emailInput"
                                    type={isConfrim ? 'text' : 'email'}
                                    value={isConfrim ? Code : Email}
                                    onChange={(e) => {
                                        isConfrim
                                            ? setCode(e.target.value)
                                            : setEmail(e.target.value);
                                    }}
                                    placeholder={
                                        !isConfrim ? 'Email' : 'Kodu daxil et'
                                    }
                                    className="overflow-hidden px-5 py-4 w-full bg-white border border-solid border-black border-opacity-10 rounded-[100px] max-md:max-w-full"
                                    aria-label="emailInput"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="gap-2.5 self-stretch px-7 py-3.5 mt-7 w-full font-medium text-white bg-green-400 rounded-[100px] max-md:px-5 max-md:max-w-full"
                            >
                                {isConfrim ? 'testiq ele' : 'Kod göndər'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Settings;
