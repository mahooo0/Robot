import WhyUs from '@/pages/about/whyUs';

export const ROUTES = {
    aksesuares: {
        az: 'aksesuarlar',
        en: 'aksesuares',
        ru: 'aksesuari',
    },
    buyersGuide: {
        az: 'alicilar-uçun-ruhban',
        en: 'buyers-guide',
        ru: 'rukovodstvo-dlya-pokupateley',
    },
    test: {
        az: 'testdenkec',
        en: 'test',
        ru: 'proyti-test',
    },
    cotact: {
        az: 'elaqe',
        en: 'cotact',
        ru: 'cotactirovat-s-nami',
    },
    whyUs: {
        az: 'niye-biz',
        en: 'why-us',
        ru: 'pocemu-imenno-mi',
    },
    mobileApp: {
        az: 'mobile-tetbiq',
        en: 'mobile-app',
        ru: 'mobilnoe-prilojeniya',
    },
    login: {
        az: 'daxilol',
        en: 'login',
        ru: 'voyti',
    },
    product: {
        az: 'products',
        en: 'products',
        ru: 'products',
    },
    liked: {
        az: 'beyenilmis-mehsular',
        en: 'liked-products',
        ru: 'ponravivsiyesya-producti',
    },
    settings: {
        az: 'istifadeci-tenzimlemeler',
        en: 'user-settings',
        ru: 'nastroyka-polzavatelya',
    },
    basked: {
        az: 'istifadeci-sebet',
        en: 'user-basked',
        ru: 'nastroyka-korzina',
    },
    order: {
        az: 'sifarish',
        en: 'order',
        ru: 'zakaz',
    },
    help: {
        az: 'secmeye-komek',
        en: 'help-to-choose',
        ru: 'pomosh-v-viborax',
    },
};

export function updateLangAndRoute(url, newLang) {
    // Split the URL into parts and remove leading/trailing slashes
    const urlParts = url.split('/').filter(Boolean);

    console.log('urlParts', urlParts);

    // Add language if it's missing or update if necessary
    if (['az', 'en', 'ru'].includes(urlParts[0])) {
        urlParts[0] = newLang; // Update the language part
    } else {
        urlParts.unshift(newLang); // Add the language part if missing
    }

    // Translate the route if it matches any route key in ROUTES
    if (urlParts.length > 1) {
        // const currentRoute = urlParts[1];
        // console.log('currentRoute', currentRoute);
        // // Check if the current route matches any key in ROUTES
        // const routeKey = Object.keys(ROUTES).find((key) =>
        //     Object.values(ROUTES[key]).includes(currentRoute)
        // );
        // if (routeKey) {
        //     urlParts[1] = ROUTES[routeKey][newLang]; // Translate the route to the new language
        // }
    }

    // If there's an ID segment, it should remain untouched
    if (urlParts.length > 2) {
        // const potentialId = urlParts[2];
        // console.log('potentialId', potentialId);
        const slug = localStorage.getItem('slug');
        if (!slug) {
            return `/${urlParts.join('/')}`;
        }
        const newSlug = JSON.parse(slug);
        console.log('newSlug', newSlug[newLang]);
        urlParts[2] = newSlug[newLang];
        // if (!isNaN(Number(potentialId)) || /^[a-f0-9]{24}$/.test(potentialId)) {
        //     console.log('Detected ID:', potentialId);
        //     // IDs are retained automatically since we're not modifying urlParts[2]
        // }
    }

    return `/${urlParts.join('/')}`;
}

// Example usage:
// const url = '/az/haqımızda';
// const newLang: 'az' | 'en' | 'ru' = 'ru';

// console.log(updateLangAndRoute(url, newLang)); // Output: "/ru/пронас"
