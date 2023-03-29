import { navLinks } from "../constants";

const Nav = ({ toggle }) => {
  let margin = toggle ? "mb-4" : "mr-10";

  const content = navLinks.map((nav, index) => (
    <li
      key={nav.id}
      className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
        index === navLinks.length - 1 ? "mr-0" : margin
      }`}
    >
      <a href={`#${nav.id}`}>{nav.title}</a>
    </li>
  ));
  return content;
};
export default Nav;
