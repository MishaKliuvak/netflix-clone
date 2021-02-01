import React from 'react'
import { Container, Error, Title, Text, SmallText, Link, Input, Submit, Base } from './styles/form'

export default function Form({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      {children}
    </Container>
  )
}

Form.Error = function FormError({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>
}

Form.Base = function FormBase({ children, ...restProps }) {
  return <Base {...restProps}>{children}</Base>
}

Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

Form.Text = function FormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}

Form.SmallText = function FormSmallText({ children, ...restProps }) {
  return <SmallText {...restProps}>{children}</SmallText>
}

Form.Link = function FormLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>
}

Form.Input = function FormInput({ ...restProps }) {
  return <Input {...restProps} />
}

Form.Submit = function FormSubmit({ children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>
}
