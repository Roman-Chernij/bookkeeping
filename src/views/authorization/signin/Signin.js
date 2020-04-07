import React, { Component, Fragment } from 'react';
import { generateFormControl } from "../../../component/ui/input/form-control/form-control";
import { required } from "../../../component/ui/input/validators/validatars";
import Form from "../../../component/ui/form/Form";
import Input from "../../../component/ui/input/Input";
import Button from "../../../component/ui/button/Button";
import Reference from "../../../component/ui/reference/Reference";

export default class SignIn extends Component {

  state = {
    isValidForm: false,
    formControls: {
      email: generateFormControl({
        type: 'email',
        label: 'Email',
        placeholder: 'Введите email',
        errorMessage: 'Не коректный email',
        successMessage: 'Все пучком'
      }, [required]),
      password: generateFormControl({
        type: 'password',
        label: 'Пароль',
        placeholder: 'Введите пароль',
        errorMessage: 'Не коректный пароль',
        successMessage: 'Все пучком'
      }, [required]),
      name: generateFormControl({
        type: 'text',
        label: 'Имя',
        placeholder: 'Введите имя',
        errorMessage: 'Не коректный имя',
        successMessage: 'Все пучком'
      }, [required])
    }
  };

  onChange = (name, control) => {
    const cont = {};
    cont[name] = control;

    const newControl = {
      ...this.state.formControls,
      ...cont
    };
    this.setState(    {
      isValidForm: Object.keys(newControl).every(key => newControl[key].valid),
      formControls: newControl
    })
  };

  render() {
    const {email, password, name} = this.state.formControls;
    return (
      <Fragment>
        <p className="text-center">Войдите для работы</p>
        <Form className="test">
          <Input className={['underlined']}
                 formControlName='email'
                 control={email}
                 onChange={this.onChange}/>
          <Input className={['underlined']}
                 formControlName='password'
                 control={password}
                 onChange={this.onChange}/>
          <Input className={['underlined']}
                 formControlName='name'
                 control={name}
                 onChange={this.onChange}/>
          <div className="form-group">
            <Button
              OnClick={result => console.log('Button OnClick >>>> ', result)}
              disabled={!this.state.isValidForm}
              className={['button-block button-primary']}
              type="submit">Зарегистрироваться</Button>
          </div>
          <div className="form-group">
            <p className="text-center">Уже есть аккаунт? <Reference toGo="/authorization/login">Войти!</Reference></p>

          </div>
        </Form>
      </Fragment>
    );
  }
}
