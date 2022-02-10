import styled from "styled-components";

export const DogCard = styled.div`
margin: 1rem;
width: 320px;
height: 350px;
cursor: pointer;
`;

export const DogName = styled.h1`
text-transform: capitalize;
background-color: ${({ theme }) => theme.light};
display: flex;
height: 15%;
justify-content: center;
align-items: center;
font-size: 1.25rem;
color: ${({ theme }) => theme.black};
`;

export const DogImage = styled.img`
width: 100%;
height: 83%;
`;
