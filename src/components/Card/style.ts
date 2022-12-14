import styled from "styled-components";

const Container = styled.div`
  .cards {
    list-style: none;
    margin-left: 10px;
    height: 100%;
    width: 60vw;
    margin-top: 0.6rem;
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
  }

  @media (max-width: 450px) {
    .cards {
      width: 75vw;
    }
  }
`;

export default Container;
