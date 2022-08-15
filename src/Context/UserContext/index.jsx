import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { createContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import api from "../../services/api";
import { formSchemaLogin } from "../../validators/userLogin";
export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [techs, setTech] = useState([]);

  const [user, setUser] = useState([]);

  const navigate = useNavigate();

  async function loadUser() {
    const token = localStorage.getItem("@TOKEN");

    if (token) {
      try {
        api.defaults.headers.authorization = `Bearer ${token}`;
        const { data } = await api.get("/profile");
        setUser(data);
        setTech(data.techs);
      } catch (error) {
        console.error(error);
      }
    }
  }

  useEffect(() => {
    loadUser();
  });

  function CreateTech(data) {
    api
      .post(
        "/users/techs",

        {
          title: data.tittle,
          status: data.status,
        },
        {
          headers: `Bearer ${localStorage.getItem("@TOKEN")}`,
        }
      )
      .then((res) => {
        if (res.status !== 401) {
          setIsModalVisible(false);
          toast.success("Tecnologia Adicionada com sucesso");
        }
      })
      .catch((error) => {
        toast.error("Error");
      });
  }

  async function deleteTech(techId) {
    const token = localStorage.getItem("@TOKEN");
    api.defaults.headers.authorization = `Bearer ${token}`;
    await api
      .delete(`/users/techs/${techId}`)
      .then((res) => toast.success("Tecnologia Excluida com sucesso"))
      .catch((err) => {
        toast.error("Ops, algo errado");
        console.log(err);
      });
  }

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchemaLogin) });

  function Notify() {
    return toast.error("Preencha Todos os campos");
  }

  // => REGISTRO DO USUARIO //

  function NotifyRegister() {
    if (Error) {
      return toast.error("Preencha Todos os campos");
    }
  }

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
    <UserContext.Provider
      value={{
        register,
        handleSubmit,
        errors,
        Notify,
        handleLogin,
        NotifyRegister,
        onSubmitF,
        CreateTech,
        isModalVisible,
        setIsModalVisible,
        user,
        loadUser,
        techs,
        deleteTech,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
