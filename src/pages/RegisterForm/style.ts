import styled from "styled-components";

export const Register = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 1rem;
  height: 100vh;

  form {
    display: flex;
    flex-direction: column;
    gap: 12px;
    box-sizing: border-box;
  }

  form input {
    box-sizing: border-box;
    height: 45px;
    width: 329.92877197265625px;
    background: #343b41;
    border: 1.2182px solid #343b41;
    border-radius: 4px;
    color: white;
    font-family: "Inter", sans-serif;
  }

  .text {
    box-sizing: border-box;
    text-align: center;
    font-family: "Inter", sans-serif;
  }

  .text p {
    font-size: 12px;
    line-height: 22px;
    color: #868e96;
    font-family: "Inter", sans-serif;
  }

  form select {
    box-sizing: border-box;
    height: 45px;
    width: 329.92877197265625px;
    background: #343b41;
    border: 1.2182px solid #343b41;
    border-radius: 4px;
    color: #868e96;
    font-family: "Inter", sans-serif;
  }

  form button {
    box-sizing: border-box;
    width: 326px;
    height: 48px;
    background: #59323f;
    border: 1.2182px solid #59323f;
    border-radius: 4px;
    margin-top: 1rem;
    margin-bottom: 10px;
    color: white;
    font-family: "Inter", sans-serif;
    cursor: pointer;
  }

  .error {
    box-sizing: border-box;
    height: 45px;
    width: 329.92877197265625px;
    background: #343b41;

    border-radius: 4px;
    color: white;
    font-family: "Inter", sans-serif;
    border: 1.2182px solid red;
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  .container {
    box-sizing: border-box;
    background: #212529;
    width: 370px;
    max-height: 520px;
    align-items: center;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    color: white;
  }

  span {
    box-sizing: border-box;
    font-size: 10px;
    font-family: "Inter", sans-serif;
    text-overflow: ellipsis;
  }

  label {
    box-sizing: border-box;
    font-size: 12px;
    font-family: "Inter", sans-serif;
  }

  .container::-webkit-scrollbar {
    width: 5px;
    border-radius: 10px;
  }

  .container::-webkit-scrollbar-track {
    background-color: #343b41;
  }

  .container::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 10px;
  }

  .header {
    display: flex;
    justify-content: space-around;
    gap: 5rem;
    align-items: center;
  }

  .header button {
    height: 40.10990524291992px;
    width: 67.48529052734375px;
    background: #212529;
    border-radius: 4px;
    border: none;
    color: white;
    font-family: "Inter", sans-serif;
  }

  .header img {
    height: 21.211807250976562px;
    width: 122.05999755859375px;
  }

  .errorPassword {
    text-overflow: ellipsis;
    font-family: "Inter", sans-serif;
    overflow: hidden;
    width: 20rem;
  }
`;
