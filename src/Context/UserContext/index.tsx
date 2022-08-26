import { ReactNode, useEffect } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import api from "../../services/api";

export interface userContextProps {
  children: ReactNode;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  course_module: string;
  techs?: string[];
}

export interface UserData {
  tittle: string;
  status: string;
}

interface UserLogin {
  email: string;
  password: string;
}

interface ITechs {
  tittle: string;
  status: string;
  id: string;
}

interface useContext {
  CreateTech: (data: UserData) => void;
  deleteTech: (techId: ITechs[]) => void;
  handleLogin: (user: UserLogin) => void;
  NotifyRegister: () => void;
  onSubmitF: (data: any) => void;
  Notify: () => void;
  user: IUser;
  isModalVisible: boolean;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  loadUser: () => void;
  techs: ITechs[];
}

export const UserContext = createContext<useContext>({} as useContext);

export const UserProvider = ({ children }: userContextProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [techs, setTech] = useState<ITechs[]>([]);
  const [user, setUser] = useState<IUser>({} as IUser);

  const navigate = useNavigate();

  async function loadUser() {
    const token = localStorage.getItem("@TOKEN");

    if (token) {
      try {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
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

  function CreateTech(data: UserData) {
    const token = localStorage.getItem("@TOKEN");

    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    api
      .post(
        "/users/techs",

        {
          title: data.tittle,
          status: data.status,
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

  async function deleteTech(techId: ITechs[]) {
    const token = localStorage.getItem("@TOKEN");
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await api
      .delete(`/users/techs/${techId}`)
      .then((res) => toast.success("Tecnologia Excluida com sucesso"))
      .catch((err) => {
        toast.error("Ops, algo errado");
        console.log(err);
      });
  }

  const handleLogin = (user: UserLogin) => {
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

  function Notify() {
    return toast.error("Preencha Todos os campos");
  }

  // => REGISTRO DO USUARIO //

  function NotifyRegister() {
    toast.error("Preencha Todos os campos");
  }

  const onSubmitF = (data: any) => {
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
};
