import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import tahiti from '../images/tahiti/tahiti.jpg';
import { graphql } from "gatsby";
import Img from 'gatsby-image';
import postStyle from './postStyles.css';
import NewMap from '../components/newMap';

const TahitiPost = (props) => (
  
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
			<div className={"row mx-auto"} ><NewMap /></div>

				<div className={"row"}>

					<div className={"col-lg-8 col-md-10 col-xs-12 mx-auto"}>
              <b/>
						<div className={"embed-responsive embed-responsive-16by9 mx-auto"}>
							<iframe width="560" height="315" src="https://www.youtube.com/embed/UojvnPKz5p8" gesture="media" allowfullscreen></iframe>
						</div>

						<h2 className={"section-heading"}>Mo'orea</h2>

						<p>
						<i className={"fa fa-clock-o"} style={{color: 'gray'}} aria-hidden="true"></i><span style={{fontStyle: 'italic', color: 'gray'}}> 2 min read </span><br /><br />

						The islands of French Polynesia are known for being one of the most romantic honeymoon destinations on earth. And for
							good reason.</p>

						<p>Upon arrival at the Intercontinental in Mo'orea we were greeted with a smile and a fresh tropical drink. We stayed
							in a jungle hut equipped with its own small pool.
							<br />
							<br /> We supplemented our time at the super cool pool bar with plenty of excursions. We started our first day with a hike
							on the 
							<a href="https://www.tahiti.com/activities/hiking-discovery--the-pass-of-the-three-coconuts-5543">Three Coconuts Pass</a>, which took us to the center of the island of Mo'orea. From the top we could see the jagged
							peaks making up the edges of the dormant volcano. </p>

					<Img fluid={props.data.moorea_hike.childImageSharp.fluid} alt="atv2" />
						<span className={"caption text-muted"}>View from the top of Three Coconuts Pass</span>

						<p>While on Mo'orea we also drove a
							<a href="https://www.tahiti.com/activities/cata-jet-guided-tour-4477"> CataJet</a> around the bay, relaxed on stand up paddleboards, and enjoyed the Theme Night Dinners at the resort.
							<br />
							<br /> The ATV tour we went on took us through the pineapple farms on the island (It takes at least a year to grow a single
							pineapple!). We stopped in the direct center of the volcano and then splashed our way back through some island creeks</p>

						<div className={"row"}>
							<div className={"col-6 mx-auto"}>
								<Img fluid={props.data.atv1.childImageSharp.fluid} alt="atv1" />
							</div>
							<div className={"col-6 mx-auto"}>
								<Img  fluid={props.data.atv2.childImageSharp.fluid} alt="atv2" />
							</div>
						</div>

						<p>We finished up our time in Mo'orea with a private sunset catamaran that took us along the bays of the island. We enjoyed
							fresh fruit and drinks straight from the island. Romance at its finest.</p>

							<Img fluid={props.data.catamaran.childImageSharp.fluid} alt="catamaran" />


						<h2 className={"section-heading"}>Bora Bora</h2>

						<p> In Bora Bora we traded in our jungle hideaway for an overwater bungalow where we lounged in the shadow of Mount Otemanu.
							</p>

						<Img fluid={props.data.mountain.childImageSharp.fluid} alt="mountain" />
						<span className={"caption text-muted"}>Mount Otemanu</span>
						<Img fluid={props.data.hut.childImageSharp.fluid} alt="hut" />


						<p> Bora Bora provided us with some outstanding water sports oppourtunites. We were able to take a guided Jet Ski tour
							around the entire island. We also went on an immersive snorkling tour where we spotted eagle rays, a barracuda, a
							coral reef, and tons of tropical fish.</p>

						<Img fluid={props.data.fish.childImageSharp.fluid} alt="fish" />
						<span className={"caption text-muted"}>Just a glimpse of the underwater world</span>


						<h2 className={"section-heading"}>Accomodations</h2>
						<a href="http://moorea.intercontinental.com/">
							<i className={"fa fa-bed"} aria-hidden="true"></i> Intercontinental Mo'orea</a>
            <br />
						<a href="http://thalasso.intercontinental.com/">
							<i className={"fa fa-bed"} aria-hidden="true"></i> Intercontinental Bora Bora</a>



					</div>
				</div>
			</div>
		</article>
  </Layout>
  </div>
)


export default TahitiPost;




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