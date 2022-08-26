import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import LoginForm from "../pages/LoginForm";
import RegisterForm from "../pages/RegisterForm";

function Rotas() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/cadastro" element={<RegisterForm />} />

        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default Rotas;
