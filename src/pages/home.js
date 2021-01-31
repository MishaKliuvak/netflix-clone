import React from 'react'
import { JumbotronContainer } from '../containers/jumbotron'
import { FaqsContainer } from '../containers/faqs'
import { FooterContainer } from '../containers/footer'
import { HeaderContainer } from '../containers/header'

import { OptForm, Feature } from '../components'

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited films, TV programs and more.</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>

          <OptForm>
            <OptForm.Input placeholder="Email adress" />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Text>
              Ready to watch? Enter your email to create or start membership
            </OptForm.Text>
          </OptForm>
        </Feature>

      </HeaderContainer>

      <JumbotronContainer/>
        <FaqsContainer/>
        <FooterContainer/>
    </>
  )
}
