import React from 'react';

const NestedForm = ({ nestedData, handleNestedChange, nestedIndex }) => {
  return (
    <div className="nested-form-instance">
      <div>
        <label>
          id:
          <input
            type="text"
            name="id"
            value={nestedData.nestedName}
            onChange={(e) => handleNestedChange(e, nestedIndex)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          purchase date:
          <input
            type="text"
            name="purchase date"
            value={nestedData.nestedValue}
            onChange={(e) => handleNestedChange(e, nestedIndex)}
            required
          />
        </label>
      </div>
    </div>
  );
};

export default NestedForm;