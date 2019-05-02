import React from "react"

import Layout from "../components/layout"
import about from '../images/about.jpg';
import SEO from "../components/seo"
import postStyle from './postStyles.css';

const AboutPage = () => (
  <div>
		<header className={"masthead"} style={{ height: '539px', marginTop: '55px', backgroundImage: `url(${about})`, position: 'absolute', zIndex: '-1', width: '100%' }}>
			<div className={"container"}>
				<div className={"row"}>
					<div className={"col-lg-8 col-md-10 mx-auto"}>
						<div className={"post-heading"}>
							<h1 style={{ fontFamily: 'Pacifico', fontWeight: '500', textAlign: 'center' }}>About Us</h1>
						</div>
					</div>
				</div>
			</div>
		</header>
  <Layout>
    <SEO title="About Megan and Luke • Somewhere With The Selkers" />
    <article className={'postWrapper'} style={{fontFamily: 'Raleway, sans-serif', fontSize: '13px'}}>
      <div className={'container'}>
        <div className={'row'}>
          <div className={"col-lg-8 col-md-10 col-xs-12 mx-auto"}>
            <p>Hi! We are Megan and Luke!
              <br/>
            </p>

            <p>We met at the University of Pittsburgh (Hail to Pitt!) in 2012. In 2015, we decided to leave our East Coast roots
              to start a new journey together in San Francisco. We've since gotten married, and are always looking for our
              next adventure. We love traveling and having new experiences together. Our blog combines Megan's love for travel
              and organization with my love for technology. We hope you enjoy and that it inspires you to go experience a
              new adventure and share it with someone you love :). </p>

            <p>It's easy to to make an adventure out of every trip you take when you have good company.</p>

            <a href="/contact" style={{textDecoration: "underline"}}>Get in touch with us!</a>
          </div>
        </div>
      </div>
    </article>
  </Layout>
  </div>
)

export default AboutPage
