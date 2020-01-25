import React from 'react'

// components
import {
  Jumbotron,
  JumboMessage,
  JumboHeader,
} from '../components/styledComponents'
import Events from '../components/Events'
import { Link } from 'gatsby'
import NewsPreview from '../components/NewsPreview'
import { Button, Container, Divider, Image } from 'semantic-ui-react'
import Layout from '../components/layout'

// images
import clarinetsImage from '../images/resources/clarinets.jpg'
import concert1Image from '../images/resources/concert1.jpg'
import concert2Image from '../images/resources/concert2.jpg'

const IndexPage = () => (
  <>
    <Layout>
      {/* <Jumbotron fullHeight src={clarinetsImage}>
        <JumboMessage>
          <JumboHeader size="huge" as={'h1'} inverted>
            Sydney Clarinet Choir
          </JumboHeader>
        </JumboMessage>
      </Jumbotron> */}
      <Image fluid src={clarinetsImage} />

      <Divider hidden />

      <Container>
        <NewsPreview />

        <Divider hidden />

        <Jumbotron src={concert1Image}>
          <JumboMessage>
            <Button as={Link} to="/contact" size="massive">
              Play with SCC
            </Button>
          </JumboMessage>
        </Jumbotron>

        <Events />

        <Divider hidden />
        <Divider hidden />

        <Jumbotron src={concert2Image}>
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
