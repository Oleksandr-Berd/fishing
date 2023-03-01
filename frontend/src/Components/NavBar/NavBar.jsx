import { Link } from "react-router-dom";
import * as SC from "./NavBar.styled";
import { Outlet } from "react-router-dom";

export const NavBar = () => {
  const navItem = [
    { href: "home", text: "Home" },
    { href: "newData", text: "Add your own data" },
    { href: "region", text: "Fishing locations" },
    { href: "fishes", text: "Fishes" },
  ];

  return (
    <nav>
      {navItem.map(({ href, text }) => (
        <Link to={href} key={href}>
          <SC.NavLinkStyled> {text}</SC.NavLinkStyled>
        </Link>
      ))}
      <Outlet />
    </nav>
  );
};
