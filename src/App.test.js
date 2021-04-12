import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import store from "./store";

import { AppRoute } from "./pages";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { MovieCard, Navbar, PosterModal } from "./components";
import NotFoundPoster from "./assets/img/notfound.jpg";

describe("Movie Card Component Testing", () => {
  it("test movie card component with name props", () => {
    render(
      <Router>
        <Switch>
          <MovieCard title="Batman Begins" />
        </Switch>
      </Router>
    );
    const titleText = screen.getByTestId("title");
    expect(titleText).toHaveTextContent(/Batman Begins/i);
  });
  it("test movie card component without name props", () => {
    render(
      <Router>
        <Switch>
          <MovieCard />
        </Switch>
      </Router>
    );
    const titleText = screen.getByTestId("title");
    expect(titleText).not.toHaveTextContent();
  });

  it("test movie card component with year props", () => {
    render(
      <Router>
        <Switch>
          <MovieCard year="2005" />
        </Switch>
      </Router>
    );
    const yearText = screen.getByTestId("year");
    expect(yearText).toHaveTextContent(/2005/i);
  });

  it("test movie card component without year props", () => {
    render(
      <Router>
        <Switch>
          <MovieCard />
        </Switch>
      </Router>
    );
    const yearText = screen.getByTestId("year");
    expect(yearText).not.toHaveTextContent();
  });

  it("test movie card component poster props and check poster modal", () => {
    render(
      <Router>
        <Switch>
          <MovieCard
            name="Batman Begins"
            poster="https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
          />
        </Switch>
      </Router>
    );
    const posterLink = screen.getByTestId("poster");
    expect(posterLink).toHaveAttribute(
      "src",
      "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    );
    fireEvent.click(posterLink);
    const posterModalTitle = screen.getByTestId("poster-title");
    expect(posterModalTitle).toBeInTheDocument();
  });

  it("test movie card component without poster props should be show not found image", () => {
    render(
      <Router>
        <Switch>
          <MovieCard />
        </Switch>
      </Router>
    );
    const posterLink = screen.getByTestId("poster");
    expect(posterLink).toHaveAttribute("src", NotFoundPoster);
  });

  it("test movie card should have button component if there is movieId props", () => {
    render(
      <Router>
        <Switch>
          <MovieCard
            title="Batman Begins"
            year="2005"
            columnSize={4}
            movieId="tt0372784"
            poster="https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
          />
        </Switch>
      </Router>
    );
    const buttonElement = screen.getByTestId("btn-detail");
    expect(buttonElement).toBeInTheDocument();
  });

  it("test movie card should'nt have button component if there is no movieId props", () => {
    render(
      <Router>
        <Switch>
          <MovieCard />
        </Switch>
      </Router>
    );
    const buttonElement = screen.queryByTestId("btn-detail");
    expect(buttonElement).toBeNull();
  });
});

describe("Navbar Component", () => {
  it("shoudle have Movie Bytes text", () => {
    render(
      <Provider store={store}>
        <AppRoute>
          <Navbar />
        </AppRoute>
      </Provider>
    );

    const brandText = screen.getByText(/Movie Bytes/);
    expect(brandText).toBeInTheDocument();
  });

  it("shoudle have Home Menu", () => {
    render(
      <Provider store={store}>
        <AppRoute>
          <Navbar />
        </AppRoute>
      </Provider>
    );

    const brandText = screen.getByText(/Home/);
    expect(brandText).toBeInTheDocument();
  });

  it("should have search form component", () => {
    render(
      <Provider store={store}>
        <AppRoute>
          <Navbar />
        </AppRoute>
      </Provider>
    );

    const searchForm = screen.getByTestId("search-form");
    expect(searchForm).toBeInTheDocument();
  });
});

describe("Poster Modal Test", () => {
  it("should be show poster modal", () => {
    render(
      <Router>
        <Switch>
          <PosterModal show={true} />
        </Switch>
      </Router>
    );

    const showModal = screen.queryByTestId("show-modal");
    expect(showModal).toBeInTheDocument();
  });

  it("should'nt be show poster modal", () => {
    render(
      <Router>
        <Switch>
          <PosterModal show={true} />
        </Switch>
      </Router>
    );

    const showModal = screen.queryByTestId("show-modal");
    expect(showModal).not.toBeNull();
  });

  it("test poster modal show with movie title & poster props", () => {
    render(
      <Router>
        <Switch>
          <PosterModal
            movie={{
              title: "Batman Begins",
              poster:
                "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
            }}
            show={true}
          />
        </Switch>
      </Router>
    );

    const modalTitle = screen.getByTestId("poster-title");
    const modalPoster = screen.getByTestId("poster-image");
    expect(modalTitle).toHaveTextContent(/Batman Begins/i);
    expect(modalPoster).toHaveAttribute(
      "src",
      "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    );
  });

  it("test poster modal show without movie & title poster props", () => {
    render(
      <Router>
        <Switch>
          <PosterModal show={true} />
        </Switch>
      </Router>
    );

    const modalTitle = screen.getByTestId("poster-title");
    const modalPoster = screen.getByTestId("poster-image");
    expect(modalTitle).not.toHaveTextContent();
    expect(modalPoster).toHaveAttribute("src", NotFoundPoster);
  });
});
