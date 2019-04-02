import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import tahiti from '../images/tahiti/tahiti.jpg';
import { graphql } from "gatsby";
import Img from 'gatsby-image';
import postStyle from './postStyles.css';
import NewMap from '../components/newMap';

const ThailandPost = (props) => (
  
   <div>
	<header className={"masthead"} style={{height: '539px', marginTop: '55px', backgroundImage: `url(${tahiti})`, position: 'absolute', zIndex: '-1', width: '100%'}}>
       <div className={"container"}>
	 			<div className={"row"}>
	 				<div className={"col-lg-8 col-md-10 mx-auto"}>
	 					<div className={"post-heading"}>
							<h1 style={{fontFamily: 'Pacifico', fontWeight: '500', textAlign: 'center'}}>Mo'orea and Bora Bora</h1>
	 						<h2 style={{fontFamily: 'Pacifico', fontWeight: '500', textAlign: 'center'}} className="subheading">French Polynesia</h2>
	 					</div>
	 				</div>
	 			</div>
	 		</div>
     </header>
  <Layout>
    <SEO 
      title="Your guide to Tahiti • Somewhere With The Selkers"
      description='Follow us on our honeymoon to Disneyland, Moorea and Bora Bora'
      keywords={['tahiti', 'disney','bora bora','french polynesia','moorea']}
      img={tahiti}
    />
    <article className={'postWrapper'}>
			<div className={"container"}>
			<div className={"row mx-auto"} >
			<NewMap
				cityList={[
					{name: 'San Francisco', latitude: 37.7749, longitude:-122.4194 },
					{name: 'Papeete', latitude: 17.5516, longitude: 149.5585 },
			]}
			/></div>
			</div>
		</article>
  </Layout>
  </div>
)


export default ThailandPost;


export const pageQuery = graphql`
  query {
    atv1: file(relativePath: { eq: "tahiti/atv1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
	}
	atv2: file(relativePath: { eq: "tahiti/atv2.jpg" }) {
		childImageSharp {
		  fluid(maxWidth: 1000) {
			...GatsbyImageSharpFluid
		  }
		}
	  }
	catamaran: file(relativePath: { eq: "tahiti/catamaran.jpg" }) {
	childImageSharp {
		fluid(maxWidth: 1000) {
		...GatsbyImageSharpFluid
		}
	  }
	}
	fish: file(relativePath: { eq: "tahiti/fish.jpg" }) {
		childImageSharp {
			fluid(maxWidth: 1000) {
			...GatsbyImageSharpFluid
			}
		  }
		}
	hut: file(relativePath: { eq: "tahiti/hut.jpg" }) {
		childImageSharp {
			fluid(maxWidth: 1000) {
			...GatsbyImageSharpFluid
			}
		  }
		}
	moorea_hike: file(relativePath: { eq: "tahiti/moorea_hike.jpg" }) {
		childImageSharp {
			fluid(maxWidth: 1000) {
			...GatsbyImageSharpFluid
			}
		  }
		}
	moorea_pool: file(relativePath: { eq: "tahiti/moorea_pool.jpg" }) {
		childImageSharp {
			fluid(maxWidth: 1000) {
			...GatsbyImageSharpFluid
			}
		  }
		}
	mountain: file(relativePath: { eq: "tahiti/mountain.jpg" }) {
		childImageSharp {
			fluid(maxWidth: 1000) {
			...GatsbyImageSharpFluid
			}
		  }
		}
	tahiti: file(relativePath: { eq: "tahiti/tahiti.jpg" }) {
		childImageSharp {
			fluid(maxWidth: 1000) {
			...GatsbyImageSharpFluid
			}
		  }
		}
  }
`