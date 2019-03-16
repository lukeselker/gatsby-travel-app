import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import tahitiCard from '../images/tahiti_card.jpg';

const NotFoundPage = () => (
  <Layout>
    <SEO 
      title="Your guide to Tahiti • Somewhere With The Selkers"
      description='Follow us on our honeymoon to Disneyland, Moorea and Bora Bora'
      keywords={['tahiti', 'disney','bora bora','french polynesia','moorea']}
      img={tahitiCard}
    />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)


export default NotFoundPage;
