import "./Dropdown.css";
export const Dropdown = ({dropdowncontent}) => {
  const {buttonText,options}=dropdowncontent;
  return (
    <div className="dropdown">
      <span>{buttonText}</span>
      <div className="dropdown-content">
        {options.map((option) => (
          <button className="btn btn-light" key={option.text} onClick={option.funct}>
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

Dropdown.defaultProps={
  dropdowncontent: {
        buttonText:"",
        options: [{text: "",funct: () => {}}]
  }
}
