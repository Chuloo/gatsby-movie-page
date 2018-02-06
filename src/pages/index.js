import React, { Component } from 'react'
import Link from 'gatsby-link'
import Navbar from '../components/Navbar'
import cloudinary from 'cloudinary-core'
import 'cloudinary-video-player'


import '../assets/stylesheets/normalize.css'
import '../assets/stylesheets/skeleton.css'
import '../assets/stylesheets/index.css'

// import {main} from '../assets/main.js'
//const mainD = require(main)

export default class IndexPage extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    
    play(){
        let button = document.getElementById('play-button')
        let video = document.getElementById('cl-vp')
        if(video.paused){
            video.play();
            button.innerHTML = "<i class='fa fa-pause margin-right-20' aria-hidden='true'></i> PAUSE TRAILER";
        }else{
            video.pause()
            button.innerHTML = "<i class='fa fa-play margin-right-20' aria-hidden='true'></i> PLAY TRAILER";
        }
    }
    // componentDidMount(){
    //     let cl = cloudinary.Cloudinary.new({cloud_name:'chuloo', secure:true})

    //     //instantiate the video player
    //     let vidPlayer = cl.videoPlayer('cl-vp', {
    //         // loop: true,
    //         // controls:true,
    //         autoplay:true,
    //     })
    //     // select source
    //     vidPlayer.source('gatsby-movie-site/we-were-soldiers')
    // }

render(){
  return (
    <div>
        <section className="top">
        <div className="top-image">
            <video id="cl-vp" className="cld-video-player">  
                <source src="http://res.cloudinary.com/chuloo/video/upload/v1517405296/gatsby-movie-site/we-were-soldiers.mp4" type="video/mp4"/>
                <p>Your browser doesn't support HTML5 video. Here is a
                    <Link to="#">link to the video</Link> instead.</p>
            </video>
        </div>
        <div className="container">
            <Navbar/>
            <div className="top-header">
                <h1>WE WERE SOLDIERS</h1>
                <p>"The Vietnam generation has its own Saving Private Ryan in We Were Soldiers."</p>
                <label className="quote-label">Matt Easterbrook</label>
                <button className="button play-button margin-top-50" id="play-button" onClick={this.play}>
                    <i className="fa fa-play margin-right-20" aria-hidden="true"></i> PLAY TRAILER
                </button>
            </div>
        </div>
        <div className="text-center down-button">
            <Link to="#cast">
                <i className="fa fa-angle-double-down" aria-hidden="true"></i>
            </Link>
        </div>
    </section>
    <section className="cast margin-top-50" id="cast">
        <div className="container">
            <header>
                <h3 className="text-bold">CAST & CREW</h3>
                <h5 className="sub-title text-regular text-orange">THE TEAM</h5>
            </header>
            <div className="crew">
                <button className="button crew-left-button">&lt;</button>
                <button className="button crew-right-button">&gt;</button>
                <div className="crew-list">
                    <figure>
                        <img src="http://res.cloudinary.com/chuloo/image/upload/v1517405137/gatsby-movie-site/barry-pepper.png" alt="barry-pepper.png"/>
                        <figcaption>
                            <h4 className="text-medium text-grey">BARRY PEPPER</h4>
                        </figcaption>
                    </figure>
                    <figure>
                        <img src="http://res.cloudinary.com/chuloo/image/upload/v1517405143/gatsby-movie-site/mel-gibson.png" alt="mel-gibson.png"/>
                        <figcaption className="active-fig">
                            <h3 className="text-medium">MEL GIBSON</h3>
                        </figcaption>
                    </figure>
                    <figure>
                        <img src="http://res.cloudinary.com/chuloo/image/upload/v1517405137/gatsby-movie-site/chris-klein.png" alt="chris-klein.png"/>
                        <figcaption>
                            <h4 className="text-medium text-grey">Chris Klein</h4>
                        </figcaption>
                    </figure>
                </div>
                <div className="cast-team">
                    <ul>
                        <li>CAST</li>
                        <li className="text-grey">CREW</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <section className="story margin-top-50">
        <div className="container">
            <div className="row">
                <div className="eight columns">
                    <header>
                        <h3 className="text-bold text-white">STORY</h3>
                        <h5 className="sub-title text-regular text-orange">BASED ON TRUE EVENTS</h5>
                    </header>
                    <p>We Were Soldiers is a Vietnam war movie that is based off the novel We Were Soldiers Once... And Young.
                        The book was written by
                        <span className="text-white">Lt. Colonel Harold G. Moore</span> and
                        <span className="text-white">Joseph L. Galloway</span>, two men that fought in the Battle of la Drang.
                    </p>
                    <p>
                        The Battle of la Drang was one of the major battles in Vietnam and took place November 14th-17th 1965 in the la Drang Valley.
                        The movie depicts a stranded division of Vietnam soldiers who are actually misled into a Vietcong
                        basecamp. Although the men were surrounded and helplessly outnumbered 400 to 4000, they managed to
                        hold their ground with the help of air support and artillery and eventually end up defeating the
                        Vietcong.
                    </p>
                    <p>
                        The movie very closely matches how We Were Soldiers Once... And Young described the battle. In fact
                        <span className="text-white">Harold G. Moore</span>, The author of We Were Soldiers Once... And Young, described the movie as
                        the only one to "get it right". This made the film very realistic and historically accurate.
                    </p>
                </div>
                <div className="four columns story-images">
                    <img src="http://res.cloudinary.com/chuloo/image/upload/v1517405144/gatsby-movie-site/w.png" className="img-responsive" alt=""/>
                    <img src="http://res.cloudinary.com/chuloo/image/upload/v1517405143/gatsby-movie-site/image-vietnam-color.png" className="img-responsive sub-image" alt=""/>
                    <img src="http://res.cloudinary.com/chuloo/image/upload/v1517405136/gatsby-movie-site/cavalry-logo.png" className="img-responsive sup-image" alt="" />
                </div>
            </div>
        </div>
    </section>
  </div>
  );
  }
}

//export default IndexPage
