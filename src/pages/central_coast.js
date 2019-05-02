import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import pismo from '../images/centralCoast/pismoBeach.jpg';
import { graphql } from "gatsby";
import Img from 'gatsby-image';
import postStyle from './postStyles.css';
import { FaClock } from 'react-icons/fa';


const CentralCoastPost = (props) => (
  
   <div>
	<header className={"masthead"} style={{height: '539px', marginTop: '55px', backgroundImage: `url(${pismo})`, position: 'absolute', zIndex: '-1', width: '100%'}}>
       <div className={"container"}>
	 			<div className={"row"}>
	 				<div className={"col-lg-8 col-md-10 mx-auto"}>
	 					<div className={"post-heading"}>
							<h1 style={{fontFamily: 'Pacifico', fontWeight: '500', textAlign: 'center'}}>Central Coast</h1>
	 						<h2 style={{fontFamily: 'Pacifico', fontWeight: '500', textAlign: 'center'}} className="subheading">California</h2>
	 					</div>
	 				</div>
	 			</div>
	 		</div>
     </header>
  <Layout>
    <SEO 
      title="Weekend Guide to California's Central Coast • Somewhere With The Selkers"
      description='Follow us to the coast of central Cali for some fun in the sun'
      keywords={['california', 'central coast','pismo beach','avila beach','bob jones trail', 'san luis obispo']}
      img={pismo}
    />
    <article className={'postWrapper'}>
			<div className={"container"}>
			<div className={"row mx-auto"} >
			<div className={"col-lg-8 col-md-10 col-xs-12 mx-auto"}>
						<p>
						<FaClock style={{color: 'gray'}}/><span style ={{fontStyle: 'italic', color: 'gray'}}> 2 min read </span><br/><br/>
							The Central Coast of California between San Francisco and Los Angeles is dotted with some of the best beach towns in the
							country. We took off on a Friday after work and were down the coast to San Luis Obispo in a matter of hours. We spent
							Friday night at the Sycamore Mineral Springs Resort and Spa, where we treated ourselves to an hour in one the private
							hillside hot tubs and a bottle of wine. On Saturday morning, we rented bikes from the resort and followed the
							<a
							 href="http://www.avilabeachpier.com/information/bob-jones-bike-trail.html" target="blank">Bob Jones Trail</a> to Avila Beach. It's a great casual trail, taking you along a stream and dropping you out right
								on the sand. We could have easily spent an entire day at Avila Beach. There are several bars and shops right along
								the beach stretch, perfect for beaching with minimal effort.
								<br/>
								<br/>
								<Img fluid={props.data.bobJonesTrail.childImageSharp.fluid} alt="bob jones trail" />
								<span className={"caption text-muted"}>Bob Jones Trail</span>
								<br/>

								<Img fluid={props.data.avilaBeach.childImageSharp.fluid} alt="avila beach" />
								<span className="caption text-muted">Avila Beach Shops</span>

								There are quite a few wineries near San Luis Obispo, and the warm weather makes for perfect picnicking. We stopped at three
								wineries during the afternoon, all within a short drive of each other:
								<ul>
									<li>
										<strong>
											<a href="http://www.biddleranch.com/About/Tasting-Room" style={{textDecoration: 'underline'}} target="blank">Biddle Ranch</a>
										</strong> had an intimate wine tasting room as well as a large outdoor area full of tables and even cornhole.
									</li>
									<br/>
									<li>
										<strong>
											<a href="http://www.ednavalleyvineyard.com/visit/tasting-room" style={{textDecoration: 'underline'}} target="blank">Edna</a>
										</strong> winery was larger, but very elegant. We stayed here for most of the afternoon with the picnic we packed and a bottle
										of wine.
									</li>
									<br/>
									<li>
										<strong>
											<a href="http://baileyana.com/taste/" style={{textDecoration: 'underline'}} target="blank">Baileyana</a>
										</strong> was an interesting tasting room because it is housed in a schoolhouse built in 1909. They were the busiest of the
										three we visited, but also had tons of outdoor space for relaxing.
									</li>
								</ul>
								<br/>
								<Img fluid={props.data.biddle.childImageSharp.fluid} alt="biddle winery" />
								<span className={"caption text-muted"}>Biddle Ranch Vineyard</span>
								<br/>

								It's a quick drive from the vineyards back to the beach. Our second night we stayed in the Sea Cliff Hotel, with an amazing
								balcony view overlooking the ocean cliffs and
								Pismo Beach. There are alot of hotels lined along the cliffs. In the morning, we walked along the trail connecting
								them all, down a long set of stairs and across sandy rocks to get to the beach. There's only one real way to start
								your day on Pismo Beach - getting breakfast at
								<a href="https://oldwestcinnamonrolls.com/" style={{textDecoration: 'underline'}}
								 target="blank">Old West Cinnamon Rolls</a>.
								<br/>
								<br/>

								<div className={"row"}>
									<div className={"col-6 mx-auto"}>
										<Img fluid={props.data.trail.childImageSharp.fluid} alt="trail" />
										<span className={"caption text-muted"}>Cliff Trail</span>

									</div>
									<div className={"col-6 mx-auto"}>
										<Img fluid={props.data.rockStairs.childImageSharp.fluid} alt="rock stairs" />
										<span className={"caption text-muted"}>Stairs to Pismo</span>
									</div>
								</div>

								<h4>Food</h4>
								<br/>
								After walking around downtown San Luis Obispo, we went to dinner at
								<a href="http://www.lunaredslo.com/" style={{textDecoration: 'underline'}}
								 target="blank">Luna Red</a>. The restaurant sits right along a historic mission and has a beautiful outdoor patio and bar with strings
								of lights. We loved the bacon wrapped dates and the chicken paella.
								<br/>
								<br/>
								In Pismo Beach, we stopped at
								<a href="http://www.crackedcrab.com/" style={{textDecoration: 'underline'}} target="blank">Cracked Crab</a>. We strapped on bibs and dove into the bucket of crab, potatoes, and corn dumped in front of us.
								It's good for the soul to have a delicious messy meal every once and a while.
								<br/>
								<br/>
								Before we got back on the road to San Francisco, we made one final stop at
								<a href="http://www.slodoco.com/" style={{textDecoration: 'underline'}}
								 target="blank">SloDoCo Donuts</a> for road snacks and a couple dozen to share. Open 24 hours a day, they have a donut for everyone.
								You can get Nutella Pillows, donuts with breakfast cereal toppings, and the famous Galaxy donut.<br/>
								<br/>

								<div className={"row"}>
									<div className={"col-6 mx-auto"}>
										<Img fluid={props.data.crackedCrab.childImageSharp.fluid} alt="cracked crab" />
										<span className={"caption text-muted"}>Cracked Crab</span>

									</div>
									<div className={"col-6 mx-auto "}>
										<Img fluid={props.data.slodoco.childImageSharp.fluid} alt="Slo Donut Company" />
										<span className={"caption text-muted"}>Slo Donut Co</span>
									</div>
								</div>
						</p>
						<h4>Accomodations</h4>
						<a href="https://www.sycamoresprings.com/">
							<i className="fa fa-bed" aria-hidden="true"></i> Sycamore Mineral Springs Resort and Spa</a>
						<br/>
						<a href="https://www.shorecliff.com/">
							<i className="fa fa-bed" aria-hidden="true"></i> Shore Cliff Hotel</a>
					</div>
			</div>
			</div>
		</article>
  </Layout>
  </div>
)


export default CentralCoastPost;



export const pageQuery = graphql`
  query {
    avilaBeach: file(relativePath: { eq: "centralCoast/avila_beach.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
	}
	biddle: file(relativePath: { eq: "centralCoast/biddle.JPG" }) {
		childImageSharp {
		  fluid(maxWidth: 1000) {
			...GatsbyImageSharpFluid
		  }
		}
	  }
	bobJonesTrail: file(relativePath: { eq: "centralCoast/bob_jones_trail.JPG" }) {
	childImageSharp {
		fluid(maxWidth: 1000) {
		...GatsbyImageSharpFluid
		}
	  }
	}
	crackedCrab: file(relativePath: { eq: "centralCoast/cracked_crab.jpg" }) {
		childImageSharp {
			fluid(maxWidth: 1000) {
			...GatsbyImageSharpFluid
			}
		  }
		}
	rockStairs: file(relativePath: { eq: "centralCoast/rock_stairs.JPG" }) {
		childImageSharp {
			fluid(maxWidth: 1000) {
			...GatsbyImageSharpFluid
			}
		  }
		}
	slodoco: file(relativePath: { eq: "centralCoast/slodoco.jpg" }) {
		childImageSharp {
			fluid(maxWidth: 1000) {
			...GatsbyImageSharpFluid
			}
		  }
		}
	trail: file(relativePath: { eq: "centralCoast/trail.JPG" }) {
		childImageSharp {
			fluid(maxWidth: 1000) {
			...GatsbyImageSharpFluid
			}
		  }
		}
  }
`