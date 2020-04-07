export const generateFormControl = (config = {}, validator = []) => (
  {
    value: '',
    type: '',
    label: '',
    errorMessage: '',
    placeholder: '',
    successMessage: '',
    valid: !validator.length,
    touched: false,
    ...config,
    ...createValidators(validator),
  }
);

const createValidators = validator => (
  {
    validators: [...validator]
  }
);
