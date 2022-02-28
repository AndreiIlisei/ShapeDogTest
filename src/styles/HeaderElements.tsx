import styled from "styled-components";

export const HeaderElement = styled.header`
  div {
    margin: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 65px;
  }
`;

export const NavElement = styled.h1`
      background-color: #fbeee0;
      border: 2px solid #422800;
      border-radius: 30px;
      box-shadow: #422800 4px 4px 0 0;
      color: #422800;
      cursor: pointer;
      display: inline-block;
      font-weight: 600;
      font-size: 18px;
      padding: 0 18px;
      line-height: 50px;
      text-align: center;
      text-decoration: none;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
    }
    
    &:hover {
      background-color: #fff;
    }
    
   &:active {
      box-shadow: #422800 2px 2px 0 0;
      transform: translate(2px, 2px);
    }
    
    @media (min-width: 768px) {
        min-width: 120px;
        padding: 0 25px;

    }
    `;
