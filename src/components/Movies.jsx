import { Movie } from './Movie';
import Cat from './cat.jpg';

function Movies(props) {
    const { movies = [] } = props;

    return (
        <div className="movies">
            {movies.length ? (
                movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
            ) : (
                <div class="found">
                    <h4>Not found :(</h4>
                    <img 
                        src={Cat} 
                    />
                </div>
            )}
        </div>
    );
}
export { Movies };