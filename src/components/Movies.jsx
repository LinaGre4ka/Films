import { Movie } from './Movie';

function Movies(props) {
    const { movies = [] } = props;

    return (
        <div className="movies">
            {movies.length ? (
                movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
            ) : (
                <div class="found">
                    <h4>Not found :(</h4>
                </div>
            )}
        </div>
    );
}
export { Movies };