import "./filter.css";
import React, { Component } from "react";
import Loading from "react-loading-animation";
import api from "../../services/Api";

class Filter extends Component {
  state = {
    year: undefined,
    genre: "any",
    queryDone: false,
    movies: [],
    loading: false,
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const state = this.state;
    const params = {
      year: state.year,
      genre: state.genre === "any" ? undefined : state.genre,
    };

    try {
      this.setState({ loading: true });
      const result = await api.get("/movie", { params });

      this.setState({ movies: result.data, queryDone: true, loading: false });
    } catch (error) {
      console.error(error);
      this.setState({ movies: [], queryDone: true, loading: false });
    }
  };

  onChangeYear = (event) => {
    this.setState({ year: event.target.value });
  };

  onChangeGenre = (event) => {
    this.setState({ genre: event.target.value });
  };

  renderMoviesList = (movies) => {
    if (movies.length > 0) {
      return (
        <ol>
          {movies.map((movie) => (
            <li key={movie.id} className="MovieListItem">
              {movie.title}
            </li>
          ))}
        </ol>
      );
    } else {
      return <h3>No movies found!</h3>;
    }
  };

  render() {
    const { movies, queryDone, loading } = this.state;

    return (
      <div>
        <h1>Filter Movies</h1>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="year"
            id="year"
            onChange={this.onChangeYear}
          />

          <select name="genre" onChange={this.onChangeGenre}>
            <option value="any" defaultValue>
              any
            </option>
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="Animation">Animation</option>
            <option value="Children">Children's</option>
            <option value="Comedy">Comedy</option>
            <option value="Crime">Crime</option>
            <option value="Documentary">Documentary</option>
            <option value="Drama">Drama</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Film-Noir">Film-Noir</option>
            <option value="Horror">Horror</option>
            <option value="Musical">Musical</option>
            <option value="Mystery">Mystery</option>
            <option value="Romance">Romance</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Thriller">Thriller</option>
            <option value="War">War</option>
            <option value="Western">Western</option>
          </select>

          <input type="submit" id="submitFilter" value="filter" />
        </form>

        {loading && <Loading />}
        {queryDone && this.renderMoviesList(movies)}
      </div>
    );
  }
}

export default Filter;
