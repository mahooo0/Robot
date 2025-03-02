import { atom } from 'recoil';

export const MenuState = atom({
    key: 'menustatekey',
    default: {
        prodctbar: false,
        aksesuaresbar: false,
        offerbar: false,
        whybar: false,
    },
});
export const languageState = atom({
    key: 'languagestatekey',
    default: 'az',
});
export const deliveryTypeState = atom({
    key: 'deliveryTypeState',
    default: {
        delivery: true,
        city: '',
        shop: '',
        address: '',
        message: '',
        peymantType: 'cash',
    },
});
export const ProductFilters = atom({
    key: 'ProductFilters',
    default: {
        minPrice: '',
        maxPrice: '',
        Area: '',
        category: '',
        series: '',
        type: '',
        title: '',
        sort: '',
        is_new: false,
        is_paket: false,
        is_discounted: false,
        is_bestseller: false,
    },
});
export const CompareProducts = atom({
    key: 'CompareProducts',
    default: [],
});
export const AcsesuaresFilters = atom({
    key: 'AcsesuaresFilters',
    default: {
        minPrice: '',
        maxPrice: '',
        catgory: '',
        series: '',
        type: '',
        title: '',
    },
});
// export const MenuStateTwo = atom({
//     key: 'menustatekeytwo',
//     default: [],
// });
