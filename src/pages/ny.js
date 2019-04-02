import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import centralPark from '../images/ny/central_park.jpg';
import { graphql } from "gatsby";
import Img from 'gatsby-image';
import postStyle from './postStyles.css';
import NewMap from '../components/newMap';
import { FaClock } from 'react-icons/fa';


const NYPost = (props) => (
  
   <div>
	<header className={"masthead"} style={{height: '539px', marginTop: '55px', backgroundImage: `url(${centralPark})`, position: 'absolute', zIndex: '-1', width: '100%'}}>
       <div className={"container"}>
	 			<div className={"row"}>
	 				<div className={"col-lg-8 col-md-10 mx-auto"}>
	 					<div className={"post-heading"}>
							<h1 style={{fontFamily: 'Pacifico', fontWeight: '500', textAlign: 'center'}}>New York City</h1>
	 						<h2 style={{fontFamily: 'Pacifico', fontWeight: '500', textAlign: 'center'}} className="subheading">New York</h2>
	 					</div>
	 				</div>
	 			</div>
	 		</div>
     </header>
  <Layout>
    <SEO 
      title="Weekend Guide to New York City • Somewhere With The Selkers"
      description='Follow us to the Big Apple where we explore Central Park and Times Square'
      keywords={['new york city', 'new york','central park','times square','nyc']}
      img={centralPark}
    />
    <article className={'postWrapper'}>
			<div className={"container"}>
			  <div className={"row"}>
          <div className={"col-lg-8 col-md-10 col-xs-12 mx-auto"}>
            <br/>
            <div className={"embed-responsive embed-responsive-16by9 mx-auto"}>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/BkaHAry9swM" gesture="media" allowfullscreen></iframe>
            </div>
            <p>
            <FaClock style={{color: 'gray'}}/><span style ={{fontStyle: 'italic', color: 'gray'}}> 2 min read </span><br/><br/>
            First of all, huge shoutout and congrats to Billy and Nicole on their wedding in upstate New York! Their gorgeous
              fall wedding at
              <a href="http://www.golfhollowbrook.com/" target="blank">Hollow Brook Golf Club</a> gave us an opportunity to spend time with family as well as plan this getaway in
              NYC.</p>
            <p>After living on the west coast for almost three years, we were overdue for some good ol' fashioned east coast fall foliage, so we decided to set up camp on the Upper West Side for easy access to Central Park. A block
              from our hotel we were able to step right into the heart of the park and start exploring. Put the rumors of
              New York being so expensive to rest - we rented boats for $11.95 from the
              <a href="http://www.cpmyc.org/about.html"
                target="blank">Yacht Club</a> and had a blast. Okay, so the boats were about 4 feet long and had remote controlled sails,
              but you'll be hard pressed to find a better way to spend half an hour and 12 bucks. </p>
						<Img fluid={props.data.sailing.childImageSharp.fluid} alt="sailing" />
            <p>What a great day spent strolling through the park in the chilly weather, and no trip to New York is complete
              with a hot dog from a cart! Our trek took us right to the end of the park along 59th St, where we hopped into
              the Plaza Hotel for an early dessert and a champagne cocktail. We enjoyed a nice dinner out at
              <a href="https://taorestaurant.com/"
                target="blank">Tao</a>, and then continued on to
              <a href="http://www.230-fifth.com/" target="blank"> 230 Fifth</a>, a cozy rooftop garden bar with epic views of the Empire State Building. We enjoyed a few cocktails
              under the heat lamps within the comfort of complimentary, comfy robes for us cold San Franciscans.</p>
							<Img fluid={props.data.fifth.childImageSharp.fluid} alt="fifth" />
            <p> Our last day in the city, we got lost in the 4 floors of the
              <a href="https://www.amnh.org/" target="blank">Natural History Museum</a>. The rest of our evening was spent around Times Square. We enjoyed a quintessential
              New York meal at
              <a href="http://www.gallaghersnysteakhouse.com/">Gallaghers Steakhouse</a> and then got to take in a show on Broadway. This time we were grateful enough to
              see Megan's favorite musical, Miss Saigon, which was back on Broadway after it's orignial run over 15 years
              ago.
							</p>
              <p>We always enjoy our time in NYC, whether it's spent with family or together downtown. There's never a shortage
                of new sites to see or things to eat.</p>
          </div>
        </div>
			</div>
		</article>
  </Layout>
  </div>
)


export default NYPost;



export const pageQuery = graphql`
  query {
    fifth: file(relativePath: { eq: "ny/230fifth.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
	}
	centralPark: file(relativePath: { eq: "ny/central_park.jpg" }) {
		childImageSharp {
		  fluid(maxWidth: 1000) {
			...GatsbyImageSharpFluid
		  	}
			}
	  }
	sailing: file(relativePath: { eq: "ny/sailing.jpg" }) {
	childImageSharp {
		fluid(maxWidth: 1000) {
		...GatsbyImageSharpFluid
				}
	  	}
		}
  }
`