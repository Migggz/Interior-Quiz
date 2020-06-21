import styled from "styled-components";

export const CheckedIcon = styled.img`
  display: block;
  position: absolute;
  width: 40px;
  height: 40px;
  right: 30px;
  bottom: 15px;
  transform: scale(0);
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 2;
  user-select: none;
  @media (max-width: 991.98px) {
    width: 30px;
    height: 30px;
  }
`;
export const Label = styled.label`
  display: block;
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: relative;
  padding: 15px;
  transition: 0.3s ease opacity;
`;

export const CardTitle = styled.h3`
  margin: 0;
  font-size: 1.8rem;
  color: #fff;
  opacity: 0;
  position: relative;
  top: 100px;
  transition-property: top, opacity;
  transition-duration: 0.3s;
  transition-delay: 0s;
  user-select: none;
  white-space: nowrap;
`;
export const Details = styled.div`
  padding: 20px;
  bottom: 0;
  left: 0;
  z-index: 2;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.8) 100%
  );
  width: 100%;
  height: 20%;
  opacity: 0;
  position: absolute;
  top: 100%;
  transition-property: top, opacity;
  transition-duration: 0.6s;
  transition-delay: 0.1s;
  @media (max-width: 991.98px) {
    height: 25%;
  }
  @media (max-width: 575.98px) {
    height: 30%;
  }
`;
export const Inner = styled.div`
  position: relative;
  overflow: hidden;
  height: 100%;
`;

export const Wrapper = styled.article`
  height: 400px;
  margin-bottom: 30px;
  border: 1px solid #aaa;
  background-color: #fefefe;
  transition: 0.3s ease border-color;
  @media (max-width: 991.98px) {
    height: 300px;
  }
  @media (max-width: 575.98px) {
    height: 250px;
    margin-bottom: 15px;
  }
  .loading-card {
    position: absolute;
    top: calc(50% - 25px);
    left: calc(50% - 25px);
    transform: translate(-50%, -50%);
  }

  &:focus,
  &:hover {
    ${CardTitle} {
      opacity: 1;
      top: 0;
      transition-delay: 0.15s;
    }
    ${Details} {
      opacity: 1;
      top: 80%;
      transition-delay: 0s;
      transition-duration: 0.3s;
      @media (max-width: 991.98px) {
        top: 75%;
      }
      @media (max-width: 575.98px) {
        top: 70%;
      }
    }
  }
`;
export const StyledInput = styled.input`
  visibility: hidden;
  display: block;
  width: 0;
  height: 0;
  &:checked {
    & + ${Label} {
      ${CheckedIcon} {
        transform: scale(1);
      }
      ${CardTitle} {
        opacity: 1;
        top: 0;
        transition-delay: 0.15s;
      }
      ${Details} {
        opacity: 1;
        top: 80%;
        transition-delay: 0s;
        transition-duration: 0.3s;
        @media (max-width: 991.98px) {
          top: 75%;
        }
        @media (max-width: 575.98px) {
          top: 70%;
        }
      }
    }
  }
  &:disabled {
    & + ${Label} {
      opacity: 0.6;
      pointer-events: none;
    }
  }
`;
