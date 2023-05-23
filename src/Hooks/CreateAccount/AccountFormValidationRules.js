export default function validate(values) {
    let errors = {};
    if (!values.email) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.fname) {
        errors.fname = 'First name is required';
    }

    if (!values.lname) {
        errors.lname = 'Last name is required';
    }

    if (!values.team) {
        errors.team = 'Team is required';
    }

    if (!values.role) {
        errors.role = 'The role is required';
    }
    if (!values.sportBook && values.role === "sport-book") {
        errors.sportBook = 'sportBook is required';
    }
    if (!values.mobile_number) {
        errors.mobile_number = 'Mobile number is required';
    }
    return errors;
  };