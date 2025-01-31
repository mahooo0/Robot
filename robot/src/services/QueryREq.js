import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
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

                const response = await toast.promise(
                    axiosInstance.get(api, {
                        headers: {
                            'Accept-Language': lang,
                            Authorization: userStr
                                ? `Bearer ${JSON.parse(userStr).token}`
                                : '',
                        },
                        params: params,
                    }),
                    {
                        loading: 'Loading data...',
                        success: <b>Data loaded successfully!</b>,
                        error: <b>Failed to load data.</b>,
                    }
                );

                return response.data;
            } catch (error) {
                console.log(error, `querykey: ${querykey}`);
                throw error;
            }
        },
        staleTime: 1000 * 60 * 60, // 1 hour
    });

    return { data, isLoading, isError };
}

// API Helper Methods
