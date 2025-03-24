import { useEffect, useState } from "react";
import { useAuthentication } from "../hooks/useAuthentication";

// Tipos
type User = {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const [displayName, setDisplayName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const { createUser, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");

    if (password !== confirmPassword) {
      setError("As senhas devem ser iguais");
      console.log(error);
      return;
    }
    const user: User = {
      displayName,
      email,
      password,
      confirmPassword,
    };

    await createUser(user);
  };
  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);
  return (
    <div className="flex  justify-center items-center min-w-screen min-h-[500px]">
      <div className="w-[400px] h-[300px] bg-white">
        <h1 className="w-full h-auto text-center">Cadastro:</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-wrap flex-col h-[250px]"
        >
          <label>
            <span>Nickname: </span>
            <input
              className="border"
              type="text"
              name="displayName"
              value={displayName}
              placeholder="Digite seu nick"
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </label>
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
          <label>
            <span>Confirme sua senha:</span>
            <input
              className="border"
              name="confirmPassword"
              type="password"
              value={confirmPassword}
              placeholder="Digite sua senha novamente"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>

          {!loading && (
            <input
              className="p-1 w-min mx-auto justify-end mt-auto bg-gray-600 rounded-md cursor-pointer"
              type="submit"
              value="Cadastrar"
            />
          )}

          {loading && (
            <input
              className="p-1 w-min mx-auto justify-end mt-auto bg-gray-600 rounded-md"
              type="submit"
              value="Aguarde..."
              disabled
            />
          )}

          {error && (
            <p className=" p-3 bg-amber-400 rounded-sm text-red-600 w-auto mt-2 mb-0">
              {error}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Register;
