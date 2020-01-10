import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import {
  Container,
  Grid,
  Menu,
  Icon,
  Segment,
  Divider,
} from 'semantic-ui-react'
import styled from 'styled-components'

import Header from './header'

import 'semantic-ui-less/semantic.less'
import { Link } from 'gatsby'

import { SiteContainer, Footer } from '../components/styledComponents'

const d = new Date()

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
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

          <Container fluid>{children}</Container>
        </div>

        <Divider hidden />

        <Footer>
          <small>
            <Icon name="copyright" /> SCC {d.getFullYear()}
          </small>
        </Footer>
      </SiteContainer>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
