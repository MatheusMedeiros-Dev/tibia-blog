import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 left-0 w-full z-10 p-3 bg-[#A67C52] ">
      <ul className="flex justify-center items-center space-x-4">
        <li>
          <NavLink to="/">
            <img
              className="h-8 w-auto"
              src="https://www.tibiawiki.com.br/images/7/76/Tibia_icon.png"
              alt="icone do Tibia"
            />
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="hover:bg-sky-700 rounded-sm">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
