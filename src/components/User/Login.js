import React, { Component } from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button
  } from 'reactstrap';
import { withRouter, Route } from 'react-router-dom'
import { login, resetPassword } from '../helpers/auth';

import "./Login.css";

function setErrorMsg(error) {
  return {
    loginMessage: error
  };
}


class Login extends Component{

    constructor(props) {
        super(props);
          this.state = {
          'email': '',
          'password': '',
          'loginMessage': null,
        };
      this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange =  (event) => {
        const { target } = event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const { name } = target;
        this.setState({
          [ name ]: value,
        });
      }
    
      submitForm(e) {
        e.preventDefault();
        login(this.state.email, this.state.password).catch(error => {
          this.setState(setErrorMsg('Invalid email/password.'));
        });
      }
      resetPassword = () => {
        resetPassword(this.state.email)
          .then(() =>
            this.setState(
              setErrorMsg(`Password reset email sent to ${this.state.email}.`)
            )
          )
          .catch(error => this.setState(setErrorMsg(`Email address not found.`)));
      };
      render() {
        const {email, password} = this.state;
        return (
          <Container className="Login">
            <h2>Sign In</h2>
            <Form className="form" onSubmit={ (e) => this.submitForm(e) }>
              <Col>
                <FormGroup>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="myemail@email.com"
                    value={ email }
                    onChange={ (e) => {
                      this.handleChange(e)
                    } }
                  />
                </FormGroup>
                <FormGroup>
                  <Label >Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="********"
                    value={ password }
                    onChange={ (e) => {
                      this.handleChange(e)
                    } }
                    />
                </FormGroup>
              </Col>
              {this.state.loginMessage && (
          <div className="alert alert-danger" role="alert">
            <span
              className="glyphicon glyphicon-exclamation-sign"
              aria-hidden="true"
            />
            <span className="sr-only">Error:</span>
            &nbsp;{this.state.loginMessage}{' '}
            <a href="#" onClick={this.resetPassword} className="alert-link">
              Forgot Password?
            </a>
          </div>
        )}
              <Route render={({history}) => (
              <Button onClick={() => { history.push('/register') }}>Return to Register</Button>
              )} />
              <div className="divider"/>
              <Button color="primary" type="submit">Login</Button>

          </Form>
          </Container>
        );

      }
  }
  export default withRouter(Login)