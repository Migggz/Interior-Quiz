import React, { forwardRef, Suspense } from "react";
import { Col } from "styled-bootstrap-grid";
import {
  Wrapper,
  StyledInput,
  Label,
  Inner,
  Details,
  CardTitle,
  CheckedIcon
} from "./Card.styled";
import Loading from "../Loading";
import SuspenseImage from "../SuspenseImage";
import checkmark from "../../assets/images/checkmark.svg";

export default forwardRef(function Card(
  { name, id, value, disabled, onClick, data },
  ref
) {
  return (
    <Col col={12} md={6}>
      <Wrapper>
        <StyledInput
          type="checkbox"
          name={name}
          id={name + "-" + id}
          ref={ref}
          value={value}
          disabled={disabled}
          onClick={onClick}
        />
        <Label htmlFor={name + "-" + id}>
          <Inner>
            <Suspense fallback={<Loading className="loading-card" />}>
              <SuspenseImage src={data.url} alt={data.name} />
              <Details>
                <CardTitle>{data.name}</CardTitle>
              </Details>
            </Suspense>
            <CheckedIcon src={checkmark} alt="" aria-hidden="true" />
          </Inner>
        </Label>
      </Wrapper>
    </Col>
  );
});
