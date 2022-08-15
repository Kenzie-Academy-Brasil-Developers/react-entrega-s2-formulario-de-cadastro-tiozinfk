import styled from "styled-components";

const Container = styled.div`
  .cards {
    list-style: none;
    margin-left: 15px;
    height: 80%;
    width: 53vw;
    margin-top: 5px;
    margin-bottom: 20px;
    align-items: center;
    background: #121214;
    border-radius: 4px;
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;

    h3 {
      color: white;
      max-width: 12ch;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    p {
      color: #868e96;
    }
  }

  .btnDelete {
    background-color: transparent;
    border: none;
  }

  .div-delete {
    display: flex;

    justify-content: flex-end;
    margin-right: 10px;
  }

  @media (max-width: 465px) {
    .content {
      flex-direction: column;
      display: flex;
      margin-left: 0;
    }

    .cards {
      margin-left: 10px;
    }

    .div-delete {
      margin-bottom: 40px;
    }
  }

  @media (max-width: 450px) {
    .cards {
      margin-left: 30px;
    }
  }

  @media (max-width: 300px) {
    .cards {
      margin-left: 20px;
    }
  }
`;

export default Container;
