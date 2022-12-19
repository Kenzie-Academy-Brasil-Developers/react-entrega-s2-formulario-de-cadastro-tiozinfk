import styled from "styled-components";

const Container = styled.div`
  .Modal {
    display: flex;
    z-index: 9999;
    background: rgba(18, 18, 20, 0.5);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 5px;
    align-items: center;
    justify-content: center;
  }

  .Container {
    width: 40%;
    height: 50%;
    background: #212529;
    border-radius: 4px;

    .Header-modal {
      background: #343b41;
      display: flex;
      align-items: center;
      justify-content: space-around;
      color: white;
      border-radius: 4px;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: center;
      justify-content: center;
      margin-top: 3%;
    }
    input {
      width: 80%;
      height: 48px;
      background: #343b41;
      color: white;
      border: 1.2182px solid #f8f9fa;
      border-radius: 4px;
    }

    select {
      width: 80%;
      height: 48px;
      background: #343b41;

      border: 1.2182px solid #f8f9fa;
      border-radius: 4px;
      color: white;
    }
    .btn-formDashboard {
      width: 80%;
      height: 48px;
      background: #ff577f;
      border: 1.2182px solid #ff577f;
      border-radius: 4.06066px;
    }
  }

  @media (max-width: 600px) {
    .Container {
      width: 60%;
    }
  }

  @media (max-width: 400px) {
    .Container {
      width: 80%;
    }
  }
  .btnClose {
    color: grey;
    border: none;
    background-color: transparent;
  }
`;

export default Container;
