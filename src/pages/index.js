import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout";
import { graphql } from "gatsby";
import SEO from "../components/seo"
import PlaceCard from "../components/placeCard"
import { Container, Row, Col, CardDeck } from 'react-bootstrap';
import Instafeed from '../components/instagram';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Container>
      <Row className="justify-content-center">
        <Col lg={8} md={10} xs={6} className='mx-auto'>
          <Row className='mx-auto justify-content-center'>
            <div className="card-deck-wrapper mx-auto">
              <CardDeck>
                <PlaceCard
                  image={props.data.thailandCard.childImageSharp.fluid}
                  postLink={'/thailand'}
                  postMonth={'October 2018'}
                  name={'Thailand'}
                />
                <PlaceCard
                  image={props.data.sanDiegoCard.childImageSharp.fluid}
                  postLink={'/san_diego'}
                  postMonth={'August 2018'}
                  name={'San Diego'}
                />
              </CardDeck>
            </div>
            <div className="card-deck-wrapper mx-auto">
              <CardDeck>
              <PlaceCard
                  image={props.data.mauiCard.childImageSharp.fluid}
                  postLink={'/maui'}
                  postMonth={'July 2018'}
                  name={'Maui'}
                />
                <PlaceCard
                  image={props.data.palmSpringsCard.childImageSharp.fluid}
                  postLink={'/la_palm_springs'}
                  postMonth={'May 2018'}
                  name={'LA and Palm Springs'}
                />
              </CardDeck>
            </div><div className="card-deck-wrapper mx-auto">
              <CardDeck>
                <PlaceCard
                  image={props.data.bigSurCard.childImageSharp.fluid}
                  postLink={'/big_sur'}
                  postMonth={'May 2018'}
                  name={'Big Sur'}
                />
                <PlaceCard
                  image={props.data.arizonaCard.childImageSharp.fluid}
                  postLink={'/scottsdale'}
                  postMonth={'April 2018'}
                  name={'Scottsdale'}
                />
              </CardDeck>
            </div>
          <div className="card-deck-wrapper mx-auto">
              <CardDeck>
                <PlaceCard
                  image={props.data.bodegaCard.childImageSharp.fluid}
                  postLink={'/bodega_bay'}
                  postMonth={'April 2018'}
                  name={'Bodega Bay'}
                />
                <PlaceCard
                  image={props.data.centralCoastCard.childImageSharp.fluid}
                  postLink={'/central_coast'}
                  postMonth={'April 2018'}
                  name={'Central Coast'}
                />
              </CardDeck>
            </div>
            <div className="card-deck-wrapper mx-auto">
              <CardDeck>
                <PlaceCard
                  image={props.data.viennaCard.childImageSharp.fluid}
                  postLink={'/vienna-prague'}
                  postMonth={'December 2017'}
                  name={'Vienna and Prague'}
                />
                <PlaceCard
                  image={props.data.newYorkCard.childImageSharp.fluid}
                  postLink={'/ny'}
                  postMonth={'October 2017'}
                  name={'New York City'}
                />
              </CardDeck>
            </div>
            <div className="card-deck-wrapper mx-auto">
              <CardDeck>
                <PlaceCard
                  image={props.data.yosemiteCard.childImageSharp.fluid}
                  postLink={'/yosemite'}
                  postMonth={'September 2017'}
                  name={'Yosemite'}
                />
                <PlaceCard
                  image={props.data.tahitiCard.childImageSharp.fluid}
                  postLink={'/tahiti'}
                  postMonth={'July 2017'}
                  name={'French Polynesia'}
                />
              </CardDeck>
            </div>           
            </Row>
          </Col>
        </Row>
        <hr />

        
        
        
      <Row>
      <Col>
      <div style={{ textAlign: 'center',marginRight: '20px', marginTop: '12px' }}>
          <h5 style={{ fontSize: '21px', fontWeight: 300 }}>Instagrams <span style={{fontSize: '12px', fontWeight: '400', color: '#657786'}}>by</span>
            <a style={{fontWeight: '400',color: '#2b7bb9', fontSize: '12px', textDecoration: 'none'}} href="https://www.instagram.com/SomewhereWithTheSelkers/"> @SomewhereWithTheSelkers</a>
          </h5>
      </div>
      <div style={{textAlign: 'center'}}>
        <hr style={{width: '330px', margin: '0 auto'}} />
        <Instafeed />
        </div>
        </Col>
      <Col>
      <div style={{textAlign: 'center'}}>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="withtheselkers"
            options={{ height: 450, width: 300 }} />
        </div>
        </Col>
        </Row>
      </Container>
  </Layout>
)

export default IndexPage


export const pageQuery = graphql`
  query {
    tahitiCard: file(relativePath: { eq: "tahiti_card.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    yosemiteCard: file(relativePath: { eq: "yosemite_card.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    newYorkCard: file(relativePath: { eq: "ny_card.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    viennaCard: file(relativePath: { eq: "vienna_card.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    centralCoastCard: file(relativePath: { eq: "central_coast_card.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bodegaCard: file(relativePath: { eq: "bodega_card.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    arizonaCard: file(relativePath: { eq: "arizona_card.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bigSurCard: file(relativePath: { eq: "big_sur_card.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    palmSpringsCard: file(relativePath: { eq: "palm_springs_card.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mauiCard: file(relativePath: { eq: "maui_card.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sanDiegoCard: file(relativePath: { eq: "san_diego_card.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    thailandCard: file(relativePath: { eq: "thailand_card.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`