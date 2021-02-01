import React, { useState, useContext } from 'react'
import { FirebaseContext } from '../context/firebase'

import { HeaderContainer } from '../containers/header'
import { FooterContainer } from '../containers/footer'
import { Form } from '../components'

import * as ROUTES from '../constants/routes'

export default function SignIn() {
  const { firebase } = useContext(FirebaseContext)
  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const isInvalid = password === '' || emailAddress === ''
  const handleSignIn = (event) => {
    event.preventDefault()
  }

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          { error && <Form.Error>{error}</Form.Error> }

          <Form.Base onSubmit={handleSignIn} method="POST">
            <Form.Input
              placeholder="Email address"
              value={emailAddress}
              type="email"
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              placeholder="Password"
              value={password}
              autoComplete="off"
              type="password"
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit
              disabled={isInvalid}
              type="submit"
            >
              Sign In
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Netflix? <Form.Link to={ROUTES.SIGN_UP}>Sign up now</Form.Link>
          </Form.Text>
          <Form.SmallText>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more
          </Form.SmallText>
        </Form>
      </HeaderContainer>
      <FooterContainer/>
    </>
  )
}
