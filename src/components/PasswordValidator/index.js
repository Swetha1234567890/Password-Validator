// Write your code here
import {useState} from 'react'

import {
  Container,
  CardContainer,
  Heading,
  Para,
  Input,
  ErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [isPassword, setPassword] = useState('')

  const onChangePassword = event => setPassword(event.target.value)

  return (
    <Container>
      <CardContainer>
        <Heading>Password Validator</Heading>
        <Para>Check how strong and secure is your password</Para>
        <Input type="password" onChange={onChangePassword} value={isPassword} />
        {isPassword.length > 7 ? (
          ''
        ) : (
          <ErrorMsg>Your password must be at least 8 characters</ErrorMsg>
        )}
      </CardContainer>
    </Container>
  )
}

export default PasswordValidator
