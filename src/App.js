import styles from "./App.module.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Container from "./components/layout/Container";
import MainPage from "./pages/MainPage";
import People from "./pages/People";
import Films from "./pages/Films";

function App() {
  // TODO: Create componets for each route (or one for displaying data)
  const router = createBrowserRouter([
    { path: "/", element: <MainPage /> },
    { path: "/people", element: <People /> },
    { path: "/films", element: <Films /> },
    { path: "/starships", element: <People /> },
    { path: "/vehicles", element: <People /> },
    { path: "/species", element: <People /> },
    { path: "/planets", element: <People /> },
  ]);

  return (
    <div className={styles.app}>
      <Container>
        <RouterProvider router={router} />
      </Container>
    </div>
  );
}

export default App;
