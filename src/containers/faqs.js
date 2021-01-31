import React from 'react'
import { Accordion, OptForm } from '../components'
import faqsData from '../fixtures/faqs.json'

export function FaqsContainer(){
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqsData.map(faq => (
        <Accordion.Item key={faq.id}>
          <Accordion.Header>{faq.header}</Accordion.Header>
          <Accordion.Body>{faq.body}</Accordion.Body>
        </Accordion.Item>
      ))}

      <OptForm>
        <OptForm.Input placeholder="Email adress" />
        <OptForm.Button>Try it now</OptForm.Button>
        <OptForm.Text>
          Ready to watch? Enter your email to create or start membership
        </OptForm.Text>
      </OptForm>
    </Accordion>
  )
}
