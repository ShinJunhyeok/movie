import { useEffect, useState } from 'react';
import { useAxios } from '../../hooks/useAxios';
import MovieList from './MovieList';
import MovieSearch from './MovieSearch';
import { MovieContainer } from '../../styled/movieStyle';
import MovieInfo from './MovieInfo';
import { API_KEY } from '../../assets/api/apikey';

const Movie = () => {
    const [search, setSearch] = useState('a');
    const [isShow, setIsShow] = useState('false');
    const [pop, setPop] = useState({});
    const { data, loading, error, setData } = useAxios(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&page1&language=ko-KR&query=${search}`
    );

    const [sort, setSort] = useState('');

    const onSearch = (text) => {
        setSearch(text);
    };

    const onPopUp = (id) => {
        setIsShow(true);
        setPop(data.find((item) => item.id === id));
    };

    const onClose = () => {
        setIsShow(false);
    };

    useEffect(() => {
        if (sort) {
            const sortedData = [...data];
            if (sort === 'name') {
                sortedData.sort((a, b) => a.title.localeCompare(b.title));
            } else if (sort === 'date') {
                sortedData.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
            } else if (sort === 'vote') {
                sortedData.sort((a, b) => b.vote_average - a.vote_average);
            } else if (sort === 'popular') {
                sortedData.sort((a, b) => b.popularity - a.popularity);
            }
            setData(sortedData);
        }
    }, [sort, data, setData]);

    const changeInput = (e) => {
        const { value } = e.target;
        setSort(value);
    };
    return (
        <MovieContainer>
            <h2>영화 리스트</h2>
            <MovieSearch onSearch={onSearch} />
            <p className="select">
                <select name="select" onChange={changeInput} defaultValue="">
                    <option disabled value="">
                        정렬
                    </option>
                    <option value="name">이름순</option>
                    <option value="date">개봉일순</option>
                    <option value="vote">평점순</option>
                    <option value="popular">인기순</option>
                </select>
            </p>
            {isShow === true ? <MovieInfo pop={pop} onClose={onClose} isShow={isShow} /> : null}
            <MovieList data={data} onPopUp={onPopUp} />
            {!loading && data.length === 0 && <h2>Loading...</h2>}
            <h2>{error ? error : null}</h2>
        </MovieContainer>
    );
};

export default Movie;
