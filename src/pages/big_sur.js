import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import bigSur from '../images/bigSur/big_sur_banner.jpg';
import { graphql } from "gatsby";
import Img from 'gatsby-image';
import postStyle from './postStyles.css';
import { FaClock } from 'react-icons/fa';


const BigSurPost = (props) => (
  
   <div>
	<header className={"masthead"} style={{height: '539px', marginTop: '55px', backgroundImage: `url(${bigSur})`, position: 'absolute', zIndex: '-1', width: '100%'}}>
       <div className={"container"}>
	 			<div className={"row"}>
	 				<div className={"col-lg-8 col-md-10 mx-auto"}>
	 					<div className={"post-heading"}>
							<h1 style={{fontFamily: 'Pacifico', fontWeight: '500', textAlign: 'center'}}>Big Sur</h1>
	 						<h2 style={{fontFamily: 'Pacifico', fontWeight: '500', textAlign: 'center'}} className="subheading">California</h2>
	 					</div>
	 				</div>
	 			</div>
	 		</div>
     </header>
  <Layout>
    <SEO 
      title="Big Sur • Somewhere With The Selkers"
      description='Big Sur • California'
      keywords={['california', 'big sur','coast']}
      img={bigSur}
    />
    <article className={'postWrapper'}>
			<div className={"container"}>
			<div className={"row"}>
					<div className={"col-lg-8 col-md-10 col-xs-12 mx-auto"}>
						<br/>
						<div className={"embed-responsive embed-responsive-16by9 mx-auto"}>
							<iframe width="560" height="315" src="https://www.youtube.com/embed/En_QAv1C7t4" gesture="media" allowfullscreen></iframe>
						</div>
						<br/>
						<FaClock style={{color: 'gray'}}/><span style ={{fontStyle: 'italic', color: 'gray'}}> 3 min read </span><br/><br/>
							Whether it's your first trip or your hundreth, the drive down Highway 1 is always remarkable. Big Sur, the famous stretch of California coast, runs about 70 miles long. 
							The mountains that you drive along seem to rise out directly out of the ocean, and a new view awaits around every hairpin turn.
							<br/>
							<br/>
							We took off from San Francisco for my birthday (thanks Megan!!) on Saturday morning and headed straight for Big Sur. 
							It was a little misty along the way, but by midday we had reached our lunch destination and the sun started to poke through. 
							<a href="https://www.nepenthe.com/" target="blank" style={{textDecoration:'underline'}}>Nepenthe</a> is perched high on the edge of the coast. We waited for a seat on the terrace where we enjoyed lunch and watched what was left of the fog creep over the hills.
							<br/><br/>
							<Img fluid={props.data.nepenthe.childImageSharp.fluid} alt="nepenthe" />
							<span className={"caption text-muted"}>Lunch with a view at Nepenthe</span>
							<br/><br/>
							After our long lunch at Nepenthe, we traveled a little further down the highway to our home away from home <strike>campsite</strike> glampsite for the night - <a href="https://www.ventanabigsur.com" target="blank" style={{textDecoration: "underline"}}>Ventana Big Sur</a>.
							This resort in the woods allows visitors to get whatever kind of experience they want in Big Sur. You can stay in the resort, you can glamp, or you can camp. As a camping kind of guy, I have to admit that it'll be hard to return to a tent and sleeping bag after glamping. 
							Our tent-cabin perfectly mixed the secluded and peaceful wilderness with the comfort of a luxury resort. Each comes complete with a gas fire and a wood fire, running water, cooler, electricity, and a ridiculously comfortable bed. 
							Absorbed by the allure of our surroundings and each other's company, we spent the rest of the day lounging around our site, playing cards, and snacking on s'mores. 
							<br/><br/>
							<Img fluid={props.data.ventana1.childImageSharp.fluid} alt="ventana1" />
							<span className={"caption text-muted"}>Our Glamping Spot</span>
							<br/><br/>
							<Img fluid={props.data.ventana2.childImageSharp.fluid} alt="ventana2" />
							<span className={"caption text-muted"}>Running creek to put us to sleep</span>
							<br/><br/>
							<Img fluid={props.data.ventana3.childImageSharp.fluid} alt="ventana3" />
							<span className={"caption text-muted"}>Hotel or cabin?
							</span>
							<br/><br/>
							<Img fluid={props.data.ventana4.childImageSharp.fluid} alt="ventana4" />
							<span className={"caption text-muted"}>What a way to wake up</span>
							<br/><br/>
							Sunday morning we reluctanly checked out of our glamping site, but we couldn't bring ourselves to leave Ventana. 
							We headed up out of the glamping canyon to the resort where we enjoyed breakfast at 
							<a href="https://www.ventanabigsur.com/dining/the-sur-house" style={{textDecoration: "underline"}}>The Sur House</a>. Yet another unbelievable view on the edge of the earth as we woke up with coffee and eggs.
							From Ventana, it was a short drive to McWay Falls. The falls are one of the easiest to get to sites in Big Sur. 
							From the dirt lot along the road, you walk along a path only a few yards to get a great vantage point of the freshwater falls spilling down onto the beach below. 
							Definitely recommended for anyone travelling along the coast. Part of the additional trailway was closed due to erosion while we were visiting, but the falls were still completely visible. We visited in May, shortly after the winter season.
							If you are planning on doing any other hiking while visiting, be sure to check the <a href="https://www.parks.ca.gov/?page_id=29841" target="blank" style={{textDecoration: "underline"}}>Parks and Rec Site</a> 
							to see what's open. We were here in May and many of the trails were closed due to erosion from the previous winter rains. 
							<br/><br/>
							We were able to visit Andrew Molera State Park, one of the more northern parks in Big Sur. There is paid parking available, or you can park along the highway and walk down the hill to the entrance. 
							The Creamery Meadow Trail starts by taking you across the Big Sur River. We took off our shoes and waded across. It was only knee-deep in a few spots, and only about 20 yards wide. Once across, we took the flat trail through the woods.
							The trail is an easy flat 1 mile that drops you right from the flowered forest to the sandy beach. 
							<br/><br/>
							<Img fluid={props.data.bigSurRiver.childImageSharp.fluid} alt="big sur river" />
							<span className={"caption text-muted"}>Big Sur River
							</span>
							<br/><br/>
							<Img fluid={props.data.andrewMolera.childImageSharp.fluid} alt="andrew molera park" />
							<span className={"caption text-muted"}>Beach at the end of the Creamery Meadow Trail</span>
							<br/><br/>
							Our last stop before heading home was the <a href="https://www.bigsurriverinn.com/" style={{textDecoration: "underline"}}>Big Sur River Inn</a>. We grabbed a cocktail and headed for the Big Sur River yet again. 
							This time though we were lounging in Adirondack chairs resting right in the water. 
							We stuck around to enjoy a great lunch and some live country jams courtesy of the local band - <a href="https://soundcloud.com/hotbox-harry" target="blank" style={{textDecoration: "underline"}}>Hot Box Harry</a>.  
							<br/><br/>
							<Img fluid={props.data.riverInn1.childImageSharp.fluid} alt="river inn 1" />
							<span className={"caption text-muted"}>Lounging in the Big Sur River
							</span>
							<br/><br/>
							<Img fluid={props.data.riverInn2.childImageSharp.fluid} alt="river inn 2" />
							<span className={"caption text-muted"}>Last stop on our trip</span>
							<br/><br/>
							<h4>Accomodations</h4>
							<a href="https://www.ventanabigsur.com" target="blank">
							<i className={"fa fa-bed"} aria-hidden="true"></i> Ventana Big Sur</a>
					
					</div>
				</div>
			</div>
		</article>
  </Layout>
  </div>
)


export default BigSurPost;


export const pageQuery = graphql`
  query {
    andrewMolera: file(relativePath: { eq: "bigSur/andrew_molera.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
	}
	bigSurRiver: file(relativePath: { eq: "bigSur/big_sur_river.jpg" }) {
		childImageSharp {
		  fluid(maxWidth: 1000) {
			...GatsbyImageSharpFluid
		  }
		}
	  }
	nepenthe: file(relativePath: { eq: "bigSur/nepenthe.jpg" }) {
	childImageSharp {
		fluid(maxWidth: 1000) {
		...GatsbyImageSharpFluid
		}
	  }
	}
	riverInn1: file(relativePath: { eq: "bigSur/river_inn1.jpg" }) {
		childImageSharp {
			fluid(maxWidth: 1000) {
			...GatsbyImageSharpFluid
			}
		  }
		}
	riverInn2: file(relativePath: { eq: "bigSur/river_inn2.jpg" }) {
		childImageSharp {
			fluid(maxWidth: 1000) {
			...GatsbyImageSharpFluid
			}
		  }
		}
	ventana1: file(relativePath: { eq: "bigSur/ventana_1.jpg" }) {
		childImageSharp {
			fluid(maxWidth: 1000) {
			...GatsbyImageSharpFluid
			}
		  }
		}
	ventana2: file(relativePath: { eq: "bigSur/ventana_2.jpg" }) {
		childImageSharp {
			fluid(maxWidth: 1000) {
			...GatsbyImageSharpFluid
			}
		  }
		}
	ventana3: file(relativePath: { eq: "bigSur/ventana_3.jpg" }) {
		childImageSharp {
			fluid(maxWidth: 1000) {
			...GatsbyImageSharpFluid
			}
		  }
		}
	ventana4: file(relativePath: { eq: "bigSur/ventana_4.jpg" }) {
		childImageSharp {
			fluid(maxWidth: 1000) {
			...GatsbyImageSharpFluid
			}
		  }
		}
  }
`