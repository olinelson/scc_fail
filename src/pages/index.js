import React from 'react'

import { Button, Container, Divider } from 'semantic-ui-react'
import Layout from '../components/layout'

import clarinetsImage from '../images/resources/clarinets.jpg'
import concert1Image from '../images/resources/concert1.jpg'
import concert2Image from '../images/resources/concert2.jpg'

import {
  Jumbotron,
  JumboMessage,
  JumboHeader,
} from '../components/styledComponents'
import Events from '../components/Events'
import { Link } from 'gatsby'
import NewsPreview from '../components/NewsPreview'

const IndexPage = ({ location }) => (
  <>
    <Layout location={location}>
      <div style={{ margin: '0 auto', maxWidth: '100rem' }}>
        <Jumbotron location={location} fullHeight src={clarinetsImage}>
          <JumboMessage>
            <JumboHeader size="huge" as={'h1'} inverted>
              Sydney Clarinet Choir
            </JumboHeader>
          </JumboMessage>
        </Jumbotron>
        <Divider hidden />
      </div>
      <Container>
        <h1>News</h1>
        <NewsPreview />

        <Jumbotron location={location} src={concert1Image}>
          <JumboMessage>
            <Button as={Link} to="/contact" size="massive">
              Play with SCC
            </Button>
          </JumboMessage>
        </Jumbotron>

        <Events />

        <Divider hidden />

        {/* <Segment textAlign="center">
          <Button>Play with SCC</Button>
        </Segment> */}
        <Divider hidden />

        <Jumbotron location={location} src={concert2Image}>
          <JumboMessage>
            <Button as={Link} to="/contact" color="yellow" size="massive">
              Book SCC
            </Button>
          </JumboMessage>
        </Jumbotron>

        <Divider hidden />
      </Container>
    </Layout>
  </>
)

export default IndexPage
