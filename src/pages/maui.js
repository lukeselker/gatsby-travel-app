import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import maui from '../images/maui/maui_banner.jpg';
import { graphql } from "gatsby";
import Img from 'gatsby-image';
import postStyle from './postStyles.css';
import { FaClock } from 'react-icons/fa';


const MauiPost = (props) => (

	<div>
		<header className={"masthead"} style={{ height: '539px', marginTop: '55px', backgroundImage: `url(${maui})`, position: 'absolute', zIndex: '-1', width: '100%' }}>
			<div className={"container"}>
				<div className={"row"}>
					<div className={"col-lg-8 col-md-10 mx-auto"}>
						<div className={"post-heading"}>
							<h1 style={{ fontFamily: 'Pacifico', fontWeight: '500', textAlign: 'center' }}>Maui</h1>
							<h2 style={{ fontFamily: 'Pacifico', fontWeight: '500', textAlign: 'center' }} className="subheading">Hawaii</h2>
						</div>
					</div>
				</div>
			</div>
		</header>
		<Layout>
			<SEO
				title="Your guide to Maui • Somewhere With The Selkers"
				description='Your guide to doing the Hawaiian island of Maui right.'
				keywords={['maui', 'hawaii', 'island']}
				img={maui}
			/>
			<article className={'postWrapper'}>
				<div className={"container"}>
					<div className={"row mx-auto"} >

						<div className={"col-lg-8 col-md-10 col-xs-12 mx-auto"}>
							<div className={"embed-responsive embed-responsive-16by9 mx-auto"}>
								<iframe width="560" height="315" src="https://www.youtube.com/embed/Ca9LroJA8K4" gesture="media" allowfullscreen></iframe>
							</div>
                        <br/>
						<p>
						<FaClock style={{color: 'gray'}}/><span style={{fontStyle: 'italic', color: 'gray'}}> 5 min read • Aug 26 2018 </span><br/><br/>
					Planning a trip to Hawaii? The island of Maui's got something for everyone.
					The perfect vacation is a mix of relaxing and being adventurous, and Maui provides just that.
					There are a number of great places to stay while on Maui. Some of the popular locations are Kaanapali, Kapalua, Lahaina, and Wailea.
                            Our home base for this trip was <a href="https://www.grandwailea.com/" target="blank"> The Grand Wailea</a> in.. you guessed it.. Wailea.
					The first three locations are scattered along the north west side of the island, whereas Wailea is about 30 miles south of them.
                        </p>
				<h4>Day 1 - Arrival and Luau</h4>
				<p>We arrived on the island in the early afternoon. After checking into our hotel and enjoying some of the anniversary champagne left for us, we checked into the Luau.
						The Grand Wailea provides a wonderful Luau for anyone staying on the island, not just hotel guests, but reservations are required. Be sure to check which days they are doing the Luau and plan accordingly.
							 Make some friends at the communal tables and enjoy the tastes and entertainment of Maui.  </p>
				<Img fluid={props.data.luau2.childImageSharp.fluid} alt="luau2" />
					<span className={"caption text-muted"}>Sunset at the Luau</span>
					<br /><br />
					<h4>Day 2 - Road to Hana</h4>
					<p>Our first full day was our trip along the Road to Hana - A scenic 60-70 mile drive along the island coast with plenty of fun stops along the way.
					 Another great benefit of the Grand Wailea is the car rental service on site. Be sure to reserve ahead of time so you can get a jeep. 
						 Cruising with the top down (even if it rains a bit on you) is really the only way to go. Plan for an early morning and get some breakfast before you start.<br/>
					A quick <a href="https://www.google.com/search?hl=&site=&q=road+to+hana" target="_blank">google search</a> will turn up tons of articles on where to stop along the trail plus specific mile markers for each.
						 It can be a bit overwhelming trying to decide what to see, and trying to avoid <a href="https://www.urbandictionary.com/define.php?term=fomo" target="_blank">FOMO</a>. My suggestion is to pick a handful of things that look interesting to you.
					Don't try to see it all, just enjoy the ride and take it easy. Here are the stops we decided to make in order:
						 <ul style={{listStyle: 'none', textIndent: '-3em'}}>
						<li>🍍 <strong>Twin Falls</strong> - One of the first stops you will hit, Twin Falls is a short hike to the base of two waterfalls and a really awesome swimming spot. Lots of people will be standing around taking pictures. Scoot past them and get in the water. Legend has it that the waters of Hawaii hold healing powers. Don't pass up on your chance! </li>
						<li>🍍 <strong>Halfway to Hana</strong> - You'll probably hit this swanky little roadside shop just as you're getting hungry again. The banana bread really is good, but if it's not your thing, there's lots of other food options to keep you fueled up.</li>
						<li>🍍 <strong>Wai'anapanapa State Park</strong> - This was one of the coolest stops along the way. Stretch your legs on the black sand beach and crouch down through a lava tube. And definitely follow the trail along the ridge line which will take you to a overlook where you can see the natural stone arch and a blowhole.</li>
						<li>🍍 <strong>Wailua Falls</strong> - If you make it the whole way to Hana, go the few miles further to see Wailua Falls. It's a picturesque scene with an 80ft waterfall situated right along a bridge. Very Jurassic Park.</li>
						<li>🍍 <strong><a style={{textDecoration: 'underline'}} href="https://www.mamasfishhouse.com/" target="_blank">Mama's Fish House</a></strong> - After a long day of adventure, we stopped here for dinner. Amazing hospitality, views, and food. The seafood menu provides a list of daily catches including who caught it and where. Book early, this place is popular for good reason.</li>
					</ul>
						 </p>
					<Img fluid={props.data.twinFalls.childImageSharp.fluid} alt="twinFalls" />
					<span className={"caption text-muted"}>Twin Falls - perfect for a swim</span>
					<Img fluid={props.data.wStatePark.childImageSharp.fluid} alt="state park" />
						<span className={"caption text-muted"}>Wai'anapanapa State Park</span>
						<br /><br />
						<h4>Day 3 - Pool Day</h4>
						<p> After a full day of adventuring, a pool day is certainly welcomed. The Grand Wailea had an enormous pool with slides, a water elevator, and a grotto bar. Dont forget, you're on vacation - enjoy a day of lounging. We capped off the evening with a romantic dinner at one of the hotels on premise restaurants - <a href="https://www.grandwailea.com/experience/dine/humuhumunukunukuapuaa/" target="_blank">Humuhumu</a>. </p> <br/>
						<Img fluid={props.data.hotel2.childImageSharp.fluid} alt="hotel2" />
						<span className="caption text-muted">Grand Wailea Pool</span>
						<br /><br />
						<Img fluid={props.data.hotel1.childImageSharp.fluid} alt="hotel1" />
							<span className={"caption text-muted"}>Humuhumunukunukuapua'a</span>
							<br /><br />
							<h4>Day 4 - Snorkeling</h4>
							<p> There are plenty of options for snorkeling on Maui. The level of competition has raised the stakes and these companies really go all out on their trips. We went with <a href="https://redesign.sailtrilogy.com/tour/molokini" target="_blank">Trilogy Sailing</a>, a company that's been sailing Maui for three generations. Up for another early morning, we were welcomed with coffee and fresh cinnamon rolls while we motored to Molokini Crater. After snorkeling in the crater for some time, we loaded up and headed to Turtle Town. 
							Turtle Town is made up of underwater lava tubes where sea turtles love to hang out. If you're lucky, you'll get to swim side by side with Crush. The folks with Trilogy were genuine and made sure everyone was comfortable and having fun. If you're struggling to pick one, save some time and feel good about going with Trilogy. <br/><br/>
						You'll be back late morning/early afternoon - more time to enjoy the pool and rest from all the turtle swimming. </p><br/>
				<h4>Day 5 - Spa and Dinner</h4>
				<p>Another thing every good vacation should have - some pampering. Take advantage of any spa opportunies your hotel or area may have. The Grand Waliea has an amazing spa. If you don't feel like going all in for a treatment, you you can always get a pass to use the facilities for a couple hours. We took this option and it was totally worth it.
							You get use of hot and cold roman tubs, a steam room, pools with different healing waters of Maui, and waterfall tubs that basically give you a mini massage. Definitely a great way to spend a morning. <br/><br/>
			In the evening we celebrated our 1st wedding anniversary at <a href="https://www.fourseasons.com/maui/dining/restaurants/ferraros_bar_e_ristorante/" target="_blank">Ferraros</a>, an Italian restaurant associated with the Four Season's hotel next to ours. The oceanside dining was amazing, and the staff truly made our evening perfect by surprising us with a dessert made specially for us.    </p><br/>
	<h4>Day 6 - Hotel Water Activites</h4>
	<p>Many hotels provide kayaks, snorkeling gear, paddleboards, or other water sport equipment free of charge for their guests. Take advantage! On our last morning before our flight we went snorkeling only a hundred yards or so out from the shore and it was amazing. Just the two of us in the water, we got to hang out with some huge sea turtles.
							This can also be a wonderful alternative to going on a snorkeling sailing tour.  </p>
		<Img fluid={props.data.wailuaFalls.childImageSharp.fluid} alt="Wailua Falls" />
		<span className={"caption text-muted"}>Wailua Falls</span>
		<br /><br />

		<h4>Accomodations</h4>
		<a href="https://www.grandwailea.com/" target="blank">
			<i className={"fa fa-bed"} aria-hidden="true"></i> The Grand Wailea</a>
		<br /><br />

		<h4>Bookings</h4>
		<a href="https://www.costcotravel.com/" target="blank">
			<i className={"fa fa-pencil"} aria-hidden="true"></i> Costco Travel</a>

					</div>
			
			</div >
			</div >
		</article >
  </Layout >
  </div >
)


export default MauiPost;



export const pageQuery = graphql`
  query {
    maui: file(relativePath: { eq: "maui/maui_banner.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
	}
	hotel1: file(relativePath: { eq: "maui/hotel1.jpg" }) {
		childImageSharp {
		  fluid(maxWidth: 1000) {
			...GatsbyImageSharpFluid
		  }
		}
	  }
	hotel2: file(relativePath: { eq: "maui/hotel2.jpg" }) {
	childImageSharp {
		fluid(maxWidth: 1000) {
		...GatsbyImageSharpFluid
		}
	  }
	}
	luau1: file(relativePath: { eq: "maui/luau1.jpg" }) {
		childImageSharp {
			fluid(maxWidth: 1000) {
			...GatsbyImageSharpFluid
			}
		  }
		}
	luau2: file(relativePath: { eq: "maui/luau2.jpg" }) {
		childImageSharp {
			fluid(maxWidth: 1000) {
			...GatsbyImageSharpFluid
			}
		  }
		}
	twinFalls: file(relativePath: { eq: "maui/twin_falls.jpg" }) {
		childImageSharp {
			fluid(maxWidth: 1000) {
			...GatsbyImageSharpFluid
			}
		  }
		}
	wStatePark: file(relativePath: { eq: "maui/w_state_park.jpg" }) {
		childImageSharp {
			fluid(maxWidth: 1000) {
			...GatsbyImageSharpFluid
			}
		  }
		}
	wailuaFalls: file(relativePath: { eq: "maui/wailua_falls.jpg" }) {
		childImageSharp {
			fluid(maxWidth: 1000) {
			...GatsbyImageSharpFluid
			}
		  }
		}
  }
`