import { navLinks } from "../constants";
import { Link } from "react-router-dom";

const Nav = ({ toggle }) => {
  let margin = toggle ? "mb-4" : "mr-10";

  const content = navLinks.map((nav, index) => (
    <li
      key={nav.id}
      className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${margin}`}
    >
      <Link to={`/${nav.id}`}>{nav.title}</Link>
    </li>
  ));
  return content;
};
export default Nav;
