import React, { useState } from 'react'
import { Link, navigate } from 'gatsby'
import { Menu, Responsive, Sidebar, Icon } from 'semantic-ui-react'

function Nav({ siteTitle }) {
  const [visible, setVisible] = useState(false)

  const LinkedItem = ({ children, ...props }) => (
    <Menu.Item as={Link} activeClassName="active" {...props}>
      {children}
    </Menu.Item>
  )

  return (
    <>
      <Responsive minWidth={Responsive.onlyComputer.minWidth}>
        <div style={{ margin: '0 auto 1rem auto', maxWidth: '100rem' }}>
          <Menu secondary pointing fluid onItemClick={() => setVisible(false)}>
            <LinkedItem to="/">{siteTitle}</LinkedItem>
            <Menu.Menu position="right">
              <LinkedItem to="/about">About</LinkedItem>
              <LinkedItem to="/contact">Contact</LinkedItem>
              <LinkedItem to="/gallery">Gallery</LinkedItem>
              <LinkedItem to="/recordings">Recordings</LinkedItem>
            </Menu.Menu>
          </Menu>
        </div>
      </Responsive>

      <Responsive as={Menu} maxWidth={Responsive.onlyTablet.maxWidth}>
        <Sidebar
          as={Menu}
          direction="right"
          animation="overlay"
          icon="labeled"
          onHide={() => setVisible(false)}
          vertical
          visible={visible}
          width="thin"
          onItemClick={() => setVisible(false)}
        >
          <Menu.Item onClick={() => setVisible(!visible)}>
            <Icon size="large" name="close" />
          </Menu.Item>

          <LinkedItem to="/">Home</LinkedItem>
          <LinkedItem to="/about">About</LinkedItem>
          <LinkedItem to="/contact">Contact</LinkedItem>
          <LinkedItem to="/gallery">Gallery</LinkedItem>
          <LinkedItem to="/recordings">Recordings</LinkedItem>
        </Sidebar>

        <Menu borderless fixed="top">
          <Menu.Menu position="left">
            <Menu.Item onClick={() => navigate('/')}>
              <h2>SCC</h2>
            </Menu.Item>
          </Menu.Menu>
          <Menu.Menu position="right">
            <Menu.Item onClick={() => setVisible(!visible)}>
              <Icon size="large" name="bars" />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Responsive>
    </>
  )
}

export default Nav

// <Responsive
//               as={Button}
//               content='Switch to mobile version'
//               icon='mobile'
//               labelPosition='left'
//               minWidth={Responsive.onlyTablet.minWidth}
//             />

//             <Segment.Group>
//     <Responsive as={Segment} {...Responsive.onlyMobile}>
//       Mobile
//     </Responsive>
//     <Responsive as={Segment} {...Responsive.onlyTablet}>
//       Tablet
//     </Responsive>
//     <Responsive as={Segment} {...Responsive.onlyComputer}>
//       Computer
//     </Responsive>
//     <Responsive as={Segment} {...Responsive.onlyLargeScreen}>
//       Large Screen
//     </Responsive>
//     <Responsive as={Segment} {...Responsive.onlyWidescreen}>
//       Widescreen
//     </Responsive>
//   </Segment.Group>
