import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql, Link } from 'gatsby'
import { Container, Icon, Divider, Responsive, List } from 'semantic-ui-react'

import Header from './header'

import 'semantic-ui-less/semantic.less'

import { SiteContainer } from '../components/styledComponents'

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            siteURL
          }
        }
      }
    `}
    render={data => (
      <SiteContainer>
        <div>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          />

          <Header siteTitle={data.site.siteMetadata.title} />

          {location && location.pathname !== '/' ? (
            <Responsive
              as={Divider}
              maxWidth={Responsive.onlyTablet.maxWidth}
            />
          ) : null}

          <div>{children}</div>
        </div>

        <Divider hidden />

        <Divider />

        <Container textAlign="center">
          {/* <Image centered size="tiny" src="logos/logo.png" /> */}
          <h4>Sydney Clarinet Choir</h4>

          <List horizontal inverted={false} divided link size="small">
            <List.Item as={Link} to="/">
              Home
            </List.Item>
            <List.Item as={Link} to="/about">
              About
            </List.Item>
            <List.Item as={Link} to="/contact">
              Contact
            </List.Item>
            <List.Item as={Link} to="/gallery">
              Gallery
            </List.Item>
            <List.Item as={Link} to="/recordings">
              Recordings
            </List.Item>
          </List>
          <Divider hidden />
          <small style={{ color: 'grey' }}>
            <Icon name="copyright" />
            {new Date().getFullYear()}
          </small>
          <Divider hidden />
        </Container>
      </SiteContainer>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
