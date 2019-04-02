import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import schonbrunner from '../images/viennaPrague/schonbrunner.jpg';
import charlesBridge from '../images/viennaPrague/charles_bridge.jpg';
import { graphql } from "gatsby";
import Img from 'gatsby-image';
import postStyle from './postStyles.css';
import NewMap from '../components/newMap';
import { FaClock } from 'react-icons/fa';


const ViennaPost = (props) => (
  
  <div>
	<header className={"masthead"} style={{height: '539px', marginTop: '55px', backgroundImage: `url(${schonbrunner})`, position: 'absolute', zIndex: '-1', width: '100%'}}>
       <div className={"container"}>
	 			<div className={"row"}>
	 				<div className={"col-lg-8 col-md-10 mx-auto"}>
	 					<div className={"post-heading"}>
							<h1 style={{fontFamily: 'Pacifico', fontWeight: '500', textAlign: 'center'}}>Vienna and Prague</h1>
	 					</div>
	 				</div>
	 			</div>
	 		</div>
    </header>
  <Layout>
    <SEO 
      title="Vienna and Prague • Somewhere With The Selkers"
      description='Follow us to the Christmas Markets and Castles of Eastern Europe'
      keywords={['vienna', 'prague','europe','christmas','austria', 'czech']}
      img={schonbrunner}
    />
    <article className={'postWrapper'}>
			<div className={"container"}>
			{/* <div className={"row mx-auto"} >
			<NewMap
				cityList={[
					{name: 'San Francisco', latitude: 37.7749, longitude:-122.4194 },
					{name: 'Papeete', latitude: 17.5516, longitude: 149.5585 },
			]}
			/></div> */}
			<div className={"row"}>
					<div className={"col-lg-8 col-md-10 col-xs-12 mx-auto"}>


						<br/>
						<div className={"embed-responsive embed-responsive-16by9 mx-auto"}>
							<iframe width="560" height="315" src="https://www.youtube.com/embed/npHOTCEWoyQ" gesture="media" allowfullscreen></iframe>
						</div>
						<br/>
						<FaClock style={{color: 'gray'}}/><span style ={{fontStyle: 'italic', color: 'gray'}}> 7 min read </span><br/><br/>

						<h1>Vienna, Austria</h1>
						<h4>
							<br/>Christmas Markets</h4>
						<p>It's going to be difficult to return to Vienna any time other than the Christmas Season. Every street was decorated
							with huge light displays, and there was a Christmas Market around every single corner. It'll knock the Scrooge out
							of anyone. The markets are loaded with good food and drink including Glühwein - a warm, spiced wine drink that helped
							us stay toasty. The entire city is super walkable, and we were able to reach most of the sites and markets on foot.
							The only exception was the Schönbrunn Palace and Market - we took the
							<a href="https://www.wien.gv.at/english/transportation-urbanplanning/public-transport/"
							 target="blank">metro</a> 20 minutes outside the city to get there. The Google map below to show all of the markets we visited. Christkindlmarkt
							at Rathausplatz is the market situated in the city hall square. It's the biggest market we visited, and it's a must.
							</p>
							<Img fluid={props.data.cityHall.childImageSharp.fluid} alt="city hall" />
						<span className={"caption text-muted"}>Christkindlmarkt at Rathausplatz</span>
						<br/>

						<div className={"google-maps"}>
							<iframe src="https://www.google.com/maps/d/u/0/embed?mid=15eRxSeQNolFfSbPBhg6e_mFd8Vk8C_M7" width="640" height="480"></iframe>
						</div>


						<h4>
							<br/>Coffee Houses</h4>
						<p>The coffee house scene in Vienna is real. While all of the standards are represented, the specialty was the Viennese
							Melange, a velvety smooth espresso and cream combination. For the non-coffee enthusiast/children, Megan can attest
							that the hot chocolate was also delicious. Most of the cafe's also served lunch, and all of them had some form of
							irresitable dessert. Seriously America, we need to get with the program and make mid-morning coffee and cakes a normal
							thing.
							<a href="https://www.cafecentral.wien/en/" target="blank">Café Central</a> greeted us with with high vaulted ceiling and huge pastry display right inside the door. An old school
							newspaper rack sat along one of the walls.
							<a href="https://www.sacher.com/en/original-sacher-cake/sacher-cafe/" target="blank">Café Sacher</a>, with its cozy red tapestry walls, is known for the famed Sacher-Torte. The Sacher-Torte an interesting
							chocolate cake with its apricot glaze flavor mixed in with the chocolate. </p>
						<div className="row">
							<div className="col-6 mx-auto">
								<Img fluid={props.data.cafeCentral.childImageSharp.fluid} alt="cafe central" />
								<span className={"caption text-muted"}>Café Central</span>

							</div>
							<div className="col-6 mx-auto ">
								<Img fluid={props.data.cafeSacher.childImageSharp.fluid} alt="cafe sacher" />
								<span className={"caption text-muted"}>Sacher-Torte</span>

							</div>
						</div>

						<br/>
						<br/>
						<h4>Landmarks</h4>

						<p>Our first tour was of The Hofburg, the imperial palace in center city Vienna. The palace tours were an great way to
							learn about the history of Vienna, and gave us a lot of context around the sites we were seeing. The Hofburg was the
							home of the Hapsburg dynasty and center of the Holy Roman Empire for hundreds of years. It then became the home of
							the Emperor of Austria, and today is used by the President of Austria. There was an entire part of the tour dedicated
							to the collection of fine table settings used by the dynasty. I had no idea such a huge amount of
							plates and silver and ceramics existed, or that one family could find use for all of it. We got to walk through
							the Imperial Apartments where Emperor Franz Joseph and Empress Elisabeth lived. Most all of the rooms were set up
							exactly as they would have been when occupied by the Emperor and Empress. <br/>
							<br/>
							We also took a tour of the Schönbrunn Palace, another Hapsburg residence outside of the city center. The gardens surrounding
							the palace weren't covered in flowers, but their sheer size was impressive anyway. Every room in the palace was decorated
							a in a different style or with a different type of material. The tour took us through a small subset of the most impressive
							rooms, but in total the palace has over 1,400 rooms. That makes for one awfully challenging game of hide and seek...
							</p>
							<Img fluid={props.data.schonbrunn.childImageSharp.fluid} alt="schonbrunn" />
						<span className={"caption text-muted"}>Schönbrunn Palace backyard</span>
						<br/>
						<h4>Food</h4>
						<p>The food theme in both Vienna and Prague can be summed up as meat and potatoes. In Vienna specifically, we went all
							out on
							<a href="img/vienna_and_prague/schnitzel_love.JPG" data-toggle="modal" data-target="#modal_schnitzel">Weiner Schnitzel</a>. Our hotel had a great little restaurant attatched to it called
							<a href="https://meisslundschadn.at/en/"
							 target="blank">Meissl & Schadn</a>. The restaurant has a giant picture window facing the street where people can watch the schnitzels
							being breaded and fried up. Or for those who don't like to press their face against the glass, they also offer Wiener
							Schnitzel cooking classes. We also tried the less famous but equally delicious Viennese special of boiled beef here,
							along with an apple strudel for dessert. <br/>
							<br/>
							<a href="https://www.figlmueller.at/en/welcome.html" target="blank">Figlmüller</a> is probably the most famous dining establishment in Vienna. So popular that they have multiple eateries,
							Figlmüller prides itself as Home of the Schnitzel. We snagged a window seat, two larger-than-the-plate schnitzels,
							and a few cold beers and stayed until we were the last two there.
							<br/>
							<br/>
							Okay, so even though we didn't stay here for a full meal, I had to throw this place on the list.
							<a href="http://www.brezl.at/"
							 target="blank">Brezl Gwölb</a> was nestled in a tiny alleyway that we completely missed even while looking for it. We came here on
							recommendation and loved it. You walk down a couple stairs and back in time into a cozy candlelit cottage that you
							just won't want to leave. They even have a cavernous basement with more of a wine cellar type feel. <br/>
						</p>

						<h4>Accomodations</h4>
						<a href="https://grandferdinand.com/en/">
							<i class={"fa fa-bed"} aria-hidden="true"></i> The Grand Ferninand</a>




					</div>
				</div>
			</div>
		</article>
		<header className={"masthead"} style={{right: '0.05%', height: '539px', marginTop: '55px', backgroundImage: `url(${charlesBridge})`, position: 'absolute', zIndex: '-1', width: '100%'}}>
       <div className={"container"}>
	 			<div className={"row"}>
	 				<div className={"col-lg-8 col-md-10 mx-auto"}>
	 					<div className={"post-heading"}>
	 					</div>
	 				</div>
	 			</div>
	 		</div>
    </header>
		<article style={{fontFamily: `'Raleway', sans-serif`, fontSize: '13px', marginTop: '630px'}}>
			<div className={"container"}>
				<div className={"row"}>
					<div className={"col-lg-8 col-md-10 col-xs-12 mx-auto"}>
						<h1>Prague, Czech Republic</h1>

						<p>Vienna to Prague was an easy 4 hour train ride through the countryside. When we arrived at The Smetana Hotel in Prague,
							we were surprised with a room upgrade to the Charles Suite! We had the most magificient view of the Charles Bridge
							and Vltava River with the Prague Castle in the background.
							</p>
							<h4>Landmarks</h4>
							<p>Prague offers plenty of opportunities to get above the skyline for a view. We climbed the Powder Tower, which seperates
								Old Town from New Town, and got a fantastic glimpse across the red rooftops of Old Town. The Tower marks the beginning
								of the Royal Route, the path that kings would follow during their coronation.</p>
								<Img fluid={props.data.prague.childImageSharp.fluid} alt="prague" />
							<span className={"caption text-muted"}>View from The Powder Tower</span>
							<p>Following the route, you'll next pass through Old Town Square. The city seems to revolve around Old Town Square. This
								is where one of the main Christmas Markets in Prague is located. The square is also home to several churches, a statue,
								the Town Hall, and the oldest working astronomical clock. The astronomical clock shows the positioning of the sun
								and moon,astrological symbols, and lots of other measurements. On the hour, the figures on the clock move and small
								windows open to show wooden statues of the apostles. On the tour of the Old Town Hall, you're able to see the statues
								behind their window, but the complicated mechanisms of the clock remain hidden. The tour took us around the Hall,
								and then beneath it through an old prison chamber. You can also take an elevator to the top of the Town Hall to get
								a full view of the square.</p>

							<p>The route continues on to the Charles Bridge, which crosses over the Vltava River. It's unlike any other, guarded
								by 30 statues along the sides looking down among the hundreds of visitors. </p>
								<Img fluid={props.data.charlesBridge2.childImageSharp.fluid} alt="charles bridge 2" />
							<br />
							<br />
							<div className={"row"}>
								<div className={"col-6 mx-auto"}>
								<Img fluid={props.data.charlesBridge1.childImageSharp.fluid} alt="charles bridge 1" />

								</div>
								<div className={"col-6 mx-auto "}>
								<Img fluid={props.data.charlesBridge3.childImageSharp.fluid} alt="charles bridge 3" />

								</div>
							</div>
							<p>Across the Charles Bridge, the route continues up the hill to its final and largest destination, Prague Castle. It
								is the largest ancient castle in the world, and currently serves as the office of the President of the Czech Republic.
								Another great view awaits before entering into the castle complex. The inside is truly a complex, housing gardens,
								palaces, halls, and the towering St. Vitus Cathedral. I was astounded by how extraordinary European Cathedrals are.
								The ornate detail that goes into every inch of the building, inside and out, is something I could spend hours admiring.
								The inside of the church is lined with smaller chapels, each holding significant meaning. The cathedral also serves
								as the burial site for several saints and nobelmen, including Saint Wenceslas. </p>
								<Img fluid={props.data.stVitusNave.childImageSharp.fluid} alt="st vitus nave" />
							<span className={"caption text-muted"}>St. Vitus Cathedral</span>
							<br />
							<br />
							<div className={"row"}>
								<div className={"col-6 mx-auto"}>
									<Img fluid={props.data.stVitusNave.childImageSharp.fluid} alt="st vitus nave" />
									<span className={"caption text-muted"}>Nave of St. Vitus</span>
								</div>
								<div className={"col-6 mx-auto "}>
									<Img fluid={props.data.stVitus3.childImageSharp.fluid} alt="st vitus 3" />
									<span className={"caption text-muted"}>Tomb of St John of Nepomuk - 2 tons of silver</span>
								</div>
							</div>
							<h4>Food</h4>
							<p> We had some great food in Prague, but I'm going to have to start with dessert. I'm an adult, I don't have to eat dinner
								first.. right? We couldn't get enough of the traditional Czech street pastry, the Trdelník. It's cinnamon and sugar
								dough rolled around a spit and baked over an over fire. Once ready, the hollow treat can be eaten plain, or with
								Nutella (Megan's favorite), or filled with ice cream (my favorite).
								<br />
								<br />

								<Img fluid={props.data.trdelnik.childImageSharp.fluid} alt="trdelnik" />
								<br />
								<br />

								<a href="http://www.restaurace-mlejnice.cz/en/index.html" target="blank">Mlejnice</a> is tucked away down one of Prague's cobblestone streets near Old Town Square. It's a perfectly cozy
								Prague eatery, and an absolute treat. We curled up around a wooden table with some famous Prague beer and enjoyed
								onion soup and the traditional pork knee. Don't be scared off if there is a line here, it's totally worth it. <br />
								<br />
								We enjoyed U Tří růží so much we actually went back a second time. Also situated not far from Old Town Square, it's a brewery
								as well as a restaurant. The duck confit and pork ribs were spot on. When the cold weather set in each day, we were
								thankful to have warm cozy places like this to kick back and relax. <br />
								<br />
								Seeing as the Czech Republic has the highest beer consumption per capita of any country in the world, it's only right to
								take a beer tour while in Prague. We booked a 90 minute tour (beer included) with a Prague native, walked to 3 bars/breweries,
								and got to replace some of our lost brain cells with knowledge. Would definitely recommend
								<a href="https://www.getyourguide.com/prague-l10/prague-beer-and-breweries-tour-t43389/?partner_id=7GUF3YN"
								 target="_blank">this tour</a> to get the full hoppy experience of Prague Beer.



							</p>

							<h4>Accomodations</h4>
							<a href="https://www.smetanahotel.com/home">
								<i className={"fa fa-bed"} aria-hidden="true"></i> The Smetana Hotel</a>



					</div>
				</div>
			</div>

		</article>
  </Layout>
  </div>
)


export default ViennaPost;


export const pageQuery = graphql`
  query {
    cityHall: file(relativePath: { eq: "viennaPrague/city_hall.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
	}
	cafeCentral: file(relativePath: { eq: "viennaPrague/cafe_central.jpg" }) {
		childImageSharp {
		  fluid(maxWidth: 1000) {
			...GatsbyImageSharpFluid
		  }
		}
	  }
	cafeSacher: file(relativePath: { eq: "viennaPrague/cafe_sacher.jpg" }) {
	childImageSharp {
		fluid(maxWidth: 1000) {
		...GatsbyImageSharpFluid
		}
	  }
	}
	schonbrunn: file(relativePath: { eq: "viennaPrague/schonbrunn.jpg" }) {
		childImageSharp {
			fluid(maxWidth: 1000) {
			...GatsbyImageSharpFluid
			}
		  }
		}
	prague: file(relativePath: { eq: "viennaPrague/prague.jpg" }) {
		childImageSharp {
			fluid(maxWidth: 1000) {
			...GatsbyImageSharpFluid
			}
		  }
		}
	charlesBridge1: file(relativePath: { eq: "viennaPrague/charles_bridge1.jpg" }) {
		childImageSharp {
			fluid(maxWidth: 1000) {
			...GatsbyImageSharpFluid
			}
		  }
		}
	charlesBridge2: file(relativePath: { eq: "viennaPrague/charles_bridge2.jpg" }) {
		childImageSharp {
			fluid(maxWidth: 1000) {
			...GatsbyImageSharpFluid
			}
		  }
		}
	charlesBridge3: file(relativePath: { eq: "viennaPrague/charles_bridge3.jpg" }) {
		childImageSharp {
			fluid(maxWidth: 1000) {
			...GatsbyImageSharpFluid
			}
			}
		}
	trdelnik: file(relativePath: { eq: "viennaPrague/trdelnik.jpg" }) {
		childImageSharp {
			fluid(maxWidth: 1000) {
			...GatsbyImageSharpFluid
			}
		  }
		}
	stVitusNave: file(relativePath: { eq: "viennaPrague/st_vitus_nave.jpg" }) {
		childImageSharp {
			fluid(maxWidth: 1000) {
			...GatsbyImageSharpFluid
			}
		  }
		}
	stVitus3: file(relativePath: { eq: "viennaPrague/st_vitus3.jpg" }) {
		childImageSharp {
			fluid(maxWidth: 1000) {
			...GatsbyImageSharpFluid
			}
			}
		}
		stVitus: file(relativePath: { eq: "viennaPrague/st_vitus.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1000) {
				...GatsbyImageSharpFluid
				}
				}
			}
  }
`