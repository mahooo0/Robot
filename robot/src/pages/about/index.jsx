import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HelpCard from '@/components/HelpCard';
import React from 'react';

export default function index() {
    const helpData = [
        {
            imageSrc:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/3bcd91055783e850ce350db9e3b1e18a036771ee4dbb602d047b0e9ceee40d68?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            title: 'Testdən keç',
            description:
                'Hansı məhsulun sizin üçün uyğun olduğunu müəyyən etmək üçün məhsul testimizdə bir neçə sadə suala cavab verin. Testdən keçin',
            linkText: 'Testdən keç',
        },
        {
            imageSrc:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/274fcf70462b6cfce6ed1a77a92ed79c22246f989eba9ebe4321020077cf9d53?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            title: 'Ekspert məsləhəti',
            description:
                'Hansı məhsulun sizin üçün uyğun olduğunu müəyyən etmək üçün məhsul testimizdə bir neçə sadə suala cavab verin. Testdən keçin',
            linkText: 'Bizimlə əlaqə',
        },
        {
            imageSrc:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/79161b1f02d51e9a189b3e58d236194f37f61ff45fdcf797e0654e2adb59b400?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            title: 'Mağazamıza yaxınlaş',
            description:
                'Hansı məhsulun sizin üçün uyğun olduğunu müəyyən etmək üçün məhsul testimizdə bir neçə sadə suala cavab verin. Testdən keçin',
        },
    ];
    return (
        <div>
            <Header activeIndex={4} whyindex={3} />
            <main>
                <section className="flex relative flex-col items-center px-20 pt-32 pb-7 w-full min-h-[500px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e0ce25143976452c62e52edd732f9e520ab2fc787ed9afaf9f03a0be7fef783?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                        alt=""
                        className="object-cover absolute inset-0 size-full"
                    />
                    <div className="flex relative flex-col max-w-full w-[722px]">
                        <section className="flex flex-col items-start w-full text-center text-white max-md:max-w-full">
                            <h1 className="text-5xl font-semibold max-md:max-w-full max-md:text-4xl">
                                Robot döşəmə təmizləyicisi alarkən soruşulacaq
                                10 sual
                            </h1>
                            <p className="mt-3 text-base max-md:max-w-full">
                                iRobot OS birbaşa iRobot Home Tətbiqindən idarə
                                edə biləcəyiniz fərdi təmizləmə təcrübəsi
                                yaratmaq üçün qabaqcıl texnologiyanı
                                birləşdirir.
                            </p>
                        </section>
                        <div className="flex flex-col items-center self-center mt-12 w-[50px] max-md:mt-10 animate-bounce">
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
                <section className="flex flex-col w-full max-md:max-w-full lg:px-[60px] px-[30px] mt-[100px]">
                    <div className="flex flex-col w-full max-md:max-w-full items-center">
                        <h2 className="text-4xl font-semibold text-center text-black max-md:max-w-full">
                            1. Evim nə qədər dağınıqdır?
                        </h2>
                        <div className="mt-5 text-base text-black text-opacity-80 max-md:max-w-full max-w-[1320px]">
                            <p className="mb-4 text-center">
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
                    <div className="flex overflow-hidden flex-col mt-10 w-full rounded-3xl max-md:max-w-full">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3175a722c93778033578e95623df6f2b7537ac9f08d8c513130bc5b832fa8275?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                            alt="Illustration of a clean home environment"
                            className="object-contain w-full aspect-[2.82] max-md:max-w-full"
                        />
                    </div>
                </section>
                <section className="flex flex-col w-full max-md:max-w-full lg:px-[60px] px-[30px] mt-[100px]">
                    <div className="flex flex-col w-full max-md:max-w-full items-center">
                        <h2 className="text-4xl font-semibold text-center text-black max-md:max-w-full">
                            2. Evim nə qədər dağınıqdır?
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
                <section className="flex flex-col w-full max-md:max-w-full lg:px-[60px] px-[30px] mt-[100px]">
                    <div className="flex flex-col w-full max-md:max-w-full items-center">
                        <h2 className="text-4xl font-semibold text-center text-black max-md:max-w-full">
                            3. Evim nə qədər dağınıqdır?
                        </h2>
                        <div className="mt-5 text-base text-black text-opacity-80 max-md:max-w-full max-w-[1320px]">
                            <p className="mb-4 text-center">
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
                    <div className="flex overflow-hidden flex-col mt-10 w-full rounded-3xl max-md:max-w-full relative">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3175a722c93778033578e95623df6f2b7537ac9f08d8c513130bc5b832fa8275?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                            alt="Illustration of a clean home environment"
                            className="object-contain w-full aspect-[2.82] max-md:max-w-full"
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
                <section className="flex flex-col w-full max-md:max-w-full lg:px-[60px] px-[30px] mt-[100px]">
                    <div className="flex flex-col w-full max-md:max-w-full items-center">
                        <h2 className="text-4xl font-semibold text-center text-black max-md:max-w-full">
                            4. Evim nə qədər dağınıqdır?
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
                <section className="flex flex-col w-full max-md:max-w-full lg:px-[60px] px-[30px] mt-[100px]">
                    <div className="flex flex-col w-full max-md:max-w-full items-center">
                        <h2 className="text-4xl font-semibold text-center text-black max-md:max-w-full">
                            5. Evim nə qədər dağınıqdır?
                        </h2>
                        <div className=" w-full flex justify-center flex-col">
                            <div className="flex flex-wrap gap-10 items-center lg:justify-between justify-center w-full max-md:max-w-full mt-[40px]">
                                <div className="flex overflow-hidden flex-col self-stretch my-auto rounded-3xl min-w-[240px] w-[558px] max-md:max-w-full">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/302d2443e4b5a5f04d781e65cd380f0b039b2cb8a763dbae4d3e48b88f74ed1f?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                        alt="Illustrative image related to RFC capabilities"
                                        className="object-contain w-full aspect-[0.89] max-md:max-w-full"
                                    />
                                </div>
                                <p className="self-stretch my-auto text-base text-black text-opacity-80 w-[642px] max-md:max-w-full">
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
                                <p className="self-stretch my-auto text-base text-black text-opacity-80 w-[642px] max-md:max-w-full">
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
                                <div className="flex overflow-hidden flex-col self-stretch my-auto rounded-3xl min-w-[240px] w-[558px] max-md:max-w-full">
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
                <section className="flex flex-col w-full max-md:max-w-full lg:px-[60px] px-[30px] mt-[100px]">
                    <div className="flex flex-col w-full max-md:max-w-full items-center">
                        <h2 className="text-4xl font-semibold text-center text-black max-md:max-w-full">
                            6. Evim nə qədər dağınıqdır?
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
                <section className="flex flex-col w-full max-md:max-w-full lg:px-[60px] px-[30px] mt-[100px]">
                    <div className="flex flex-col w-full max-md:max-w-full items-center">
                        <h2 className="text-4xl font-semibold text-center text-black max-md:max-w-full">
                            6. Evim nə qədər dağınıqdır?
                        </h2>
                        <div className="flex flex-row gap-[20px] mt-[37px]">
                            <img
                                className="w-1/2 rounded-2xl"
                                src="https://s3-alpha-sig.figma.com/img/91c3/b742/7936ddae771fb2aa60e0f50cc354c692?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fi-QveevG79lpVmvfMSjVzFsQrNAPwli~h3Qcfva5bMUOfVBFIE5pPguVun4hB4VdfyZkysbEu6yqISZp1tCGm-yVe9ZCEH6zNvp6Rh071TSMAiY5VHwuSncMmUtIz0ljMkiST0Cu2eXemhIeYVcrxReQuq-wgag8pHoaYcus8GXC24MUOZEE3g2MGfanek1zpaiylj1-tHYLkRqfqgXS-mZc~sHXXVoqQhccxOFJx0tlB-YaeLvQtGk0GCsJNeChtGFRuJlNqoon8sSbNbcZ6ZmbqX0qOpLOzXcZqtG1N-OVFws383Tw0ToiOzO~-X5Gy0uuBuJfHJA5yHF1I8jyg__"
                            />
                            <img
                                className="w-1/2 rounded-2xl"
                                src="https://s3-alpha-sig.figma.com/img/91c3/b742/7936ddae771fb2aa60e0f50cc354c692?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fi-QveevG79lpVmvfMSjVzFsQrNAPwli~h3Qcfva5bMUOfVBFIE5pPguVun4hB4VdfyZkysbEu6yqISZp1tCGm-yVe9ZCEH6zNvp6Rh071TSMAiY5VHwuSncMmUtIz0ljMkiST0Cu2eXemhIeYVcrxReQuq-wgag8pHoaYcus8GXC24MUOZEE3g2MGfanek1zpaiylj1-tHYLkRqfqgXS-mZc~sHXXVoqQhccxOFJx0tlB-YaeLvQtGk0GCsJNeChtGFRuJlNqoon8sSbNbcZ6ZmbqX0qOpLOzXcZqtG1N-OVFws383Tw0ToiOzO~-X5Gy0uuBuJfHJA5yHF1I8jyg__"
                            />
                        </div>
                    </div>{' '}
                </section>
                <section className="flex flex-col w-full max-md:max-w-full lg:px-[60px] px-[30px] mt-[100px]">
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
                <section className="flex flex-col w-full max-md:max-w-full lg:px-[60px] px-[30px] mt-[100px]">
                    <div className="flex flex-col w-full max-md:max-w-full items-center">
                        <h2 className="text-4xl font-semibold text-center text-black max-md:max-w-full">
                            8. Evim nə qədər dağınıqdır?
                        </h2>
                        <div className="flex flex-row gap-[20px] mt-[37px]">
                            <img
                                className="w-1/2 rounded-2xl"
                                src="https://s3-alpha-sig.figma.com/img/91c3/b742/7936ddae771fb2aa60e0f50cc354c692?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fi-QveevG79lpVmvfMSjVzFsQrNAPwli~h3Qcfva5bMUOfVBFIE5pPguVun4hB4VdfyZkysbEu6yqISZp1tCGm-yVe9ZCEH6zNvp6Rh071TSMAiY5VHwuSncMmUtIz0ljMkiST0Cu2eXemhIeYVcrxReQuq-wgag8pHoaYcus8GXC24MUOZEE3g2MGfanek1zpaiylj1-tHYLkRqfqgXS-mZc~sHXXVoqQhccxOFJx0tlB-YaeLvQtGk0GCsJNeChtGFRuJlNqoon8sSbNbcZ6ZmbqX0qOpLOzXcZqtG1N-OVFws383Tw0ToiOzO~-X5Gy0uuBuJfHJA5yHF1I8jyg__"
                            />
                            <img
                                className="w-1/2 rounded-2xl"
                                src="https://s3-alpha-sig.figma.com/img/91c3/b742/7936ddae771fb2aa60e0f50cc354c692?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fi-QveevG79lpVmvfMSjVzFsQrNAPwli~h3Qcfva5bMUOfVBFIE5pPguVun4hB4VdfyZkysbEu6yqISZp1tCGm-yVe9ZCEH6zNvp6Rh071TSMAiY5VHwuSncMmUtIz0ljMkiST0Cu2eXemhIeYVcrxReQuq-wgag8pHoaYcus8GXC24MUOZEE3g2MGfanek1zpaiylj1-tHYLkRqfqgXS-mZc~sHXXVoqQhccxOFJx0tlB-YaeLvQtGk0GCsJNeChtGFRuJlNqoon8sSbNbcZ6ZmbqX0qOpLOzXcZqtG1N-OVFws383Tw0ToiOzO~-X5Gy0uuBuJfHJA5yHF1I8jyg__"
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
                                <div className="flex overflow-hidden flex-col self-stretch my-auto rounded-3xl min-w-[240px] w-[558px] max-md:max-w-full">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/302d2443e4b5a5f04d781e65cd380f0b039b2cb8a763dbae4d3e48b88f74ed1f?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                        alt="Illustrative image related to RFC capabilities"
                                        className="object-contain w-full aspect-[0.89] max-md:max-w-full"
                                    />
                                </div>
                                <p className="self-stretch my-auto text-base text-black text-opacity-80 w-[642px] max-md:max-w-full">
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
                                <p className="self-stretch my-auto text-base text-black text-opacity-80 w-[642px] max-md:max-w-full">
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
                                <div className="flex overflow-hidden flex-col self-stretch my-auto rounded-3xl min-w-[240px] w-[558px] max-md:max-w-full">
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
                <section className="flex flex-col self-stretch mt-24 w-full max-md:mt-10 max-md:max-w-full">
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
                </section>
                <section className="flex overflow-hidden flex-col justify-center px-20 py-16 w-full bg-[#ECF3EA] max-md:px-5 max-md:max-w-full mt-[100px] mb-[100px]">
                    <div className="flex flex-col w-full max-md:max-w-full">
                        <h2 className="self-start text-4xl font-semibold text-center text-[#132A1B] max-md:max-w-full">
                            Seçim etməkdə kömək edək!
                        </h2>
                        <div className="flex flex-wrap gap-10 justify-center items-start mt-12 w-full max-md:mt-10 max-md:max-w-full">
                            {helpData.map((item, index) => (
                                <HelpCard key={index} {...item} />
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
