import { auth } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";

export const useAuthentication = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>();

  //cleanup
  const [cancelled, setCancelled] = useState<boolean>(false);

  // Create account
  const createUser = async (data: {
    email: string;
    password: string;
    displayName: string;
  }) => {
    setError(null);

    setLoading(true);

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(user, { displayName: data.displayName });
      setLoading(false);
      return user;
    } catch (error: any) {
      console.log(error.message);
      console.log(typeof error.message);

      let systemErrorMessage;

      if (error.message.includes("Password")) {
        systemErrorMessage = "A senha deve conter pelo menos 6 caracteres.";
      } else if (error.message.includes("email-already")) {
        systemErrorMessage = "E-mail já cadastrado.";
      } else {
        systemErrorMessage = "Ocorreu um error, tente novamente mais tarde.";
      }
      setError(systemErrorMessage);
    } finally {
      if (!cancelled) {
        setLoading(false);
      }
    }
  };

  // logout
  const logout = async () => {
    if (cancelled === false) {
      console.log("x");
      return;
    }

    try {
      await signOut(auth);
    } catch (error) {
      console.error("Erro ao sair:", error);
    }
  };

  // login
  const login = async (data: { email: string; password: string }) => {
    if (cancelled === false) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      setLoading(false);
    } catch (error: any) {
      console.log("Erro completo do Firebase:", error);
      let systemErrorMessage;

      if (error.code === "auth/invalid-credential") {
        systemErrorMessage = "Usuário ou senha incorreta.";
      } else if (data.email === "") {
        systemErrorMessage = "Digite seu email.";
      } else if (data.password === "") {
        systemErrorMessage = "Digite sua senha.";
      } else {
        systemErrorMessage = "Ocorreu um erro, tente novamente mais tarde.";
      }
      setError(systemErrorMessage);
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { createUser, error, loading, logout, login };
};
