import React from 'react'

import { Button, Container, Divider } from 'semantic-ui-react'
import Layout from '../components/layout'
import ContactForm from '../components/ContactForm'

const Contact = ({ location }) => (
  <Layout location={location}>
    <Container text>
      <ContactForm />
    </Container>
  </Layout>
)

export default Contact
