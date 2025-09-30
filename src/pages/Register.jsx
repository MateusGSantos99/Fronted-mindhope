import { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { mockApi } from "../services/mockApi";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Input } from "../components/Input";
import toast from "react-hot-toast";

export const Register = () => {
  const [userType, setUserType] = useState("paciente");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    CRP: "",
    specialty: "",
    phone: "",
    birthDate: "",
  });
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleInputChange = useCallback(
    (field) => (e) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    },
    []
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Senhas não coincidem");
      return;
    }

    setLoading(true);
    try {
      const { user, token } = await mockApi.register({
        ...formData,
        type: userType,
      });

      login(user, token);
      toast.success("Conta criada com sucesso!");
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
        {/* Cabeçalho */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Registre-se</h1>
          <p className="text-gray-300">
            Digite seu email e crie uma senha para criar sua conta
          </p>
        </div>

        {/* Seletor de usuário */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            type="button"
            onClick={() => setUserType("paciente")}
            className={`px-6 py-2 rounded-full font-bold transition ${
              userType === "paciente"
                ? "bg-light text-dark"
                : "bg-dark border border-light text-light"
            }`}
          >
            Paciente
          </button>
          <button
            type="button"
            onClick={() => setUserType("psicologo")}
            className={`px-6 py-2 rounded-full font-bold transition ${
              userType === "psicologo"
                ? "bg-light text-dark"
                : "bg-dark border border-light text-light"
            }`}
          >
            Psicólogo
          </button>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="space-y-2 rounded-b-full">
          <Input
            label="Nome completo"
            value={formData.name}
            onChange={handleInputChange("name")}
            placeholder="Digite seu nome completo"
            className="input-field"
            required
          />
          <Input
            label="E-mail"
            type="email"
            value={formData.email}
            onChange={handleInputChange("email")}
            placeholder="Digite seu email"
            className="input-field"
            required
          />

          <Input
            label="Senha"
            type="password"
            value={formData.password}
            onChange={handleInputChange("password")}
            placeholder="Digite sua senha"
            className="input-field"
            required
          />
          <Input
            label="Confirme sua senha"
            type="password"
            value={formData.confirmPassword}
            onChange={handleInputChange("confirmPassword")}
            placeholder="Confirme sua senha"
            className="input-field"
            required
          />
          <Input
            label="Telefone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange("phone")}
            placeholder="Digite seu telefone"
            className="input-field"
            required
          />

          {userType === "paciente" && (
            <Input
              label="Data de Nascimento"
              type="date"
              value={formData.birthDate}
              onChange={handleInputChange("birthDate")}
              placeholder="Digite sua data de nascimento"
              className="input-field"
              required
            />
          )}

          {userType === "psicologo" && (
            <>
              <Input
                label="CRP"
                value={formData.CRP}
                onChange={handleInputChange("CRP")}
                placeholder="Ex: 12/34567"
                className="input-field"
                required
              />
              <Input
                label="Especialidade"
                value={formData.specialty}
                onChange={handleInputChange("specialty")}
                placeholder="Ex: Psicologia Clínica, Terapia Cognitiva"
                className="input-field"
                required
              />
            </>
          )}

          <Button type="submit" loading={loading} className="w-full btn-primary">
            Continuar
          </Button>
        </form>

        {/* Link para login */}
        <div className="mt-6 text-center space-y-2">
          <p className="text-gray-300">Já possui conta?</p>
          <Link to="/login" className="text-light font-bold hover:text-accent">
            Faça login!
          </Link>
        </div>
      </Card>
    </div>
  );
};
