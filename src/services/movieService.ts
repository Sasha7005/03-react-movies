import axios from "axios";
import type { Movie } from "../types/movie";

interface MovieHttpResponse {
  results: Movie[];
}
const API_KEY = import.meta.env.VITE_API_KEY;

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

const SEARCH_URL = "/search/movie";

async function fetchMovies(query: string): Promise<Movie[]> {
  if (!query) return [];
  const params = {
    query,
    include_adult: false,
    language: "en-US",
  };
  const { data } = await axiosInstance.get<MovieHttpResponse>(SEARCH_URL, {
    params,
  });
  return data.results;
}

export { fetchMovies };
