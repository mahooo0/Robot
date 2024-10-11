import React, { useState } from 'react';

const Settings = () => {
    const [show, setshow] = useState(false);
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <main className="flex overflow-hidden flex-col px-10 pt-10 mx-auto w-full bg-[#F1F5F0] pb-[494px] max-md:px-5 max-md:pb-24 max-md:mt-3 max-md:max-w-full">
            <header className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full">
                <h1 className="text-3xl font-semibold text-center text-green-950">
                    Tənzimləmələr
                </h1>
                <nav
                    onClick={() => setshow(true)}
                    className="gap-2 self-stretch py-0.5 my-auto text-base font-medium text-[#447355] border-b border-solid cursor-pointer border-b-[#447355]"
                >
                    Email adresini dəyiş
                </nav>
            </header>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col mt-7 w-full text-base max-md:max-w-full"
            >
                <div className="flex flex-wrap gap-5 items-center w-full text-black text-opacity-90 max-md:max-w-full">
                    <div className="flex flex-col grow shrink self-stretch my-auto min-w-[240px] w-[401px] max-md:max-w-full">
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            placeholder="Ad və soyad"
                            className="overflow-hidden px-5 py-4 max-w-full bg-white border border-solid border-black border-opacity-10 rounded-[100px] w-[501px]"
                            aria-label="Ad və soyad"
                        />
                    </div>
                    <div className="flex flex-col grow shrink self-stretch my-auto whitespace-nowrap min-w-[240px] w-[401px] max-md:max-w-full">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Email@gmail.com"
                            className="overflow-hidden px-5 py-4 max-w-full bg-white border border-solid border-black border-opacity-10 rounded-[100px] w-[501px]"
                            aria-label="Email"
                        />
                    </div>
                </div>
                <div className="flex flex-wrap gap-5 items-center mt-5 w-full max-md:max-w-full">
                    <div className="flex flex-col grow shrink self-stretch my-auto min-w-[240px] text-black text-opacity-90 w-[401px] max-md:max-w-full">
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+994 00 000 00 00"
                            className="overflow-hidden px-5 py-4 max-w-full bg-white border border-solid border-black border-opacity-10 rounded-[100px] w-[501px]"
                            aria-label="Telefon nömrəsi"
                        />
                    </div>
                    <div className="flex flex-col grow shrink self-stretch my-auto min-w-[240px] text-black text-opacity-60 w-[401px] max-md:max-w-full">
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
                    <div className="flex flex-col grow shrink self-stretch my-auto whitespace-nowrap min-w-[240px] w-[401px] max-md:max-w-full">
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
                    <div className="flex flex-col grow shrink self-stretch my-auto min-w-[240px] w-[401px] max-md:max-w-full">
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
                <button
                    type="submit"
                    className="gap-2.5 self-end px-7 py-3.5 mt-7 text-base font-medium text-white bg-green-400 rounded-[100px] max-md:px-5"
                >
                    Yadda saxla
                </button>
            </form>
            <div
                style={!show ? { display: 'none' } : {}}
                className=" absolute w-full h-[100vh] bg-black bg-opacity-60 z-[500000] top-0 left-0 flex justify-center items-center"
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
                                Email adresini dəyiş!
                            </h1>
                            <p className="mt-2 text-base text-black text-opacity-80">
                                Yeni email adresini qeyd et.
                            </p>
                        </header>
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col mt-10 w-full text-base max-md:max-w-full"
                        >
                            <div className="flex flex-col w-full whitespace-nowrap bg-white text-black text-opacity-60 max-md:max-w-full">
                                <label htmlFor="emailInput" className="sr-only">
                                    Email
                                </label>
                                <input
                                    id="emailInput"
                                    type="email"
                                    // value={email}
                                    // onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email"
                                    className="overflow-hidden px-5 py-4 w-full bg-white border border-solid border-black border-opacity-10 rounded-[100px] max-md:max-w-full"
                                    aria-label="Email"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="gap-2.5 self-stretch px-7 py-3.5 mt-7 w-full font-medium text-white bg-green-400 rounded-[100px] max-md:px-5 max-md:max-w-full"
                            >
                                Kod göndər
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Settings;
