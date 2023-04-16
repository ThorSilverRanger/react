import React from "react";

const PhoneField = ({ handleChange, values, errors }) => {
  return (
    <div className="form-group">
      <label className="label" htmlFor="phone">Телефон:</label>
      <input className="input-field"
        type="tel"
        id="phone"
        name="phone"
        value={values.phone}
        onChange={handleChange}
      />
      {errors.phone && <p className="error-message">{errors.phone}</p>}
    </div>
  );
};

export default PhoneField;