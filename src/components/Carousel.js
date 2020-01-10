import React from 'react'
import Slider from 'react-slick'

import { Image, Container } from 'semantic-ui-react'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import styled from 'styled-components'

import { graphql, useStaticQuery } from 'gatsby'

export default function Carousel() {
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(filter: { absolutePath: { regex: "/(carousel)/" } }) {
        edges {
          node {
            name
            extension
            dir
            modifiedTime
            publicURL
          }
        }
      }
    }
  `)

  const images = allFile.edges

  console.log(images)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    centerMode: true,
  }

  const CarouselImage = styled.div`
    background: url(${props => props.src});
    height: 70vh;
    width: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  `

  return (
    <Slider {...settings}>
      {images.map(i => (
        <Container fluid>
          <CarouselImage src={i.node.publicURL} />
          {/* <Image size="big" src={i.node.publicURL} /> */}
        </Container>
      ))}
    </Slider>
  )
}
