import "./rank.css";
import React, { Component } from "react";
import Loading from "react-loading-animation";
import api from "../../services/Api";

class Rank extends Component {
  state = {
    range: 1,
    moviesRank: [],
    loading: false,
    queryDone: false,
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { range } = this.state;

    try {
      this.setState({ loading: true });
      const result = await api.get(`/rating/${range}`);

      this.setState({
        moviesRank: result.data,
        queryDone: true,
        loading: false,
      });
    } catch (error) {
      console.error(error);
      this.setState({ moviesRank: [], queryDone: true, loading: false });
    }
  };

  onChageMovieRange = (event) => {
    this.setState({ range: event.target.value });
  };

  renderRankList = (movies) => (
    <ol>
      {movies.map((movie) => (
        <li
          key={movie.id}
          className="MovieListItem"
        >{`rating: ${movie.mean} | ${movie.title}`}</li>
      ))}
    </ol>
  );

  render() {
    const { queryDone, loading, moviesRank } = this.state;

    return (
      <div>
        <h1>Movies rank</h1>

        <form onSubmit={this.handleSubmit}>
          <input
            type="number"
            placeholder="rank"
            id="rank"
            onChange={this.onChageMovieRange}
            min={1}
            required
          />

          <input type="submit" id="submitRank" value="rank" />
        </form>

        {loading && <Loading />}
        {queryDone && this.renderRankList(moviesRank)}
      </div>
    );
  }
}

export default Rank;
