import React, { useState } from "react";
import styled from "styled-components";
export default function (props) {
  const { setSearchTerm, searchTerm } = props;

  const StyledSearchBar = styled.input`
width: 30%;
height: 5vh;
margin: 1rem 0;
font-family: font-family: 'Montserrat', san-serif;
color: white;
background-color: black;
border: 0.1rem solid blue;
&:hover{
    background: rgba(0, 0, 0, 0.7);
    color: white;
}
`;

  return (
    <div>
      <StyledSearchBar
        type="text"
        placeholder="Enter the word you want to search"
        onChange={(event) => setSearchTerm(event.target.value)}
        value={searchTerm}
        autoFocus
      />
    </div>
  );
}
