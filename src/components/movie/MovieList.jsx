import { MovieUl } from '../../styled/movieStyle';
import MovieItem from './MovieItem';

const MovieList = ({ data, onPopUp }) => {
    return (
        <>
            <MovieUl>
                {data.map((item) => (
                    <MovieItem key={item.id} item={item} onPopUp={onPopUp} />
                ))}
            </MovieUl>
        </>
    );
};

export default MovieList;
