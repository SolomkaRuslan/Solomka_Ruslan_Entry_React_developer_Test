import styled from "styled-components";

export const MainContainer = styled.div`
  width: 80%;
  height: 100%;
  max-width: 2000px;
  margin: 0 auto;
`;

export const BoldText = styled.span`
  font-weight: 500;
`;

export const FlexBox = styled.div`
  display: flex;

  width: ${(props) => (props.width ? props.width : "100%")};
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  gap: ${(props) => (props.gap ? props.gap : "none")};
  margin-top: ${(props) => (props.m_top ? props.m_top : "none")};
  margin-bottom: ${(props) => (props.m_bot ? props.m_bot : "none")};
`;

export const FlexBetween = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;

  flex-wrap: ${(props) => (props.wrapping ? "wrap" : "nowrap")};
  margin-bottom: ${(props) => (props.m_bot ? props.m_bot : "none")};
  align-items: ${(props) => (props.center ? "center" : "unset")};
  gap: ${(props) => (props.gap ? props.gap : "none")};
`;

export const SquareImgHolder = styled.div`
  position: relative;

  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const MainH2 = styled.h2`
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 42px;
  line-height: 67.2px;
  color: #1d1f22;
  margin-bottom: 6.5rem;
  text-transform: capitalize;
`;

export const MainH3 = styled.h3`
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 40px;
  text-transform: uppercase;
  margin-bottom: 60px;
  color: #1d1f22;
`;

export const MainH4 = styled.h4`
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1.25rem;
  line-height: 30px;
  color: #1d1f22;
`;

export const BtnPrimary = styled.button`
  width: 100%;
  padding: 16px 32px;
  display: flex;
  justify-content: center;
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 600;
  line-height: 16.8px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;

  background: ${(props) => (props.disabled ? "grey" : "#5ece7b")};
  border: ${(props) =>
    props.disabled ? "1px solid grey" : "1px solid #5ece7b"};
  font-size: ${(props) => (props.fontS ? props.fontS : "16px")};
  cursor: ${(props) => (props.disabled ? "" : "pointer")};

  &:hover {
    background: ${(props) => (props.disabled ? "grey" : "#7de398")};
  }
`;

export const BtnSecondary = styled.button`
  width: 100%;
  padding: 16px 32px;
  background: #ffffff;
  border: 1px solid #1d1f22;
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: ${(props) => (props.fontS ? props.fontS : "16px")};
  line-height: 16.8px;
  text-align: center;
  text-transform: uppercase;
  color: #1d1f22;
  box-sizing: border-box;
  cursor: ${(props) => (props.disabled ? "" : "pointer")};

  &:hover {
    background: rgba(94, 206, 123, 0.2);
  }
`;
