// src/components/FormComponent.js

import React, { useState } from 'react';
import axios from 'axios';
import IndividualForm from './IndividualForm'
import '../FormComponent.css'; // Ensure this path is correct

const FormComponent = () => {
  const [forms, setForms] = useState([
    { name: '', email: '', message: '', nestedForms: [{ nestedName: '', nestedValue: '' }] }
  ]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const newForms = forms.map((form, i) => 
      i === index ? { ...form, [name]: value } : form
    );
    setForms(newForms);
  };

  const handleNestedFormChange = (e, index, nestedIndex) => {
    const { name, value } = e.target;
    const newForms = forms.map((form, i) => {
      if (i === index) {
        const newNestedForms = form.nestedForms.map((nestedForm, ni) =>
          ni === nestedIndex ? { ...nestedForm, [name]: value } : nestedForm
        );
        return { ...form, nestedForms: newNestedForms };
      }
      return form;
    });
    setForms(newForms);
  };

  const addForm = () => {
    setForms([...forms, { name: '', email: '', message: '', nestedForms: [{ nestedName: '', nestedValue: '' }] }]);
  };

  const addNestedForm = (index) => {
    const newForms = forms.map((form, i) =>
      i === index ? { ...form, nestedForms: [...form.nestedForms, { nestedName: '', nestedValue: '' }] } : form
    );
    setForms(newForms);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert form data to JSON
    const jsonData = JSON.stringify(forms);
    const blob = new Blob([jsonData], { type: 'application/json' });

    // Create a FormData object to upload the JSON file
    const data = new FormData();
    data.append('file', blob, 'data.json');

    try {
      const response = await axios.post('https://your-upload-url.com/upload', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('File uploaded successfully', response.data);
    } catch (error) {
      console.error('Error uploading file', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {forms.map((form, index) => (
          <IndividualForm
            key={index}
            formData={form}
            handleChange={handleChange}
            handleNestedFormChange={handleNestedFormChange}
            addNestedForm={addNestedForm}
            index={index}
          />
        ))}
        <button type="button" onClick={addForm}>Add usecase</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;