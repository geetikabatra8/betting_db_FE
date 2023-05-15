import React from 'react';
import PropTypes from 'prop-types';
export default function Navbar(props) {
  return (
    <div>{props.name}</div>
  )
} 

Navbar.propTypes = {
   name:PropTypes.string.isRequired
};

Navbar.defaultProps = {
 name:'header'
};