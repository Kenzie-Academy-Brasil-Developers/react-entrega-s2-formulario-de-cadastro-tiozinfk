import { useContext } from "react";
import { Link } from "react-router-dom";
import AddModal from "../../components/AddModal";
import TechsList from "../../components/TechList";
import { UserContext } from "../../Context/UserContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.ts";
import { ContainerDash, NotAuthenticate } from "./style";
import Logo from "./Logo.png";

function Dashboard() {
  const token = localStorage.getItem("@TOKEN");

  const { isModalVisible, setIsModalVisible, user } = useContext(UserContext);

  if (!token) {
    return (
      <NotAuthenticate>
        <div>
          <h1>Você nao esta logado!</h1>
          <span>Ja possui uma conta?</span>
          <Link to={"/"}>
            <button> Logar</button>
          </Link>

          <span>Crie uma conta !</span>
          <Link to={"/cadastro"}>
            <button> Registrar</button>
          </Link>
        </div>
      </NotAuthenticate>
    );
  } else {
    return (
      <ContainerDash>
        <ToastContainer />
        <div className="all-dashboard">
          <header className="header-dashboard">
            <div className="container">
              <img src={Logo} alt="LogoDashboard" />
              <Link to={"/"}>
                <button
                  onClick={() => localStorage.clear()}
                  className="btn-exit"
                >
                  Sair
                </button>
              </Link>
            </div>
          </header>

          <section className="section-dashboard">
            <div className="section-itens">
              <h3>Olá, {user.name} </h3>
              <h3>{user.course_module}</h3>
            </div>
          </section>

          <div className="modal">{isModalVisible ? <AddModal /> : null}</div>
          <main className="main-dashboard">
            <div className="header-techs">
              <h1>Tecnologias</h1>
              <button
                className="btn-Add"
                onClick={() => setIsModalVisible(true)}
              >
                +
              </button>
            </div>

            <div className="list-techs">
              <TechsList />
            </div>
          </main>
        </div>
      </ContainerDash>
    );
  }
}

export default Dashboard;
