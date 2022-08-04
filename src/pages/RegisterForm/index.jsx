import { useForm } from "react-hook-form";
import api from "../../services/api";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from "./Logo.png";
import "react-toastify/dist/ReactToastify.css";

import { Link, useNavigate } from "react-router-dom";
import { formSchema } from "../../validators/userRegister";
import { Register } from "./style.js";

function Notify() {
  if (Error) {
    return toast.error("Preencha Todos os campos");
  }
}

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  window.localStorage.clear();

  const navigate = useNavigate();

  const onSubmitF = (data) => {
    const id = toast.loading("Please wait...");

    api

      .post("/users", data)
      .then((response) => {
        if (response.status !== 401) {
          setTimeout(() => navigate("/"), 2000);
        }

        toast.update(id, {
          render: "Cadastro efetuado com sucesso",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });
      })
      .catch((err) => {
        toast.update(id, {
          render: "O usuario ja existe",
          type: "error",
          isLoading: false,
          autoClose: 2000,
        });
      });
  };

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
            <form onSubmit={handleSubmit(onSubmitF, Notify)}>
              <label htmlFor="name">Nome *</label>
              <input
                type="text"
                id="name"
                placeholder="Ex: Rian"
                {...register("name")}
              />
              <span>{errors.name?.message}</span>
              <label htmlFor="email">Email *</label>
              <input
                type="text"
                id="email"
                placeholder="Ex: email@email.com"
                {...register("email")}
              />
              <span>{errors.email?.message}</span>
              <label htmlFor="senha">Senha *</label>
              <input type="password" id="senha" {...register("password")} />
              <span className="errorPassword"> {errors.password?.message}</span>
              <label htmlFor="confirmarSenha">Confirme a senha *</label>
              <input
                type="password"
                id="confirmarSenha"
                {...register("ConfirmPassword")}
              />
              <span> {errors.ConfirmPassword?.message}</span>
              <label htmlFor="bio">Bio *</label>
              <input type="text" id="bio" {...register("bio")} />
              <span> {errors.bio?.message}</span>
              <label htmlFor="contato">Telefone *</label>
              <input
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
