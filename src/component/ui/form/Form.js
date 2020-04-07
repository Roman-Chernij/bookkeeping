import React from 'react';
import PropTypes from 'prop-types';
import Input from "../input/Input";

const Form = props => {
  return (
    <form className="form" onSubmit={event => event.preventDefault()}>
      {
        props.children.map((item, index) => (
          typeof item.type === 'function' ?
            <item.type
              key={index}
              {...item.props}/>
            :
            item
        ))
      }
    </form>
  )
};

Input.defaultProps = {
  addPadding: false
};

Input.propTypes = {
  children: PropTypes.element
};

export default Form;
