import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import bodega from '../images/bodegaBay/bodega_flowers.jpg';
import { graphql } from "gatsby";
import Img from 'gatsby-image';
import postStyle from './postStyles.css';
import NewMap from '../components/newMap';

const BodegaBayPost = (props) => (
  
   <div>
	<header className={"masthead"} style={{height: '539px', marginTop: '55px', backgroundImage: `url(${bodega})`, position: 'absolute', zIndex: '-1', width: '100%'}}>
       <div className={"container"}>
	 			<div className={"row"}>
	 				<div className={"col-lg-8 col-md-10 mx-auto"}>
	 					<div className={"post-heading"}>
							<h1 style={{fontFamily: 'Pacifico', fontWeight: '500', textAlign: 'center'}}>Bodega Bay</h1>
	 						<h2 style={{fontFamily: 'Pacifico', fontWeight: '500', textAlign: 'center'}} className="subheading">California</h2>
	 					</div>
	 				</div>
	 			</div>
	 		</div>
     </header>
  <Layout>
    <SEO 
      title="Your guide to Bodega Bay • Somewhere With The Selkers"
      description='Bodega Bay - Northern California... taking it easy'
      keywords={['bodega bay', 'california','northern california','coast','west coast']}
      img={bodega}
    />
    <article className={'postWrapper'}>
			<div className={"container"}>
			<div className={"row mx-auto"} >
			<div class="col-lg-8 col-md-10 col-xs-12 mx-auto">
              <p>
							Bodega Bay is only an hour and a half away from San Francisco, but it's one of the coziest and laid back weekend getaway's you can take from the city. Once you exit the highway, it's a beautiful drive through the countryside to get to the coast.
							 We made a small stop close to the bay for fresh baked goods at <a href="http://wildflourbread.com/" target="blank">Wild Flour Bread</a>. They had an amazing selection of scones, breads, cinnamon rolls - all baked fresh daily in their brick wood fired oven. They are in a small location nestled off the back roads , but churn out up to 900 loaves a day! 
							 The staff was super friendly as well, smiling while offering to let patrons who forgot cash pay on their next visit. They even have a beautiful garden in the back, perfect for a nice quiet stroll. Only slightly of of the way, but highly recommended. They only sell their goodies here, so make sure to go!
							<br/>
							<br/>
								<Img style={{display:'block',marginLeft: 'auto', marginRight: 'auto', width: '75%'}} fluid={props.data.wildflour.childImageSharp.fluid} alt="wildflour" />
								<span class="caption text-muted">Quite a selection at Wild Flour Bread</span>
							
							<br/>
							From the bakery, we drove around the bay to the Bodega Head Trail. There were a few picnic tables set up near the parking area overlooking the ocean where we were able to sit and enjoy our fresh breakfast. 
							After our picnic, we followed the trail along the cliffs. Beautiful wildflowers, rocky landscapes, and crashing waves made for a quintessential Northern California walk. 
							It's a flat and easy path that's perfect for anyone. We looped back to the other end of the trail and gathered with a whale watching group, who were fully equipped with tripod binoculars, cameras, and seats. We hung around for a while, but didn't end up seeing any whales - maybe next time!
							<br/>
							<br/>
							<Img fluid={props.data.bodegaHead.childImageSharp.fluid} alt="bodega head" />
							<span class="caption text-muted">Bodega Head Trail</span>
							<br/>
							
							<Img fluid={props.data.bodegaHead2.childImageSharp.fluid} alt="bodega head 2" />
							<span class="caption text-muted">Cliffs of Bodega Head</span>
							
							Before heading to our hotel, we stopped for a some wine and snacks on the bay at <a href="http://www.gourmetaubay.com" target="blank">Gourmet Au Bay</a>, where they serve up wine flights on mini surf boards. 
							We soaked up some sun and enjoyed some seafood on their outdoor patio. 
							<br/>
							<br/>
							The rest of our afternoon was spent lounging (and getting sunburnt - yes I forgot the sunscreen...) by the hotel pool at the Bodega Bay Lodge. Their property sits on the edge of the bay, overlooking the ocean and wetlands of the bay. 
							A huge infinity hot tub is perched right on the edge of the area, the best way to take in the view. The weather was wonderful while we were there, so we were able to spend some of the night in the hot tub as well. We even left our hotel balcony door cracked open overnight and let the sound of the waves and the fog horn lull us to sleep.
							<br/>
							<br/>
							After a sit down breakfast at the hotel Sunday morning, we headed to the <a href="http://www.bbfishfest.org/" target="blank">Fishermans Festival</a>, the real reason for our trip. The Fisherman's Festival is held every year in Bodega Bay. 
							It is run completely by the local community and everything goes toward supporting the local services like the Fire Department, Search and Rescue, etc. They gave a live demo of a Search and Rescue Helicopter pulling swimmers from the Bay and bringing them to shore. 
							They also host the Wooden Boat challenge that features teams building wooden boats from scratch and without power tools within 3 hours and then racing them. As is tradition, the festival marks the opening of fishing season in the area. To kick it off, there is a boat parade that travels the length of the bay and then the annual blessing of the fleet.
							<br/>
							<br/>
							<Img fluid={props.data.boatParade.childImageSharp.fluid} alt="boat parade" />
							<span class="caption text-muted">Fishermans Festival Boat Parade</span>
							<br/>
							
							<Img fluid={props.data.fireTruck.childImageSharp.fluid} alt="fire truck" />
							<span class="caption text-muted">Bodega Bay Fire Truck</span>



                        </p>
						<h4>Accomodations</h4>
						<a href="https://bodegabaylodge.com/" target="blank">
							<i class="fa fa-bed" aria-hidden="true"></i> Bodega Bay Lodge</a>
					</div>
			</div>
			</div>
		</article>
  </Layout>
  </div>
)


export default BodegaBayPost;



export const pageQuery = graphql`
  query {
    boatParade: file(relativePath: { eq: "bodegaBay/boat_parade.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
	}
	bodegaFlowers: file(relativePath: { eq: "bodegaBay/bodega_flowers.jpg" }) {
		childImageSharp {
		  fluid(maxWidth: 1000) {
			...GatsbyImageSharpFluid
		  }
		}
	  }
	bodegaHead: file(relativePath: { eq: "bodegaBay/bodega_head.jpg" }) {
	childImageSharp {
		fluid(maxWidth: 1000) {
		...GatsbyImageSharpFluid
		}
	  }
	}
	bodegaHead2: file(relativePath: { eq: "bodegaBay/bodega_head2.jpg" }) {
		childImageSharp {
			fluid(maxWidth: 1000) {
			...GatsbyImageSharpFluid
			}
		  }
		}
	fireTruck: file(relativePath: { eq: "bodegaBay/fire_truck.jpg" }) {
		childImageSharp {
			fluid(maxWidth: 1000) {
			...GatsbyImageSharpFluid
			}
		  }
		}
	surfBoard: file(relativePath: { eq: "bodegaBay/surf_board.JPG" }) {
		childImageSharp {
			fluid(maxWidth: 1000) {
			...GatsbyImageSharpFluid
			}
		  }
		}
	wildflour: file(relativePath: { eq: "bodegaBay/wildflour.JPG" }) {
		childImageSharp {
			fluid(maxWidth: 1000) {
			...GatsbyImageSharpFluid
			}
		  }
		}
  }
`