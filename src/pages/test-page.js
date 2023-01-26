import React from 'react'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../layouts/default'

const AboutPage = ({data}) => (
  <Layout>
    <article className="test-page">
      <Img
        alt={data.takeshape.about.portrait.description}
        fixed={data.takeshape.about.portrait.fixed}
      />
      <div
        className="about__biography"
        dangerouslySetInnerHTML={{__html: data.takeshape.about.biography}}
      />
    </article>
  </Layout>
)

export default AboutPage

export const query = graphql`
  query {
      takeshape {
    getLandingPageArrayList {
      items {
        _id
        shapeArray {
          ... on TS_SectionExample {
            headingExample
            descriptionExample
            backgroundImageExample {
              sourceUrl
            }
          }
          ... on TS_OfferExample {
            signupUrl
            campaignId
            callToAction
          }
          ... on TS_TestimonialExample {
            quote
            customerObject {
              customerName
              customerImage {
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
  }
`
