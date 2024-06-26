import { MovieItem } from "./MovieItem";



export const MoviesList = ({movies}: {movies: any[]}) => (
    <section>
        <ul>
            {
                movies.map(
                    (movie) =>
                        <li key={movie.id}>
                            {/* Destructuring params, tornando o parâmetro
                             do componente menos previsível */}
                            <MovieItem {...movie}/>
                        </li>
                )
            }
        </ul>
    </section>
)