import React from 'react'
import { graphql, useStaticQuery, Link, navigate } from 'gatsby'
import { Item, Image } from 'semantic-ui-react'

export default function NewsPreview() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
              preview
              featureImage
              path
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <Item.Group>
        {data.allMarkdownRemark.edges.map(p => {
          const {
            title,
            date,
            preview,
            featureImage,
            path,
          } = p.node.frontmatter
          console.log(featureImage)
          return (
            <Item onClick={() => navigate(path)}>
              <Item.Image size="small" src={featureImage} />
              <Item.Content>
                <Item.Header as="a">{title}</Item.Header>
                <Item.Meta>{date}</Item.Meta>
                <Item.Description>{preview}</Item.Description>
                <Item.Extra as={Link} to={path}>
                  Read More.
                </Item.Extra>
              </Item.Content>
            </Item>
          )
        })}
      </Item.Group>
    </>
  )
}
