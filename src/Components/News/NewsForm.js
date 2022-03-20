import React, { useState } from "react";
import "../../Components/FormStyles.css";
import { Formik } from "formik";

const NewsForm = () => {
  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }
  return (
    <Formik
      initialValues={{ title: "", content: "", image: "", category: "" }}
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
        setFieldValue,
      }) => (
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Titulo</label>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
            placeholder="Titulo"
          />
          {/* {errors.email && touched.email && errors.email} */}
          <label htmlFor="content">Contenido</label>
          <input
            type="text"
            name="content"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.content}
            placeholder="contenido"
          />
          <label htmlFor="image">Imagen</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={async (e) => {
              const imageBase64 = await getBase64(e.target.files[0]);
              setFieldValue("image", imageBase64);
            }}
          />

          {/* {errors.password && touched.password && errors.password} */}
          <label htmlFor="category">Categoria</label>
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
