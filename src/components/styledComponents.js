import styled from 'styled-components'
import { Header, Menu, Link } from 'semantic-ui-react'
import React from 'react'

export const JumboHeader = styled(Header)`
  font-size: 5rem;
  color: white;
  width: 100%;
  z-index: 3 !important;
`

export const Jumbotron = styled.div`
    background-position: ${props =>
      props.right ? 'right 15vw top 0% !important' : 'center'};
    background-size: ${props =>
      props.contain ? 'contain !important' : 'cover !important'};
    background-repeat: no-repeat !important;
    background: ${props => `url('${props.src}')`};
      


     height: ${props => (props.fullHeight ? '85vh !important' : '50vh')};
    display: grid;
}
`
export const JumboMessage = styled.div`
  background-color: rgba(0, 0, 0, 0) !important;
  margin: auto;
  justify-self: ;
  padding: 2rem;
`

export const SiteContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr 7rem;
  min-height: 100vh;
`

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #d3d3d3;
`
