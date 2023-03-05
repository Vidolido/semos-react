const Dropdown = ({ options, onDropDownChange }) => {
    return (
      <div>
        <label>Choose an app:</label>
        <select name='app' onChange={onDropDownChange}>
          {options.map((option) => {
            return (
              <option value={option.name} key={option.id}>
                {option.name}
              </option>
            );
          })}
        </select>
      </div>
    );
  };

export default Dropdown;