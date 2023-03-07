import styles from "./App.module.css";

import { useCallback, useEffect, useState } from "react";
import Container from "./components/layout/Container";
import Card from "./components/UI/Card";

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
        <h2>Hi! It's my simple React.js app which using Star Wars API</h2>
        <Card />
      </Container>
    </div>
  );
}

export default App;
