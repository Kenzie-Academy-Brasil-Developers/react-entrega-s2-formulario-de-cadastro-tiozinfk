import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { FiTrash2 } from "react-icons/fi";

import Container from "./style";

const Card = ({ tech }) => {
  const { deleteTech } = useContext(UserContext);

  return (
    <Container>
      <div className="cards">
        <div className="content">
          <h3>{tech.title}</h3>
          <p>{tech.status}</p>
        </div>
        <div className="div-delete">
          <button className="btnDelete" onClick={() => deleteTech(tech.id)}>
            <FiTrash2 color="white" size={18} />
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Card;
