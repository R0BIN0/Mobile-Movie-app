import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { Film, CastingProps } from "../Config/types";

export const useFetch = (url: string, action: string) => {
  const [moviesArr, setmoviesArr] = useState<Film[]>([]);
  const [castingArr, setCastingArr] = useState<CastingProps[]>([]);
  const [movieObj, setMovieObj] = useState<Film>();

  const [loading, setLoading] = useState<boolean>(false);

  const sendResult = (res: AxiosResponse): void => {
    switch (action) {
      case "GET_ARR":
        setmoviesArr(res.data.results);
        break;
      case "GET_OBJ":
        setMovieObj(res.data);
        break;
      case "GET_CASTING_ARR":
        setCastingArr(res.data.cast);
        break;
    }
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => sendResult(res))
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, [url]);

  return { moviesArr, movieObj, castingArr, loading };
};
