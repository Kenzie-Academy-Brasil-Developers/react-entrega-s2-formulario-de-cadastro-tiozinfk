import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { useForm } from "react-hook-form";

import Container from "./style";
import { formSchemaAdd } from "../../validators/addTech";
import { yupResolver } from "@hookform/resolvers/yup";

function AddModal() {
  const { CreateTech, setIsModalVisible } = useContext(UserContext);

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchemaAdd),
  });

  return (
    <Container>
      <div className="Modal">
        <div className="Container">
          <header className="Header-modal">
            <h4>Cadastrar Tecnologia</h4>
            <button
              className="btnClose"
              onClick={() => setIsModalVisible(false)}
            >
              X
            </button>
          </header>
          <div className="formModal">
            <form onSubmit={handleSubmit(CreateTech)}>
              <input
                id="title"
                {...register("tittle")}
                label="Nome"
                placeholder="Tecnologia"
              />

              <select name="status" id="status" {...register("status")}>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediario</option>
                <option value="Avançado">Avançado</option>
              </select>
              <button type="submit" className="btn-formDashboard">
                Cadastrar Tecnologia
              </button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default AddModal;
