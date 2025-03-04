import React, { useState } from 'react';
import Green_to_green from './btns/green_to_green';
import { axiosInstance } from '@/services/Requests';
import toast from 'react-hot-toast';

const ContactInfo = ({ icon, text }) => (
    <div className="flex overflow-hidden flex-col justify-center items-start p-2 w-full bg-white bg-opacity-20 rounded-[100px] max-md:pr-5 max-md:max-w-full">
        <div className="flex gap-3 items-center">
            <img
                loading="lazy"
                src={icon}
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-12 aspect-square"
            />
            <div className="self-stretch my-auto">{text}</div>
        </div>
    </div>
);

const ContactForm = ({ translates }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        category: '',
        note: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        // Handle form submission logic here
        axiosInstance
            .post('/contact', {
                name: formData.name,
                phone: formData.phone,
                category: formData.category,
                message: formData.name,
            })
            .then(() => {
                toast.success('message sucsesfully sent');
                // e.preventDefault();
            })
            .catch((err) => {
                console.log('error', err);
            });
        console.log('formData', formData);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex overflow-hidden flex-col grow justify-center p-7 w-full rounded-3xl bg-white bg-opacity-20 max-md:px-5 max-md:mt-10 max-md:max-w-full"
        >
            <div className="flex flex-col max-md:max-w-full">
                <h2 className="text-xl font-semibold text-center text-white max-md:max-w-full">
                    Formu doldur,biz əlaqə saxlayaq!
                </h2>
                <div className="flex flex-col mt-7 w-full text-base max-md:max-w-full">
                    <div className="flex flex-col w-full text-black text-opacity-60 max-md:max-w-full">
                        <div className="flex flex-col w-full max-md:max-w-full">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder={translates?.Ad_və_soyad}
                                className="overflow-hidden px-5 py-4 w-full bg-white border border-solid border-black border-opacity-10 rounded-[100px] max-md:max-w-full"
                                aria-label="Ad və soyad"
                            />
                        </div>
                        <div className="flex flex-col mt-3 w-full max-md:max-w-full">
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="+994 00 000 00 00"
                                className="overflow-hidden px-5 py-4 w-full bg-white border border-solid border-black border-opacity-10 rounded-[100px] max-md:max-w-full"
                                aria-label="Telefon nömrəsi"
                            />
                        </div>
                        <div className="flex flex-col mt-3 w-full text-black text-opacity-80 max-md:max-w-full">
                            <div className="flex overflow-hidden flex-col justify-center px-5 py-4 w-full bg-white border border-solid border-black border-opacity-10 rounded-[100px] max-md:max-w-full">
                                <div className="flex gap-10 justify-between items-center">
                                    <select
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        className="w-full bg-transparent"
                                        aria-label="Kateqoriya seç"
                                    >
                                        <option value="">
                                            {translates?.Kateqoriya_seç}
                                        </option>
                                        <option value="teklif">
                                            {translates.teklif}
                                        </option>
                                        <option value="sikayyet">
                                            {translates.sikayyet}
                                        </option>
                                        <option value="muraciet">
                                            {translates.muraciet}
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col mt-3 w-full whitespace-nowrap rounded-3xl min-h-[111px] max-md:max-w-full mb-7">
                            <textarea
                                name="note"
                                value={formData.note}
                                onChange={handleChange}
                                placeholder={translates.Qeyd}
                                className="overflow-hidden px-5 pt-4 pb-16 w-full bg-white rounded-3xl border border-solid border-black border-opacity-10 max-md:max-w-full"
                                aria-label="Qeyd"
                            ></textarea>
                        </div>
                    </div>
                    <Green_to_green> {translates.Göndər}</Green_to_green>
                </div>
            </div>
        </form>
    );
};

const contactInfoData = [
    {
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/eef9f805edd3d81ada4958fe0be06f97ede9043a01fe288fb664b53a5a1c00bc?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        text: '+994 00 000 00 00',
    },
    {
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7bb1d6474032a0596128b13f7aaab561855b5a1b3755aa6af63c9735da0b9833?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        text: 'nümunə@gmail.com',
    },
    {
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/aef5f6dff2372a24913f1195495c9b7620e8193998b62f98656c14bbc120360d?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        text: 'Bakı, Yasamal, Əsəd Əhmədov 21 B',
    },
    {
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/93e4f1b2cdf49a6d8d17b9736c18a4b86d8385495d234e7857b9fc1bbc0d3c95?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        text: '09:00-22:00',
    },
];

function ContactSection({ contact_items, translates }) {
    console.log('contact_items', contact_items);

    return (
        <div
            className="self-center p-16 mt-16 w-full  max-md:px-5 max-md:mt-10 max-md:max-w-full relative rounded-[20px] overflow-hidden"
            style={{
                backgroundImage:
                    'url(https://s3-alpha-sig.figma.com/img/f3c4/90e5/105bd7dc5d16bbba71a345098fa37961?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UwsYYem7FgljHn-srMgMNxbCE3O7NqM5fma2EJc0WDajeBO-Ea-8sWysF41ikgW0cBhmqxQRCDS8beC0W38MrWORAyI9AENMDMGoAlhdv7mLlrXVX5fYGz-SD478gFjF8w9xLH7P0iYVntoSOPuz0iunrI~ujxvFuj-0PbXuEqg~NpT9hE2kZI5eA4se5VtXjCfuBetNlmA6eNI9fWNfqBYcCW~eBj~aVeP5zhv6z7n72XAvESCKVhUKPJauGxHgJYhk1inNut6sVima8zlZtvfD7Vt8BjlcM0gCMNp971V~MReERRjWqinhs6VCveWrafKuJA8Ye7ojwE7y1zdm5Q__)',
                backgroundSize: 'cover', // This makes the image cover the entire div
                backgroundPosition: 'center', // Centers the image
                backgroundRepeat: 'no-repeat', // Prevents the image from repeating
                width: '100%', // Sets the width to fill the parent container
                height: '100%', // Sets the height to fill the parent container
            }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="flex lg:gap-[207px] gap-5 max-md:flex-col relative z-20">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col text-white max-md:mt-10 max-md:max-w-full">
                        <h1 className="text-4xl font-semibold max-md:max-w-full">
                            {translates?.Bizimlə_əlaqə}
                        </h1>
                        <div className="flex flex-col mt-7 w-full text-base max-md:max-w-full gap-3">
                            {contact_items?.map((info, index) => (
                                <ContactInfo
                                    key={index}
                                    icon={info.icon}
                                    text={info.value}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <ContactForm translates={translates} />
                </div>
            </div>
        </div>
    );
}

export default ContactSection;
