import React, { useState } from 'react';
import '../FormStyles.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useFormik } from 'formik';
import * as Yup from 'yup';
const TestimonialForm = ({ method = 'POST' }) => {
  const [previewImage, setPreviewImage] = useState();
  const SUPPORTED_FORMATS = /(jpg|png)/g;
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    setFieldTouched,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: {
      name: '',
      description: '',
      photo: null,
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .required('El nombre es un campo requerido')
        .min(4, 'El nombre deberia contenter mas de 4 caracteres'),
      description: Yup.string().required(
        'La description es un campo requerido'
      ),
      photo: Yup.mixed()
        .required('La imagen es requerida')
        .test('fileType', 'El formato no es correcto', (data) => {
          if (!SUPPORTED_FORMATS.test(data?.type)) return false;
          setPreviewImage(URL.createObjectURL(data));
          return true;
        }),
    }),
    onSubmit: handleTestimonialFetch,
  });

  function handleTestimonialFetch(data) {
    console.log(data);
  }

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        className="input-field"
        type="text"
        name="name"
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Testimonial Title"
      />
      <span className="input-error">{touched.name && errors.name}</span>
      <CKEditor
        editor={ClassicEditor}
        onBlur={() => setFieldTouched('description', true)}
        onChange={(event, editor) => {
          const data = editor.getData();
          setFieldValue('description', data);
        }}
      />
      <span className="input-error">
        {touched.description && errors.description}
      </span>

      <label className="input-file">
        Subir imagen
        <input
          type="file"
          accept="image/png, image/jpeg"
          onChange={(event) => {
            setFieldTouched('photo', true);
            setFieldValue('photo', event.target.files[0]);
          }}
        />
      </label>
      <span className="input-error">{touched.photo && errors.photo}</span>
      {previewImage && (
        <img
          src={previewImage}
          alt="preview"
          width={100}
          height={100}
          style={{ objectFit: 'cover' }}
        />
      )}
      <button className="submit-btn" type="submit">
        Send
      </button>
    </form>
  );
};

export default TestimonialForm;
