import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage";
import movies from "./data";
import RootLayout from "./layouts/RootLayout";
import { Button } from "antd";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage movies={movies} />} />
          <Route
            path="/movie/:id"
            element={<MovieDetailPage movies={movies} />}
          />
          <Route
            path="*"
            element={<Button style={{ marginTop: 300 }}>Error Page</Button>}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
