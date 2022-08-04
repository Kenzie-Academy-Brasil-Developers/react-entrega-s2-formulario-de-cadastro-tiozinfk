import { useForm } from "react-hook-form";
import api from "../../services/api";
import Logo from "./Logo.png";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.js";
import { Link, useNavigate } from "react-router-dom";
import { formSchemaLogin } from "../../validators/userLogin";
import { Login } from "./style.js";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchemaLogin) });

  function Notify() {
    return toast.error("Preencha Todos os campos");
  }

  const navigate = useNavigate();

  const handleLogin = (user) => {
    const id = toast.loading("Please wait...");

    api
      .post("/sessions", { ...user })
      .then((res) => {
        if (res.status !== 401) {
          setTimeout(() => navigate("/dashboard"), 2000);
        }

        window.localStorage.clear();
        window.localStorage.setItem("@TOKEN", res.data.token);
        window.localStorage.setItem("@USER", JSON.stringify(res.data.user));
        toast.update(id, {
          render: "Logado com sucesso",
          type: "success",
          isLoading: false,
          autoClose: 2000,
        });
      })
      .catch((err) => {
        toast.update(id, {
          render: "Senha/Email invalidos",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
      });
  };

  return (
    <>
      <ToastContainer />
      <Login>
        <div className="header-login">
          <img src={Logo} alt="logoKenzie" />
        </div>
        <div className="container-login">
          <form
            className="form-login"
            onSubmit={handleSubmit(handleLogin, Notify)}
          >
            <h2>Login</h2>
            <div className="inputs-div">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                placeholder="Ex: email@email.com"
                {...register("email")}
              />
              <span>{errors.email?.message}</span>
            </div>
            <div className="inputs-div">
              <label htmlFor="password">Senha</label>
              <input type="password" id="password" {...register("password")} />
              <span className="passwordLogin"> {errors.password?.message}</span>
            </div>
            <button type="submit">Logar</button>
          </form>
          <div className="cadastro-login">
            <span>Ainda nao possui cadastro ?</span>
            <Link to={"/cadastro"}>
              <button>Cadastrar</button>
            </Link>
          </div>
        </div>
      </Login>
    </>
  );
}

export default LoginForm;
