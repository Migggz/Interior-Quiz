import React from "react";
import { Wrapper, StyledImg, CardTitle } from "./ShowCard.styled";

export default function ShowCard({ data }) {
  return (
    <Wrapper>
      <StyledImg src={data.url} alt={data.name} />
      <CardTitle>{data.name}</CardTitle>
    </Wrapper>
  );
}
