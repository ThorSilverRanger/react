import React from "react";

const EmailField = ({ handleChange, values, errors }) => {
  return (
    <div className="form-group">
      <label className="label" htmlFor="email">Електронна пошта:</label>
      <input className="input-field"
        type="email"
        id="email"
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      {errors.email && <p className="error-message">{errors.email}</p>}
    </div>
  );
};

export default EmailField;