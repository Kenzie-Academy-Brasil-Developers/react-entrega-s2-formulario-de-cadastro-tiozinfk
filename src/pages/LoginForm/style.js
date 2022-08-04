import styled from "styled-components";

export const Login = styled.div`
  .container-login {
    display: flex;
    flex-direction: column;
    width: 369px;
    height: 530px;
    background: #212529;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    text-align: center;
    color: white;
    align-items: center;
  }

  .form-login {
    margin-top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 22px;
    flex-direction: column;
    font-family: "Inter", sans-serif;
  }

  .header-login {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Inter", sans-serif;
  }

  .cadastro-login {
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }

  .cadastro-login button {
    width: 324px;
    height: 48px;
    background: #868e96;

    border: 1.2182px solid #868e96;
    border-radius: 4px;
    font-family: "Inter", sans-serif;
  }

  .inputs-div input {
    display: flex;
    box-sizing: border-box;
    height: 45px;
    width: 329.92877197265625px;
    background: #343b41;
    border: 1.2182px solid #343b41;
    border-radius: 4px;
    color: white;
    font-family: "Inter", sans-serif;
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

  .cadastro-login span {
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color: #868e96;
    font-family: "Inter", sans-serif;
  }

  .header-login {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;
  }

  .passwordLogin {
    text-overflow: ellipsis;
    display: flex;
    overflow: hidden;
    width: 20rem;
    font-family: "Inter", sans-serif;
  }

  span {
    box-sizing: border-box;
    font-size: 10px;
    display: flex;
    text-overflow: ellipsis;
    font-family: "Inter", sans-serif;
    line-height: 22px;
  }

  label {
    display: flex;
    font-size: 13px;
    line-height: 22px;
    font-family: "Inter", sans-serif;
  }
`;
