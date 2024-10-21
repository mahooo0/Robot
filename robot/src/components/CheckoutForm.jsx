import React, { useState } from 'react';

const PersonalInfo = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    return (
        <section className="flex overflow-hidden flex-col justify-center p-10 w-full rounded-3xl bg-stone-100 max-md:px-5 max-md:max-w-full">
            <h2 className="text-sm text-black text-opacity-60 max-md:max-w-full">
                Şəxsi məlumatlarım
            </h2>
            <div className="flex flex-col mt-6 w-full text-base text-black max-md:max-w-full">
                <input
                    placeholder="İlahə Nəzərova"
                    type="text"
                    className="overflow-hidden px-5 py-4 w-full bg-white border border-solid border-black border-opacity-10 rounded-[100px] max-md:max-w-full"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    aria-label="Full Name"
                />
                <div className="flex flex-wrap gap-5 items-center mt-5 max-md:max-w-full">
                    <input
                        placeholder="Email@gmail.com"
                        type="email"
                        className="overflow-hidden  self-stretch px-5 py-4 my-auto whitespace-nowrap bg-white border border-solid border-black border-opacity-10 min-w-[240px] rounded-[100px] lg:w-[341px] w-full"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        aria-label="Email Address"
                    />
                    <input
                        placeholder="+994 00 000 00 00"
                        type="tel"
                        className="overflow-hidden self-stretch px-5 py-4 my-auto bg-white border border-solid border-black border-opacity-10 min-w-[240px] rounded-[100px] lg:w-[341px] w-full"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        aria-label="Phone Number"
                    />
                </div>
            </div>
        </section>
    );
};

const DeliveryOption = ({ icon, label, isSelected, onChange }) => (
    <div
        className={`flex gap-3 items-center self-stretch px-10 py-4 my-auto bg-white ${
            isSelected ? 'border border-green-400 border-solid' : ''
        } min-w-[220px] rounded-[100px] max-md:px-5 cursor-pointer`}
        onClick={onChange}
        role="radio"
        aria-checked={isSelected}
    >
        <div className="flex gap-3 items-center self-stretch my-auto">
            <img
                loading="lazy"
                src={icon}
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-7 rounded aspect-square"
            />
            <div className="self-stretch my-auto text-nowrap">{label}</div>
        </div>
        {isSelected ? (
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/efab8bb9d20b97af2166d224dec6a239f8950cb783d5b70707dda018c0c99ce3?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
        ) : (
            <div className="flex shrink-0 self-stretch my-auto w-5 h-5 border border-solid border-black border-opacity-20 rounded-[100px]" />
        )}
    </div>
);

const DeliveryType = () => {
    const [selectedDelivery, setSelectedDelivery] = useState('address');

    return (
        <section className="flex overflow-hidden flex-col p-10 mt-5 w-full rounded-3xl bg-stone-100 max-md:px-5 max-md:max-w-full">
            <h2 className="self-start text-sm text-black text-opacity-60">
                Çatdırılma növü
            </h2>
            <div className="flex flex-col mt-7 w-full text-base max-md:max-w-full">
                <div
                    className="flex flex-wrap gap-5 items-center self-start text-black max-md:max-w-full"
                    role="radiogroup"
                    aria-labelledby="delivery-type-heading"
                >
                    <DeliveryOption
                        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/069c849c202edd381dc01dab436eb0f059276eec2ac290a4d4063c34df9d8be5?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                        label="Ünvana çatdırılma"
                        isSelected={selectedDelivery === 'address'}
                        onChange={() => setSelectedDelivery('address')}
                    />
                    <DeliveryOption
                        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/837b11af13b9d62572b8fcef96de03cfcb6f6486ce8994e43c8d7b1469ae3915?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                        label="Mağazadan təhvil al"
                        isSelected={selectedDelivery === 'pickup'}
                        onChange={() => setSelectedDelivery('pickup')}
                    />
                </div>
                <hr className="mt-7 w-full border border-solid border-black border-opacity-10 min-h-[1px] max-md:max-w-full" />
                {selectedDelivery === 'address' ? (
                    <div className="flex flex-col mt-7 w-full max-md:max-w-full">
                        <div className="flex overflow-hidden flex-wrap gap-5 justify-between px-5 py-4 max-w-full text-black bg-white border border-solid border-black border-opacity-10 rounded-[200px] w-[702px]">
                            <label htmlFor="citySelect" className="sr-only">
                                Şəhər seç
                            </label>
                            <select
                                id="citySelect"
                                className="flex-grow bg-transparent"
                            >
                                <option>Şəhər seç</option>
                            </select>
                            {/* <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/028a3883e2ce7564dbebc7bea5b2c51768435ba7d4c59b5275c5769b6f088a8f?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                            alt=""
                            className="object-contain shrink-0 w-6 aspect-square"
                        /> */}
                        </div>
                        <input
                            type="text"
                            className="overflow-hidden px-5 py-4 mt-5 max-w-full bg-white border border-solid border-black border-opacity-10 rounded-[200px] text-black text-opacity-60 w-[702px]"
                            placeholder="Çatdırılacaq ünvan"
                            aria-label="Çatdırılacaq ünvan"
                        />
                    </div>
                ) : (
                    <div className="mt-[28px]">
                        <div className="flex overflow-hidden flex-wrap gap-5 justify-between px-5 py-4 max-w-full text-black bg-white border border-solid border-black border-opacity-10 rounded-[200px] w-[702px]">
                            {/* <label htmlFor="citySelect" className="sr-only">
                                Şəhər seç
                            </label>
                            <select
                                id="citySelect"
                                className="flex-grow bg-transparent"
                            >
                                <option>Şəhər seç</option>
                            </select> */}
                            Bakı şəhər, Yasamal rayon, Ə.Əhmədov 81A
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

const PaymentOption = ({ icon, label, isSelected, onChange }) => (
    <div
        className={`flex gap-3 items-center self-stretch px-10 py-4 my-auto bg-white ${
            isSelected ? 'border border-green-400 border-solid' : ''
        } min-w-[240px] rounded-[100px] max-md:px-5 cursor-pointer`}
        onClick={onChange}
        role="radio"
        aria-checked={isSelected}
    >
        <div className="flex gap-3 items-center self-stretch my-auto">
            <img
                loading="lazy"
                src={icon}
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-7 aspect-square"
            />
            <div className="self-stretch my-auto">{label}</div>
        </div>
        {isSelected ? (
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e3783f704fc9b6afbd25a9191f71b225ebec7ad2fdc2ed86fa432387a9f2332?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
        ) : (
            <div className="flex shrink-0 self-stretch my-auto w-5 h-5 border border-solid border-black border-opacity-20 rounded-[100px]" />
        )}
    </div>
);

const PaymentType = () => {
    const [selectedPayment, setSelectedPayment] = useState('online');

    return (
        <section className="flex overflow-hidden flex-col justify-center items-start p-10 mt-5 w-full rounded-3xl bg-stone-100 max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col w-full max-w-screen-sm max-md:max-w-full">
                <h2 className="text-sm text-black text-opacity-60 max-md:max-w-full">
                    Ödəniş növü
                </h2>
                <div
                    className="flex flex-wrap gap-5 items-center mt-6 w-full text-base text-black max-md:max-w-full"
                    role="radiogroup"
                    aria-labelledby="payment-type-heading"
                >
                    <PaymentOption
                        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/91bb95cf028fab2ddf525bb950de33e5f3f7af2e0e956710a76b71059f55e0df?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                        label="Nağd ödəniş"
                        isSelected={selectedPayment === 'cash'}
                        onChange={() => setSelectedPayment('cash')}
                    />
                    <PaymentOption
                        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/a32a107c46e265516d4671cf353ef70a561fe879c4b02e34543c7628a8962265?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                        label="Onlayn debet kartla ödəniş"
                        isSelected={selectedPayment === 'online'}
                        onChange={() => setSelectedPayment('online')}
                    />
                </div>
            </div>
        </section>
    );
};

const CheckoutForm = () => {
    return (
        <form className="flex flex-col w-full max-w-[782px] max-md:px-4">
            <PersonalInfo />
            <DeliveryType />
            <PaymentType />
        </form>
    );
};

export default CheckoutForm;
