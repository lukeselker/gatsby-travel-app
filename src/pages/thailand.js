import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import thailandBanner from '../images/thailand/thailand_banner.jpg';
import { graphql } from "gatsby";
import Img from 'gatsby-image';
import postStyle from './postStyles.css';
import NewMap from '../components/newMap';

const ThailandPost = (props) => (
  
   <div>
	<header className={"masthead"} style={{height: '539px', marginTop: '55px', backgroundImage: `url(${thailandBanner})`, position: 'absolute', zIndex: '-1', width: '100%'}}>
       <div className={"container"}>
	 			<div className={"row"}>
	 				<div className={"col-lg-8 col-md-10 mx-auto"}>
	 					<div className={"post-heading"}>
							<h1 style={{fontFamily: 'Pacifico', fontWeight: '500', textAlign: 'center'}}>Thailand</h1>
	 						{/* <h2 style={{fontFamily: 'Pacifico', fontWeight: '500', textAlign: 'center'}} className="subheading">French Polynesia</h2> */}
	 					</div>
	 				</div>
	 			</div>
	 		</div>
     </header>
  <Layout>
    <SEO 
      title="Your guide to Thailand • Somewhere With The Selkers"
      description='Follow us to Bangkok, Chiang Mai, and Phuket'
      keywords={['thailand', 'thai','asia','bangkok','chiang mai','phuket']}
      img={thailandBanner}
    />
    <article className={'postWrapper'}>
			<div className={"container"}>
			<div className={"row mx-auto"} >
			<div className={"col-lg-8 col-md-10 col-xs-12 mx-auto"}>
			<div className={"embed-responsive embed-responsive-16by9 mx-auto"}>
					 		<iframe width="560" height="315" src="https://www.youtube.com/embed/UXLAORom68A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
							</div>
							</div>
			</div>
			</div>
		</article>
  </Layout>
  </div>
)


export default ThailandPost;


export const pageQuery = graphql`
  query {
    banner: file(relativePath: { eq: "thailand/banner.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
	}
  }
`