import { Link } from "react-router-dom";
import Logo from "./Logo.png";
import { DashboardF, NotAuthenticate } from "./style.js";

function Dashboard() {
  const token = window.localStorage.getItem("@TOKEN");
  const user = window.localStorage.getItem("@USER");
  const userObj = JSON.parse(user);

  if (!token) {
    return (
      <>
        <NotAuthenticate>
          <div>
            <h1>Você nao esta logado!</h1>
            <span>Ja possui uma conta ?</span>
            <Link to={"/"}>
              <button> Logar</button>
            </Link>

            <span>Crie uma conta !</span>
            <Link to={"/cadastro"}>
              <button> Registrar</button>
            </Link>
          </div>
        </NotAuthenticate>
      </>
    );
  } else {
    return (
      <>
        <DashboardF>
          <div className="divDash">
            <header>
              <img src={Logo} alt="logoKenzie" />
              <Link to={"/"}>
                <button onClick={() => localStorage.clear()}>Sair</button>
              </Link>
            </header>
            <section>
              <h1>Olá, {userObj.name}</h1>
              <span>{userObj.course_module}</span>
            </section>
            <div>
              <h2>Que pena! Estamos em desenvolvimento :(</h2>
              <p>
                Nossa aplicação está em desenvolvimento, em breve teremos
                novidades
              </p>
            </div>
          </div>
        </DashboardF>
      </>
    );
  }
}

export default Dashboard;
