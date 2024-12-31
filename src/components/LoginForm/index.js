import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  LoginBackgroundContainer,
  FormContainer,
  WebsiteLogo,
  Form,
  InputContainer,
  CustomLabel,
  CustomInput,
  CheckBoxContainer,
  CheckBoxInput,
  SubmitButton,
  ErrorMsg,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    errMsg: '',
  }

  onSubmitFailure = errMsg => {
    this.setState({errMsg})
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  togglePasswordVisibility = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  render() {
    const {username, password, showPassword, errMsg} = this.state

    return (
      <LoginBackgroundContainer>
        <FormContainer>
          <WebsiteLogo>NXT WATCH</WebsiteLogo>
          <Form onSubmit={this.onSubmitForm}>
            <InputContainer>
              <CustomLabel htmlFor="username">USERNAME</CustomLabel>
              <CustomInput
                id="username"
                name="username"
                type="text"
                value={username}
                onChange={this.onChangeUserName}
                placeholder="Enter your username"
              />
            </InputContainer>
            <InputContainer>
              <CustomLabel htmlFor="password">PASSWORD</CustomLabel>
              <CustomInput
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={this.onChangePassword}
                placeholder="Enter your password"
              />
            </InputContainer>
            <CheckBoxContainer>
              <CheckBoxInput
                type="checkbox"
                checked={showPassword}
                onChange={this.togglePasswordVisibility}
              />
              <CustomLabel>Show Password</CustomLabel>
            </CheckBoxContainer>
            <SubmitButton type="submit">Login</SubmitButton>
            {errMsg && <ErrorMsg>{errMsg}</ErrorMsg>}
          </Form>
        </FormContainer>
      </LoginBackgroundContainer>
    )
  }
}

export default LoginForm
