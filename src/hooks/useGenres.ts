import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

interface Genre {
    id: number
    name: string
}

interface FetchGenresResponse {
    count: number;
    results: Genre[]
}

const useGenres = () => {
    const [genres, setGenre] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      const controller = new AbortController();
  
      setLoading(true);
      apiClient
        .get<FetchGenresResponse>("/genres", { signal: controller.signal })
        .then((res) => {
          setGenre(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });
      //.finally(setLoading(false)); But it doesn't work with strict mode one
  
      return () => controller.abort();
    }, []);
  
    return { genres, error, isLoading };
  };

export default useGenres;