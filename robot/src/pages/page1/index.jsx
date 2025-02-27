import { ROUTES } from '@/Helpers/Routes';
import BuyersGuide from '@/pages/about';
import Mobile_aplication from '@/pages/about/controll';
import WhyUs from '@/pages/about/whyUs';
import Aksesuares from '@/pages/aksesuares';
import Basket from '@/pages/basked';
import Order from '@/pages/basked/offer';
import Contact from '@/pages/contact';
import Product from '@/pages/products';
import Setting from '@/pages/user';
import Help from '@/pages/user/help';
import Test from '@/pages/user/help';
import Liked from '@/pages/user/liked';
import Login_register from '@/pages/user/login_register';
// import {
//     getAdvantages,
//     getApp_content,
//     getApp_faqs,
//     getApp_hero,
//     getChoices,
//     getContact_items,
//     getInstructions,
//     getMagical_word,
//     getMap,
//     getQuestions,
//     getSupports,
//     getTranslates,
// } from '@/services/Requests';
// import { useRouter } from 'next/router';
// import React from 'react';

// export default function index(props) {
//     const router = useRouter();
//     const { lang, page } = router.query;
//     if (page === ROUTES.aksesuares[lang]) {
//         return <Aksesuares />;
//     }
//     if (page === ROUTES.buyersGuide[lang]) {
//         return <BuyersGuide data={props.data} lang={lang} />;
//     }
//     if (page === ROUTES.mobileApp[lang]) {
//         return <Mobile_aplication data={props.data} lang={lang} />;
//     }
//     if (page === ROUTES.test[lang]) {
//         return <Test data={props.data} lang={lang} />;
//     }
//     if (page === ROUTES.cotact[lang]) {
//         return <Contact data={props.data} lang={lang} />;
//     }
//     if (page === ROUTES.whyUs[lang]) {
//         return <WhyUs data={props.data} lang={lang} />;
//     }
//     if (page === ROUTES.login[lang]) {
//         return <Login_register data={props.data} lang={lang} />;
//     }
//     if (page === ROUTES.product[lang]) {
//         return <Product data={props.data} lang={lang} />;
//     }
//     if (page === ROUTES.settings[lang]) {
//         return <Setting data={props.data} lang={lang} />;
//     }
//     if (page === ROUTES.liked[lang]) {
//         return <Liked data={props.data} lang={lang} />;
//     }
//     if (page === ROUTES.basked[lang]) {
//         return <Basket data={props.data} lang={lang} />;
//     }
//     if (page === ROUTES.order[lang]) {
//         return <Order data={props.data} lang={lang} />;
//     }
//     if (page === ROUTES.help[lang]) {
//         return <Help data={props.data} lang={lang} />;
//     }
//     return (
//         <div>
//             lang:{lang}
//             <br />
//             page:{page}
//         </div>
//     );
// }
// export async function getServerSideProps(context) {
//     const { lang, page } = context.params;
//     if (page === ROUTES.buyersGuide[lang]) {
//         const questions = await getQuestions(lang);
//         const choices = await getChoices(lang);
//         const translates = await getTranslates(lang);
//         return {
//             props: {
//                 data: {
//                     questions,
//                     choices,
//                     translates,
//                 }, // Data will be available in the BuyersGuide component as a
//             },
//         };
//     }
//     if (page === ROUTES.whyUs[lang]) {
//         const choices = await getChoices(lang);
//         const supports = await getSupports(lang);
//         const translates = await getTranslates(lang);
//         const advantages = await getAdvantages(lang);
//         return {
//             props: {
//                 data: {
//                     choices,
//                     translates,
//                     supports,
//                     advantages,
//                 }, // Data will be available in the BuyersGuide component as a
//             },
//         };
//     }
//     if (page === ROUTES.mobileApp[lang]) {
//         const app_hero = await getApp_hero(lang);
//         const app_content = await getApp_content(lang);
//         const translates = await getTranslates(lang);
//         const instructions = await getInstructions(lang);
//         const magical_word = await getMagical_word(lang);
//         const app_faqs = await getApp_faqs(lang);

//         return {
//             props: {
//                 data: {
//                     app_hero,
//                     app_content,
//                     translates,
//                     instructions,
//                     magical_word,
//                     app_faqs,
//                 }, // Data will be available in the BuyersGuide component as a
//             },
//         };
//     }
//     if (page === ROUTES.cotact[lang]) {
//         const translates = await getTranslates(lang);
//         const contact_items = await getContact_items(lang);
//         const map = await getMap(lang);

//         return {
//             props: {
//                 data: {
//                     translates,
//                     contact_items,
//                     map,
//                 }, // Data will be available in the BuyersGuide component as a
//             },
//         };
//     }
//     if (page === ROUTES.help[lang]) {
//         const translates = (await getTranslates(lang)) || null;
//         return {
//             props: {
//                 data: {
//                     translates,
//                 }, // Data will be available in the BuyersGuide component as a
//             },
//         };
//     }

//     // Simulating fetching data (replace with your actual API request)
//     const data = 'aaajajaja'; // Replace this with actual data fetch logic

//     // Log the data to ensure it's returned correctly
//     console.log('Data fetched in getServerSideProps:', data);

//     // Pass data to the page via props
//     return {
//         props: {
//             data, // Data will be available in the BuyersGuide component as a prop
//         },
//     };
// }
import React from 'react';

export default function index() {
    return <div>index</div>;
}
