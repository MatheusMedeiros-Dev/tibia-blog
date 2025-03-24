import { useEffect, useState } from "react";
import { useAuthentication } from "../hooks/useAuthentication";

// Tipos
type User = {
  email: string;
  password: string;
};

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const { error: authError, loading, login } = useAuthentication();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");
    const user: User = {
      email,
      password,
    };

    await login(user);
  };
  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);
  return (
    <div className="bg-amber-50 h-[500px] w-[250px]">
      <form onSubmit={handleSubmit}>
        <p className="text-center">Entrar</p>
        <label>
          <span>Email:</span>
          <input
            className="border ml-[5px]"
            type="email"
            name="email"
            value={email}
            placeholder="Digite seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Senha:</span>
          <input
            className="border"
            name="senha"
            type="password"
            value={password}
            placeholder="Digite sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <input
          className="p-1 w-min mx-auto justify-end mt-auto bg-gray-600 rounded-md cursor-pointer"
          type="submit"
          value="Entrar"
        />
      </form>
      {error && (
        <p className=" p-3 bg-amber-400 rounded-sm text-red-600 w-auto mt-2 mb-0">
          {error}
        </p>
      )}
    </div>
  );
};

export default Login;
