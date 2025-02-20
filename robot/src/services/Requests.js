import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://irobot.avtoicare.az/api',
    headers: { 'Accept-Language': 'en' }, // Default language, can be overridden
});

export function getQuestions(lang) {
    return axiosInstance
        .get('/questions', {
            headers: { 'Accept-Language': lang },
        })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error(
                'There was a problem with the fetch operation:',
                error
            );
        });
}
export function getChoices(lang) {
    return axiosInstance
        .get('/choices', {
            headers: { 'Accept-Language': lang },
        })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error(
                'There was a problem with the fetch operation:',
                error
            );
        });
}
export function getSupports(lang) {
    return axiosInstance
        .get('/supports', {
            headers: { 'Accept-Language': lang },
        })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error(
                'There was a problem with the fetch operation:',
                error
            );
        });
}
export function getTranslates(lang) {
    return axiosInstance
        .get('/translates', {
            headers: { 'Accept-Language': lang },
        })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error(
                'There was a problem with the fetch operation:',
                error
            );
        });
}
export function getAdvantages(lang) {
    return axiosInstance
        .get('/advantages', {
            headers: { 'Accept-Language': lang },
        })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error(
                'There was a problem with the fetch operation:',
                error
            );
        });
}
export function getApp_hero(lang) {
    return axiosInstance
        .get('/app_hero', {
            headers: { 'Accept-Language': lang },
        })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error(
                'There was a problem with the fetch operation:',
                error
            );
        });
}
export function getApp_content(lang) {
    return axiosInstance
        .get('/app_content', {
            headers: { 'Accept-Language': lang },
        })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error(
                'There was a problem with the fetch operation:',
                error
            );
        });
}
export function getInstructions(lang) {
    return axiosInstance
        .get('/instructions', {
            headers: { 'Accept-Language': lang },
        })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error(
                'There was a problem with the fetch operation:',
                error
            );
        });
}
export function getApp_faqs(lang) {
    return axiosInstance
        .get('/app_faqs', {
            headers: { 'Accept-Language': lang },
        })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error(
                'There was a problem with the fetch operation:',
                error
            );
        });
}
export function getMagical_word(lang) {
    return axiosInstance
        .get('/magical_word', {
            headers: { 'Accept-Language': lang },
        })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error(
                'There was a problem with the fetch operation:',
                error
            );
        });
}
export function getContact_items(lang) {
    return axiosInstance
        .get('/contact_items', {
            headers: { 'Accept-Language': lang },
        })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error(
                'There was a problem with the fetch operation:',
                error
            );
        });
}
export function getMap(lang) {
    return axiosInstance
        .get('/map', {
            headers: { 'Accept-Language': lang },
        })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error(
                'There was a problem with the fetch operation:',
                error
            );
        });
}
export function get_Products_By_Param(lang, params) {
    return axiosInstance
        .get(`/products${params ? params : ''}`, {
            headers: { 'Accept-Language': lang },
        })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error(
                'There was a problem with the fetch operation:',
                error
            );
        });
}
export function getProductSinle(lang, slug) {
    return axiosInstance
        .get(`/productSingle/${slug}`, {
            headers: { 'Accept-Language': lang },
        })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error(
                'There was a problem with the fetch operation:',
                error
            );
        });
}

export function getSection(lang, type) {
    return axiosInstance
        .get(`/section?type=${type}`, {
            headers: { 'Accept-Language': lang },
        })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error(
                'There was a problem with the fetch operation:',
                error
            );
        });
}
export function getTypesOfRobots(lang) {
    return axiosInstance
        .get(`/productTypes`, {
            headers: { 'Accept-Language': lang },
        })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error(
                'There was a problem with the fetch operation:',
                error
            );
        });
}
