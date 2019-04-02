import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import yosemite from '../images/yosemite/yosemite.jpg';
import { graphql } from "gatsby";
import Img from 'gatsby-image';
import postStyle from './postStyles.css';
import NewMap from '../components/newMap';
import { FaClock } from 'react-icons/fa';

const YosemitePost = (props) => (
  
   <div>
	<header className={"masthead"} style={{height: '539px', marginTop: '55px', backgroundImage: `url(${yosemite})`, position: 'absolute', zIndex: '-1', width: '100%'}}>
       <div className={"container"}>
	 			<div className={"row"}>
	 				<div className={"col-lg-8 col-md-10 mx-auto"}>
	 					<div className={"post-heading"}>
							<h1 style={{fontFamily: 'Pacifico', fontWeight: '500', textAlign: 'center'}}>Yosemite National Park</h1>
	 						<h2 style={{fontFamily: 'Pacifico', fontWeight: '500', textAlign: 'center'}} className="subheading">California</h2>
	 					</div>
	 				</div>
	 			</div>
	 		</div>
     </header>
  <Layout>
    <SEO 
      title="Yosemite • Somewhere With The Selkers"
      description='Follow us to this gem of a National Park in California'
      keywords={['yosemite', 'california','national park']}
      img={yosemite}
    />
    <article className={'postWrapper'}>
			<div className={"container"}>
			{/* <div className={"row mx-auto"} >
			<NewMap
				zoomLevel={10}
				homeGeoPoint = {{latitude: 37.8651, longitude: -119.5383}}
				planeScale={.05}			
				cityList={[
					{name: 'San Francisco', latitude: 37.7749, longitude:-122.4194 },
					{name: 'Yosemite', latitude: 37.8651, longitude: -119.5383 },
				]}
			/></div> */}
					<div className={"row"}>
					<div className={"col-lg-8 col-md-10 col-xs-12 mx-auto"}>
					<Img fluid={props.data.yosemiteBadge.childImageSharp.fluid} alt="yosemite badge" style={{height: '250px', width: '250px', float: 'left'}} />

						<p>
						<FaClock style={{color: 'gray'}}/><span style={{fontStyle: 'italic', color: 'gray'}}> 2 min read </span><br/><br/>
						From the day we decided to move to the Golden State, Yosemite was on my list. Two years later, we finally made the
							3 hour drive. We arrived to the entrace of the park after dark, so we we had to wait until morning to see the giant
							rock walls surrounding us. </p>
						
						<h2 className={"section-heading"}>Half Dome</h2>

						<p>We stayed in
							<a href="http://www.travelyosemite.com/lodging/half-dome-village/">Half Dome Village</a>, a campground inside the park that was nestled right next to many of the great sites. We had
							our very own tent cabin equipped with a food locker to keep the bears away. The camp had a restaurant, grocery store, bike rentals, and a small theatre. The village was also
							along the free bus route that shuttles visitors to the many sites along the valley floor. We had such a good time
							here! Within a short walk we were within view of Half Dome and Yosemite Falls. </p>

						<div className={"row"}>
							<div className={"col-6 mx-auto"}>
							<Img fluid={props.data.halfDome.childImageSharp.fluid} alt="half dome" />
							</div>
							<div className={"col-6 mx-auto"}>
							<Img fluid={props.data.yosemiteFalls.childImageSharp.fluid} alt="yosemite falls" />
							</div>
						</div>

						<h2 className={"section-heading"}>Up The Rock Stairs</h2>

						<p>The hike to the top of Vernal Falls took us over a bridge with a picturesque view of the falls, then straight up to
							the top by way of 600+ granite stairs. Although the stairs got pretty steep at times, there were plenty of places
							for us to step to the side for a rest while the mist of the falls blew over us. The climb was totally worth it. You
							can step right the the edge of the railing and watch the water flow right off the granite the the valley below. </p>


						<Img fluid={props.data.vernalFalls.childImageSharp.fluid} alt="vernal falls" />

						<span className={"caption text-muted"}>Over 600 stairs to the top of Vernal Falls</span>
						<p>Although it's hard to tell from our pictures, it was actually somewhat smoky in the valley during the time we were
							visiting. There were several wildfires burning, including one blocking the road to Glacier Point. Glacier Point has
							one of the greatest views in Yosemite, but we will have to wait until next time to see it! </p>


						<h2 className={"section-heading"}>Accomodations</h2>
						<a href="http://www.travelyosemite.com/lodging/half-dome-village/">
							<i className={"fa fa-bed"} aria-hidden="true"></i> Half Dome Village</a>



					</div>
				</div>
			</div>
		</article>
  </Layout>
  </div>
)


export default YosemitePost;



export const pageQuery = graphql`
  query {
    yosemiteBadge: file(relativePath: { eq: "yosemite/yosemite_badge.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
		},
		halfDome: file(relativePath: { eq: "yosemite/half_dome.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
		},
		vernalFalls: file(relativePath: { eq: "yosemite/VernalFalls.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
		},
		yosemiteFalls: file(relativePath: { eq: "yosemite/yosemite_falls.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
		},
		yosemiteJumping: file(relativePath: { eq: "yosemite/yosemite_jumping.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
		}
  }
`