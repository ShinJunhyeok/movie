import { MovieLi } from '../../styled/movieStyle';

const MovieItem = ({ item, onPopUp }) => {
    const { id, title, poster_path, vote_average, release_date } = item;
    return (
        <>
            <MovieLi onClick={() => onPopUp(id)}>
                <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={title} />
                <h3>{title}</h3>
                <p>개봉일 : {release_date}</p>
                <p>평점 : {vote_average.toFixed(1)}</p>
            </MovieLi>
        </>
    );
};

export default MovieItem;
