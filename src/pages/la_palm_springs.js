import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import banner from '../images/laPalmSprings/la_palm_springs_banner.jpg';
import { graphql } from "gatsby";
import Img from 'gatsby-image';
import postStyle from './postStyles.css';
import { FaClock } from 'react-icons/fa';

const LAPost = (props) => (
  
   <div>
	<header className={"masthead"} style={{height: '539px', marginTop: '55px', backgroundImage: `url(${banner})`, position: 'absolute', zIndex: '-1', width: '100%'}}>
       <div className={"container"}>
	 			<div className={"row"}>
	 				<div className={"col-lg-8 col-md-10 mx-auto"}>
	 					<div className={"post-heading"}>
							<h1 style={{fontFamily: 'Pacifico', fontWeight: '500', textAlign: 'center'}}>LA and Palm Springs</h1>
	 						<h2 style={{fontFamily: 'Pacifico', fontWeight: '500', textAlign: 'center'}} className="subheading">California</h2>
	 					</div>
	 				</div>
	 			</div>
	 		</div>
     </header>
  <Layout>
    <SEO 
      title="LA and Palm Springs • Somewhere With The Selkers"
      description='From Theme Parks to National Parks, your weekend guide to southern California including Los Angeles and Palm Springs.'
      keywords={['tahiti', 'disney','bora bora','french polynesia','moorea']}
      img={banner}
    />
    <article className={'postWrapper'}>
			<div className={"container"}>
			<div className={"row"}>
					<div className={"col-lg-8 col-md-10 col-xs-12 mx-auto"}>
						<br/>
						<div className={"embed-responsive embed-responsive-16by9 mx-auto"}>
							<iframe width="560" height="315" src="https://www.youtube.com/embed/EaDcVR5IzJg" gesture="media" allowfullscreen></iframe>
						</div>
						<br/>
						<FaClock style={{color: 'gray'}}/><span style ={{fontStyle: 'italic', color: 'gray'}}> 2 min read • Jul 3 2018 </span><br/><br/>
						Make sure to check out these fun things to do in LA and Palm Springs
						<br/>
						<br/>
						<br/>
						<h5>Paramount Studios</h5>
						<p>	Going on a studio tour has become somewhat of a tradition on our trips to LA. 
							The tours provide great entertainment, and you usually get to see plenty of props and backstage lots.
							Paramount had some really cool things to check out, including Forrest Gump's park bench, numerous Transformers, and the Star Trek Turbolift. 
							<a href="http://www.paramountstudiotour.com/">Get your tickets!</a>
						</p>
						<br/>
						<Img fluid={props.data.paramount.childImageSharp.fluid} alt="paramount" />
						<span className={"caption text-muted"}>The streets of New York in Paramount Studios</span>
						<br/><br/>
						<Img style={{display:"block", marginLeft: "auto",marginRight: "auto",width: "70%"}} fluid={props.data.bumblebee.childImageSharp.fluid} alt="bumblebee" />
						<span className={"caption text-muted"}>Bumblebee from Transformers</span>
						<br/><br/>

						
						<h5>Grand Central Market | Downtown LA</h5>
						<p>Go here and try it all. Gourmet PB&J, Breakfast Sandwiches, Local Beer, Oysters, and so much more. The neon signs will guide your stomach.
							Check out the array of vendors and ongoing events <a href="http://www.grandcentralmarket.com/">here</a>  </p>

						
						<div className={"row"}>
								<div className={"col-6 mx-auto"}>
									<Img fluid={props.data.marketSign.childImageSharp.fluid} alt="market sign" />
									<span className={"caption text-muted"}>Grand Central</span>
								</div>
								<div className={"col-6 mx-auto"}>
									<Img fluid={props.data.goldenRoad.childImageSharp.fluid} alt="golden road" />
									<span className={"caption text-muted"}>Golden Road Brewery in the market</span>
								</div>
						</div>
						<br/>
						<Img fluid={props.data.grandCentralMarket.childImageSharp.fluid} alt="gc market" />
						<span className={"caption text-muted"}>In the heart of the Grand Central Market</span>
						<h5>Hollywood Bowl</h5><br/>
						<p>The Bowl is a one of a kind place to see a show. A great view from every seat, including a peek at the Hollywood Sign in the background hills. 
						For the full experience, get seats in the lower bowl, which will include a picnic-like setup where you can bring in a full spread cheese and wine platter. 
						We saw Beauty and the Beast Live - a showing of the Disney classNameic with a live orchesta and some stars (Zooey Deschanel, Kelsey Grammer, Rebel Wilson, Taye Diggs, and Jane Krakowski) singing the hits.
						Plan your trip around <a href="https://www.hollywoodbowl.com/" style={{textDecoration: "underline"}}>the next big show</a>.</p>
						<Img fluid={props.data.hollywoodBowl.childImageSharp.fluid} alt="hollywood bowl" />
						<span className={"caption text-muted"}>View from our seats</span>
						<br/><br/>	
						<h5>Universal Studios Hollywood</h5><br/>
						<p>Universal in Hollywood is a theme park and a studio all in one. We stayed in The Garland, one of Universal's partner hotels. 
							They have an hourly shuttle service back and forth to the park. The park has tons of fun for everyone. Visit Springfield and the Simpsons, Jurassic Park, and Hogwarts and Harry Potter all in one day.
						</p>
						<div className={"row"}>
								<div className={"col-6 mx-auto"}>
									<Img fluid={props.data.jurassicPark.childImageSharp.fluid} alt="jurassic park" />
									<span className={"caption text-muted"}>Jurassic Park</span>
								</div>
								<div className={"col-6 mx-auto"}>
									<Img fluid={props.data.springfield.childImageSharp.fluid} alt="springfield" />
									<span className={"caption text-muted"}>Springfield</span>
								</div>
						</div>
						<div className={"row"}>
								<div className={"col-6 mx-auto"}>
									<Img fluid={props.data.hogwarts.childImageSharp.fluid} alt="hogwarts" />
									<span className={"caption text-muted"}>Hogwarts</span>
								</div>
								<div className={"col-6 mx-auto"}>
									<Img fluid={props.data.hp1.childImageSharp.fluid} alt="hp1" />
									<span className={"caption text-muted"}>Hogsmeade</span>
								</div>
						</div>
						<br/><br/>
						<h5>Joshua Tree National Park</h5>
						<p>Palm Springs was amazing. It was super hot, so most of the daytime we spent lounging by the pool at the Ritz, sipping cocktails and soaking in the sun.
							In the evening, we drove about 40 miles to Joshua Tree State Park. Spending the early evening in the park, and then watching the sunset and moonrise at twilight was an amazing experience.
							The park takes on new life as the day changes into night. Because of the heat of the desert, it was the perfect park to drive through and make stops when we felt like it. Be sure to check out Arch Rock and the Cholla Gardens and of course, the unique Joshua Trees.
						</p>
						
						<Img fluid={props.data.jt2.childImageSharp.fluid} alt="jt2" />
						<span className={"caption text-muted"}>First Joshua Tree Spotting</span>
						<br/><br/>
						<Img fluid={props.data.jt4.childImageSharp.fluid} alt="jt4" />
						<span className={"caption text-muted"}>Desert Road</span>
						<br/><br/>
						<Img fluid={props.data.jt3.childImageSharp.fluid} alt="jt3" />
						<span className="caption text-muted">Big Sun</span>
						<br/><br/>
					  <Img fluid={props.data.jt1.childImageSharp.fluid} alt="jt1" />
						<span className={"caption text-muted"}>Rising Moon</span>
						<br/><br/>
						<Img fluid={props.data.jt5.childImageSharp.fluid} alt="jt5" />
						<span className={"caption text-muted"}>Around Arch Rock</span>
						<br/><br/>
						<h4>Accomodations</h4>
						<a href="https://www.thegarland.com/" target="blank">
						<i className={"fa fa-bed"} aria-hidden="true"></i> The Garland</a>
						<br/>
						<a href="http://www.ritzcarlton.com/en/hotels/california/rancho-mirage" target="blank">
						<i className={"fa fa-bed"} aria-hidden="true"></i> The Ritz-Carlton | Rancho Mirage</a>
	
					
					</div>
				</div>
			</div>
		</article>
  </Layout>
  </div>
)


export default LAPost;



export const pageQuery = graphql`
  query {
  bumblebee: file(relativePath: { eq: "laPalmSprings/bumblebee.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
	}
	goldenRoad: file(relativePath: { eq: "laPalmSprings/golden_road.jpg" }) {
		childImageSharp {
		  fluid(maxWidth: 1000) {
			...GatsbyImageSharpFluid
		  }
		}
	}
	grandCentralMarket: file(relativePath: { eq: "laPalmSprings/grand_central_market.jpg" }) {
	childImageSharp {
		fluid(maxWidth: 1000) {
		...GatsbyImageSharpFluid
		}
	  }
	}
	hogwarts: file(relativePath: { eq: "laPalmSprings/hogwarts.jpg" }) {
		childImageSharp {
			fluid(maxWidth: 1000) {
			...GatsbyImageSharpFluid
			}
		  }
		}
	hollywoodBowl: file(relativePath: { eq: "laPalmSprings/hollywood_bowl.jpg" }) {
		childImageSharp {
			fluid(maxWidth: 1000) {
			...GatsbyImageSharpFluid
			}
		  }
		}
	hp1: file(relativePath: { eq: "laPalmSprings/hp1.jpg" }) {
		childImageSharp {
			fluid(maxWidth: 1000) {
			...GatsbyImageSharpFluid
			}
		  }
		}
	jt1: file(relativePath: { eq: "laPalmSprings/jt1.jpg" }) {
		childImageSharp {
			fluid(maxWidth: 1000) {
			...GatsbyImageSharpFluid
			}
		  }
		}
	jt2: file(relativePath: { eq: "laPalmSprings/jt2.jpg" }) {
		childImageSharp {
			fluid(maxWidth: 1000) {
			...GatsbyImageSharpFluid
			}
		  }
		}
	jt3: file(relativePath: { eq: "laPalmSprings/jt3.jpg" }) {
		childImageSharp {
			fluid(maxWidth: 1000) {
			...GatsbyImageSharpFluid
			}
		  }
		}
		jt4: file(relativePath: { eq: "laPalmSprings/jt4.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1000) {
				...GatsbyImageSharpFluid
				}
				}
			}
		jt5: file(relativePath: { eq: "laPalmSprings/jt5.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1000) {
				...GatsbyImageSharpFluid
				}
				}
			}
	jurassicPark: file(relativePath: { eq: "laPalmSprings/jurassic_park.jpg" }) {
		childImageSharp {
			fluid(maxWidth: 1000) {
			...GatsbyImageSharpFluid
			}
			}
		}
	marketSign: file(relativePath: { eq: "laPalmSprings/market_sign.jpg" }) {
		childImageSharp {
			fluid(maxWidth: 1000) {
			...GatsbyImageSharpFluid
			}
			}
		}
	palmSprings: file(relativePath: { eq: "laPalmSprings/palm_springs.jpg" }) {
		childImageSharp {
			fluid(maxWidth: 1000) {
			...GatsbyImageSharpFluid
			}
			}
		}
	paramount: file(relativePath: { eq: "laPalmSprings/paramount.jpg" }) {
		childImageSharp {
			fluid(maxWidth: 1000) {
			...GatsbyImageSharpFluid
			}
			}
		}
	springfield: file(relativePath: { eq: "laPalmSprings/springfield.jpg" }) {
		childImageSharp {
			fluid(maxWidth: 1000) {
			...GatsbyImageSharpFluid
			}
			}
		}
	}
`