import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';


const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <span className="saved-movie">{movie.title}</span>
        ))}
        <StyledLink to="/">
          <div className="home-button">Home</div>
        </StyledLink>
      </div>
    );
  }
}
