import React from 'react'
import github from '../assets/images/github.png'
import linkedin from '../assets/images/linkedin.png'

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1>Mitch Vassar</h1> 
            </header>

            <div className="content">
                <h3>Front End Web Developer<br />
                Georgia Tech Bootcamp<br />
                Currently for Hire<br />
                <br />
                <a href='https://github.com/Mitchvassar'><img className="github-img" src={github} alt="github"/></a>
                {' '}
                <a href='https://www.linkedin.com/in/mitchvassar'><img className="linkedin-img" src={linkedin} alt="linkedin"/></a>
                </h3>
            </div>
        </div>
    </section>
)

export default Banner