export default function validate(values) {
    let errors = {};
    
    if (!values.teamName) {
        errors.teamName = 'This field is required';
    }

    if (!values.teamCode) {
        errors.teamCode = 'This field is required';
    }

    if (!values.teamLogo) {
        errors.teamLogo = 'This field is required';
    }

    if (!values.religion) {
        errors.religion = 'This field is required';
    }
   
    if (!values.company) {
        errors.company = 'This field is required';
    }
    if (!values.opataID) {
        errors.opataID = 'This field is required';
    }
    return errors;
  };