import React from "react";
import styled from "styled-components";

export default function Karakter(props) {
  const { data, expansion, setExpansion, searchTerm } = props;

  const StyledAllCharactersContainer = styled.div`
display: flex;
flex-wrap: wrap;
width: 90%;
margin: 2rem; auto;
justify-content: center;
column-gap: 2rem;
row-gap: 2rem;
`;
  const StyledCharDiv = styled.div`
    background: rgba(0, 0, 0, 0.7);
    width: 25%;
    border: 0.3rem soldid #00fab;
    border-radius: 15px;
    color: white;
  `;
  const StyledSeeMoreButton = styled.button`
    background-color: white;
    font-size: 1.1rem;
    border: none;
    margin-bottom: 0.5rem;
    &:hover {
      background-color: #00fab;
      color: black;
      border: none;
    }
  `;

  return (
    <StyledAllCharactersContainer>
      {data
        .filter((character) => {
          if (searchTerm === "") {
            return character;
          } else if (
            character.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return character;
          } else {
            console.log("No result found");
          }
        })
        .map((character) => (
          <StyledCharDiv key={character.name}>
            <h3>{character.name}</h3>
            {expansion === character.name && (
              <div>
                <p>Height: {character.height}</p>
                <p>Mass: {character.mass}</p>
                <p>Hair Color: {character.hair_color}</p>
                <p>Skin Color: {character.skin_color}</p>
                <p>Year of Birth: {character.birth_year}</p>
                <p>Gender: {character.gender}</p>
              </div>
            )}
            <StyledSeeMoreButton onClick={() => setExpansion(character.name)}>
              {expansion === false ? "+" : "-"}
            </StyledSeeMoreButton>
          </StyledCharDiv>
        ))}
    </StyledAllCharactersContainer>
  );
}
