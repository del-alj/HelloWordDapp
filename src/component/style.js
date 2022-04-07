import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background: #c6ffdd; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #f7797d, #fbd786, #c6ffdd);
  background: linear-gradient(to right, #f7797d, #fbd786, #c6ffdd);
  display: flex;
  flex-direction: column;
  /* width: 100vh; */
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  height: auto;
  min-width: 700px;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background: white; */
  /* border: 2px double black; */
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  @media screen and (max-width: 768px) {
    width: auto;
    font-size: 0.8em;
    flex-direction: column;
    justify-content: space-around;
  }
`;

export const Botton = styled.button`
  margin: 10px;
  align-items: center;
  appearance: none;
  background-color: #fcfcfd;
  border-radius: 4px;
  border-width: 0;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  box-sizing: border-box;
  color: #36395a;
  cursor: pointer;
  display: inline-flex;
  font-family: "JetBrains Mono", monospace;
  height: 48px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow 0.15s, transform 0.15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow, transform;
  font-size: 18px;

  :focus {
    box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  }

  :hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
    transform: translateY(-2px);
  }

  :active {
    box-shadow: #d6d6e7 0 3px 7px inset;
    transform: translateY(2px);
  }
`;

export const Input = styled.input`
  /* width: 100%; */
  color: rgb(36, 35, 42);
  font-size: 16px;
  line-height: 20px;
  min-height: 28px;
  border-radius: 4px;
  padding: 8px 16px;
  border: 2px solid transparent;
  box-shadow: rgb(0 0 0 / 12%) 0px 1px 3px, rgb(0 0 0 / 24%) 0px 1px 2px;
  background: rgb(251, 251, 251);
  transition: all 0.1s ease 0s;
  :focus {
    border: 2px solid rgb(124, 138, 255);
  }
`;

export const Titel = styled.h3`
  font-size: 2em;
`;
