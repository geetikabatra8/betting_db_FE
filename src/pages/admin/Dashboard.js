import React from 'react'
import ValidateForm from "form-validation-react";
const Dashboard = () => {
  return (
    <div className="sssd">

    <ValidateForm
      rules={{

        validateRequired: {
          action: "input_red_border",
          notvalidated: (notFilledInputs) => {
            console.log("Not filled required inputs", notFilledInputs.pendingProps);
          }
        },

        ValidateMinMax: {
          when: "onblur",
          message : {
              min: "Full name must be at least 4 characters",
              max: "Full name must be at most 8 characters"
          }
        }

      }}
    >
      <form>
        <input min={4} max={8} type="text" name="full_name" required />
        <input required type="text" name="full_name" />
        <input required type="email" name="email" />
        <button type="submit">Submit</button>
      </form>
    </ValidateForm>
    
  </div>
  )
}
export default Dashboard;