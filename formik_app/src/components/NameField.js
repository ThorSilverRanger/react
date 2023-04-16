import React from "react";

const NameField = ({ handleChange, values, errors }) => {
  return (
    <div className="form-group">
      <label className="label" htmlFor="name">Ім'я:</label>
      <input className="input-field"
        type="text"
        id="name"
        name="name"
        value={values.name}
        onChange={handleChange}
      />
      {errors.name && <p className="error-message">{errors.name}</p>}
    </div>
  );
};

export default NameField;