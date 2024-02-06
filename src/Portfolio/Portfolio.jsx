import React from 'react'
import './portfolio.css'
import Simon from './the-simon-game.png'
import Fitness from './fitnessWebsite.png'
import Natours from './natours.PNG'
import Trillo from './trillo.PNG'
import Nexter from './nexter.PNG'
import Keeper from './reminiscer.PNG'
import HTML from './html.svg';
import CSS from './css.svg';
import SASS from './sass.svg';
import JS from './js.svg';
import REACT from './react.svg';
import FIREBASE from './firebase.svg';

function Portfolio() {
  return (
    <div>
        <section id="portfolio">
          <h5>My Recent Works</h5>
          <h2>Portfolio</h2>

          <div className="container portfolio-container">
              <article className="portfolio-item">
                  <div className="portfolio-item-img">
                      <img src={Fitness} alt="" />
                  </div>
                  <h3>Fitness App</h3>
                  <div className="portfolio-item-btn">
                    <a href="https://github.com/AugustanaCSC490Spring23/Nighthawk-Fitness" target={'blank'} className="btn btn-primary">Github</a>
                    <a href="https://fitness-dev-2.web.app/" target={'blank'} className="btn">Live Site</a>
                  </div>
                  
                  <div className="portfolio-item-group">
                    
                    <img src={REACT} alt="" />
                    <img src={FIREBASE} alt="" />
                    <img src={HTML} alt="" />
                    <img src={CSS} alt="" />
                    <img src={JS} alt="" />
                  </div>
                  
              </article>
              <article className="portfolio-item">
                  <div className="portfolio-item-img">
                      <img src={Natours} alt="" />
                  </div>
                  <h3>Tours Website</h3>
                  <div className="portfolio-item-btn">
                    <a href="https://github.com/menh161201/Natours" target={'blank'} className="btn btn-primary">Github</a>
                    <a href="https://natours-980a4.web.app/" target={'blank'} className="btn">Live Site</a>
                  </div>
                  <div className="portfolio-item-group">
                    
                    <img src={HTML} alt="" />
                    <img src={SASS} alt="" />
                    <img src={FIREBASE} alt="" />
                  </div>
                
              </article>
              <article className="portfolio-item">
                  <div className="portfolio-item-img">
                      <img src={Trillo} alt="" />
                  </div>
                  <h3>Booking Website</h3>
                  <div className="portfolio-item-btn">
                    <a href="https://github.com/menh161201/Trillo" target={'blank'} className="btn btn-primary">Github</a>
                    <a href="https://trillo-3aa42.web.app/" target={'blank'} className="btn">Live Site</a>
                  </div>
                  <div className="portfolio-item-group">
                    
                    <img src={HTML} alt="" />
                    <img src={SASS} alt="" />
                    <img src={FIREBASE} alt="" />
                  </div>
                
              </article>
              <article className="portfolio-item">
                  <div className="portfolio-item-img">
                      <img src={Nexter} alt="" />
                  </div>
                  <h3>Property Website</h3>
                  <div className="portfolio-item-btn">
                    <a href="https://github.com/menh161201/Nexter" target={'blank'} className="btn btn-primary">Github</a>
                    <a href="https://nexter-a7eb5.web.app/" target={'blank'} className="btn">Live Site</a>
                  </div>
                  <div className="portfolio-item-group">
                    
                    <img src={HTML} alt="" />
                    <img src={SASS} alt="" />
                    <img src={FIREBASE} alt="" />
                  </div>
                
              </article>              
              <article className="portfolio-item">
                  <div className="portfolio-item-img">
                      <img src={Keeper} alt="" />
                  </div>
                  <h3>Reminiscer</h3>
                  <div className="portfolio-item-btn">
                    <a href="https://github.com/menh161201/Reminiscer" target={'blank'} className="btn btn-primary">github</a>
                    <a href="https://reminiscer-a09f6.web.app/" target={'blank'} className="btn">Live Site</a>
                  </div>
                  <div className="portfolio-item-group">
                    
                    <img src={REACT} alt="" />
                    <img src={HTML} alt="" />
                    <img src={SASS} alt="" />
                    <img src={JS} alt="" />
                  </div>

              </article>
              
              <article className="portfolio-item">
                  <div className="portfolio-item-img">
                      <img src={Simon} alt="" />
                  </div>
                  <h3>The Simon Game</h3>
                  <div className="portfolio-item-btn">
                    <a href="https://github.com/menh161201/The-Simon-Game" target={'blank'} className="btn btn-primary" >Github</a>
                  </div>
                  <div className="portfolio-item-group">
                    
                    <img src={HTML} alt="" />
                    <img src={CSS} alt="" />
                    <img src={JS} alt="" />
                  </div>
                  
              </article>
              
          </div>
      </section>
    </div>
  )
}

export default Portfolio