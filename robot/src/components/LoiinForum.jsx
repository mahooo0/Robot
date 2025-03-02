import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import { axiosInstance } from '@/services/Requests';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import { ROUTES } from '@/Helpers/Routes';
import GETRequest from '@/services/QueryREq';

function LoginForum({ translates }) {
    const [isLogin, setIsLogin] = useState(true);
    const [Loading, setLoading] = useState(false);
    const router = useRouter();
    const { lang = 'az' } = router.query;

    // const { data: translates } = GETRequest(`/translates`, 'translates', [
    //     lang,
    // ]);
    const toggleView = (view) => {
        setIsLogin(view === 'login');
    };

    // Validation schema using Yup
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string()
            .min(6, 'Password too short')
            .required('Required'),
        ...(isLogin
            ? {}
            : {
                  name: Yup.string().required('Required'),
                  phone: Yup.string()
                      .matches(/^\d{10}$/, 'Invalid phone number')
                      .required('Required'),
              }),
    });

    const handleSubmit = async (values) => {
        console.log('Form values:', values);
        setLoading(true);
        if (isLogin) {
            try {
                setLoading(true); // Set loading to true before making the request

                // Use toast.promise to handle the loading, success, and error states
                try {
                    const response = await axiosInstance.post('/login', {
                        password: values.password,
                        email: values.email,
                    });
                    localStorage.setItem(
                        'user-info',
                        JSON.stringify(response.data)
                    );
                    toast.success('Successfully logged in!');
                    router.push(`/${lang}/user`);
                } catch (error) {
                    toast.error(error.response.data.message);
                }

                // If the request is successful, update the state
                setLoading(false);
            } catch (error) {
                // Handle any additional error logic here (if needed)
                setLoading(false);
            }
            console.log('login');
        } else {
            try {
                setLoading(true); // Set loading to true before making the request

                // Use toast.promise to handle the loading, success, and error states
                try {
                    const response = await axiosInstance.post('/register', {
                        name: values.name,
                        phone: values.phone,
                        email: values.email,
                        password: values.password,
                    });
                    toast.success('Successfully registered!');
                } catch (error) {
                    toast.error(error.response.data.error);
                }

                // If the request is successful, update the state
                setLoading(false);
                setIsLogin(true);
                // Reset form values on successful registration
                values.email = '';
                values.password = '';
                values.name = '';
                values.phone = '';
            } catch (error) {
                // Handle any additional error logic here (if needed)
                setLoading(false);
            }
            console.log('register');
        }
        // Add form submission logic here
    };

    return (
        <main className="flex flex-col max-w-[440px] mx-auto p-4">
            <header className="flex flex-col items-center self-center max-w-full text-center w-[360px]">
                <h1 className="text-4xl font-semibold text-green-950">
                    {translates?.Xoş_gəldiniz}!
                </h1>
                <p className="mt-3 text-base text-black text-opacity-80">
                    {translates?.login_desc}
                </p>
            </header>

            <section className="flex flex-col mt-16 w-full">
                <div className="flex gap-0.5 items-center self-center p-2 text-base font-medium bg-white rounded-[100px]">
                    <button
                        onClick={() => toggleView('login')}
                        className={`gap-2.5 self-stretch px-7 py-2.5 my-auto rounded-[100px] ${
                            isLogin
                                ? 'text-white bg-green-950'
                                : 'text-gray-600'
                        }`}
                    >
                        {translates?.Daxil_ol}
                    </button>
                    <button
                        onClick={() => toggleView('register')}
                        className={`gap-2.5 self-stretch px-7 py-2.5 my-auto rounded-[100px] ${
                            !isLogin
                                ? 'text-white bg-green-950'
                                : 'text-gray-600'
                        }`}
                    >
                        {translates?.Qeydiyyat}
                    </button>
                </div>

                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                        name: '',
                        phone: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form className="flex flex-col mt-10 w-full">
                            {!isLogin && (
                                <>
                                    <div className="flex flex-col w-full">
                                        <Field
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            className="overflow-hidden px-5 py-4 w-full text-base whitespace-nowrap bg-white border border-solid border-black border-opacity-10 rounded-[100px] text-black text-opacity-60"
                                        />
                                        <ErrorMessage
                                            name="name"
                                            component="div"
                                            className="text-red-500"
                                        />

                                        <div className="overflow-hidden px-5 py-4 mt-3 w-full bg-white border border-solid border-black border-opacity-10 rounded-[100px]">
                                            <span className="text-black">
                                                +994{' '}
                                            </span>
                                            <Field
                                                type="tel"
                                                name="phone"
                                                placeholder="00 000 00 00"
                                                className="text-black outline-none"
                                            />
                                        </div>
                                        <ErrorMessage
                                            name="phone"
                                            component="div"
                                            className="text-red-500"
                                        />
                                    </div>
                                </>
                            )}

                            <Field
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="overflow-hidden px-5 py-4 w-full text-base whitespace-nowrap bg-white border border-solid border-black border-opacity-10 rounded-[100px] text-black text-opacity-60 mt-3"
                            />
                            <ErrorMessage
                                name="email"
                                component="div"
                                className="text-red-500"
                            />

                            <div className="flex flex-col mt-3 w-full">
                                <div className="flex overflow-hidden gap-5 justify-between px-5 py-4 w-full text-base whitespace-nowrap bg-white border border-solid border-black border-opacity-10 rounded-[100px] text-black text-opacity-60">
                                    <Field
                                        type="password"
                                        name="password"
                                        placeholder="password"
                                        className="w-full bg-transparent border-none outline-none"
                                    />
                                </div>
                                <ErrorMessage
                                    name="password"
                                    component="div"
                                    className="text-red-500"
                                />

                                {isLogin ? (
                                    <Link href={`/${lang}/user/password`}>
                                        <p className="mt-3 text-sm text-right text-sky-700">
                                            {translates?.Şifrəmi_unutdum}
                                        </p>
                                    </Link>
                                ) : (
                                    <div className="flex gap-3 items-center self-start mt-5 text-sm text-sky-700">
                                        <Field
                                            type="checkbox"
                                            name="terms"
                                            className="w-5 h-5 text-sky-700 border-sky-700 rounded focus:ring-sky-700"
                                        />
                                        <p className="self-stretch my-auto">
                                            {
                                                translates?.Mən_Qaydalar_və_Şərtləri_oxudum_və_razıyam
                                            }
                                        </p>
                                    </div>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="gap-2.5 self-stretch px-7 py-3.5 mt-7 w-full text-base font-medium text-white bg-green-400 rounded-[100px]"
                            >
                                {isLogin
                                    ? translates?.Daxil_ol
                                    : translates?.Qeydiyyat}
                            </button>
                        </Form>
                    )}
                </Formik>
            </section>
        </main>
    );
}

export default LoginForum;
