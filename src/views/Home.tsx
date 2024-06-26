import { useEffect, useState } from "react";
import { MovieService } from "../api/MovieService";
import { MoviesList } from "../components/MoviesList";
import { MoviesConteiner } from "../styles/MoviesConteiner";



export const Home = () => {

    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {

        // Obtendo o atributo "data" da resposta da API
        const { data}  = await MovieService.getMovies();

        setMovies(data.results)
    }

    useEffect(() => {
        fetchMovies()
    }, [])

    return (
        <MoviesConteiner>
            <MoviesList movies={movies}/>
        </MoviesConteiner>
    )

}