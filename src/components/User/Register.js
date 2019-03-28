import React, { Component } from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button, FormFeedback,
  } from 'reactstrap';
import validator from 'validator';
import { withRouter, Route } from 'react-router-dom'
import { auth } from '../helpers/auth';


import "./Register.css";

function setErrorMsg(error) {
  return {
    registerError: error.message
  };
}

class Register extends Component{

  constructor(props) {
    super(props);
      this.state = {
      'registerError': null,
      'email': '',
      'password': '',
      'confirm': '',

      validate: {
        emailState: '',
        passwordState: '',
        confirmState:'',
      },
    }
    this.handleChange = this.handleChange.bind(this);
  }
   
    validateEmail(e) {
    const { validate } = this.state
      if (validator.isEmail(e.target.value)) {
        validate.emailState = 'has-success'
      } else {
        validate.emailState = 'has-danger'
      }
      this.setState({ validate })
    }
    
    validatePassword(e) {
      const { validate } = this.state
        if ((e.target.value).length>5) {
          validate.passwordState = 'has-success'
        } else {
          validate.passwordState = 'has-danger'
        }
        this.setState({ validate })
      }
    confirmPassword(e) {
        const { validate } = this.state
          if ((e.target.value)===this.state.password) {
            validate.confirmState = 'has-success'
          } else {
            validate.confirmState = 'has-danger'
          }
          this.setState({ validate })
        }
  handleChange = async (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    await this.setState({
      [ name ]: value,
    });
  }

  submitForm(e) {
    e.preventDefault();
    auth(this.state.email, this.state.password).catch(e =>
      this.setState(setErrorMsg(e))
    );
  }
  
      render() {
        const {email, password, confirm } = this.state;
        return (
          <Container className="Register" >
            <h2>Registration</h2>
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
                    valid={ this.state.validate.emailState === 'has-success' }
                    invalid={ this.state.validate.emailState === 'has-danger' }
                    onChange={ (e) => {
                                this.handleChange(e)
                                this.validateEmail(e)
                              } }
                  />
                  <FormFeedback>
                  Please input a correct email
                  </FormFeedback>
                  <FormFeedback valid>
                  Checks out
                  </FormFeedback>
                  </FormGroup>

                  <FormGroup>
                  <Label>Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    value={ password }
                    valid={ this.state.validate.passwordState === 'has-success' }
                    invalid={ this.state.validate.passwordState === 'has-danger' }
                    onChange={ (e) => {
                      this.handleChange(e)
                      this.validatePassword(e)
                    }
                  }
                />
                <FormFeedback valid>
                    Password is valid                 
                </FormFeedback>
                  <FormFeedback>
                    Password don't work. Probably too short                  
                </FormFeedback>
                </FormGroup>

                <FormGroup>
                <Label>Confirm Password</Label>
                  <Input
                    type="password"
                    name="confirm"
                    id="confirm"
                    value={ confirm }
                    valid={ this.state.validate.confirmState === 'has-success' }
                    invalid={ this.state.validate.confirmState === 'has-danger' }
                    onChange={ (e) => {
                      this.handleChange(e)
                      this.confirmPassword(e)
                    }}
                />
                <FormFeedback valid>
                    Good job they match                 
                </FormFeedback>
                  <FormFeedback>
                    Password don't match                  
                </FormFeedback>
             </FormGroup>
              </Col>
              {this.state.registerError && (
              <div className="alert alert-danger" role="alert">
              <span
              className="glyphicon glyphicon-exclamation-sign"
              aria-hidden="true"
            />
            <span className="sr-only">Error:</span>
            &nbsp;{this.state.registerError}
          </div>
            )}
              <div>
              <Route render={({history}) => (
              <Button onClick={() => { history.push('/login') }}>Return to Login</Button>
              )} />
              <div className="divider"/>
              <Route render={({history}) => (
              <Button onClick={() => { history.push('/') }}>Return to Register</Button>
              )} />
              <div className="divider"/>
              <Button color="primary"	type="submit">Register</Button>
              </div>
          </Form>
          </Container>
        );

      }
  }
  export default withRouter(Register)
