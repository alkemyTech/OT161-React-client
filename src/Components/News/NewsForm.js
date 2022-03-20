import React, { useState } from "react";
import "../../Components/FormStyles.css";
import { Formik } from "formik";

const NewsForm = () => {
  return (
    <Formik
      initialValues={{ title: "", content: "", category: "" }}
      //   validate={(values) => {
      //     const errors = {};
      //     if (!values.email) {
      //       errors.email = "Required";
      //     } else if (
      //       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      //     ) {
      //       errors.email = "Invalid email address";
      //     }
      //     return errors;
      //   }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
          />
          {/* {errors.email && touched.email && errors.email} */}
          <input
            type="text"
            name="content"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.content}
          />
          {/* {errors.password && touched.password && errors.password} */}
          <select
            className="select-field"
            name="category"
            value={values.category || ""}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select category
            </option>
            <option value="1">Demo option 1</option>
            <option value="2">Demo option 2</option>
            <option value="3">Demo option 3</option>
          </select>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
};

export default NewsForm;
