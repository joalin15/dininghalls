import React, { Component } from 'react';
import '../styles/components/about.css';

class About extends Component {
  render() {
    return (
      <div id="content">
        <div id="bio-container">
          <div id="bio-container-header">
            <h1 className="bio-container-header-h1">
              ABOUT THIS WEBSITE
            </h1>
          </div>
          <div id="bio-container-body">
            <div className="bio-container-body-text">
              Hi there! My name is <span>Joann Lin</span>. I'm a sophomore
              studying Computer Science Business Administration at USC
              and the mastermind behind this website.  I started this project
              with the aim of making the dining hall experience <span> more personalized,
              interactive, and social </span>.
              <br/>
              <br/>
              To make them more <span>personalized</span>, I plan to:
              <br /> &nbsp;&nbsp; - Let users filter the menus based on their dietary restrictions
              <br /> &nbsp;&nbsp; - Notify users when their favorite foods are being served
              <br/>
              <br/>
              To make them more <span>interactive</span>, I plan to:
              <br /> &nbsp;&nbsp; - Give users the ability to rate and review food items
              <br /> &nbsp;&nbsp; - Allow users to input their dining hall action-station orders in advance
              <br/>
              <br/>
              To make them more <span>social</span>, I plan to:
              <br /> &nbsp;&nbsp; - Implement a location feature that allows users
              to see which dining halls their friends are at
              <br /> &nbsp;&nbsp; - Encourage the formation of communities (e.g. a Vegan community)
              where people can discuss their favorite foods, food tips, etc.
              <br/>
              <br/>
              Given how much of college is spent at the dining halls,
              I believe the dining hall experience should not be neglected.
              There are <span>significant opportunities</span> to improve how
              information about dining halls is disseminated and personalized.
              On top of that, there are opportunities to encourage students to
              interact, share their thoughts, and make new friends.
              <br/>
              <br/>
              While this project is currently a website, I plan to make it <span> a mobile app
              </span> in the future.  I believe the mobile platform will allow the product
              to be <span>more convenient, accessible, and useful</span>.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
