import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import NameField from "./NameField";
import EmailField from "./EmailField";
import PhoneField from "./PhoneField";

const FormComponent = () => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Поле 'Ім'я' є обов'язковим"),
    email: Yup.string()
      .email("Некоректний формат електронної пошти")
      .required("Поле 'Електронна пошта' є обов'язковим"),
    phone: Yup.string()
      .matches(/^[0-9]{12}$/, "Некоректний номер телефону")
      .required("Поле 'Телефон' є обов'язковим"),
  });

  const handleSubmit = (values) => {
    // Обробка даних форми після валідації
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleChange, values, errors }) => (
        <Form className="form-container">
          <NameField handleChange={handleChange} values={values} errors={errors} />
          <EmailField handleChange={handleChange} values={values} errors={errors} />
          <PhoneField handleChange={handleChange} values={values} errors={errors} />
          <button className="submit-button" type="submit">Надіслати</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;