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

const IndexPage = () => (
  <>
    <Layout>
      <div style={{ margin: '0 auto', maxWidth: '100rem' }}>
        <Jumbotron fullHeight src={`images/clarinets.jpg`}>
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
        <p>coming soon...</p>

        <Jumbotron src="https://st4.depositphotos.com/1020618/27307/i/450/depositphotos_273076392-stock-photo-clarinet-during-a-classical-concert.jpg">
          <JumboMessage>
            <Button size="massive">Play with SCC</Button>
          </JumboMessage>
        </Jumbotron>

        <Events />

        <Divider hidden />

        {/* <Segment textAlign="center">
          <Button>Play with SCC</Button>
        </Segment> */}
        <Divider hidden />

        <Jumbotron src="https://s3.eu-central-1.amazonaws.com/heek-media/images/industries/music/music-woods-instruments/cover-2.jpg">
          <JumboMessage>
            <Button color="yellow" size="massive">
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
