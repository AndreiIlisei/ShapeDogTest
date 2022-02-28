import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 5px 16px;
`;
export const DogContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const FavouriteContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
flex-direction: column;
`

export const FilterContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
flex-direction: column;
`

export const DropDownContainer = styled("div")`
  width: 10.5em;
  margin: 0 auto;
`;

export const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: black;
  background: #fbeee0;
  border-radius: 10%;
  text-align: center;
  text-transform: capitalize;

`;

export const DropDownListContainer = styled("div")``;

export const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #fbeee0;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: black;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
  text-transform: capitalize;
`;

export const FilterText = styled.h1`
  font-size: 24px;
  margin-bottom: 5px;
`

export const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;
