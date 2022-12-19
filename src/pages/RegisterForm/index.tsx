import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from "./Logo.png";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { Register } from "./style";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { formSchema } from "../../validators/userRegister";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

interface FormValues {
  erros: string;
  name: string;
  email: string;
  password: string;
  ConfirmPassword: string;
  bio: string;
  contact: number;
  course_module: string;
}

function RegisterForm() {
  const { NotifyRegister, onSubmitF } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(formSchema),
  });
  return (
    <>
      <Register>
        <ToastContainer />

        <div className="header">
          <img src={Logo} alt="logoKenzie" />
          <Link to={"/"}>
            <button>Voltar</button>
          </Link>
        </div>

        <div className="container">
          <div className="text">
            <h3>Cria sua conta</h3>
            <p>Rapido e gratis, Vamos nessa!</p>
          </div>
          <div className="input">
            <form onSubmit={handleSubmit(onSubmitF, NotifyRegister)}>
              <label htmlFor="name">Nome *</label>
              <input
                className={errors.name ? "error" : ""}
                type="text"
                id="name"
                placeholder="Ex: Rian"
                {...register("name")}
              />
              <span>{errors.name?.message}</span>
              <label htmlFor="email">Email *</label>
              <input
                className={errors.email ? "error" : ""}
                type="text"
                id="email"
                placeholder="Ex: email@email.com"
                {...register("email")}
              />
              <span>{errors.email?.message}</span>
              <label htmlFor="senha">Senha *</label>
              <input
                className={errors.password ? "error" : ""}
                type="password"
                id="senha"
                {...register("password")}
              />
              <span className="errorPassword"> {errors.password?.message}</span>
              <label htmlFor="confirmarSenha">Confirme a senha *</label>
              <input
                className={errors.ConfirmPassword ? "error" : ""}
                type="password"
                id="confirmarSenha"
                {...register("ConfirmPassword")}
              />
              <span> {errors.ConfirmPassword?.message}</span>
              <label htmlFor="bio">Bio *</label>
              <input
                className={errors.bio ? "error" : ""}
                type="text"
                id="bio"
                {...register("bio")}
              />
              <span> {errors.bio?.message}</span>
              <label htmlFor="contato">Telefone *</label>
              <input
                className={errors.contact ? "error" : ""}
                type="tel"
                id="contato"
                placeholder="(99) 99999-9999"
                {...register("contact")}
              />
              <span> {errors.contact?.message}</span>
              <label htmlFor="modulo">Modulo</label>
              <select id="modulo" {...register("course_module")}>
                <option>M1</option>
                <option>M2</option>
                <option>M3</option>
              </select>

              <button type="submit">Cadastrar</button>
            </form>
          </div>
        </div>
      </Register>
    </>
  );
}

export default RegisterForm;
