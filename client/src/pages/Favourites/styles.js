import styled from "styled-components";

export const PageTitle = styled.h1`
  flex: 1;
  font-weight: 500;
  color: #1c3d5a;
  font-size: 20px;
`;

export const PageSubTitle = styled.h1`
  flex: 1;
  color: #8795a1;
  font-size: 20px;
`;

export const FavouritesColumn = styled.div`
  display: grid;
  grid-template-columns: ${(props) => (props.boolVar ? "1fr 1fr" : "1fr")};
`;
