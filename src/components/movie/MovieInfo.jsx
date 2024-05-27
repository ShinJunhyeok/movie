import { CloseIcon, MovieInfoContainer } from '../../styled/movieStyle';

const MovieInfo = ({ pop, onClose }) => {
    const { title, original_title, vote_average, release_date, poster_path, overview } = pop;
    return (
        <>
            <MovieInfoContainer>
                <article>
                    <div className="poster">
                        <h2>{title}</h2>
                        <h3>{original_title}</h3>
                        <img
                            src={`https://image.tmdb.org/t/p/original${poster_path}`}
                            alt={title}
                        />
                    </div>
                    <div className="desc">
                        <p>개봉일 : {release_date}</p>
                        <p>평점 : {vote_average.toFixed(1)}</p>
                        <p>개요</p>
                        <p>{overview}</p>
                    </div>
                    <CloseIcon onClick={onClose} />
                </article>
            </MovieInfoContainer>
        </>
    );
};

export default MovieInfo;
