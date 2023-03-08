import styles from "./App.module.css";

import { useCallback, useEffect, useState } from "react";
import Container from "./components/layout/Container";
import Card from "./components/UI/Card";
import MenuCard from "./components/MenuCard";
import MainPage from "./pages/MainPage";

function App() {
  const [movies, setMovies] = useState({});

  const fetchMoviesHandler = useCallback(async () => {
    try {
      const response = await fetch("https://swapi.py4e.com/api/films/");
      setMovies(await response.json());
    } catch {
      throw new Error();
    }
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  useEffect(() => {
    console.log(movies);
  }, [movies]);

  return (
    <div className={styles.app}>
      <Container>
        <MainPage />
      </Container>
    </div>
  );
}

export default App;
