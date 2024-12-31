import styled from 'styled-components'

export const LoginBackgroundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9f9f9;
`

export const FormContainer = styled.div`
  background: #ffffff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
`

export const WebsiteLogo = styled.h1`
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  color: #e50914; /* Netflix-inspired red color */
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const InputContainer = styled.div`
  margin-bottom: 1.5rem;
`

export const CustomLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #333;
`

export const CustomInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  &:focus {
    border-color: #e50914;
    outline: none;
  }
`

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`

export const CheckBoxInput = styled.input`
  margin-right: 0.5rem;
`

export const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`

export const ErrorMsg = styled.p`
  color: red;
  font-size: 0.875rem;
  margin-top: 1rem;
  text-align: center;
`
