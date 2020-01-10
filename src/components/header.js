import React from 'react'
import { Link } from 'gatsby'
import { Container, Menu, Divider } from 'semantic-ui-react'

const LinkedItem = ({ children, ...props }) => (
  <Menu.Item as={Link} activeClassName="active" {...props}>
    {children}
  </Menu.Item>
)

const Header = ({ siteTitle }) => (
  <div style={{ margin: '0 auto 1rem auto', maxWidth: '100rem' }}>
    {/* <Container fluid> */}
    <Menu secondary pointing fluid>
      <LinkedItem to="/">{siteTitle}</LinkedItem>
      <Menu.Menu position="right">
        <LinkedItem to="/about">About</LinkedItem>
        <LinkedItem to="/contact">Contact</LinkedItem>
        <LinkedItem to="/gallery">Gallery</LinkedItem>
        <LinkedItem to="/recordings">Recordings</LinkedItem>
      </Menu.Menu>
    </Menu>
    {/* </Container> */}
  </div>
)

export default Header
