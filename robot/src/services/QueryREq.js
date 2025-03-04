import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from './Requests';
import { useRouter } from 'next/router';

// Axios Instance

export default function GETRequest(api, querykey, dependencies, params) {
    const router = useRouter();
    const { lang = 'az' } = router.query;

    const { data, isLoading, isError } = useQuery({
        queryKey: [querykey, ...dependencies, params],
        queryFn: async () => {
            try {
                const userStr = localStorage.getItem('user-info');

                const response = await axiosInstance.get(api, {
                    headers: {
                        'Accept-Language': lang,
                        Authorization: userStr
                            ? `Bearer ${JSON.parse(userStr).token}`
                            : '',
                    },
                    params: params,
                });

                return response.data;
            } catch (error) {
                console.log(error, `querykey: ${querykey}`);
                throw error;
            }
        },
        staleTime: 1000 * 60 * 60,
    });

    return { data, isLoading, isError };
}
