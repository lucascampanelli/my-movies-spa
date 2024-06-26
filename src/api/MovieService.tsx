import axios from "axios";
import { API_KEY } from "./ApiAuth";

const BASE_URL = 'https://api.themoviedb.org/3/';

const withBaseUrl = (path: string) => `${BASE_URL}${path}?api_key=${API_KEY}`;

export class MovieService {

    static getMovies() {
        return axios(withBaseUrl('movie/popular'));
    }

    static getMoviesById(id: number) {
        return axios(withBaseUrl(`movie/${id}`))
    }

}