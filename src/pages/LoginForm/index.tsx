import Logo from "./Logo.png";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.ts";
import { Link } from "react-router-dom";
import { Login } from "./style";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { useForm } from "react-hook-form";
import { formSchemaLogin } from "../../validators/userLogin";
import { yupResolver } from "@hookform/resolvers/yup";

interface FormValues {
  erros: string;
  email: string;
  password: string;
}

function LoginForm() {
  const { Notify, handleLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(formSchemaLogin),
  });
  return (
    <Login>
      <ToastContainer />
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
  );
}

export default LoginForm;
