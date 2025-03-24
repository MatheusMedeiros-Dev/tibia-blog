import { auth } from "../firebase/config";
import { onAuthStateChanged, User } from "firebase/auth";
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { useAuthentication } from "../hooks/useAuthentication";

type AuthContextType = {
  user: User | null;
  error: string | null;
  loading: boolean | undefined;
  logout: () => Promise<void>;
};
type AuthProviderProps = {
  children: ReactNode;
  value: AuthContextType;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  error: null,
  loading: false,
  logout: () => Promise.resolve(),
});

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const { logout, error, loading } = useAuthentication();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  return (
    <AuthContext.Provider value={{ user, logout, error, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthValue() {
  return useContext(AuthContext);
}
