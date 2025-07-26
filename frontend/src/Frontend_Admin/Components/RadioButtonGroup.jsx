import React, { useEffect, useState } from "react";

const RadioButtonGroup = ({ options, onChange, defaultOption }) => {
  const [selectedValue, setSelectedValue] = useState();
  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
    onChange(event.target.value);
  };
  useEffect(() => {
    if (defaultOption && selectedValue !== defaultOption) {
      setSelectedValue(defaultOption);
    }
  }, [selectedValue]);

  return (
    <div className="form-check p-0">
      {options.map((option) => (
        <label key={option.value} className="form-check-label">
          <input
            className="form-check-input mx-2 rounded-circle"
            type="radio"
            name="radio-group"
            value={option.value}
            checked={defaultOption === option.value}
            onChange={handleRadioChange}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default RadioButtonGroup;
