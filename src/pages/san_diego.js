import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import sanDiegoBanner from '../images/sanDiego/sd_banner.jpg';
import { graphql } from "gatsby";
import Img from 'gatsby-image';
import postStyle from './postStyles.css';
import NewMap from '../components/newMap';
import { FaClock } from 'react-icons/fa';


const SanDiegoPost = (props) => (
  
   <div>
	<header className={"masthead"} style={{height: '539px', marginTop: '55px', backgroundImage: `url(${sanDiegoBanner})`, position: 'absolute', zIndex: '-1', width: '100%'}}>
       <div className={"container"}>
	 			<div className={"row"}>
	 				<div className={"col-lg-8 col-md-10 mx-auto"}>
	 					<div className={"post-heading"}>
							<h1 style={{fontFamily: 'Pacifico', fontWeight: '500', textAlign: 'center'}}>San Diego</h1>
	 						<h2 style={{fontFamily: 'Pacifico', fontWeight: '500', textAlign: 'center'}} className="subheading">California</h2>
	 					</div>
	 				</div>
	 			</div>
	 		</div>
     </header>
  <Layout>
    <SEO 
      title="Your weekend guide to San Diego • Somewhere With The Selkers"
      description='Follow us to the Sourthern End of California'
      keywords={['san diego', 'california','gaslamp quarter','petco park','sd']}
      img={sanDiegoBanner}
    />

			<article className={'postWrapper'}>
				<div className={"container"}>
					<div className={"row mx-auto"} >
						<div className={"col-lg-8 col-md-10 col-xs-12 mx-auto"}>
						<p>
							<FaClock style={{ color: 'gray' }} /><span style={{ fontStyle: 'italic', color: 'gray' }}> 5 min read • Sept 19 2019 </span><br /><br />
							San Diego is such a fun city to visit. This is where the real Calfornia weather hides out. Sunshine for days, and plenty of outdoor activites to match.
							San Diego is very easy to get around, so we were able to get quite a bit into a long weekend by staying downtown, pretty centrally located.
            </p>
						<h4>USS Midway Museum</h4>
							<p>The <a href="midway.org" target="blank">USS Midway</a> is the iconic Naval Aircraft Carrier docked at Navy Pier for visitors to explore. If you've never been on an aircraft carrier, you'll be surprised at it's enormous size. 
								An entire community is able to be sustained on these massive ships while at sea, and the number of airplanes that can fit on the runway makes you feel like you're at an airport. You'll 
								get a great view of the city and the famous "Embracing Peace" statue from the deck. You could easily spend an entire day here listening to self guided audio tours and reading, but you could just as easily 
								make your own tour to see the parts of the ship that you find most interesting. After your visit, take a short walk down the pier to the Seaport Village for some sweets and a little shopping.
							</p>
							<br/><br/>
						<h4>Coronado Island</h4>
							<p>
								Coronado Island is an inexpensive, quick ferry ride away from downtown. You can drive as well, but I suggest the ferry to get some great views of the city and the USS Midway. Once you get dropped 
								off, defintely rent some bikes in the shop area. There is a bike path that will take you through from one side of the island to the other, where you will end up on the beach. Be sure to stop into the taco shacks 
								along the beach for fish tacos and a drink. And before heading back to the ferry, walk the pathways and halls of the <a href = "https://hoteldel.com/" target = "blank">Hotel del Coronado</a>. You might even catch a few sand sculptors working right outside the hotel.
							</p>
							<br/><br/>
						<h4>Gaslamp Quarter</h4>
							<p>The Gaslamp Quarter is the food and party scene of San Diego. Many of the big clubs and bars here won't really start up until after dark, but there are plenty of food options to keep you 
								busy until then. Petco Park (next on the list) is situated at one corner of the Gaslamp Quarter, so it's easy to make a whole day out of this part of the city. Oh, and keep an eye out for the 
								Ron Burgundy Anchorman themed cocktails.
							</p>
							<br/><br/>
						<h4>Petco Park</h4>
							<p>Home of the <a href = "https://www.mlb.com/padres" target="blank">San Diego Padres</a>, Petco Park is an architecturally fun ballpark. It gives a nod to the city's Naval ties with it's colors and shiplike build. And if the Padres aren't winning, 
								 this is a good place to find signature San Diego craft brews. Make sure to walk the whole park, there are different vendors around every corner. 
							</p>
							<br/><br/>
						<h4>Little Italy</h4>
							<p>Located north of downtown, Little Italy is a fun area with bars, breweries, and restaurants to explore. We met up with some family at Ballast Point for beer and then
								walked to a cocktail bar not far away. Lots to walk to within just a few blocks. </p>
							<br/><br/>
						<h4>Breweries</h4>
							<p>San Diego is home to so many well known and favorite breweries that I decided to throw a couple into their own section. These are just a few of the most popular/recognizable. A quick google search 
								will reveal tons of others and how everyone and their mother ranks them. In hopes of remembering the fun time you had in San Diego, I suggest not trying to hit all of them in one trip. I guess a bachelor party is 
								a good exception. 
								<br/><br/>
								Stay Classy, San Diego.
								<br/><br/>
						<ul style={{listStyle: 'none', textIndent: '-3em'}}>
						<li>🍺 <strong><a style={{textDecoration: 'underline'}} href="https://www.ballastpoint.com/" target="_blank">Ballast Point</a></strong></li>
						<li>🍺 <strong><a style={{textDecoration: 'underline'}} href="https://www.stonebrewing.com/" target="_blank">Stone</a></strong></li>
						<li>🍺 <strong><a style={{textDecoration: 'underline'}} href="https://www.greenflashbrew.com/" target="_blank">Green Flash Brewing</a></strong> </li>
						<li>🍺 <strong><a style={{textDecoration: 'underline'}} href="coronadobrewing.com" target="_blank">Coronado Brewing Company</a></strong> </li>
					</ul>

							</p>
							<br/><br/>
						<h4>San Diego Zoo</h4>
							<p>This isn't your everyday local zoo. This is THE zoo. There's so much to see and experience here that it's very hard to do it all in one day. Plan out quite a bit of time and 
								be sure to consult the map.  
							</p>
							<br/><br/>
						<h4>Pacific Beach</h4>
							<p>Pacific Beach is just a little ways north of the city, and a great location to perch for a day. We were able to explore alot of this area via electric scooter as well. If you've never tried 
								one before, this is the place to do it. Flying up and down the beach wihtout effort is the right way to have the ocean breeze in your face. There are also quite a few tacos shops and bars along the 
								main drag as well once you've had your fill of sun for the day. </p>
							<br/><br/>

					<h4>Accomodations</h4>
		<a href="https://www.ihg.com/intercontinental/hotels/us/en/san-diego/sanhb/hoteldetail" target="blank">
			<i className={"fa fa-bed"} aria-hidden="true"></i> Intercontinental San Diego</a>
		<br /><br />
			</div>
			</div>
			</div>
		</article>
  </Layout>
  </div>
)


export default SanDiegoPost;


export const pageQuery = graphql`
  query {
    atv1: file(relativePath: { eq: "tahiti/atv1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
	}
  }
`