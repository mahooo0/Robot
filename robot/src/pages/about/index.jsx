import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HelpCard from '@/components/HelpCard';
import React, { useState } from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import { getQuestions } from '@/services/Requests';
import { useRecoilState } from 'recoil';
import { languageState } from '@/components/recoil/Atom';
import { ROUTES } from '@/Helpers/Routes';

const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

export default function BuyersGuide({ data, lang }) {
    console.log('data:', data.questions);
    console.log('data:', data.choices);

    // const [language, setlanguage] = useRecoilState(languageState);

    // const {
    //     data: initialQuestions = [],
    //     isLoading: initialQuestionsLoading,
    //     isError,
    // } = useQuery({
    //     queryKey: ['initialQuestions', language],
    //     queryFn: () => getQuestions(language),
    // });
    useEffect(() => {
        AOS.init({
            duration: 600, // animation duration in milliseconds
            easing: 'ease-in-out', // animation easing
            // whether animation should happen only once
            offset: 100,
        });
    }, []);

    const helpData = [
        {
            imageSrc:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/3bcd91055783e850ce350db9e3b1e18a036771ee4dbb602d047b0e9ceee40d68?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            title: 'Testdən keç',
            description:
                'Hansı məhsulun sizin üçün uyğun olduğunu müəyyən etmək üçün məhsul testimizdə bir neçə sadə suala cavab verin. Testdən keçin',
            linkText: 'Testdən keç',
            page: '/user/help',
        },
        {
            imageSrc:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/274fcf70462b6cfce6ed1a77a92ed79c22246f989eba9ebe4321020077cf9d53?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            title: 'Ekspert məsləhəti',
            description:
                'Hansı məhsulun sizin üçün uyğun olduğunu müəyyən etmək üçün məhsul testimizdə bir neçə sadə suala cavab verin. Testdən keçin',
            linkText: 'Bizimlə əlaqə',
            page: '/contact',
        },
        {
            imageSrc:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/79161b1f02d51e9a189b3e58d236194f37f61ff45fdcf797e0654e2adb59b400?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            title: 'Mağazamıza yaxınlaş',
            description:
                'Hansı məhsulun sizin üçün uyğun olduğunu müəyyən etmək üçün məhsul testimizdə bir neçə sadə suala cavab verin. Testdən keçin',
        },
    ];
    const router = useRouter();

    return (
        <div>
            <Header activeIndex={4} whyindex={3} />
            <main className=" overflow-hidden">
                <section className="flex relative flex-col items-center px-20 pt-32 pb-7 w-full min-h-[500px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e0ce25143976452c62e52edd732f9e520ab2fc787ed9afaf9f03a0be7fef783?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                        alt=""
                        className="object-cover absolute inset-0 size-full"
                    />

                    <div className="flex relative flex-col max-w-full w-[722px]">
                        <div className="flex flex-col items-start w-full text-center text-white max-md:max-w-full">
                            <h1 className="text-5xl font-semibold max-md:max-w-full max-md:text-4xl">
                                {data.questions.hero.title}
                            </h1>
                            <p className="mt-3 text-base max-md:max-w-full">
                                {data.questions.hero.description}
                            </p>
                        </div>
                        <div
                            className="flex flex-col items-center self-center mt-12 w-[50px] max-md:mt-10 animate-bounce"
                            onClick={() => scrollToElement('question1')}
                        >
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/428aeee1a17a1210b9014598063ed4ec9d3505180e3fdb2380f827efdeb8bb72?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                alt="Scroll down indicator"
                                className="object-contain w-full aspect-square"
                            />
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d98f485bd8a61ea7c98e81c4a88684bb1e51e00a65e4894e9c0f4e67b12ad67?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                alt=""
                                className="object-contain mt-2.5 aspect-square w-[26px]"
                            />
                        </div>
                    </div>
                </section>
                {/* question1 */}
                {data.questions.questions.map((question) => (
                    <section
                        data-aos="fade-up"
                        className="flex flex-col w-full max-md:max-w-full lg:px-[60px] px-[30px] mt-[100px]"
                        id="question1"
                    >
                        <div className="flex flex-col w-full max-md:max-w-full items-center">
                            <h2 className="text-4xl font-semibold text-center text-black max-w-full">
                                {question.title}
                            </h2>

                            <div
                                className="mt-5 text-base text-black text-opacity-80 max-md:max-w-full max-w-[1320px]"
                                dangerouslySetInnerHTML={{
                                    __html: question?.description,
                                }}
                            ></div>
                        </div>{' '}
                        <div className="flex overflow-hidden flex-col mt-10 w-full rounded-3xl max-md:max-w-full">
                            <img
                                loading="lazy"
                                src={question.images[0]?.image}
                                alt="Illustration of a clean home environment"
                                className="object-cover w-full aspect-[2.82] max-md:max-w-full"
                            />
                        </div>
                    </section>
                ))}
                {/* <section
                    data-aos="fade-up"
                    className="flex flex-col w-full max-md:max-w-full lg:px-[60px] px-[30px] mt-[100px]"
                    id="question1"
                >
                    <div className="flex flex-col w-full max-md:max-w-full items-center">
                        <h2 className="text-4xl font-semibold text-center text-black max-w-full">
                            {data.questions.questions[0]?.title}
                        </h2>

                        <div
                            className="mt-5 text-base text-black text-opacity-80 max-md:max-w-full max-w-[1320px]"
                            dangerouslySetInnerHTML={{
                                __html: data.questions.questions[0]
                                    ?.description,
                            }}
                        ></div>
                    </div>{' '}
                    <div className="flex overflow-hidden flex-col mt-10 w-full rounded-3xl max-md:max-w-full">
                        <img
                            loading="lazy"
                            src={data.questions.questions[0]?.images[0]?.image}
                            alt="Illustration of a clean home environment"
                            className="object-cover w-full aspect-[2.82] max-md:max-w-full"
                        />
                    </div>
                </section>

                <section
                    data-aos="fade-up"
                    className="flex flex-col w-full max-md:max-w-full lg:px-[60px] px-[30px] mt-[100px]"
                >
                    <div className="flex flex-col w-full max-md:max-w-full items-center">
                        <h2 className="text-4xl font-semibold text-center text-black max-w-full">
                            {data.questions.questions[1]?.title}
                        </h2>

                        <div
                            className="mt-5 text-base text-black text-opacity-80 max-md:max-w-full max-w-[1320px]"
                            dangerouslySetInnerHTML={{
                                __html: data.questions.questions[1]
                                    ?.description,
                            }}
                        ></div>
                    </div>
                </section>

                <section
                    data-aos="fade-up"
                    className="flex flex-col w-full max-md:max-w-full lg:px-[60px] px-[30px] mt-[100px]"
                >
                    <div className="flex flex-col w-full max-md:max-w-full items-center">
                        <h2 className="text-4xl font-semibold text-center text-black max-w-full">
                            {data.questions.questions[2]?.title}
                        </h2>

                        <div
                            className="mt-5 text-base text-black text-opacity-80 max-md:max-w-full max-w-[1320px]"
                            dangerouslySetInnerHTML={{
                                __html: data.questions.questions[2]
                                    ?.description,
                            }}
                        ></div>
                    </div>
                    <div className="flex overflow-hidden flex-col mt-10 w-full rounded-3xl max-md:max-w-full relative">
                        <img
                            loading="lazy"
                            src={data.questions.questions[2]?.images[0]?.image}
                            alt="Illustration of a clean home environment"
                            className="object-cover w-full aspect-[2.82] max-md:max-w-full"
                        />

                        <div className="flex flex-row absolute top-0 w-full h-full">
                            <div className="w-1/5 border-white border-[4px] border-i h-full"></div>
                            <div className="w-1/5 border-white border-[4px] border-i h-full"></div>
                            <div className="w-1/5 border-white border-[4px] border-i h-full"></div>
                            <div className="w-1/5 border-white border-[4px] border-i h-full"></div>
                            <div className="w-1/5 border-white border-[4px] border-i h-full"></div>
                        </div>
                    </div>
                </section>
                <section
                    data-aos="fade-up"
                    className="flex flex-col w-full max-md:max-w-full lg:px-[60px] px-[30px] mt-[100px]"
                >
                    <div className="flex flex-col w-full max-md:max-w-full items-center">
                        <h2 className="text-4xl font-semibold text-center text-black max-w-full">
                            {data.questions.questions[3]?.title}
                        </h2>

                        <div
                            className="mt-5 text-base text-black text-opacity-80 max-md:max-w-full max-w-[1320px]"
                            dangerouslySetInnerHTML={{
                                __html: data.questions.questions[3]
                                    ?.description,
                            }}
                        ></div>
                    </div>
                </section>
                <section className="flex flex-col w-full max-md:max-w-full lg:px-[60px] px-[30px] mt-[100px]">
                    <div className="flex flex-col w-full max-md:max-w-full items-center">
                        <h2 className="text-4xl font-semibold text-center text-black max-w-full">
                            <>{data.questions.questions[4]?.title}</>
                        </h2>
                        <div className=" w-full flex justify-center flex-col">
                            <div className="flex lg:flex-row flex-col gap-10 items-center lg:justify-between justify-center w-full max-md:max-w-full mt-[40px]">
                                <div
                                    data-aos="fade-right"
                                    className="flex overflow-hidden flex-col self-stretch my-auto rounded-3xl min-w-[240px] lg:w-[558px] w-full max-md:max-w-full"
                                >
                                    <img
                                        loading="lazy"
                                        src={
                                            data.questions.questions[4]
                                                ?.images[0]?.image
                                        }
                                        alt="Illustrative image related to RFC capabilities"
                                        className="object-contain w-full aspect-[0.89] max-md:max-w-full"
                                    />
                                </div>

                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: data.questions.questions[4]
                                            ?.description,
                                    }}
                                    data-aos="fade-left"
                                    className="self-stretch my-auto text-base text-black text-opacity-80 w-[642px] max-md:max-w-full"
                                ></div>
                            </div>
                            <div className="flex lg:flex-row flex-col-reverse gap-10 items-center lg:justify-between justify-center w-full max-md:max-w-full mt-[40px]">
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: data.questions.questions[5]
                                            ?.description,
                                    }}
                                    data-aos="fade-left"
                                    className="self-stretch my-auto text-base text-black text-opacity-80 w-[642px] max-md:max-w-full"
                                ></div>

                                <div
                                    data-aos="fade-left"
                                    className="flex overflow-hidden flex-col self-stretch my-auto rounded-3xl min-w-[240px] lg:w-[558px] w-full max-md:max-w-full"
                                >
                                    <img
                                        loading="lazy"
                                        src={
                                            data.questions.questions[5]
                                                ?.images[0]?.image
                                        }
                                        alt="Illustrative image related to RFC capabilities"
                                        className="object-contain w-full aspect-[0.89] max-md:max-w-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>{' '}
                </section>
                <section
                    data-aos="fade-up"
                    className="flex flex-col w-full max-md:max-w-full lg:px-[60px] px-[30px] mt-[100px]"
                >
                    <div className="flex flex-col w-full max-md:max-w-full items-center">
                        <h2 className="text-4xl font-semibold text-center text-black max-md:max-w-full">
                            <>{data.questions.questions[6]?.title}</>

                        </h2>
                        <div className="mt-5 text-base text-black text-opacity-80 max-md:max-w-full max-w-[1320px]">
                            <p className="mb-4 ">
                                Təmiz və səliqəlisinizsə, yaxşı bir giriş
                                səviyyəli cihaz dərin təmizləmələr arasında
                                qırıntıları və tozu təmizləyəcək. Ancaq ev
                                heyvanlarınız, ailəniz və ya müntəzəm
                                ziyarətçiləriniz varsa, ev heyvanları və ya
                                mətbəx fəlakətlərini idarə edən dərin təmizləmə
                                və ovma parametrləri olan RFC axtarın. Əgər siz
                                2-si 1-də (yaş və quru təmizləmə robotu)
                                alırsanız, xalçalarınıza və ya kilimlərinizə
                                artıq və çirkli su damcılamayan birini
                                seçdiyinizə əmin olun.
                            </p>
                            <p className="mb-4">
                                Detallara diqqət hər şeydir. Və çox məşğul evlər
                                və ailələr üçün robot işi yerinə yetirmək və ya
                                hər hansı əlavə iş görmək üçün göndərilməmişdən
                                əvvəl təmizləmək məcburiyyətində deyilsiniz.
                                Yaxşı bir RFC xoşbəxtliklə mebel altında sürüşür
                                və bəzən hətta vasvası insanların unutduğu
                                yerlərə gedir. Məsələn, çarpayının altında,
                                otaqların kənarlarında və ya tozlu künclərdə. O,
                                həmçinin təmizlik səyahətinə davam etməzdən
                                əvvəl təsadüfi qarışıqlıqların qarşısını almaq
                                üçün qabaqcıl obyekt aşkarlama texnologiyasına
                                sahib olacaq.
                            </p>
                            <p className="mb-4">
                                Həmçinin dok stansiyaları üçün kifayət qədər yer
                                olduğundan əmin olun. Bəzi modellərdə doldurma,
                                su çənləri və tullantı qutuları üçün geniş yer
                                var. Həmişə istehsalçının və ya satıcının
                                saytında ölçüləri yoxlayın.
                            </p>
                        </div>
                        <div className="flex flex-row gap-[20px] mt-[37px]">
                            <img
                                className="w-1/2 rounded-2xl"
                                src="https://s3-alpha-sig.figma.com/img/f486/18da/eaa5645dd240d91482037d920395d5a8?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UQrDkqPu3mW9TkL~nMqbBwWfydPWv3sgSPd3wP34JigLRIUc9-eb9yEyjYQKm2qhTZBER3ggJx4Ghtdm41b7tP7UCmO-qUIhXHuCwjqWM0qvCGgKAo2rih2ASupp1GBPaP2rI-rQtLN7ZURYD4vzEcC-98DnZuVGo0eHt02kZMUr41QqAlCSWpx8bMQ~4pDxfy1F45tm2AAeDZjhXXHanK7eoH1fontFiQA0LTyaew2vWhEv-yd9d78DVhkBNzer7F1TsOUdjLUW2EYErM13rrNN-6KD1jiyJSMOKubzOvgRjNsug3HVus6sjsfSHe6YCFEjUkgRWqYhuXHnv6LPYA__"
                            />
                            <img
                                className="w-1/2 rounded-2xl"
                                src="https://s3-alpha-sig.figma.com/img/f486/18da/eaa5645dd240d91482037d920395d5a8?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UQrDkqPu3mW9TkL~nMqbBwWfydPWv3sgSPd3wP34JigLRIUc9-eb9yEyjYQKm2qhTZBER3ggJx4Ghtdm41b7tP7UCmO-qUIhXHuCwjqWM0qvCGgKAo2rih2ASupp1GBPaP2rI-rQtLN7ZURYD4vzEcC-98DnZuVGo0eHt02kZMUr41QqAlCSWpx8bMQ~4pDxfy1F45tm2AAeDZjhXXHanK7eoH1fontFiQA0LTyaew2vWhEv-yd9d78DVhkBNzer7F1TsOUdjLUW2EYErM13rrNN-6KD1jiyJSMOKubzOvgRjNsug3HVus6sjsfSHe6YCFEjUkgRWqYhuXHnv6LPYA__"
                            />
                        </div>
                    </div>{' '}
                </section>

                <section
                    data-aos="fade-up"
                    className="flex flex-col w-full max-md:max-w-full lg:px-[60px] px-[30px] mt-[100px]"
                >
                    <div className="flex flex-col w-full max-md:max-w-full items-center">
                        <h2 className="text-4xl font-semibold text-center text-black max-md:max-w-full">
                            7. Evim nə qədər dağınıqdır?
                        </h2>
                        <div className="mt-5 text-base text-black text-opacity-80 max-md:max-w-full max-w-[1320px]">
                            <p className="mb-4 ">
                                Təmiz və səliqəlisinizsə, yaxşı bir giriş
                                səviyyəli cihaz dərin təmizləmələr arasında
                                qırıntıları və tozu təmizləyəcək. Ancaq ev
                                heyvanlarınız, ailəniz və ya müntəzəm
                                ziyarətçiləriniz varsa, ev heyvanları və ya
                                mətbəx fəlakətlərini idarə edən dərin təmizləmə
                                və ovma parametrləri olan RFC axtarın. Əgər siz
                                2-si 1-də (yaş və quru təmizləmə robotu)
                                alırsanız, xalçalarınıza və ya kilimlərinizə
                                artıq və çirkli su damcılamayan birini
                                seçdiyinizə əmin olun.
                            </p>
                            <p className="mb-4">
                                Detallara diqqət hər şeydir. Və çox məşğul evlər
                                və ailələr üçün robot işi yerinə yetirmək və ya
                                hər hansı əlavə iş görmək üçün göndərilməmişdən
                                əvvəl təmizləmək məcburiyyətində deyilsiniz.
                                Yaxşı bir RFC xoşbəxtliklə mebel altında sürüşür
                                və bəzən hətta vasvası insanların unutduğu
                                yerlərə gedir. Məsələn, çarpayının altında,
                                otaqların kənarlarında və ya tozlu künclərdə. O,
                                həmçinin təmizlik səyahətinə davam etməzdən
                                əvvəl təsadüfi qarışıqlıqların qarşısını almaq
                                üçün qabaqcıl obyekt aşkarlama texnologiyasına
                                sahib olacaq.
                            </p>
                            <p className="mb-4">
                                Həmçinin dok stansiyaları üçün kifayət qədər yer
                                olduğundan əmin olun. Bəzi modellərdə doldurma,
                                su çənləri və tullantı qutuları üçün geniş yer
                                var. Həmişə istehsalçının və ya satıcının
                                saytında ölçüləri yoxlayın.
                            </p>
                        </div>
                    </div>{' '}
                </section>
                <section
                    data-aos="fade-up"
                    className="flex flex-col w-full max-md:max-w-full lg:px-[60px] px-[30px] mt-[100px]"
                >
                    <div className="flex flex-col w-full max-md:max-w-full items-center">
                        <h2 className="text-4xl font-semibold text-center text-black max-md:max-w-full">
                            8. Evim nə qədər dağınıqdır?
                        </h2>
                        <div className="mt-5 text-base text-black text-opacity-80 max-md:max-w-full max-w-[1320px]">
                            <p className="mb-4 ">
                                Təmiz və səliqəlisinizsə, yaxşı bir giriş
                                səviyyəli cihaz dərin təmizləmələr arasında
                                qırıntıları və tozu təmizləyəcək. Ancaq ev
                                heyvanlarınız, ailəniz və ya müntəzəm
                                ziyarətçiləriniz varsa, ev heyvanları və ya
                                mətbəx fəlakətlərini idarə edən dərin təmizləmə
                                və ovma parametrləri olan RFC axtarın. Əgər siz
                                2-si 1-də (yaş və quru təmizləmə robotu)
                                alırsanız, xalçalarınıza və ya kilimlərinizə
                                artıq və çirkli su damcılamayan birini
                                seçdiyinizə əmin olun.
                            </p>
                            <p className="mb-4">
                                Detallara diqqət hər şeydir. Və çox məşğul evlər
                                və ailələr üçün robot işi yerinə yetirmək və ya
                                hər hansı əlavə iş görmək üçün göndərilməmişdən
                                əvvəl təmizləmək məcburiyyətində deyilsiniz.
                                Yaxşı bir RFC xoşbəxtliklə mebel altında sürüşür
                                və bəzən hətta vasvası insanların unutduğu
                                yerlərə gedir. Məsələn, çarpayının altında,
                                otaqların kənarlarında və ya tozlu künclərdə. O,
                                həmçinin təmizlik səyahətinə davam etməzdən
                                əvvəl təsadüfi qarışıqlıqların qarşısını almaq
                                üçün qabaqcıl obyekt aşkarlama texnologiyasına
                                sahib olacaq.
                            </p>
                            <p className="mb-4">
                                Həmçinin dok stansiyaları üçün kifayət qədər yer
                                olduğundan əmin olun. Bəzi modellərdə doldurma,
                                su çənləri və tullantı qutuları üçün geniş yer
                                var. Həmişə istehsalçının və ya satıcının
                                saytında ölçüləri yoxlayın.
                            </p>
                        </div>
                        <div className="flex flex-row gap-[20px] mt-[37px]">
                            <img
                                className="w-1/2 rounded-2xl"
                                src="https://s3-alpha-sig.figma.com/img/f486/18da/eaa5645dd240d91482037d920395d5a8?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UQrDkqPu3mW9TkL~nMqbBwWfydPWv3sgSPd3wP34JigLRIUc9-eb9yEyjYQKm2qhTZBER3ggJx4Ghtdm41b7tP7UCmO-qUIhXHuCwjqWM0qvCGgKAo2rih2ASupp1GBPaP2rI-rQtLN7ZURYD4vzEcC-98DnZuVGo0eHt02kZMUr41QqAlCSWpx8bMQ~4pDxfy1F45tm2AAeDZjhXXHanK7eoH1fontFiQA0LTyaew2vWhEv-yd9d78DVhkBNzer7F1TsOUdjLUW2EYErM13rrNN-6KD1jiyJSMOKubzOvgRjNsug3HVus6sjsfSHe6YCFEjUkgRWqYhuXHnv6LPYA__"
                            />
                            <img
                                className="w-1/2 rounded-2xl"
                                src="https://s3-alpha-sig.figma.com/img/f486/18da/eaa5645dd240d91482037d920395d5a8?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UQrDkqPu3mW9TkL~nMqbBwWfydPWv3sgSPd3wP34JigLRIUc9-eb9yEyjYQKm2qhTZBER3ggJx4Ghtdm41b7tP7UCmO-qUIhXHuCwjqWM0qvCGgKAo2rih2ASupp1GBPaP2rI-rQtLN7ZURYD4vzEcC-98DnZuVGo0eHt02kZMUr41QqAlCSWpx8bMQ~4pDxfy1F45tm2AAeDZjhXXHanK7eoH1fontFiQA0LTyaew2vWhEv-yd9d78DVhkBNzer7F1TsOUdjLUW2EYErM13rrNN-6KD1jiyJSMOKubzOvgRjNsug3HVus6sjsfSHe6YCFEjUkgRWqYhuXHnv6LPYA__"
                            />
                        </div>
                    </div>{' '}
                </section>
                <section className="flex flex-col w-full max-md:max-w-full lg:px-[60px] px-[30px] mt-[100px]">
                    <div className="flex flex-col w-full max-md:max-w-full items-center">
                        <h2 className="text-4xl font-semibold text-center text-black max-md:max-w-full">
                            9. Evim nə qədər dağınıqdır?
                        </h2>
                        <div className=" w-full flex justify-center flex-col">
                            <div className="flex flex-wrap gap-10 items-center lg:justify-between justify-center w-full max-md:max-w-full mt-[40px]">
                                <div
                                    data-aos="fade-right"
                                    className="flex overflow-hidden flex-col self-stretch my-auto rounded-3xl min-w-[240px] w-[558px] max-md:max-w-full"
                                >
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/302d2443e4b5a5f04d781e65cd380f0b039b2cb8a763dbae4d3e48b88f74ed1f?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                        alt="Illustrative image related to RFC capabilities"
                                        className="object-contain w-full aspect-[0.89] max-md:max-w-full"
                                    />
                                </div>
                                <p
                                    data-aos="fade-left"
                                    className="self-stretch my-auto text-base text-black text-opacity-80 w-[642px] max-md:max-w-full"
                                >
                                    Let's not beat about the bush. The last
                                    thing you want is an RFC that can't
                                    distinguish between a pile of poop or a pile
                                    of popcorn. Fortunately, some modern RFCs
                                    have on-board cameras that can tell the
                                    difference. It means that the popcorn gets
                                    picked up while the poop stays where it is.
                                    Make sure that you pay attention to the
                                    specific objects that the RFC can avoid.
                                    Some are specifically designed to avoid pet
                                    related objects and, engineered specifically
                                    for homes with pets.
                                </p>
                            </div>
                            <div className="flex flex-wrap-reverse gap-10 items-center lg:justify-between justify-center w-full max-md:max-w-full mt-[40px]">
                                <p
                                    data-aos="fade-right"
                                    className="self-stretch my-auto text-base text-black text-opacity-80 w-[642px] max-md:max-w-full"
                                >
                                    Let's not beat about the bush. The last
                                    thing you want is an RFC that can't
                                    distinguish between a pile of poop or a pile
                                    of popcorn. Fortunately, some modern RFCs
                                    have on-board cameras that can tell the
                                    difference. It means that the popcorn gets
                                    picked up while the poop stays where it is.
                                    Make sure that you pay attention to the
                                    specific objects that the RFC can avoid.
                                    Some are specifically designed to avoid pet
                                    related objects and, engineered specifically
                                    for homes with pets.
                                </p>
                                <div
                                    data-aos="fade-left"
                                    className="flex overflow-hidden flex-col self-stretch my-auto rounded-3xl min-w-[240px] w-[558px] max-md:max-w-full"
                                >
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/302d2443e4b5a5f04d781e65cd380f0b039b2cb8a763dbae4d3e48b88f74ed1f?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                        alt="Illustrative image related to RFC capabilities"
                                        className="object-contain w-full aspect-[0.89] max-md:max-w-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>{' '}
                </section>
                <section
                    data-aos="fade"
                    className="flex flex-col self-stretch mt-24 w-full max-md:mt-10 max-md:max-w-full"
                >
                    <h2 className="text-4xl font-semibold text-center text-black max-md:max-w-full">
                        10. Will it protect my privacy?
                    </h2>
                    <div className="overflow-hidden pl-16 mt-10 w-full bg-slate-200 max-md:pl-5 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col">
                            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                <p className="self-stretch my-auto text-base text-black text-opacity-80 max-md:mt-10 max-md:max-w-full">
                                    As technology evolves so should the
                                    safeguards that protect data and customer
                                    privacy. A trustworthy manufacturer will use
                                    encryption to store and strictly limit
                                    access to data. Apps should be secured by
                                    two factor authentication.
                                    <br />
                                    Other important security measures include
                                    automatic software updates. If you need to
                                    sell your RFC, it should also be easy to
                                    delete personal and domestic data before
                                    passing it over to a new owner. Look for
                                    long-standing manufacturers that have been
                                    verified by respected third party security
                                    organizations and have cyber security
                                    certifications.
                                </p>
                            </div>
                            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                <div className="flex overflow-hidden flex-col grow w-full bg-white max-md:mt-7 max-md:max-w-full">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ba533bad9fa184204c43c168113745adedf0c0e589938a329695a214fabc274?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                        alt="Privacy protection illustration"
                                        className="object-fill w-full aspect-[1.06] max-md:max-w-full"
                                    />
                                </div>{' '}
                            </div>
                        </div>
                    </div>
                </section> */}
                <section className="flex overflow-hidden flex-col justify-center px-20 py-16 w-full bg-[#ECF3EA] max-md:px-5 max-md:max-w-full mt-[100px] mb-[100px]">
                    <div className="flex flex-col w-full max-md:max-w-full">
                        <h2 className="self-start text-4xl font-semibold text-[#132A1B] max-md:max-w-full w-full text-center">
                            {data.translates.Seçim_etməkdə}
                        </h2>
                        <div className="flex flex-wrap gap-10 justify-center items-start mt-12 w-full max-md:mt-10 max-md:max-w-full">
                            {data.choices.map((item, index) => {
                                if (index === 0) {
                                    return (
                                        <HelpCard
                                            key={index}
                                            title={item.title}
                                            description={item.description}
                                            imageSrc={item.icon}
                                            linkText={
                                                data.translates.Testdən_keç
                                            }
                                            page={`/${lang}/${ROUTES.test[lang]}`}
                                        />
                                    );
                                } else if (index === 1) {
                                    return (
                                        <HelpCard
                                            key={index}
                                            title={item.title}
                                            description={item.description}
                                            imageSrc={item.icon}
                                            linkText={
                                                data.translates.Bizimlə_əlaqə
                                            }
                                            page={`/${lang}/${ROUTES.cotact[lang]}`}
                                        />
                                    );
                                }
                                return (
                                    <HelpCard
                                        key={index}
                                        title={item.title}
                                        description={item.description}
                                        imageSrc={item.icon}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
