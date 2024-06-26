import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieService } from "../api/MovieService";



export const MovieDetail = () => {

    const { id } = useParams();

    const [movie, setMovie] = useState<any>({});

    const fetchMovies = async () => {

        // Convertendo o parâmetro "id" da rota para number. Se não existir, define o id 0
        let movieId: number = id ? parseInt(id) : 0;

        // Obtendo o atributo "data" da resposta da API
        const { data } = await MovieService.getMoviesById(movieId);

        setMovie(data)
    }

    useEffect(() => {
        fetchMovies()
    }, [])

    return (
        <>
            <h1>
                {movie.title}
            </h1>

            <article>
                {movie.overview}
            </article>
        </>
    )

}