import { useRouter } from 'next/router';
import React from 'react';
import Home from '..';

export default function index() {
    const router = useRouter();
    const { lang } = router.query;

    return <Home lang={lang} />;
}
