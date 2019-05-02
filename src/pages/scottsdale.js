import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import scottsdale from '../images/scottsdale/scottsdale_banner.jpg';
import { graphql } from "gatsby";
import Img from 'gatsby-image';
import postStyle from './postStyles.css';
import { FaClock } from 'react-icons/fa';

const ScottsdalePost = (props) => (
  
   <div>
	<header className={"masthead"} style={{height: '539px', marginTop: '55px', backgroundImage: `url(${scottsdale})`, position: 'absolute', zIndex: '-1', width: '100%'}}>
       <div className={"container"}>
	 			<div className={"row"}>
	 				<div className={"col-lg-8 col-md-10 mx-auto"}>
	 					<div className={"post-heading"}>
							<h1 style={{fontFamily: 'Pacifico', fontWeight: '500', textAlign: 'center'}}>Scottsdale</h1>
	 						<h2 style={{fontFamily: 'Pacifico', fontWeight: '500', textAlign: 'center'}} className="subheading">Arizona</h2>
	 					</div>
	 				</div>
	 			</div>
	 		</div>
     </header>
  <Layout>
    <SEO 
      title="Scottsdale • Somewhere With The Selkers"
      description='Scottsdale - Arizona... flying high'
      keywords={['scottsdale', 'arizona','southwest']}
      img={scottsdale}
    />
    <article className={'postWrapper'}>
			<div className={"container"}>
			<div className={"row"}>
					<div className={"col-lg-8 col-md-10 col-xs-12 mx-auto"}>
						<br/>
						<div className="embed-responsive embed-responsive-16by9 mx-auto">
							<iframe width="560" height="315" src="https://www.youtube.com/embed/yKn_uwjlvLo" gesture="media" allowfullscreen></iframe>
						</div>
						<br/>
					
						<p>
						<FaClock style={{color: 'gray'}}/><span style ={{fontStyle: 'italic', color: 'gray'}}> 4 min read • May 25 2018 </span><br/><br/>
							For a quick April weekend in Arizona, we were able to pack in quite a bit. 
							I met up with Megan at our hotel in Scottsdale after she finished up with her week of work in Phoenix. 
							It's no surprise that it's hot in Arizona, but it's interesting how everyone and everything there adapts. 
							Any outdoor activities are best enjoyed early in the morning or at night. Throw in the sun rising or setting and it's even better. 
							It's completely normal when you're out midday to not see other people. Be sure to share an unspoken tortured look with the people you do pass.
							That's the same reason why the resorts in Scottsdale have amazing pool scenes. They know where you want to spend the hottest hours of the day.
							<br/>
							<br/>
							Friday night we got a late dinner right next to the resort at <a href='https://www.postinowinecafe.com/'>Postino</a>. They had some ridiculously good bruschetta's and good wine to wash it down. 
							Exactly what we needed before a short nights sleep. It seems that the majority of visitors to Scottsdale will elect to do the hike up Camelback Mountain, which is situated directly in Scottsdale.
							We decided to go with a slightly less busy but more remote desert experience. We took an Uber about 25 minutes to the 
							<a href='https://www.mcdowellsonoran.org'>McDowell Sonoran Preserve</a>. There are tons of trails on the Preserve. We did the Gateway Loop Trail, a little over 4 miles long up and around a small mountain.
							Being our first time in the desert, it was a fun experience checking out all of the cacti and wildflowers we had never seen before. 
							The sun made it over the mountain by time we had started our descent. We finished up our hike and were back at The Scott before 9am. It was rough getting up earlier than we would for work... but i couldn't imagine doing that hike any later in the day. 
							Getting up early in Arizona = totally worth it.
							<br/><br/>
							<Img fluid={props.data.mcdowellSonoran.childImageSharp.fluid} alt="mcdowell sonoran" />
							<span className={"caption text-muted"}>Early morning in on the McDowell Sonoran Preserve</span>
							<br/><br/>
							Feeling accomplished after our hike, we settled back into the resort by getting some breakfast and then finding a seat at the pool. 
							The resort is gorgeous with it's Cuban theme, starting with the grand entrance lobby and Canal Club Bar. The pool area truly is an oasis in the desert with palm trees, waterfalls, and secret lounging gardens all around.
							<br/><br/>
							<Img fluid={props.data.canalClub.childImageSharp.fluid} alt="canal club" />
							<span className={"caption text-muted"}>Canal Club Bar</span>
							<br/><br/>
							<Img fluid={props.data.pool.childImageSharp.fluid} alt="pool" />
							<span className={"caption text-muted"}>Grounds of The Scott Resort and Spa</span>
							<br/><br/>
							<Img fluid={props.data.pool2.childImageSharp.fluid} alt="pool2" />
							<span className={"caption text-muted"}>Resort poolside</span>
							<br/><br/>
							After the day began to cool back down, we took the hotel shuttle into downtown Scottsdale. For dinner we walked to the <a href='http://oldtowntortillafactory.com/'>Old Town Tortilla Factory</a>.
							 We waited for an outside seat under their string lights. Everything from the house made tortillas to the margaritas were delicious. They make rotating flavors of fresh tortillas daily. 
							 Another wonderful meal before preparing for an even earlier rise the next morning. 
							 <br/><br/>
							 <Img style={{display:'block',marginLeft: 'auto',marginRight: 'auto',width: '50%'}} fluid={props.data.tortilla2.childImageSharp.fluid} alt="tortilla2" />
							 <span className="caption text-muted">Tortilla Factory Margs</span>
							 <br/><br/>
							Sunday morning we found ourselves in the desert again before the sunrise, this time preparing to head into the sky via balloon.
							We were a little nervous at first, but the folks at <a href='https://floatballoontours.com/'>Float Balloon Tours</a> walked through the entire process with us. 
							After the balloons were inflated, all ten of us hopped into the basket along with our pilot and away we went. Once we began floating up into the warm and quiet morning, I realized there was nothing to be nervous about. 
							Our slow float across the desert landscape with the sun breaking over the horizon was one of the most tranquil experiences ever. There is no steering a hot air balloon. You literally go wherever the wind takes you. 
							Our pilot and the crew on the ground communicated with walkie talkies so they knew where to meet us. Altogether we floated about 9 miles over the course of an hour. We landed pretty gently among the cacti. 
							Within minutes of our landing, the crew had arrived and began setting up a fully catered hot breakfast for us. Complete with music and champagne, we enjoyed the best carne asada breakfast burritos I've ever had. Oh, and a brownie for dessert. 
							The team at Float was incredible and made the experience unforgettable. Don't look elsewhere for someone to balloon with.
							<br/><br/>
							<Img fluid={props.data.balloon1.childImageSharp.fluid} alt="balloon1" />
							<span className="caption text-muted">Our balloon getting inflated</span>
							<br/><br/>
							<Img fluid={props.data.balloon2.childImageSharp.fluid} alt="balloon2" />
							<span className="caption text-muted">High in the desert</span>
							<br/><br/>
							<Img fluid={props.data.balloon3.childImageSharp.fluid} alt="balloon3" />
							<span className={"caption text-muted"}>Breakfast getting set up</span>
							<br/><br/>
							The rest of our last afternoon we spent in Old Town Scottsdale. 
							We got some ice cream and strolled the streets of the old west. We stopped into the cowboy boot shop and walked among the statues.
							It was a great way to end our trip, and walking around in the heat got us excited to return to foggy San Francisco.   <br/>
							<br/><br/>
							<Img fluid={props.data.cowboy.childImageSharp.fluid} alt="cowboy" />
							<span className={"caption text-muted"}>Ed Mell's Jack Knife</span>


						</p>
						<h4>Accomodations</h4>
						<a href="http://www.thescottresort.com/" target="blank">
							<i className={"fa fa-bed"} aria-hidden="true"></i> The Scott Resort & Spa</a>
					</div>
				</div>
			</div>
		</article>
  </Layout>
  </div>
)


export default ScottsdalePost;



export const pageQuery = graphql`
  query {
    balloon1: file(relativePath: { eq: "scottsdale/balloon1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
	}
	balloon2: file(relativePath: { eq: "scottsdale/balloon2.jpg" }) {
		childImageSharp {
		  fluid(maxWidth: 1000) {
			...GatsbyImageSharpFluid
		  }
		}
	  }
	balloon3: file(relativePath: { eq: "scottsdale/balloon3.jpg" }) {
	childImageSharp {
		fluid(maxWidth: 1000) {
		...GatsbyImageSharpFluid
		}
	  }
	}
	canalClub: file(relativePath: { eq: "scottsdale/canal_club.jpg" }) {
		childImageSharp {
			fluid(maxWidth: 1000) {
			...GatsbyImageSharpFluid
			}
		  }
		}
	cowboy: file(relativePath: { eq: "scottsdale/cowboy.jpg" }) {
		childImageSharp {
			fluid(maxWidth: 1000) {
			...GatsbyImageSharpFluid
			}
		  }
		}
	mcdowellSonoran: file(relativePath: { eq: "scottsdale/mcdowell_sonoran.jpg" }) {
		childImageSharp {
			fluid(maxWidth: 1000) {
			...GatsbyImageSharpFluid
			}
		  }
		}
	pool: file(relativePath: { eq: "scottsdale/pool.jpg" }) {
		childImageSharp {
			fluid(maxWidth: 1000) {
			...GatsbyImageSharpFluid
			}
		  }
		}
	pool2: file(relativePath: { eq: "scottsdale/pool2.jpg" }) {
		childImageSharp {
			fluid(maxWidth: 1000) {
			...GatsbyImageSharpFluid
			}
		  }
		}
	scottsdaleBanner: file(relativePath: { eq: "scottsdale/scottsdale_banner.jpg" }) {
		childImageSharp {
			fluid(maxWidth: 1000) {
			...GatsbyImageSharpFluid
			}
		  }
		}
		tortilla1: file(relativePath: { eq: "scottsdale/tortilla1.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1000) {
				...GatsbyImageSharpFluid
				}
				}
			}
		tortilla2: file(relativePath: { eq: "scottsdale/tortilla2.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1000) {
				...GatsbyImageSharpFluid
				}
				}
			}
  }
`