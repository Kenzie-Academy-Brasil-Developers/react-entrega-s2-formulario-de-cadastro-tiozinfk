import styled from "styled-components";

export const ContainerDash = styled.div`
  .header-dashboard {
    width: 100%;
    background: #121214;
    display: flex;
    align-items: center;
    height: 72px;
    justify-content: center;

    .container {
      display: flex;
      align-items: center;
      justify-content: space-around;
      max-width: 1200px;
      margin-top: 3rem;
      height: 100%;
      width: 100%;
    }
  }

  .btn-exit {
    width: 55.49px;
    height: 32px;
    background: #212529;
    border-radius: 4px;
    color: white;
  }

  .section-dashboard {
    display: flex;
    background: #121214;
    height: 118px;
    align-items: center;
    justify-content: center;

    .section-itens {
      display: flex;
      color: white;
      max-width: 1200px;
      width: 100%;
      align-items: center;
      justify-content: space-around;
    }
  }

  .main-dashboard {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .header-techs {
      max-width: 1200px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      color: white;
    }
    .list-techs {
      display: flex;
      max-width: 1200px;
      width: 65%;
      height: 350px;
      gap: 1rem;
      align-items: center;
      background: #212529;
      border-radius: 4px;
      flex-direction: column;
      overflow-y: auto;
    }

    @media (max-width: 450px) {
      .list-techs {
        width: 85%;
      }
    }
  }

  .btn-Add {
    background: #212529;
    border-radius: 4px;
    color: white;
    width: 32.49px;
    height: 32px;
    font-size: 17px;
  }

  .list-techs::-webkit-scrollbar {
    width: 5px;
    border-radius: 10px;
  }

  .list-techs::-webkit-scrollbar-track {
    background-color: #343b41;
  }

  .list-techs::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 10px;
  }
`;

export const NotAuthenticate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

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
