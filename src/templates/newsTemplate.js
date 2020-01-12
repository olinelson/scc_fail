import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Container, Item, Divider } from 'semantic-ui-react'
import { Jumbotron } from '../components/styledComponents'
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Jumbotron src={frontmatter.featureImage} />
      <Divider hidden />
      <Container text>
        <h1>{frontmatter.title}</h1>
        <small>{frontmatter.date}</small>
        <Divider hidden />
        {/* <Item>
          <Item.Image size="small" src={frontmatter.featureImage} />
          <Item.Content>
            <Item.Header as="a">{frontmatter.title}</Item.Header>
            <Item.Meta>{frontmatter.date}</Item.Meta>
          </Item.Content>
        </Item> */}
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Container>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        featureImage
      }
    }
  }
`
