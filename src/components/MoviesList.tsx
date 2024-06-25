import { MovieItem } from "./MovieItem";

export const MoviesList = ({movies}: {movies: any[]}) => (
    <section>
        <ul>
            {
                movies.map((movie) => <MovieItem title={movie.title}/>)
            }
        </ul>
    </section>
)