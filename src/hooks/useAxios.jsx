import axios from 'axios';
import { useEffect, useState } from 'react';

export const useAxios = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get(url)
            .then((res) => {
                setData(res.data.results);
                setLoading(true);
                setError(null);
            })
            .catch((error) => {
                setData([]);
                setError('페이지를 찾을 수 없습니다.');
            });
    }, [url]);

    return { data, loading, error, setData };
};
