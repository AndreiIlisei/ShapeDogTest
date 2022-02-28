import styled from "styled-components";

export const DogCard = styled.div`
margin: 1rem;
width: 320px;
height: 350px;
cursor: pointer;
position: relative;
transition: transform 0.2s;
&:hover{
        cursor: pointer;
        transform: scale(1.05);
};
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
align-items: center;
width: 100%;
height: 83%;
`;

export const Button = styled.div`
    margin: 7px 0 0 10px;
`
