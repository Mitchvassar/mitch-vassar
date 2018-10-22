import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Mitch Vassar | Front End Developer"
                    meta={[
                        { name: 'description', content: 'Portfolio for Mitch Vassar, Front End Developer' },
                        { name: 'keywords', content: 'Portfolio, Front, End, Developer, Mitch Vassar, Animal Shelter, Projects' },
                    ]}
                >
                </Helmet>

                <Banner />
                
                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Whealth</h3>
                                <p>JavaScript, Node, and MySQL</p>
                            </header>
                            <a href="https://murmuring-cliffs-69117.herokuapp.com/" className="link primary" alt="Link to Whealth Project"></a>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Rock Paper Scissors</h3>
                                <p>Vanilla JavaScript</p>
                            </header>
                            <a href="https://rock-paper-scissorsv2.herokuapp.com/" className="link primary" alt="Link to RPS Project"></a>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Animal Shelter</h3>
                                <p>WIP</p>
                            </header>
                            <a href="https://github.com/Mitchvassar" className="link primary" alt="WIP Animal Shelter"></a>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Rolling Chefs</h3>
                                <p>WIP</p>
                            </header>
                            <a href="https://github.com/Mitchvassar" className="link primary" alt="WIP Rolling Chef's Website"></a>
                        </article>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex