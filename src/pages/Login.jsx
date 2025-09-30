import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { mockApi } from "../services/mockApi";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import toast from "react-hot-toast";

export const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { user, token } = await mockApi.login(
        formData.email,
        formData.password
      );
      login(user, token);
      toast.success("Login realizado com sucesso!");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <Card className="bg-[var(--color-dark)] w-full max-w-md rounded-2xl shadow-xl p-8 text-white">
        {/* Logo + título */}
        <div className="flex items-center gap-3 mb-6">
          <img src="/logo.png" alt="Logo" className="w-10 h-10" />
          <h1 className="text-3xl font-bold">Bem-vindo!</h1>
        </div>

        <p className="text-gray-300 text-center mb-8">
          Digite seu email e sua senha para conectar a sua conta
        </p>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="Digite seu email"
            className="input-field"
            required
          />
          <Input
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            placeholder="Digite sua senha"
            className="input-field"
            required
          />
          <Button
            type="submit"
            loading={loading}
            className="w-full btn-primary"
            disabled={loading}
          >
            Continuar
          </Button>
        </form>

        {/* Link cadastro */}
        <p className="text-gray-300 text-sm mt-6 text-center">
          Não possui cadastro?{" "}
          <Link
            to="/register"
            className="text-light font-bold hover:text-accent"
          >
            Registre-se aqui
          </Link>
        </p>
      </Card>
    </div>
  );
};
