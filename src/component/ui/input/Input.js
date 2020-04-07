import React from 'react';
import PropTypes from 'prop-types';

import './input.scss'

export default function Input(props) {

  const htmlFor = `${props.control.type}-${Math.random()}`;

  const handlerInputChange = (event, callback) => {
  const target = event.target.value;
    const control = {
      ...props.control,
      touched: true,
      valid: props.control.validators.every(validator => validator(target)),
      value: target
    };
    callback && callback(props.formControlName, control)
  };

  const generationClassName = () => {
    const defaultClass = ['form-group'];
    (props.control.valid && props.control.touched) && defaultClass.push('has-success');
    (!props.control.valid && props.control.touched) && defaultClass.push('has-error');

    return defaultClass.join(' ');
  };

  return (
    <div className={generationClassName()} >
      {props.control.label && <label className="form-group__label" htmlFor={htmlFor}>{props.control.label}</label>}
      <input className={`form-group__control ${props.className.join(' ')}`}
             id={htmlFor}
             type={props.control.type}
             placeholder={props.control.placeholder}
             onChange={event => handlerInputChange(event, props.onChange)}
             defaultValue={props.control.value}/>
      <div className="form-group-underline" />
      {props.control.errorMessage &&
      (props.control.touched && !props.control.valid)
        ? <span className="form-help-text">{props.control.errorMessage}</span>
        :
        null}
      {props.control.successMessage &&
      (props.control.touched && props.control.valid)
        ? <span className="form-help-text">{props.control.successMessage}</span>
        :
        null}
    </div>
  )
}

Input.defaultProps = {
  type: 'text',
  value: '',
  valid: false,
  touched: false,
  className: [],
  placeholder: '',
  formControlName: null
};

Input.propTypes = {
  control: PropTypes.shape({
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    errorMessage: PropTypes.string,
    placeholder: PropTypes.string,
    successMessage: PropTypes.string,
    valid: PropTypes.bool.isRequired,
    touched: PropTypes.bool.isRequired,
    validators: PropTypes.arrayOf(PropTypes.func),
  }),
  formControlName: PropTypes.string.isRequired,
  extraClass: PropTypes.string,
  className: PropTypes.arrayOf(PropTypes.string),
};
