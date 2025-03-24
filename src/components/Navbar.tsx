import { NavLink } from "react-router-dom";
import getActiveLinkClass from "../utils/getActiveLinkClass";
import { useAuthValue } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuthValue();
  return (
    <nav className="sticky top-0 left-0 w-full p-3 bg-[#A67C52]">
      <ul className="flex  items-center space-x-4 justify-between">
        <div className="flex">
          <li>
            <NavLink to="/">
              <img
                className="h-8 w-auto"
                src="https://www.tibiawiki.com.br/images/7/76/Tibia_icon.png"
                alt="icone do Tibia"
              />
            </NavLink>
          </li>
        </div>
        <div className="flex space-x-4">
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${getActiveLinkClass({
                  isActive,
                })} hover:bg-sky-700 rounded-sm`
              }
            >
              Sobre
            </NavLink>
          </li>
          {!user && (
            <>
              <li>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    `${getActiveLinkClass({
                      isActive,
                    })} hover:bg-sky-700 rounded-sm`
                  }
                >
                  Cadastre-se
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `${getActiveLinkClass({
                      isActive,
                    })} hover:bg-sky-700 rounded-sm`
                  }
                >
                  Entrar
                </NavLink>
              </li>
            </>
          )}
          {user && (
            <>
              <li>
                <NavLink
                  to="/posts/create"
                  className={({ isActive }) =>
                    `${getActiveLinkClass({
                      isActive,
                    })} hover:bg-sky-700 rounded-sm`
                  }
                >
                  Novo post
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Dashboard"
                  className={({ isActive }) =>
                    `${getActiveLinkClass({
                      isActive,
                    })} hover:bg-sky-700 rounded-sm`
                  }
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <button
                  className="hover:bg-sky-700 rounded-sm cursor-pointer"
                  onClick={() => logout()}
                >
                  Sair
                </button>
              </li>
            </>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
