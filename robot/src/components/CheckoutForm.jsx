import React, { use, useEffect, useState } from 'react';
import KreditPOpUP from './KreditPopUp';
import { useRecoilState } from 'recoil';
import { deliveryTypeState } from './recoil/Atom';

const PersonalInfo = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [user, setUser] = useState(null);
    useEffect(() => {
        const userStr = localStorage.getItem('user-info');
        const user = JSON.parse(userStr);
        setUser(user?.customer);
    }, []);
    return (
        <section className="flex overflow-hidden flex-col justify-center p-10 w-full rounded-3xl bg-stone-100 max-md:px-5 max-md:max-w-full">
            <h2 className="text-sm text-black text-opacity-60 max-md:max-w-full">
                Şəxsi məlumatlarım
            </h2>
            <div className="flex flex-col mt-6 w-full text-base text-black max-md:max-w-full">
                <p className="overflow-hidden px-5 py-4 w-full bg-white border border-solid border-black border-opacity-10 rounded-[100px] max-md:max-w-full">
                    {user?.name}
                </p>
                <div className="flex flex-wrap gap-5 items-center mt-5 max-md:max-w-full">
                    <p className="overflow-hidden self-stretch px-5 py-4 my-auto whitespace-nowrap bg-white border border-solid border-black border-opacity-10 min-w-[240px] rounded-[100px] lg:w-[341px] w-full">
                        {user?.email}
                    </p>
                    <p className="overflow-hidden self-stretch px-5 py-4 my-auto bg-white border border-solid border-black border-opacity-10 min-w-[240px] rounded-[100px] lg:w-[341px] w-full">
                        {user?.phone}
                    </p>
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
    const [DeliveryTypeState, setDeliveryTypeState] =
        useRecoilState(deliveryTypeState);
    console.log('DeliveryTypeState', DeliveryTypeState);

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
                        isSelected={DeliveryTypeState.delivery}
                        onChange={() =>
                            setDeliveryTypeState({
                                ...DeliveryTypeState,
                                delivery: true,
                            })
                        }
                    />
                    <DeliveryOption
                        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/837b11af13b9d62572b8fcef96de03cfcb6f6486ce8994e43c8d7b1469ae3915?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                        label="Mağazadan təhvil al"
                        isSelected={!DeliveryTypeState.delivery}
                        onChange={() =>
                            setDeliveryTypeState({
                                ...DeliveryTypeState,
                                delivery: false,
                            })
                        }
                    />
                </div>
                <hr className="mt-7 w-full border border-solid border-black border-opacity-10 min-h-[1px] max-md:max-w-full" />
                {DeliveryTypeState.delivery ? (
                    <div className="flex flex-col mt-7 w-full max-md:max-w-full">
                        <div className="flex overflow-hidden flex-wrap gap-5 justify-between px-5 py-4 max-w-full text-black bg-white border border-solid border-black border-opacity-10 rounded-[200px] w-[702px]">
                            <label htmlFor="citySelect" className="sr-only">
                                Şəhər seç
                            </label>
                            <select
                                onChange={(e) => {
                                    setDeliveryTypeState({
                                        ...DeliveryTypeState,
                                        city: e.target.value,
                                    });
                                }}
                                id="citySelect"
                                className="flex-grow bg-transparent"
                            >
                                <option>Şəhər 1</option>
                                <option>Şəhər 2</option>
                                <option>Şəhər 3</option>
                                <option>Şəhər 4</option>
                            </select>
                            {/* <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/028a3883e2ce7564dbebc7bea5b2c51768435ba7d4c59b5275c5769b6f088a8f?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                            alt=""
                            className="object-contain shrink-0 w-6 aspect-square"
                        /> */}
                        </div>
                        <input
                            onChange={(e) => {
                                setDeliveryTypeState({
                                    ...DeliveryTypeState,
                                    address: e.target.value,
                                });
                            }}
                            type="text"
                            className="overflow-hidden px-5 py-4 mt-5 max-w-full bg-white border border-solid border-black border-opacity-10 rounded-[200px] text-black text-opacity-60 w-[702px]"
                            placeholder="Çatdırılacaq ünvan"
                            aria-label="Çatdırılacaq ünvan"
                        />
                        <textarea
                            onChange={(e) => {
                                setDeliveryTypeState({
                                    ...DeliveryTypeState,
                                    message: e.target.value,
                                });
                            }}
                            placeholder="Əlavə məlumat"
                            className="overflow-hidden px-5 py-4 mt-5 max-w-full bg-white border border-solid border-black border-opacity-10 rounded-[20px] text-black text-opacity-60 w-[702px] h-[155px]"
                        ></textarea>
                    </div>
                ) : (
                    <div className="mt-[28px]">
                        <div className="flex overflow-hidden flex-wrap gap-5 justify-between px-5 py-4 max-w-full text-black bg-white border border-solid border-black border-opacity-10 rounded-[200px] w-[702px]">
                            <label htmlFor="citySelect" className="sr-only">
                                Şəhər seç
                            </label>
                            <select
                                onChange={(e) => {
                                    setDeliveryTypeState({
                                        ...DeliveryTypeState,
                                        shop: e.target.value,
                                    });
                                }}
                                id="citySelect"
                                className="flex-grow bg-transparent"
                            >
                                <option>mağaza 1</option>
                                <option>mağaza 2</option>
                                <option>mağaza 3</option>
                                <option>mağaza 4</option>
                            </select>
                        </div>

                        <textarea
                            onChange={(e) => {
                                setDeliveryTypeState({
                                    ...DeliveryTypeState,
                                    message: e.target.value,
                                });
                            }}
                            placeholder="Əlavə məlumat"
                            className="overflow-hidden px-5 py-4 mt-5 max-w-full bg-white border border-solid border-black border-opacity-10 rounded-[20px] text-black text-opacity-60 w-[702px] h-[155px]"
                        ></textarea>
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
    const [DeliveryTypeState, setDeliveryTypeState] =
        useRecoilState(deliveryTypeState);
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
                        isSelected={DeliveryTypeState.peymantType === 'cash'}
                        onChange={() =>
                            setDeliveryTypeState({
                                ...DeliveryTypeState,
                                peymantType: 'cash',
                            })
                        }
                    />
                    <PaymentOption
                        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/a32a107c46e265516d4671cf353ef70a561fe879c4b02e34543c7628a8962265?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                        label="Onlayn debet kartla ödəniş"
                        isSelected={DeliveryTypeState.peymantType === 'online'}
                        onChange={() =>
                            setDeliveryTypeState({
                                ...DeliveryTypeState,
                                peymantType: 'online',
                            })
                        }
                    />

                    <PaymentOption
                        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/a32a107c46e265516d4671cf353ef70a561fe879c4b02e34543c7628a8962265?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                        label="Hissə-hissə al"
                        isSelected={DeliveryTypeState.peymantType === 'kredit'}
                        onChange={() =>
                            setDeliveryTypeState({
                                ...DeliveryTypeState,
                                peymantType: 'kredit',
                            })
                        }
                    />
                </div>
            </div>
            <KreditPOpUP show={DeliveryTypeState.peymantType === 'kredit'} />
        </section>
    );
};

const CheckoutForm = () => {
    return (
        <>
            <div className="flex flex-col w-full max-w-[782px] max-md:px-4">
                <PersonalInfo />
                <DeliveryType />
                <PaymentType />
            </div>
        </>
    );
};

export default CheckoutForm;
