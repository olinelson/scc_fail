import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { Button, Container, Divider } from 'semantic-ui-react'
import Layout from '../components/layout'
import Carousel from '../components/Carousel'

const Gallery = () => (
  <Layout>
    <Container>
      <h1>Gallery</h1>
      <Carousel />
      <Divider hidden />
    </Container>
  </Layout>
)

export default Gallery
