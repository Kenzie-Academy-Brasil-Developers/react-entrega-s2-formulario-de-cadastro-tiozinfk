import styled from "styled-components";

export const DashboardF = styled.div`
  header {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100vw;
    height: 72px;
    position: absolute;
    top: 0;
    left: 0;
    box-shadow: 0px 0px 0px 0.2px #6e6b6a;
    background: #121214;
  }

  section {
    display: flex;
    color: white;
    position: absolute;
    top: 73px;
    height: 118px;
    background: #121214;
    width: 100vw;
    left: 0;
    align-items: center;
    justify-content: space-around;
    box-shadow: 0px 0px 0px 0.2px #6e6b6a;
  }

  .divDash {
    background-color: #121214;
    width: 100vw;
    height: 100vh;
  }

  div {
    display: flex;
    color: white;
    align-items: center;
    justify-content: center;
    color: white;
    flex-direction: column;
  }

  button {
    width: 55.49px;
    height: 32px;
    color: white;
    background: #212529;
    border-radius: 4px;
  }
`;

export const NotAuthenticate = styled.div`
  span {
    color: white;
    font-family: "Inter", sans-serif;
  }

  h1 {
    color: white;
    font-family: "Inter", sans-serif;
  }

  div {
    display: flex;
    flex-direction: column;
    width: 369px;
    height: 530px;
    background: #212529;
    gap: 50px;
    border-radius: 4px;
    text-align: center;
    color: white;
    align-items: center;
  }

  button {
    box-sizing: border-box;
    width: 326px;
    height: 48px;
    background: #59323f;
    border: 1.2182px solid #59323f;
    border-radius: 4px;
    margin-bottom: 10px;
    color: white;
    font-family: "Inter", sans-serif;
  }
`;
