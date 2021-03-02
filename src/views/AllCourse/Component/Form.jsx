import React, { useState } from "react";
import "./Input.css";

import { CCallout,CFormGroup,CLabel,CInputGroup,CInput,CInputGroupAppend,CButton } from '@coreui/react';


function CourseInput(props) {

  const [note, setNote] = useState({
    title: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  return (
    <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
        <CFormGroup>
          <div className="controls">
            <CInputGroup>
              <CInput id="appendedInputButton" size="16" type="text"
              name={props.name}
              onChange={handleChange}
              placeholder={props.placeholder}
              value={props.value}
              />
              <CInputGroupAppend>
                <CButton color="danger">Go!</CButton>
              </CInputGroupAppend>
            </CInputGroup>
          </div>
        </CFormGroup>
    </div>

  );
}

export default CourseInput;
