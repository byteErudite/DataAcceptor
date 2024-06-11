// src/components/IndividualForm.js

import React from 'react';
import NestedForm from './NestedForm';

const IndividualForm = ({ formData, handleChange,handleNestedFormChange, addNestedForm, index }) => {
  return (
    <div className="form-instance">
      <div>
        <label>
          Name:
          <input
            type="text"
            name="usecase id"
            value={formData.name}
            onChange={(e) => handleChange(e, index)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Banner:
          <input
            type="text"
            name="banner"
            value={formData.email}
            onChange={(e) => handleChange(e, index)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Behaviour Label:
          <input
            type="text"
            name="behaviour label"
            value={formData.email}
            onChange={(e) => handleChange(e, index)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Registration Date:
          <input
            type="text"
            name="registration date"
            value={formData.email}
            onChange={(e) => handleChange(e, index)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Membership Start Date:
          <input
            type="text"
            name="membership start date"
            value={formData.email}
            onChange={(e) => handleChange(e, index)}
            required
          />
        </label>
      </div>
      <div>
        <h3>Transactions</h3>
        {formData.nestedForms.map((nestedForm, nestedIndex) => (
          <NestedForm
            key={nestedIndex}
            nestedData={nestedForm}
            handleNestedChange={(e) => handleNestedFormChange(e, index, nestedIndex)}
          />
        ))}
        <button type="button" onClick={() => addNestedForm(index)}>
          Add Transaction
        </button>
      </div>
    </div>
  );
};

export default IndividualForm;
