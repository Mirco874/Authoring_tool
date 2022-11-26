import { Dropdown } from "../Dropdown/Dropdown";
import "./NavBar.css";
export const Navbar = ({ title, dropdownList }) => {
  return (
    <nav className="nav-bar d-flex flex-row justify-content-between">
      <h1 className="nav-title">{title}</h1>
      {dropdownList.map((dropdownItem)=>(<Dropdown key={dropdownItem.buttonText} dropdowncontent={dropdownItem}  />))}
    </nav>
  );
};
Navbar.defaultProps = {
  title: "",
  dropdownList: [
    {
      buttonText: "",
      options: [{text: "",funct: () => {},}],
    },
  ],
};
