import styled from "styled-components";

export const ContainerDash = styled.div`
  .all-dashboard {
  }
  .header-dashboard {
    width: 100vw;
    background: #121214;
    display: flex;
    align-items: center;
    height: 72px;
    position: absolute;
    justify-content: center;
    top: 0;
    left: 0;

    .container {
      display: flex;
      align-items: center;
      justify-content: space-around;
      max-width: 1200px;
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
    width: 100vw;
    height: 118px;
    position: absolute;
    top: 72px;
    left: 0;
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
    align-items: center;
    justify-content: center;
    width: 100vw;

    .header-techs {
      max-width: 1200px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      color: white;
      position: absolute;
      top: 208px;
    }
    .list-techs {
      display: flex;
      max-width: 1200px;
      width: 55%;
      height: 65%;
      background: #212529;
      border-radius: 4px;
      top: 294px;
      flex-direction: column;
      overflow-y: auto;
      position: absolute;
      overflow-x: hidden;
    }

    @media (max-width: 450px) {
      .list-techs {
        width: 70%;
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
  .modal {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 10;
    top: 5px;
    box-sizing: border-box;
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
