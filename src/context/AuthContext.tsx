import { auth } from '../firebase/config'
import { onAuthStateChanged, User } from 'firebase/auth'
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react'
import { useAuthentication } from '../hooks/useAuthentication'

type AuthContextType = {
  user: User | null
  logout: () => Promise<void>
}
type AuthProviderProps = {
  children: ReactNode
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  logout: () => Promise.resolve(),
})

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const { logout } = useAuthentication()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser)
    return () => unsubscribe()
  }, [])

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthValue() {
  return useContext(AuthContext)
}
