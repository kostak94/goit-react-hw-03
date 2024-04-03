import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "../PhoneBook.module.css";

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = ({ addContact }) => {
  const regex = "^[0-9]*$";

  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Must be minimum 3 characters")
      .max(50, "Must be maximum 50 characters")
      .required("Name is required"),
    number: Yup.string()
      .matches(regex, "Enter a digits")
      .min(7, "Must be 7 digit format")
      .max(7, "Must be 7 digit format")
      .required("Number is required"),
  });

  function handleSubmit(values, actions) {
    addContact({ ...values, id: nanoid() });
    actions.resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form className={css.form}>
        <div>
          <label className={css.label}>
            Name
            <Field className={css.input} type="text" name="name" />
            <ErrorMessage name="name" component="span" className={css.error} />
          </label>
        </div>
        <div>
          <label className={css.label}>
            Number
            <Field className={css.input} type="text" name="number" />
            <ErrorMessage
              component="span"
              name="number"
              className={css.error}
            />
          </label>
        </div>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
