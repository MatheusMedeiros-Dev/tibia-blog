import { useAuthValue } from "../context/AuthContext";

const Logout = () => {
  const { logout } = useAuthValue();
  return (
    <div>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
};

export default Logout;
