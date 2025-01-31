import { useRouter } from 'next/router';
import React from 'react';

export default function index() {
    const router = useRouter();
    const { lang, page, slug } = router.query;
    return (
        <div>
            lang:{lang}
            <br />
            page:{page}
            <br />
            slug:{slug}
        </div>
    );
}
