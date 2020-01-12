import React, { useEffect, useState } from 'react'

import { Image, Container, Button, Icon } from 'semantic-ui-react'

import styled from 'styled-components'

import { graphql, useStaticQuery } from 'gatsby'

import Carousel from 'nuka-carousel'

export default function CarouselComponent() {
  const data = useStaticQuery(graphql`
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
      site {
        siteMetadata {
          siteURL
        }
      }
    }
  `)

  let siteURL = data.site.siteMetadata.siteURL

  const images = data.allFile.edges

  const CarouselImage = styled.div`
    background: url(${props => siteURL + props.src});
    height: 50vh;
    width: auto;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  `

  return (
    <Carousel
      heightMode="first"
      width="100%"
      style={{ margin: 'auto', maxWidth: '90vw' }}
      renderCenterLeftControls={({ previousSlide }) => (
        <Icon
          size="big"
          name="arrow alternate circle left outline"
          style={{ cursor: 'pointer' }}
          onClick={previousSlide}
          color="grey"
        />
      )}
      renderCenterRightControls={({ nextSlide }) => (
        <Icon
          size="big"
          name="arrow alternate circle right outline"
          style={{ cursor: 'pointer' }}
          onClick={nextSlide}
          color="grey"
        />
      )}
    >
      {images.map(i => (
        <CarouselImage src={siteURL + i.node.publicURL} />
      ))}
    </Carousel>
  )
}
