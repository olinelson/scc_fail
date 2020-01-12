import React, { useEffect } from 'react'

import {
  Button,
  Container,
  Segment,
  Divider,
  Icon,
  Search,
  Grid,
  Header,
} from 'semantic-ui-react'
import Layout from '../components/layout'

import {
  Jumbotron,
  JumboMessage,
  JumboHeader,
} from '../components/styledComponents'
import Events from '../components/Events'
import { Link } from 'gatsby'
import NewsPreview from '../components/NewsPreview'

const IndexPage = () => (
  <>
    <Layout>
      <div style={{ margin: '0 auto', maxWidth: '100rem' }}>
        <Jumbotron fullHeight src="/images/clarinets.jpg">
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

        <Jumbotron src="/images/concert1.jpg">
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

        <Jumbotron src="/images/concert2.jpg">
          <JumboMessage>
            <Button as={Link} to="/contact" color="yellow" size="massive">
              Book SCC
            </Button>
          </JumboMessage>
        </Jumbotron>

        <Divider hidden />
      </Container>
    </Layout>
    {/* •	Generous display of name in full and logo
•	News (copy to be supplied, but we envisage info like testimonials, clarinet news, member news, guest artists, links to friends and associates including sponsor retailers)
•	Events
o	upcoming concerts
o	past concerts
•	Book SCC
•	Play with SCC */}
  </>
)

export default IndexPage
