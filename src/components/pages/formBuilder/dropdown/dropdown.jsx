import "./dropdown.css";

export const Dropdown = ({ selectedFormType, isDropdownOpen, formType, toggleDropdown, handleTypeSelect }) => (
  <div className="dropdown-button-container">
    <div className="dropdown-container">
      <button onClick={toggleDropdown} className="dropdown-button">
        {selectedFormType}
      </button>
      {isDropdownOpen && (
        <ul className="dropdown-list">
          {formType.map((type, index) => (
            <li key={index} className="dropdown-item" onClick={() => handleTypeSelect(type)}>
              {type}
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);


